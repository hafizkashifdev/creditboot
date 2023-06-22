import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logoImg from '../../assects/images/logo.png';
import './nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          <h1>
            <Link to="/" className="logo-text" style={{ color: 'black', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Poppins, sans-serif', position: 'relative', textDecoration:'none',alignItems: 'center' }}>
              <img src={logoImg} alt="" style={{ width: "60px", height: "60px" }} className="img-fluid" /> Cridit Repear Api
            </Link>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'red', borderRadius: '50%', marginLeft: '4px' }}></span>
          </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <div className="button-wrapper">
                  <Link to="/sign-in" replace={true} style={{ textDecoration: 'none' }}>
                    <a className="custombutton btn btn-outline-danger">
                      <span style={{ marginRight: '10px' }}>Login</span>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="button-wrapper">
                  <Link to="/sign-up" replace={true} style={{ textDecoration: 'none' }}>
                    <button className="accentcustombutton btn btn-primary custom-button">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
