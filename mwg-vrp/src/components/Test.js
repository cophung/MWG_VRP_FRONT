import React from "react";

function Test({ counter, increase, decrease, reset }) {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Test;
