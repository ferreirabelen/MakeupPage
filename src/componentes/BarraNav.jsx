import "./css/styles.css";
import CartWidget from "./CartWitdget";
import {NavLink} from "react-router-dom"

function BarraNav() {
    return(
        <nav className ="NAV">
            <ul>
                
                <li><NavLink to="/">Todos los productos</NavLink></li>
                <li><a href="#a">Rostro</a></li>
                <li><a href="#a">Labios</a></li>
                <li><a href="#a">Ojos</a></li>
                <li><NavLink to="/detail">detalle</NavLink></li>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default BarraNav;