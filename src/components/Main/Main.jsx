import React from 'react'
import { motion } from 'framer-motion';
import { Container, TitleContainer } from "./Main.styled";
import profilePic from "../../assets/github.jpg";
import { AppWrap } from '../Wrapper';

const Main = () => {
    return (
        <Container className="app__main app__flex">
            <TitleContainer>
                <motion.div className='title-motion' whileInView={{ x: [-50, 50], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <h1 className='hello-text'>Hi, my name is</h1>
                    <h1 className='name'>Lina</h1>
                    <h1 className='work-title'>I'm a junior frontend developer</h1>
                </motion.div>
                <div className='title'>
                    <h1 className='hello-text'>Hi, my name is</h1>
                    <h1 className='name'>Lina</h1>
                    <h1 className='work-title'>I'm a junior frontend developer</h1>
                </div>
                <div className='picture'>
                    <img src={profilePic} alt="" />
                </div>
                <motion.div className='picture-motion' whileInView={{ x: [50, -50], opacity: [0, 5] }}
                    transition={{ duration: 3, delayChildren: 0.5 }}>
                    <img src={profilePic} alt="" />
                </motion.div>
            </TitleContainer>
        </Container >
    )
}

export default AppWrap(Main, 'home');