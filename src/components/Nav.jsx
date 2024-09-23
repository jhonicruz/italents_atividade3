import React from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ListagemRoot } from './Listagem/ListagemRoot';
import { ListagemList } from './Listagem/ListagemList';
import { ListagemLink } from './Listagem/ListagemLink';
import { Listagem } from './Listagem';

const Nav = () => {
  return (
    <nav>
      <HamburgerMenuIcon
        width="30px"
        height="30px"
        className="hidden text-white max-sm:block cursor-pointer"
      />

      <Listagem.Root>
        <Listagem.List>
          <Listagem.Link href="#" content="Blog" />
        </Listagem.List>
        <Listagem.List>
          <Listagem.Link href="#" content="Talentos" />
        </Listagem.List>
        <Listagem.List>
          <Listagem.Link href="#" content="Login" />
        </Listagem.List>
      </Listagem.Root>
    </nav>
  );
};

export default Nav;
