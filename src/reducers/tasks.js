import { CREATE_TASK, CHECK_TASK } from '../actionsType';

const tasksReducer = (state = [], action) => {
  if (action.type === CREATE_TASK) {
    return [...state, action.payload];
  } else if (action.type === CHECK_TASK) {
    const task = state[action.payload];
    return [
      ...state.slice(0, action.payload),
      { ...task, done: !task.done },
      ...state.slice(action.payload + 1),
    ];
  }
  return state;
};

export default tasksReducer;
