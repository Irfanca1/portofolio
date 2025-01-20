import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Irfan</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
              <li>Perkenalan</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} activeClass="activeClass">
              <li>Fokus</li>
            </Link>
            <Link spy={true} to="works" smooth={true} activeClass="activeClass">
              <li>Keahlian</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} activeClass="activeClass">
              <li>Proyek</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Kontak</button>
      </div>
    </div>
  );
};

export default Navbar;
