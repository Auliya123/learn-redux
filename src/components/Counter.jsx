import React from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";

const Counter = (props) => {
  // const [counter, setCounter] = React.useState(4);

  // const handleMinus = () => {
  //   setCounter(counter - 1);
  //   props.onCounterChange(counter - 1);
  // };

  // const handlePlus = () => {
  //   setCounter(counter + 1);
  //   props.onCounterChange(counter + 1);
  // };

  // console.log("counter valie", counter);
  console.log("props", props);

  return (
    <>
      <Button onClick={props.handleMinus}>-</Button>
      <Input style={{ width: 40 }} value={props.counter} />
      <Button type="primary" onClick={props.handlePlus}>
        +
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.totalOrder
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: "HANDLE_PLUS" }),
    handleMinus: () => dispatch({ type: "HANDLE_MINUS" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
