import './styles/App.css';
import './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from './components/auth/AuthProvider';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import Footer2 from './components/footer2';

import useAuth from './components/auth/useAuth';

function App() {
  const { isLogged } = useAuth(AuthProvider);

  return (
    <>
      <main>
        <div className="App">
          {isLogged() ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>
      </main>
      <footer>
        <Footer2 />
      </footer>
    </>
  );
}

function AppWithProviders() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

export default AppWithProviders;
