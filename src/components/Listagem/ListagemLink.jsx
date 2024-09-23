import React from 'react';

export const ListagemLink = ({ href, content }) => {
  return (
    <a href={href} className="font-bold text-lg text-white ">
      {content}
    </a>
  );
};
