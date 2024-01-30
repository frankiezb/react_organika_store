import "./quantityPicker.css";


function QuantityPicker()
{
    function decrease()
    {
        console.log("Decreasing");
    }
    function increase()
    {
        console.log("Increasing");
    };
    return(
        <div className="quantityPcker">
            <button onClick={decrease}>-</button>
            <label>1</label>
            <button onClick={increase}>+</button>
        </div>
    )
}
export default QuantityPicker;