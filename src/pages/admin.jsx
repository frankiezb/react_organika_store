import "./admin.css";
import { useState } from "react";

//create the component
function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

  function handleInputchange(e) {
    const val = e.target.value;
    const name = e.taget.name;

    //create the copy, modidy it and send it back
    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }
  function saveProduct() {
    console.log(product);
    //save to server
    clearform();
  }
  function clearform() {
    setProduct({
      title: "",
      category: "",
      price: "",
      image: "",
    });
  }

  return (
    <div className="admin page">
      <h1>Store Mangament</h1>

      <div className="parent-container">
        <h3>Register Products</h3>
      </div>

      <div>
        <label>Title</label>
        <input
          value={product.title}
          onChange={handleInputchange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Category</label>
        <input
          value={product.title}
          onChange={handleInputchange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Category</label>
        <input
          value={product.title}
          onChange={handleInputchange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Price</label>
        <input
          value={product.title}
          onChange={handleInputchange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label>Image</label>
        <input
          value={product.title}
          onChange={handleInputchange}
          name="title"
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <button onClick={saveProduct} className="btn btn-dark">
          Save Product
        </button>
      </div>
    </div>
  );
}
export default Admin;
