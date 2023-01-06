import React from 'react';
import SubTitulo from './SubTitulo';

const Produto = ({ id, marcas, tipo }) => {
  return (
    <div>
      <SubTitulo textoSubTitulo={tipo} />
      <ul>
        {marcas.map((marca) => (
          <li key={id}>
            {marca.nome}
            <ul>
              {marca.modelos.map((modelo) => (
                <li key={modelo.nome}>
                  {modelo.nome} - R$ {modelo.preco},00
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
