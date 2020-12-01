import * as test from "../constants/test";

export const increase = () => {
  return {
    type: test.INCREASE,
  };
};

export const decrease = () => {
  return {
    type: test.DECREASE,
  };
};

export const reset = () => {
  return {
    type: test.RESET,
  };
};
