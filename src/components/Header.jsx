import React from 'react';
import NavBar from './Header/NavBar';
import ProfCart from './Header/ProfCart';
import '../styles/header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavBar />
        <ProfCart />
      </div>
    </header>
  );
}

export default Header;
