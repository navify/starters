import { Redirect, Route } from 'react-router-dom';
import { NavApp, NavRouterOutlet, setupNavifyReact } from '@navify/react';
import { NavReactRouter } from '@navify/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

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
      <NavRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/message/:id">
           <ViewMessage />
        </Route>
      </NavRouterOutlet>
    </NavReactRouter>
  </NavApp>
);

export default App;
