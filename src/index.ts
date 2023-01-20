import { CommandMap, Namespace, execute } from '@navify/cli-framework';

import { BuildCommand } from './commands/build';
import { FindRedundantCommand } from './commands/find-redundant';
import { GenerateChecksumCommand } from './commands/generate-checksum';

class StartersNamespace extends Namespace {
  async getMetadata() {
    return {
      name: 'navify-starters',
      summary: '',
    };
  }

  async getCommands(): Promise<CommandMap> {
    return new CommandMap([
      ['build', async () => new BuildCommand(this)],
      ['find-redundant', async () => new FindRedundantCommand(this)],
      ['generate-checksum', async () => new GenerateChecksumCommand(this)],
    ]);
  }
}

const namespace = new StartersNamespace();

export async function run(argv: string[], env: { [k: string]: string }) {
  await execute({ namespace, argv, env });
}
