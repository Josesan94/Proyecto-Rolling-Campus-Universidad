import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import ProfilePage from './pages/ProfilePage';
import PageAlumno from './pages/PageAlumno';
import DatosAlumno from './components/DatosAlumno/DatosAlumno';
import Users from './components/users/users';
import NotFound from './pages/NotFound';
import Carreras from './pages/Carreras/Carreras';

const AuthenticatedApp = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/nosotros" element={<Nosotros />} />
    <Route exact path="/Carreras" element={<Carreras />} />
    <Route exact path="/profile" element={<ProfilePage />} />
    <Route exact path="/tables" element={<PageAlumno />} />
    <Route exact path="/datos" element={<DatosAlumno />} />
    <Route exact path="/users" element={<Users />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AuthenticatedApp;
