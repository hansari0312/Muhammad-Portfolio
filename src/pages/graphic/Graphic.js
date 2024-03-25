import React from 'react';
import graphicBanner from '../../assets/images/logo-banner.png'; // Import images
import Graphic from '../../assets/images/graphic-1.png'; // Import images


function Component() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      
  return (
    <>
      <section className="inner-title web-banner">
        <div className="banner-verticle">
          <div className="banner-loop">
            {[...Array(10)].map((_, index) => (
              <img key={index} src={graphicBanner} className={index === 0 ? 'img-fluid first' : 'img-fluid'} alt="" />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-heading">
                <h1>GRAPHIC DESIGNS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cate-main graphic-inner">
        <div className="container own-container">
          <div className="row">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="img-box">
                  <a href="graphic-inner.php">
                  <img src={Graphic} className="img-fluid" alt="" />

                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Component;
