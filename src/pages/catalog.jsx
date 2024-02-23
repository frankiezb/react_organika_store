import './catalog.css'
import Product from '../components/products'
import { useEffect, useState } from 'react';
import DataService from '../services/dataservies';
function Catalog()
{ 
    const[productstate,setProducts] = useState([]);
    useEffect(function(){
        console.log("compontent is loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let products = service.getProducts();
        setProducts(products);
        console.log(products);
    }

    return(
        <div className="catalog">
        <h1> {productstate.length} here look my awesome products</h1>
        {productstate.map(productArrow => <Product data = {productArrow}/>)}
        
        </div>
    );
}

export default Catalog;