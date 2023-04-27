import BarraNav from "./componentes/BarraNav";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import {BrowserRouter,Route, Routes} from "react-router-dom"
// https://www.maybelline.com.ar/
// https://www.sephora.com/beauty/international-websites


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <BarraNav/>
        <Routes>
          
          <Route path="/" element={<ItemListContainer title="Maybelline"/>}/>
          <Route path="/detail/:Id" element={<ItemDetailContainer />}/>

        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
