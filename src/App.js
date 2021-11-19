
import './styles/App.css';
import './components/Header';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './components/Footer';
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

import ProfilePage from './pages/ProfilePage';
import PageAlumno from './pages/PageAlumno';
import DatosAlumno from './components/DatosAlumno/DatosAlumno';



function App() {
  return (
    <Router>
      <body>
      <div className =" App">
      
      
      <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/becas'  element={<BecasPage/>} />
          <Route exact path='/nosotros' element={<Nosotros/>} />
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<RegisterPage/>} />
          <Route exact path='/profile' element={<ProfilePage/>}/>
          <Route exact path='/tables' element={<PageAlumno/>}/>
          <Route exact path='/datos' element ={<DatosAlumno/>} />
      </Routes>
      
      
      
      
      
        
        
      
      </div>
      </body>
    </Router>
  );
}

export default App;

//BACKEND

// var express = require('express');
// var app = express();

// app.get('/', function(request, response) {
//     response.send('Hola desde el servidor express ACTUALIZADO');
// })

// //var user_routes = require('./routes/user');
// //var transaction_routes = require('./routes/transaction');
// //var upload_routes = require('./routes/upload')

// app.use(express.urlencoded({extended: true}));




// app.use('/api', [
//     user_routes, 
//     transaction_routes,
//     upload_routes
// ])

// module.exports = app;