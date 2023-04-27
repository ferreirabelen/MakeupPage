import { useState } from "react";
function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    function Suma(){
        setCount(count + 1)

    }

    function Resta(){
        setCount(count - 1)

    }

    return(
        <div>
            <button onClick={Resta}>-</button>
            <span>{count}</span>
            <button onClick={Suma}>+</button>
            <button>Agregar al carrito</button>

            
        </div>

    )

}

export default ItemCount;