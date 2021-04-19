import { Card } from "antd";
import Counter from "./Counter";

const CardProduct = (props) => {
  console.log("props", props);

  return (
    <Card title="Baju" style={{ width: 200 }} hoverable>
      <p>Rp.200.000</p>
      <Counter
      // onCounterChange={(value) => props.onCounterChange(value)}
      />
    </Card>
  );
};

export default CardProduct;
