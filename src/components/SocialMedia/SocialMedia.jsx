import React from 'react'
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Container } from "./SocialMedia.styled";
import CV from "../../assets/LinaJepsenCV.pdf";

const SocialMedia = () => (
    <Container className='app__social'>
        <div>
            <motion.div className="social-icon"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>
                <a title="Github" href="https://github.com/LinaJepsen">
                    <BsGithub />
                </a>
            </motion.div>
            <motion.div className="social-icon"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>
                <a title="LinkedIn" href="https://www.linkedin.com/in/lina-jepsen-433457132/">
                    <BsLinkedin />
                </a>
            </motion.div>
        </div>
        <div>
            <motion.div className="social-icon"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>
                <a title="Download resume" className="resume" href={CV} download="LinaJepsenCV" target="_blank">
                    <BsDownload />
                </a>
            </motion.div>
            <motion.div className="social-icon"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>
                <a title="linajepsen@live.se" className='mail' href="mailto:linajepsen@live.se">
                    <HiOutlineMail />
                </a>
            </motion.div>
        </div>
    </Container>
);

export default SocialMedia;