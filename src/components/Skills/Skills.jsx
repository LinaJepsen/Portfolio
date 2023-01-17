import React from 'react'
import { motion } from "framer-motion";
import { Container, Item } from "./Skills.styled";
import html from "../../assets/html.png";
import js2 from "../../assets/js2.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import { AppWrap, MotionWrap } from '../Wrapper';

const Skills = () => {

    const skill = [
        { title: "HTML", imgUrl: html },
        { title: "CSS", imgUrl: css },
        { title: "JavaScript", imgUrl: js2 },
        { title: "React", imgUrl: react }
    ];

    return (
        <Container>
            <h2>Skills</h2>

            <Item>
                {skill.map((about, i) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={about.title + i}
                        className="skill-item"
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2>{about.title}</h2>
                    </motion.div>
                ))}
            </Item>
        </Container>
    )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');