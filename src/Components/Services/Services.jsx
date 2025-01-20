import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './CV_Irfan Choiruddin Anwar.pdf';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Services = () => {
  const transition = { duration: 1, type: 'spring' };
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span> </span>
        <span>Fokus Saya</span>
        <spane>
          Saat ini saya fokus memperdalam kemampuan di berbagai bidang pengembangan aplikasi, termasuk: <br />
          1. Meningkatkan keahlian dalam berbagai bahasa pemrograman. <br />
          2. Menguasai framework modern untuk frontend dan backend. <br />
          3. Memanfaatkan tools pengembangan untuk efisiensi kerja dan kolaborasi. <br />
          Saya juga terbuka untuk mengeksplorasi teknologi baru dan proyek kolaboratif.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="blur s-blur2" style={{ background: '#c1f5ff' }}></div>
      {/* Right Side */}
      <div className="cards">
        {!isMobile ? (
          <>
            <motion.div initial={{ left: '25rem' }} whileInView={{ left: '10rem' }} transition={transition}>
              <Card emoji={HeartEmoji} heading={'Developer'} detail={'HTML, CSS, JavaScript, PHP'} />
            </motion.div>
            <motion.div initial={{ left: '-11rem', top: '12rem' }} whileInView={{ left: '-8rem' }} transition={transition}>
              <Card emoji={Glasses} heading={'Framework'} detail={'ReactJS, ExpressJS, CodeIgniter 4, Bootstrap'} />
            </motion.div>
            <motion.div initial={{ left: '25rem', top: '19rem' }} whileInView={{ left: '8rem' }} transition={transition}>
              <Card emoji={Humble} heading={'Tools'} detail={'Visual Studio Code, Postman, GitHub, Figma, Firebase, Mapbox, Node.JS'} />
            </motion.div>
          </>
        ) : (
          <>
            <div>
              <Card emoji={HeartEmoji} heading={'Developer'} detail={'HTML, CSS, JavaScript, PHP'} />
            </div>
            <div>
              <Card emoji={Glasses} heading={'Framework'} detail={'ReactJS, ExpressJS, CodeIgniter 4, Bootstrap'} />
            </div>
            <div>
              <Card emoji={Humble} heading={'Tools'} detail={'Visual Studio Code, Postman, GitHub, Figma, Firebase, Mapbox, Node.JS'} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
