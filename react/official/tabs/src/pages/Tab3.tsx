import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Tab 3</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">Tab 3</NavTitle>
          </NavToolbar>
        </NavHeader>
        <ExploreContainer name="Tab 3 page" />
      </NavContent>
    </NavPage>
  );
};

export default Tab3;
