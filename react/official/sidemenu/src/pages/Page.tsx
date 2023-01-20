import { NavButtons, NavContent, NavHeader, NavMenuButton, NavPage, NavTitle, NavToolbar } from '@navify/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavButtons slot="start">
            <NavMenuButton />
          </NavButtons>
          <NavTitle>{name}</NavTitle>
        </NavToolbar>
      </NavHeader>

      <NavContent fullscreen>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">{name}</NavTitle>
          </NavToolbar>
        </NavHeader>
        <ExploreContainer name={name} />
      </NavContent>
    </NavPage>
  );
};

export default Page;
