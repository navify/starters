import { Redirect, Route } from 'react-router-dom';
import {
  NavApp,
  NavIcon,
  NavLabel,
  NavRouterOutlet,
  NavTabBar,
  NavTabButton,
  NavTabs,
  setupNavifyReact
} from '@navify/react';
import { NavReactRouter } from '@navify/react-router';
import { ellipse, square, triangle } from 'navicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Navify components to work properly */
import '@navify/react/css/core.css';

/* Basic CSS for apps built with Navify */
import '@navify/react/css/normalize.css';
import '@navify/react/css/structure.css';
import '@navify/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@navify/react/css/padding.css';
import '@navify/react/css/float-elements.css';
import '@navify/react/css/text-alignment.css';
import '@navify/react/css/text-transformation.css';
import '@navify/react/css/flex-utils.css';
import '@navify/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupNavifyReact();

const App: React.FC = () => (
  <NavApp>
    <NavReactRouter>
      <NavTabs>
        <NavRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </NavRouterOutlet>
        <NavTabBar slot="bottom">
          <NavTabButton tab="tab1" href="/tab1">
            <NavIcon icon={triangle} />
            <NavLabel>Tab 1</NavLabel>
          </NavTabButton>
          <NavTabButton tab="tab2" href="/tab2">
            <NavIcon icon={ellipse} />
            <NavLabel>Tab 2</NavLabel>
          </NavTabButton>
          <NavTabButton tab="tab3" href="/tab3">
            <NavIcon icon={square} />
            <NavLabel>Tab 3</NavLabel>
          </NavTabButton>
        </NavTabBar>
      </NavTabs>
    </NavReactRouter>
  </NavApp>
);

export default App;
