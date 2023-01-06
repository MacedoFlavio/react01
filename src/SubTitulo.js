import React from 'react';

const SubTitulo = ({ textoSubTitulo }) => {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', color: '#0000FF', margin: '1rem' }}>
        {textoSubTitulo}
      </h2>
    </div>
  );
};

export default SubTitulo;
