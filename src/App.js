import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import Contato from './Contato';

const App = () => {
  let Componente;
  const { pathname } = window.location;

  if (pathname === '/produtos') {
    Componente = Produtos;
  } else if (pathname === '/contato') {
    Componente = Contato;
  } else {
    Componente = Home;
  }

  return (
    <div>
      <Header />
      <Componente />
    </div>
  );
};

export default App;
