
import ItemList from "./ItemList";
import { useState,useEffect } from "react";
import productos from "./data";

function ItemListContainer({title}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(productos)
            },600)
        })

        traerProductos
        .then((res)=>{
            setProducts(res)
        })

    },[])

    return(
        <div>
        <h1>{title}</h1>
        <ItemList item={products}/>
        
    </div>
    )
}

export default ItemListContainer;