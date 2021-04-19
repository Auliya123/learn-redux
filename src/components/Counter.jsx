import React from "react";
import { Button, Input } from "antd";

const Counter = (props) => {
  const [counter, setCounter] = React.useState(4);

  const handleMinus = () => {
    setCounter(counter - 1);
    props.onCounterChange(counter - 1);
  };

  const handlePlus = () => {
    setCounter(counter + 1);
    props.onCounterChange(counter + 1);
  };

  console.log("counter valie", counter);

  return (
    <>
      <Button onClick={handleMinus}>-</Button>
      <Input style={{ width: 40 }} value={counter} />
      <Button type="primary" onClick={handlePlus}>
        +
      </Button>
    </>
  );
};

export default Counter;
