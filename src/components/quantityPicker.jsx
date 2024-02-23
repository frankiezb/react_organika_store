import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
  const [quantity, setQuanity] = useState(1);
  function decrease() {
    if (quantity === 1) return;
    let value = quantity - 1;
    setQuanity(value);
    console.log("Decreasing");
    props.onQuantityChange(value);
  }
  //create a increase function
  function increase() {
    let value = quantity + 1;
    setQuanity(value);
    console.log("Increasing");
    props.onQuantityChange(value);
  }
  return (
    <div className="quantityPcker">
      <button
        className="btn btn-online-primary"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default QuantityPicker;
