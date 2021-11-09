
import './styles/App.css';
import './components/Header';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Carrusel from './components/Carousel';
import Cards from './components/Cards';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App  ">
      <header>
      <Header/>
      <Carrusel />
      </header>
      <section>
        <h1 className="text-center justify-content-center">Carreras a distancia</h1>
      </section>
     <container>
      <Cards />
      </container>
      
    </div>
    </Router>
  );
}

export default App;
