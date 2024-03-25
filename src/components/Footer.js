import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="logo">
              <Link to='/'><img src={Logo} onClick={scrollToTop} alt="Logo" /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="f-btm">
        <p>© ALL RIGHTS RESERVED 2024. BY <a href="/" target="_blank" rel="noopener noreferrer">MUHAMMAD</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
