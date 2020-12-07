import { INCREASE, DECREASE, RESET } from "../constants/constantTest";

const initialState = 0;

const reducerTest = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default reducerTest;
