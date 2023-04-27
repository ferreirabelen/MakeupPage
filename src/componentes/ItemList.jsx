import productos from "./data.jsx";
import Item from "./Item";

function ItemList(){
    return(
        <div>
        {
            productos.map((product)=>(
                <Item name={product.name} stock={product.stock} 
            description={product.description} key={product.id} price={product.price}/>
            ))
        }
        </div>

    )
}
export default ItemList