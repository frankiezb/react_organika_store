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
            <QuantityPicker/>
            
        </div>
    );
}

export default Product;