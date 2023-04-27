
import carrito from "./img/carrito.png";
function CartWidget(){

    return(
        <div>
            <img src={carrito} alt="" className="carrito"></img>
        </div>
    )
}

export default CartWidget;