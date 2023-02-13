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
                    Here you have a junior frontend developer who is eager to learn more about web development and coding.
                    I am an organized, hardworking and a humble person with a warm heart. I have always had an interest for all the
                    things you can do on the web. Already from a young age I could spend hours on the computer, playing games,
                    make and style blogs, chat with friends etc.
                    This lays the ground for my motivation to become a frontend developer today. I'm now looking for a junior
                    frontend position to kick start my career after 2 years of education so I can learn among professionals.
                </p>
            </div>
            <div>
                <p>
                    If I don't sit by the computer I'm probably petting my dog, working out at the gym or playing padel.
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