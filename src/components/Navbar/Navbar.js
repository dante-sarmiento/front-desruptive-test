import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <header>
        <a href="/*">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30" />
        </a>
        <a href="/mercado">Mercado</a>
        <a href="/transacciones">Transacciones</a>
    </header>
  );
};

export default Navbar;
