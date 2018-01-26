import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDom.render(
  <Provider store={store}>
    <div>123</div>
  </Provider>,
  document.getElementById("root"));