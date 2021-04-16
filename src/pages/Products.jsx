import React from "react";
import CardProduct from "../components/CardProduct";

const Products = () => {
  const [setOrder, order] = React.useState(4);

  const handleChange = (value) => {
    setOrder(value);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Product List</h1>
      <CardProduct
      //  counterChangeValue={(value) => handleChange(value)}
      />
    </div>
  );
};

export default Products;
