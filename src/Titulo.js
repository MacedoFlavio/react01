import React from 'react';

const Titulo = ({ texto }) => {
  return (
    <h1 style={{ margin: '1rem', fontSize: '3rem', color: '#f00' }}>{texto}</h1>
  );
};

export default Titulo;
