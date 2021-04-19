import React from "react";
import CardProduct from "../components/CardProduct";

const Products = () => {
  const [order, setOrder] = React.useState(4);

  const handleChange = (newValue) => {
    console.log("newValue nih", newValue);

    // setCounter(newValue);
  };

  console.log("counter", order);

  return (
    <div style={{ padding: 50 }}>
      <h1>Product List</h1>
      <p>Jumlah Order: {order}</p>
      <CardProduct
        onCounterChange={(value) => {
          console.log(value);

          setOrder(value);
        }}
      />
    </div>
  );
};

export default Products;
