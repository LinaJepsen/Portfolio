import React from 'react'
import { Arrow } from "./Navigation.styled";
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion';

const NavigationDots = ({ active }) => (
    <div className='app__navigation'>
        {/*   {["About", "Skills", "Contact"].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                style={active === item ? { backgroundColor: '#89b0ae' } : {}}
                className="app__navigation-dot"
            />

        ))} */}
        <Arrow>
            <motion.div
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}>
                <IoIosArrowDown />
            </motion.div>
        </Arrow>
    </div>
);

export default NavigationDots;