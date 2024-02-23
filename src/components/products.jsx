import { useEffect, useState } from "react";
import "./products.css";
import QuantityPicker from "./quantityPicker";
import DataService from "../services/dataservies";

function Product(props) {
  const [quantity, setQuanity] = useState(1);

  useEffect(function () {
    console.log("hello im a product");
  }, []);
  function onQuantityChange(qty) {
    setQuanity(qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }
  function add() {
    const prod4cart = {
      ...props.data,
      quantity: quantity,
    };
    console.log("adding", prod4cart);

    let service = new DataService();
    service.addToCart(prod4cart);
  }
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">{getTotal()}</label>
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>
      <div className="controls">
        <QuantityPicker onQuantityChange={onQuantityChange} />
        <button onClick={add} type="button" className="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

/**
 * create an add function
 * when the user clicks on the buttin, call the function
 * the fucntion will console log a message
 */
