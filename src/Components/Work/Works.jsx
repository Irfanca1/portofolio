import React from "react";
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import {motion} from 'framer-motion';

const Works = () => {
    return (
        <div className="works">
            {/* Left Side */}
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, itaque. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus.</spane>
                <button className="button s-button">Hire Me</button>
            </div>
            <div className="blur s-blur2" style={{background: '#c1f5ff'}}></div>
            {/* Right Side */}
            <div className="w-right">
                <motion.div className="w-mainCircle"
                    initial={{rotate: 45}}
                    whileInView={{rotate: 0}}
                    viewport={{margin: '-20px'}}
                    transition={{duration: 3.5, type: 'spring'}}>
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Upwork" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Upwork" />
                    </div>
                </motion.div>
                {/* Background Circle */}
                <div className="w-backCircle blueCircle">
                    
                </div>
                <div className="w-backCircle yellowCircle">

                </div>
            </div>
        </div>
    )
}

export default Works;