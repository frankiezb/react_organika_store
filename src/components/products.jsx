import "./products.css";
import QuantityPicker from "./quantityPicker";

function Product()
{
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="" />
            <h5>hello i am a products</h5>
            <QuantityPicker/>
            
        </div>
    );
}

export default Product;