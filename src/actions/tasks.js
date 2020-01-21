import { CREATE_TASK, CHECK_TASK } from '../actionsType';

export const createTask = (description, done) => {
  return {
    type: CREATE_TASK,
    payload: {
      description,
      done,
    },
  };
};

export const checkTask = index => {
  return {
    type: CHECK_TASK,
    payload: index,
  };
};
