import { NavContent, NavHeader, NavPage, NavTitle, NavToolbar } from '@navify/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <NavPage>
      <NavHeader>
        <NavToolbar>
          <NavTitle>Tab 2</NavTitle>
        </NavToolbar>
      </NavHeader>
      <NavContent fullscreen>
        <NavHeader collapse="condense">
          <NavToolbar>
            <NavTitle size="large">Tab 2</NavTitle>
          </NavToolbar>
        </NavHeader>
        <ExploreContainer name="Tab 2 page" />
      </NavContent>
    </NavPage>
  );
};

export default Tab2;
