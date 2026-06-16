import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import ListagemLancamentos from './pages/ListagemLancamentos/ListagemLancamentos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lancamentos" element={<ListagemLancamentos />} />
      </Routes>
    </Router>
  );
}

export default App;