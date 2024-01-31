import './catalog.css'
import Product from '../components/products'

function Catalog()
{
    return(
        <div>
        <h1> here look my awesome products</h1>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
    );
}

export default Catalog;