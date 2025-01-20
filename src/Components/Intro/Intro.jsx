import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Pan from '../../img/IRFAN_BG_BIRU-removebg-preview.png';
import Glassesimoji from '../../img/glassesimoji.png';
import { motion } from 'framer-motion';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hai, Nama saya</span>
          <span>Irfan Choiruddin Anwar</span>
          <span>
            Lulusan Sarjana Teknik Informatika{' '}
            <a href="https://www.unikom.ac.id/" target="_blank" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '14px', fontStyle: 'italic' }} rel="noopener noreferrer">
              Universitas Komputer Indonesia
            </a>
            , memiliki minat mendalam dalam pengembangan perangkat lunak dan teknologi informasi. Memiliki keahlian dalam pemrograman menggunakan JavaScript, Node.js, React, PHP, CodeIgniter4, MySQL dan PostgreSQL. Berpengalaman selama 3
            bulan magang di PT Arkamaya, memperbaiki tampilan aplikasi menggunakan Vue.js dan NaiveUI, memperbaiki bug pada aplikasi menggunakan CodeIgniter3, dan Membuat kondisi, menambah filter baris, menghapus filter baris, dan menghapus
            filter pada opsi filter.
          </span>
        </div>
        <button
          className="button i-button"
          onClick={() => {
            window.location.href = 'mailto:emailanda@gmail.com?subject=Hallo Ifan&body=Hello, I would like to connect with you regarding...';
          }}
        >
          Contact me
        </button>
        <div className="i-icons">
          <a href="https://github.com/Irfanca1" target="_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/irfan-choiruddin-anwar-559b94237/" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/cchhhooii" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector2} alt="Vector2" />
        <img src={Vector1} alt="Vector1" />
        <img src={Pan} alt="boy" style={{ borderRadius: '50%', width: '300px' }} />
        <motion.img initial={{ left: '-36%' }} whileInView={{ left: '-24%' }} transition={transition} src={Glassesimoji} alt="Glassesimoji" className="floating-div" />
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div className="blur" style={{ background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
