import React, { useEffect, useState } from 'react';
import './Works.css';
import codeigniter from '../../img/Skill/codeigniter.jpg';
import express from '../../img/Skill/expressjs.jpg';
import bootstrap from '../../img/Skill/bootstrap.jpg';
import react from '../../img/Skill/react.jpg';
import user from '../../img/Skill/user.jpg';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="works">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Keahlian dan Proyek</span>
        <span>Yang Saya Miliki</span>
        <spane>
          Sebagai fresh graduate, saya telah mempelajari berbagai teknologi dan mengerjakan <br />
          beberapa proyek mandiri. Berikut adalah teknologi yang saya kuasai <br />
          dan telah saya gunakan dalam proyek saya.
        </spane>
        <button
          className="button s-button"
          onClick={() => {
            window.location.href = 'mailto:emailanda@gmail.com?subject=Hallo Ifan&body=Hello, I would like to connect with you regarding...';
          }}
        >
          Contact me
        </button>
      </div>
      <div className="blur s-blur2" style={{ background: '#c1f5ff' }}></div>
      {/* Right Side */}
      <div className="w-right">
        <motion.div className="w-mainCircle" initial={isMobile ? {} : { rotate: 45 }} whileInView={isMobile ? {} : { rotate: 0 }} viewport={{ margin: '-20px' }} transition={{ duration: 3.5, type: 'spring' }}>
          <div className="w-secCircle">
            <img src={react} alt="ReactJS" width={100} />
          </div>
          <div className="w-secCircle">
            <img src={express} alt="ExpressJS" style={{ borderRadius: '50%', width: '200px' }} />
          </div>
          <div className="w-secCircle">
            <img src={user} alt="User" style={{ borderRadius: '50%', width: '200px' }} />
          </div>
          <div className="w-secCircle">
            <img src={codeigniter} alt="CodeIgniter" style={{ borderRadius: '0%', width: '100px' }} />
          </div>
          <div className="w-secCircle">
            <img src={bootstrap} alt="Bootstrap" style={{ borderRadius: '50%', width: '195px' }} />
          </div>
        </motion.div>

        {!isMobile && (
          <>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Works;
