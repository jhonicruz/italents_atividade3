import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex h-[100px] w-full text-white justify-between items-center p-4">
      <a href="#" className="text-2xl font-bold text-white">
        Italents
      </a>

      <Nav />
    </header>
  );
};

export default Header;
