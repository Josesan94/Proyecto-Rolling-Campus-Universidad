
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
      <body>
      <div className =" App">
      <header>
      <Header/>
      </header>
      
      <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/becas'  element={<BecasPage/>} />
          <Route exact path='/nosotros' element={<Nosotros/>} />
          <Route path='/carreras' element={Carreras} />

      </Routes>
      
      
<<<<<<< HEAD
      
      
=======
      </header>
      <div>
        <h1>
          
        </h1>
      </div>
      <div>
        <h1>
          
        </h1>
      </div>
>>>>>>> 234517f6d8bfd9efb7f8331c923a0a44462a9f9e
      <footer >
        <Footer />
      </footer>
      </div>
      </body>
      </Router>
      
  );
}

export default App;
