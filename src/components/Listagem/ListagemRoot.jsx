import React from 'react';

export const ListagemRoot = ({ children }) => {
  return <ul className="flex gap-4 max-sm:hidden">{children}</ul>;
};
