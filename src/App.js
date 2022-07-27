
import './App.css';
import Navbar from './components/navbar/Navbar';
import ProdCounter from './components/Contador/Contador';
import CatalogoCasacas from './components/Catalogo/Catalogo';

function App() {
  const handleOnAdd = (quant) => {
    console.log(`Se agregó: ${quant} productos`)
  }

  return (
    <div className="App">
      <Navbar />
      <ProdCounter stock={15} onAdd={handleOnAdd}/>
      <CatalogoCasacas />
    </div>
  );
}

export default App;
