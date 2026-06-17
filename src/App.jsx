import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login'; // Certifique-se de criar este arquivo
import Dashboard from './pages/Dashboard/Dashboard';
import ListagemLancamentos from './pages/ListagemLancamentos/ListagemLancamentos';
import './App.css';

// Componente que verifica se o usuário está logado
const RotaPrivada = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />
        
        {/* Rotas protegidas */}
        <Route path="/dashboard" element={
          <RotaPrivada><Dashboard /></RotaPrivada>
        } />
        <Route path="/lancamentos" element={
          <RotaPrivada><ListagemLancamentos /></RotaPrivada>
        } />
        
        {/* Redirecionamento padrão */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;