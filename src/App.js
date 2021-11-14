
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
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';


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
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<RegisterPage/>} />
      </Routes>
      
      
      
      
      <footer >
        <Footer />
      </footer>
      </div>
      </body>
      </Router>
      
  );
}

export default App;
