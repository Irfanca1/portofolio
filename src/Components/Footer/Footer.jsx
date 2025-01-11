import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Footer" style={{ width: '100%' }} />
      <div className="f-content">
        <span>irfanchoiruddin23@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Irfanca1" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/irfan-choiruddin-anwar-559b94237/" target="_blank" rel="noopener noreferrer">
            <LinkedIn color="white" size="3rem" />
          </a>
          <a href="https://www.instagram.com/cchhhooii" target="_blank" rel="noopener noreferrer">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
