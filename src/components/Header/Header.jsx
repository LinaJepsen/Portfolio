import React, { useState } from 'react'
import { Container, NavbarLinks, NavbarMenu } from "./Header.styled";
import { HiMenu, HiX } from "react-icons/hi"
import { motion } from "framer-motion";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const links = ["About", "Skills", "Contact", "CV"];

    //Lägga till så man kan ladda ner CV 
    //Lägga till navigation på knapparna

    return (
        <Container>
            <div className='title'>
                <h2>Lina Jepsen</h2>
            </div>
            <NavbarLinks>
                {links.map((i) => (
                    <li key={`link-${i}`}>
                        <a href={`${i}`}>{i}</a>
                    </li>
                ))}
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
                        </ul>
                    </motion.div>
                )}
            </NavbarMenu>
        </Container>
    )
}

export default Header;