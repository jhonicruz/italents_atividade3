import React from 'react';

const Titulo = ({ content }) => {
  return (
    <h1 className="text-6xl font-bold leading-tight max-sm:text-4xl text-white max-custom:text-center ">
      {content}
    </h1>
  );
};

export default Titulo;
