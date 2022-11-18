import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../HomePage/homepage.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../HomePage/UALogo.png';


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img
        style={{
          borderRadius: '3px',
          width: '80px',
        }}
        src={Logo}
        alt=""
      />
      <nav ref={navRef}>
        <NavLink className="nav-link" to="../HomePage">
          Home
        </NavLink>
        <NavLink className="nav-link" to="../SubmitPage">
          Submit
        </NavLink>
        <NavLink className="nav-link" to="../ScoresPage">
          Prior Scores
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
