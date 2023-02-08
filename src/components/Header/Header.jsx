import React, { useState } from 'react'
import { Container, NavbarLinks, NavbarMenu } from "./Header.styled";
import { HiMenu, HiX } from "react-icons/hi"
import { motion } from "framer-motion";
import CV from "../../assets/LinaJepsenCV.pdf";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const links = ["about", "skills", "projects", "contact"];

    return (
        <Container id="header">
            <div className='title'>
                <h2>Lina Jepsen</h2>
            </div>
            <NavbarLinks>
                {links.map((i) => (
                    <li key={`link-${i}`}>
                        <a href={`#${i}`}>{i}</a>
                    </li>
                ))}
                <li>
                    <a title="Download resume" className="navbar-resume" href={CV} download="LinaJepsen-CV" target="_blank">
                        resume
                    </a>
                </li>
            </NavbarLinks>
            <NavbarMenu>
                <HiMenu className="hamburger" onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {links.map((i) => (
                                <li onClick={() => setToggle(false)}>
                                    <a href={`#${i}`}>{i}</a>
                                </li>
                            ))}
                            <li>
                                <a title="Download resume" className="navbar-resume" href={CV} download="LinaJepsen-CV" target="_blank">
                                    resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </NavbarMenu>
        </Container>
    )
}

export default Header;