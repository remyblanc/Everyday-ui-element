import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';
import { connect } from 'react-redux';
import styled from 'styled-components';

//styles
import { theme, macbook, mobile, gradient } from './lib/theme';

//images
import loader from "./lib/loader.svg";

//Pages
import MainPage from "./Pages/MainPage";
import ToggleSwitchesPage from "./Pages/ToggleSwitchesPage";

//Components
import MenuBtn from "./Components/MenuBtn/MenuBtn";
import Menu from "./Components/Menu/Menu";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <MenuBtn/>
          <Menu/>
          <img className="loader" alt="" src={loader}/>
          <AppContainer className={this.props.store.basicReducer.showMenu ? 'menu-is-open' : null}>
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/toggle-switches" component={ToggleSwitchesPage}/>
            </Switch>
          </AppContainer>
        </div>
      </ConnectedRouter>
    );
  }
}

const AppContainer = styled.div`
  transition: 0.2s;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  border: 0 solid transparent;
  position: relative;
  
  &.menu-is-open {
    border: 20px solid #2b2b2b;
    border-right: 250px solid #2b2b2b;
  }
`;

function mapStateToProps(state) {
  return {
    store: state
  }
}

export default connect(mapStateToProps)(App);