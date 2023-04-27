import ItemCount from "./ItemCount"
function ItemDetail({item}){
    return(
        <div className="contenedor">
            <div className="card" >
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.stock}</p>
                <ItemCount stock={5} initial ={1}/>
            </div>
            
        </div>
        

    )

}
export default ItemDetail