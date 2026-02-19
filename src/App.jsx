import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';       // Supondo que você tenha essa tela
import Cadastro from './pages/Register'; // A tela que criamos antes

function App() {
  return (
    <BrowserRouter>
      {/* Opcional: Um menu ou links de navegação fixos */}
      <nav style={{ padding: '10px', textAlign: 'center' }}>
        <Link to="/" style={{ margin: '10px' }}>Login</Link>
        |
        <Link to="/cadastro" style={{ margin: '10px' }}>Cadastrar-se</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;