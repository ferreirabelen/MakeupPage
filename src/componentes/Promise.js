function APIcall(){ 
return new Promise ((resp) => {
    const data = {
        id : "1",
        name : "Mi primer producto",
        description : "fabuñoso",
        stock : 9
    };
    setTimeout( () => resp(data), 1500 );
})
}

// APIcall.then( (response) => {
//     console.log(`${response.name}`)}
// )

async function API(){
    let respAPI = await APIcall()
    console.log(`respuesta ${respAPI}`)
}

API()