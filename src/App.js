
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProdCounter from './components/Contador/Contador';
import CatalogoCasacas from './components/Catalogo/Catalogo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemUnitConteiner from './components/ItemPage/ItemPage';



function App() {
  const handleOnAdd = (quant) => {
    quant > 0 && console.log(`Se agregó: ${quant} productos`);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
            <ProdCounter stock={15} onAdd={handleOnAdd}/>
            <Routes>
              <Route path='/' element={<CatalogoCasacas/>} />
              <Route path='/cat/:categoryId' element={<CatalogoCasacas/>} />
              <Route path='/casaca/:shirtId' element={<ItemUnitConteiner />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
