
import './styles/App.css';
import './components/Header';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import BecasPage from './pages/BecasPage';
import Nosotros from './pages/Nosotros';
import Carreras from './pages/Carreras/Carreras'

function App() {
  return (
    <Router>
      <div className =" App">
      <header>
      <Header/>
      <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/becas'  element={<BecasPage/>} />
          <Route exact path='/nosotros' element={<Nosotros/>} />
          <Route path='/carreras' element={Carreras} />

      </Routes>
      
      
      </header>
      <div>
        <h1>
          seccion de noticias
        </h1>
      </div>
      <div>
        <h1>
          Datos de covid hoy
        </h1>
      </div>
      <footer >
        <Footer />
      </footer>
      </div>
    
      </Router>
  );
}

export default App;
