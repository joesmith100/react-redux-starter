import './assets/sass/main.scss';

import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

const store = configureStore(window.__INITIAL_STATE__);

const rend = () => {
  render(
    <App dispatch={store.dispatch}
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};

rend();

store.subscribe(rend);
