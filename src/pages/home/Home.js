import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blinkGif from '../../assets/images/blink.gif';
import bannerSlider from '../../assets/images/banner-slider.png';
import graphicImage from '../../assets/images/graphic.png';
import logosImage from '../../assets/images/logos.png';
import anime from 'animejs';


const MainHeader = styled.header`
footer{
  position: sticky!important;
}

header{
position: fixed;

}

`;

const Footer = styled.footer`
footer {
  position: sticky !important;
}

`;


const HomePage = styled.section`


.home-banner .vertical-loop {
  position: absolute;
  right: 0;
  top: 0;
}

.photo-banner {
  height: 5330px;
  width: 85%;
  margin-bottom: 80px;
  float: right;
}

.photo-banner img {
  display: block;
  margin: auto;
}

.photo-banner .first {
  animation: bannermove 50s linear infinite;
}

@keyframes bannermove {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -5097px;
  }
}


`;



function Home() {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Wrap every letter in a span
    const textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // Animation timeline
    anime.timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 2000,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    // Cleanup function
    return () => {
      // Clear the animation timeline
      anime.remove('.ml6 .letter');
      anime.remove('.ml6');
    };
  }, []);


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  return (
    <>
      <HomePage>
      <section className={`home-banner ${isSticky ? 'sticky-banner' : ''}`}>
        <img src={blinkGif} className="blink" alt="" />
        <div className="vertical-loop">
          <div className="photo-banner">
            <img className="first" src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
            <img src={bannerSlider} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text">
                <h1>Showcasing the best of my</h1>

                <p className="ml6 sign">
                  <span className="text-wrapper">
                    <span className="letters">Portfolio</span>
                  </span>
                </p>

                {/* <p className="sign"></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-sec">
        <div className="img-box-1">
          <div className="text-div">
            <p><Link to='logo' onClick={scrollToTop}>LOGO DESIGNS</Link></p>
          </div>
          <img src={graphicImage} alt="" />
        </div>
        <div className="img-box-2">
          <div className="text-div">
            <p><Link to='graphic' onClick={scrollToTop}>GRAPHIC DESIGNS</Link></p>
          </div>
          <img src={logosImage} alt="" />
        </div>
      </section>
      </HomePage>
    </>
  );
}

export default Home;
