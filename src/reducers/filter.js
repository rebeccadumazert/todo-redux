import { TOGGLE_TASK } from '../actionsType';

const filterReducer = (state = true, action) => {
  if (action.type === TOGGLE_TASK) {
    return !state;
  }
  return state;
};

export default filterReducer;
