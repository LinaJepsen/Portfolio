import React from 'react'
import { Container } from "./About.styled";
import { Arrow } from "../../styling/GlobalTheme";
import { AppWrap, MotionWrap } from '../Wrapper';
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion';
import CV from "../../assets/LinaJepsenCV.pdf";

const About = () => {
    return (
        <Container id="about">
            <h2>About me</h2>
            <div>
                <p>
                    Meet a junior frontend developer who is enthusiastic about learning more about web development and coding.
                    My passion for web development dates back to my childhood days, where I would spend countless hours on the computer,
                    engaging in various activities such as playing games, creating and styling blogs, and chatting with friends.
                    Today, I have turned my passion into a career and in June 2023 I will finish two years of education in frontend development.
                    I am now eagerly seeking a junior frontend position to kick-start my career and learn from seasoned professionals.
                </p>
            </div>
            <div>
                <p>
                    When I'm not sitting in front of my computer, you can find me petting my dog, working out at the gym, or playing padel.
                </p>
            </div>
            <div>
                <motion.a
                    title="Download resume"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}
                    className="resume" href={CV} download="LinaJepsenCV" target="_blank">You can find more info about me and my education in my resume.</motion.a>
            </div>
            <Arrow>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a href="#skills">
                        <IoIosArrowDown />
                    </a>
                </motion.div>
            </Arrow>
        </Container>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');