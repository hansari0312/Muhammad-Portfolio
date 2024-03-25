import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import logoBanner from '../../assets/images/logo-banner.png'; // Import images
import Logos from '../../assets/images/logo-1.png'; // Import images

function Logo({ LogosCat }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
     
        <div>
          <h2>Logos</h2>
          <ul>
            {LogosCat.map((LogosCatName) => (
              <li key={LogosCatName.id}>{LogosCatName.name}</li>
            ))}
          </ul>
        </div>
      

      <section className="inner-title logo-banner">
        <div className="banner-verticle">
          <div className="banner-loop">
            <img src={logoBanner} className="img-fluid first" alt="" />
            {[...Array(9)].map((_, index) => (
              <img key={index} src={logoBanner} className="img-fluid" alt="" />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading">
                <h1>LOGO DESIGNS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="cate-main">
        <div className="container own-container">
          <div className="row">
         
            {[...Array(6)].map((_, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="img-box">
                  <Link to="logo-inner.php">
                    <img src={Logos} className="img-fluid" alt="" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Logo;
