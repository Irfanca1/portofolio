import React from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';

const Intro = () => {
    const transition = { duration: 2, type: 'spring'}
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Irfan Choiruddin</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam error quia consectetur laborum, mollitia blanditiis, qui, fuga cumque autem assumenda sint et voluptatum odit voluptates animi est ea quas.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={Boy} alt="boy" />
                <motion.img 
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={Glassesimoji} alt="Glassesimoji" 
                className='floating-div'/>

                <motion.div 
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{top: '-4%', left: '68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div 
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                style={{top: '18rem'}}
                className='floating-div'>
                    <FloatingDiv image={Thumbup} txt1='Best Desgin' txt2='Award' />
                </motion.div>

                <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
                <div className="blur" style={{background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro;