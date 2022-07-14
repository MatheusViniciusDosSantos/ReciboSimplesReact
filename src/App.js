import './App.css';
import FormularioRecibo from "./Components/FormularioRecibo/FormularioRecibo";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Recibo from "./Components/Recibo/Recibo"

function App() {
  return (
    <div className="App">

        <Header/>
        <FormularioRecibo/>
        {/* <Recibo/> */}
        <Footer/>
    </div>
  );
}

export default App;
