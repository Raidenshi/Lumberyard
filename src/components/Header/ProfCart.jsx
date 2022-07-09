import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/icons/cart&profile/01.png';
import cart from '../../images/icons/cart&profile/02.png';

function ProfCart() {
  return (
    <div className="profcart">
      <Link to="#" className="profcart__profile">
        <img src={profile} alt="profile" />
      </Link>
      <Link to="#" className="profcart__cart">
        <img src={cart} alt="cart" />
      </Link>
    </div>
  );
}

export default ProfCart;
