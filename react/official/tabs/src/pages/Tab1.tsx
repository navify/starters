import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Tab 1</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">Tab 1</NavTitle>
          </NavToolbar>
        </NavHeader>
        <ExploreContainer name="Tab 1 page" />
      </NavContent>
    </NavPage>
  );
};

export default Tab1;
