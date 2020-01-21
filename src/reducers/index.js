import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import filterReducer from './filter';

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
