import React from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from './Irfan.pdf';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 1, type: 'spring'}
    return (
        <div className="services" id="Services">
            {/* Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, itaque. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus.</spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
            </div>
            <div className="blur s-blur2" style={{background: '#c1f5ff'}}></div>
            {/* Right Side */}
            <div className="cards">
                <motion.div 
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}>
                    <Card 
                        emoji={HeartEmoji}
                        heading= {'Design'}
                        detail= {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </motion.div>
                <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}>
                    <Card 
                        emoji={Glasses}
                        heading= {'Developer'}
                        detail= {"HTML, CSS, JavaScript, ReactJS"}
                    />
                </motion.div>
                <motion.div 
                initial={{left: '25rem', top: '19rem'}}
                whileInView={{left: '12rem'}}
                transition={transition}>
                    <Card 
                        emoji={Humble}
                        heading= {'UI/UX'}
                        detail= {'lorem'}
                    />
                </motion.div>
                <div className="blur s-blur1" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services;