import ItemCount from "./ItemCount"
function Item({name,description,stock,price}){
    return(
        <div className="contenedor">
            <div className="card" >
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
                <p>{stock}</p>
                <ItemCount stock={5} initial ={1}/>
            </div>
            
        </div>
        

    )

}
export default Item