import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';

//styles
import {theme, macbook, mobile, gradient} from './lib/theme';

//images
import loader from "./lib/loader.svg";

//Pages
import MainPage from "./Pages/MainPage";
import ToggleSwitchesPage from "./Pages/ToggleSwitchesPage";

//Components
import MenuBtn from "./Components/MenuBtn/MenuBtn";
import Menu from "./Components/Menu/Menu";

const App = (props) => {
  return(
    <ConnectedRouter history={history}>
      <div>
        <MenuBtn />
        <Menu />
        <img className="loader" alt="" src={loader} />
        <Switch>
          <Route
            exact
            path="/"
            component={MainPage} />
          <Route
            path="/toggle-switches"
            component={ToggleSwitchesPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};

export default App;