
import './App.css';
import Navbar from './components/navbar/Navbar';
import CatalogoCasacas from './components/Catalogo/Catalogo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemUnitConteiner from './components/ItemPage/ItemPage';
import CartDiv from './components/CartDiv/CartDiv';
import { CartContextProvider } from './contexto/CartContext';
import CheckData from './components/Check/Check';






function App() {


  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path='/cart' element={<CartDiv />} />
              <Route path='/' element={<CatalogoCasacas/>} />
              <Route path='/cat/:categoryId' element={<CatalogoCasacas/>} />
              <Route path='/casaca/:shirtId' element={<ItemUnitConteiner />} />
              <Route path='/check' element={<CheckData />} />
            </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
