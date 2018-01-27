import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { TOGGLE_MENU } from "../actions";

const basicReducer = (state = { showMenu: false}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        showMenu: !state.showMenu
      };

    default:
      return state;
  }
};

const reducers = combineReducers({
  basicReducer,
  routerReducer
});

export default reducers;