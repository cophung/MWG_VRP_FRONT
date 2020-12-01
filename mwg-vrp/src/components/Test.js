import React from "react";
import { Button } from "antd";

function Test({ counter, increase, decrease, reset }) {
  return (
    <div>
      <div>{counter}</div>
      <Button type="primary" onClick={increase}>
        +
      </Button>
      <Button type="primary" onClick={decrease}>
        -
      </Button>
      <Button type="primary" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}

export default Test;
