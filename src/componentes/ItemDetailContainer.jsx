import { useEffect, useState } from "react";
import productos from "./data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){

    const [product, setProduct] = useState({});
    const {Id} = useParams();  //se tiene que llamar igual que la ruta en este caso /detail/:Id
    console.log("PARAMETRO",Id)

    useEffect(() => {
        const traerUnProducto = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(productos[Id])
            },600)
        })

        traerUnProducto
        .then((res)=>{
            setProduct(res)
        })

    },[])

    return(
        <div>
            <ItemDetail item={product}/>

        </div>
        

    )
}

export default ItemDetailContainer;