import React from 'react'
import { AppWrap, MotionWrap } from '../Wrapper';
import { Container, Item } from "./Projects.styled";
import { IoIosArrowDown } from 'react-icons/io'
import { Arrow } from "../../styling/GlobalTheme";
import { motion } from "framer-motion";
import projectPic from "../../assets/project-pic.png";

const Projects = () => {

    const projects = [
        { title: "E-Wallet", imgUrl: projectPic, desc: "This school project is made in React with react router and redux.", link: "https://github.com/LinaJepsen/reactproject-e-wallet" },
        { title: "Highscore", imgUrl: projectPic, desc: "This school project is made in React, but it also has a backend with Node.js.", link: "https://github.com/LinaJepsen/highscore" },
    ];

    return (
        <Container id="projects">
            <h2>Projects</h2>
            <Item>
                {projects.map((p, i) => (
                    <motion.a href={p.link}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={p.title + i}
                        className="project-card"
                    >
                        <img src={p.imgUrl} alt={p.title} />
                        <h2>{p.title}</h2>
                        <p>{p.desc}</p>
                    </motion.a>
                ))}
            </Item>
            <Arrow>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a href="#contact">
                        <IoIosArrowDown />
                    </a>
                </motion.div>
            </Arrow>
        </Container>
    )
}
export default AppWrap(MotionWrap(Projects, 'app__projects'), 'projects', 'app__whitebg');