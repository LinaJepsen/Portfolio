import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { Arrow } from "../../styling/GlobalTheme";
import { motion } from 'framer-motion';
import { Container } from './Contact.styled';

const Contact = () => {
    return (
        <Container id="contact">
            <h2>Get in touch</h2>
            <div>
                <p>If you want to know more about me don't hesitate to send me an e-mail!</p>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a className='mail' href="mailto:linajepsen@live.se">linajepsen@live.se</a>
                </motion.div>

                <p>You will soon be able to download my resume <a className='cv'/*  href="#" */>here</a>.</p>
            </div>
            <Arrow>
                <motion.div
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a href="#header">
                        <IoIosArrowUp />
                    </a>
                </motion.div>
            </Arrow>
        </Container>
    )
}

export default Contact;