import * as fs from 'fs';
import * as path from 'path';

import * as lodash from 'lodash';
import * as tar from 'tar';
import * as minimatch from 'minimatch';

import { Command, CommandLineInputs, CommandLineOptions, CommandMetadata } from '@navify/cli-framework';

import { getCommandHeader, getDirectories, log, readStarterManifest } from '../utils';
import { BUILD_DIRECTORY } from '../lib/build';

import { bold, green } from 'colorette';

export class ArchiveCommand extends Command {
  async getMetadata(): Promise<CommandMetadata> {
    return {
      name: 'archive',
      summary: 'Archive the built starter templates',
      options: [
        {
          name: 'tag',
          summary: `Deploy to a tag, such as 'next' ('latest' is production)`,
          default: 'testing',
        },
        {
          name: 'dry',
          summary: 'Perform a dry run and do not upload anything',
          type: Boolean,
        },
      ],
    };
  }

  async run(inputs: CommandLineInputs, options: CommandLineOptions) {
    const tag = options['tag'] ? String(options['tag']) : 'testing';
    const dry = options['dry'] ? true : false;

    console.log(getCommandHeader('ARCHIVE'));

    console.log(`tag: ${bold(tag)}`);

    const contents = await getDirectories(BUILD_DIRECTORY);

    await Promise.all(
      contents.map(async (dir) => {
        const id = path.basename(dir);
        const templateFileName = `${id}.tar.gz`;
        const templateKey = `${tag === 'latest' ? '' : `${tag}/`}${templateFileName}`;
        const manifest = await readStarterManifest(dir);
        const tarignore = manifest && manifest.tarignore ? manifest.tarignore : undefined;

        const archive = tar.create(
          {
            gzip: true,
            cwd: dir,
            filter: (p, _stat) => {
              const filePath = path.relative(dir, path.resolve(dir, p));

              if (!tarignore) {
                return true;
              }

              return !lodash.some(tarignore.map((rule) => minimatch(filePath, rule)));
            },
          },
          ['.']
        );

        const archivePath = path.resolve(BUILD_DIRECTORY, templateFileName);
        await writeStarter(archive, archivePath);

        if (dry) {
          log(id, green(`${bold('--dry')}: upload to ${bold(templateKey)}`));
        }
      })
    );

    const startersJsonKey = `${tag === 'latest' ? '' : `${tag}/`}starters.json`;

    if (dry) {
      console.log(bold('starters.json'), green(`${bold('--dry')}: upload to ${bold(startersJsonKey)}`));
    }
  }
}

async function writeStarter(rs: NodeJS.ReadableStream, dest: string) {
  return new Promise<void>((resolve, reject) => {
    const ws = fs
      .createWriteStream(dest)
      .on('finish', () => resolve())
      .on('error', (err) => reject(err));

    rs.pipe(ws);
  });
}
