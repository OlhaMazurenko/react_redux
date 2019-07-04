import {NUMBER_INCREMENT,  NUMBER_DECREMENT} from './actions';

const initialState = {
  currentNumber: 1000
};

export function numbersApp(state = initialState, action) {
  let newState;
  switch (action.type) {
    case NUMBER_INCREMENT:
      newState = {
        currentNumber: state.currentNumber + 1
      };
      break;
    case NUMBER_DECREMENT:
      newState = {
        currentNumber: state.currentNumber - 1
      };
      break;
    default:
      newState = state;
  }
  return newState;
}
