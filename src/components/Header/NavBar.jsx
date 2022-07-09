import React, { useState } from 'react';
import Logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';

function NavBar() {
  const [hover, setHover] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} className="navbar__logo" />
      </Link>
      <Link to="/catalog" className="navbar__link">
        Catalog
      </Link>
      <Link to="/catalog" className="navbar__link">
        Hand Tools
      </Link>
      <Link to="/catalog" className="navbar__link">
        Stationary Tools
      </Link>
      <Link to="/catalog" className="navbar__link">
        Wood finishing
      </Link>
    </nav>
  );
}

export default NavBar;
