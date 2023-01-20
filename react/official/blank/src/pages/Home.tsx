import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Blank</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">Blank</NavTitle>
          </NavToolbar>
        </NavHeader>
        <ExploreContainer />
      </NavContent>
    </NavPage>
  );
};

export default Home;
