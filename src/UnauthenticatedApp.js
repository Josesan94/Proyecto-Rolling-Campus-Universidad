import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BecasPage from './pages/BecasPage';
import Nosotros from './pages/Nosotros';
import LoginPage from './pages/loginPage';
import NotFound from './pages/NotFound';
import Carreras from './pages/Carreras/Carreras';

const UnauthenticatedApp = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/becas" element={<BecasPage />} />
    <Route exact path="/nosotros" element={<Nosotros />} />
    <Route exact path="/Carreras" element={<Carreras />} />
    <Route exact path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default UnauthenticatedApp;
