import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import './App.css';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './paginas/login/login';
import CadastroUsuario from './paginas/cadastro-usuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/cadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/deletarPostagem';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import DeletarTema from './components/temas/deletarTema/deletarTema';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/posts' element={<ListaPostagem />} />
          <Route path='/formularioPostagem'> <CadastroPost /></Route>
          <Route path='/formularioPostagem/:id'> <CadastroPost /></Route>
          <Route path='/formularioTema'> <CadastroTema /></Route>
          <Route path='/formularioTema/:id'> <CadastroTema /></Route>
          <Route path='/deletarPostagem/:id'> <DeletarPostagem /></Route>
          <Route path='/deletarTema/:id'> <DeletarTema /></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
