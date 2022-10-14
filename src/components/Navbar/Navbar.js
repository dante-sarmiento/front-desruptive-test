import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <header className='flex justify-center font-sans text-xl py-px content-center bg-slate-400 w-full h-10'>
      <a href="/*" className='mx-2.5 border-current'>
        <img
          src={logo}
          alt="Logo"
          width="30"
          height="30" />
      </a>
      <a href="/mercado" className='mx-2.5'>Mercado</a>
        <a href="/transacciones" className='mx-2.5'>Transacciones</a>
    </header>
  );
};

export default Navbar;
