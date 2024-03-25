import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import styled from 'styled-components';


const MainHeader = styled.header`
footer{
  position: sticky!important;
}

header{
position: fixed;

}

`;


export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const newposX = x - 30;
      const newposY = y - 30;
      const circleShadow = document.querySelector('.circle-shadow');
      circleShadow.style.transform = `translate3d(${newposX}px, ${newposY}px, 0px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      <div>
        <div className="circle-shadow"></div>
          <MainHeader>
          <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="logo">
                  <Link to='/' onClick={scrollToTop}><img src={Logo} alt="Logo" /></Link>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </header>
          </MainHeader>
      </div>
    </>
  );
}
