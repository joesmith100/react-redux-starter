import { createStore } from 'redux';

import rootReducer from '../reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  // TODO: Only have devToolsExtension in devlopment?

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () =>
      /* eslint-disable global-require */
      store.replaceReducer(require('../reducers').default),
      /* eslint-disable global-require */
    );
  }

  return store;
};
