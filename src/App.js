import './App.css';
import FormularioRecibo from "./Components/FormularioRecibo/FormularioRecibo";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">

        <Header/>
        <FormularioRecibo/>
        <Footer/>
    </div>
  );
}

export default App;
