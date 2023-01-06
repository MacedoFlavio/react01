import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const mercadorias = [
    {
      id: 1,
      tipo: 'Smartphone',
      marcas: [
        {
          idMarca: 1,
          nome: 'Samsung',
          modelos: [
            {
              nome: 'S20',
              preco: 2500,
            },
            {
              nome: 'S21',
              preco: 3000,
            },
            {
              nome: 'S22',
              preco: 4000,
            },
          ],
        },
        {
          idMarca: 2,
          nome: 'Iphone',
          modelos: [
            { nome: 'XR', preco: 2500 },
            { nome: 'XII', preco: 3000 },
            { nome: 'XIII', preco: 4000 },
            { nome: 'XIV', preco: 4250 },
          ],
        },
      ],
    },
    {
      id: 2,
      tipo: 'Notebook',
      marcas: [
        {
          idMarca: 1,
          nome: 'Dell',
          modelos: [
            { nome: 'Latitudo', preco: 2450 },
            { nome: 'Vostro', preco: 3250 },
          ],
        },
        {
          idMarca: 2,
          nome: 'Lenovo',
          modelos: [
            {
              nome: 'Lenovo I',
              preco: 7500,
            },
            {
              nome: 'Lenovo II',
              preco: 5200,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Titulo texto="Produtos" />
      {mercadorias.map((mercadoria) => (
        <Produto
          key={mercadoria.id}
          id={mercadoria.id}
          marcas={mercadoria.marcas}
          tipo={mercadoria.tipo}
        />
      ))}
      ;
    </div>
  );
};

export default Produtos;
