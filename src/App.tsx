import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/demos/Home';
import Intervention from './pages/demos/Intervention';
import Information from './pages/demos/Information';
import Inspiration from './pages/demos/Inspiration';
import DynamicImage from './pages/trial/DynamicImage';
import Welcome from './pages/flows/Welcome';
import Menu from './pages/flows/Menu';
import Anxiety from './pages/flows/Anxiety';
import Feeling from './pages/flows/Feeling';
import Result from './pages/flows/Result';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/help">
          <Intervention />
        </Route>
        <Route exact path="/know">
          <Information />
        </Route>
        <Route exact path="/hope">
          <Inspiration />
        </Route>
        <Route exact path="/dynamic-image">
          <DynamicImage />
        </Route>           
        <Route exact path="/welcome">
          <Welcome />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/anxiety">
          <Anxiety />
        </Route>
        <Route exact path="/feeling">
          <Feeling />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route exact path="/">
          <Redirect to="/welcome" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
