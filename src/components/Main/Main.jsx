import React from 'react'
import { motion } from 'framer-motion';
import { Container, TitleContainer } from "./Main.styled";
import { Arrow } from "../../styling/GlobalTheme";
import profilePic from "../../assets/profile-pic.jpg";
import { AppWrap } from '../Wrapper';
import { IoIosArrowDown } from 'react-icons/io'

const Main = () => {
    return (
        <Container id="home" className="app__main app__flex">
            <TitleContainer>
                <motion.div className='title-motion' whileInView={{ x: [-50, 50], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <h1 className='hello-text'>Hi, my name is</h1>
                    <h1 className='name'>Lina</h1>
                    <h1 className='work-title'>I'm a junior frontend developer</h1>
                </motion.div>
                <motion.div className='title' whileInView={{ y: [-50, 0], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <h1 className='hello-text'>Hi, my name is</h1>
                    <h1 className='name'>Lina</h1>
                    <h1 className='work-title'>I'm a junior frontend developer</h1>
                </motion.div>
                <motion.div className='picture' whileInView={{ y: [50, 0], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <img src={profilePic} alt="profile" />
                </motion.div>
                <motion.div className='picture-motion' whileInView={{ x: [50, -50], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <img src={profilePic} alt="profile" />
                </motion.div>
            </TitleContainer>
            <Arrow>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a href="#about">
                        <IoIosArrowDown />
                    </a>
                </motion.div>
            </Arrow>
        </Container >
    )
}

export default AppWrap(Main, 'home');