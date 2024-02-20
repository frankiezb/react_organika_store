import { useEffect,useState} from "react";
import "./products.css";
import QuantityPicker from "./quantityPicker";


function Product(props)
{
    
    useEffect(function()
    {
        console.log("hello im a product")
    },[]);
    return(
        <div className="product">
            <img src={"/images/"+ props.data.image} alt="" />
            <h5>{props.data.title}</h5>
            
            <div className="prices">
                <label className="total">{props.data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>
            <button type="button" className="btn btn-primary">Add To Cart</button>

            <QuantityPicker/>
        </div>
    );
}

export default Product;