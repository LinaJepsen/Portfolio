import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { Container } from "./SocialMedia.styled";

const SocialMedia = () => (
    <Container className='app__social'>
        <motion.div className="social-icon"
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}>
            <a href="https://www.instagram.com/linajepsen/">
                <BsInstagram />
            </a>
        </motion.div>
        <motion.div className="social-icon"
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}>
            <a href="https://github.com/LinaJepsen">
                <BsGithub />
            </a>
        </motion.div>
        <motion.div className="social-icon"
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}>
            <a href="https://www.linkedin.com/in/lina-jepsen-433457132/">
                <BsLinkedin />
            </a>
        </motion.div>
    </Container>
);

export default SocialMedia;