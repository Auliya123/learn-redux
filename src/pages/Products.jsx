import React from "react";
import CardProduct from "../components/CardProduct";
import { connect } from "react-redux";

const Products = (props) => {
  // const [order, setOrder] = React.useState(4);

  // const handleChange = (newValue) => {
  //   console.log("newValue nih", newValue);

  //   // setCounter(newValue);
  // };

  // console.log("counter", order);

  return (
    <div style={{ padding: 50 }}>
      <h1>Product List</h1>
      <p>Jumlah Order: {props.order}</p>
      <CardProduct
      // onCounterChange={(value) => {
      //   console.log(value);

      //   setOrder(value);
      // }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  };
};

export default connect(mapStateToProps)(Products);
