import * as constantTest from "../constants/constantTest";

export const increase = () => {
  return {
    type: constantTest.INCREASE,
  };
};

export const decrease = () => {
  return {
    type: constantTest.DECREASE,
  };
};

export const reset = () => {
  return {
    type: constantTest.RESET,
  };
};
