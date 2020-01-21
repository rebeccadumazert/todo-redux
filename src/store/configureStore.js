import { createStore } from 'redux';
import appReducer from '../reducers';
import { createTask } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createTask('aller au sport', true));
store.dispatch(createTask('arrêter de manger du sucre', false));

export default store;
