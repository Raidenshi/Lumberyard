import React from 'react';
import '../styles/footer.scss';
import icon_twt from '../images/icons/social/01.png';
import icon_ins from '../images/icons/social/02.png';
import icon_fcb from '../images/icons/social/03.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__contacts">
            <a href="tel:+8 800 555 35 34" className="footer__number block">
              +8 800 555 35 34
            </a>
            <a
              href="mailto:shop@lumberyard.com"
              className="footer__email block"
            >
              shop@lumberyard.com
            </a>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__payment block">
              Payment
            </a>
            <a href="#" className="footer__delivery block">
              Delivery
            </a>
          </div>
          <div className="footer__soicial-networks">
            <a href="#" className="footer__social-links">
              <img src={icon_twt} alt="twitter" />
            </a>
            <a href="#" className="footer__social-links">
              <img src={icon_fcb} alt="facebook" />
            </a>
            <a href="#" className="footer__social-links">
              <img src={icon_ins} alt="instagramm" />
            </a>
          </div>
        </div>
        <div className="footer__year">© 2022</div>
      </div>
    </footer>
  );
}

export default Footer;
