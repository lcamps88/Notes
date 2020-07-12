import { createStore } from 'redux';
import rootReducer from '../reducer/reducers'
import {loadState,saveState} from '../reducer/localStorage'


/*export default createStore(
  rootReducer,
  undefined,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/


    const persistedState = loadState();

    const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    saveState(store.getState());
  });


export default store
