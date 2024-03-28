import styles from './style.module.css';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

export const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((show) => !show);
    }

    return (
        <nav className=''>
        <div className={styles[`hamburger-icon`]} onClick={toggleMenu}><FiAlignJustify /></div>
            <ul className={`${styles['nav-menu']} ${menu ? styles['show-nav'] : ""}`}>
                <li className={styles[`menu-item`]}>
                    <a href='#'>Home</a>
                </li>
                <li className={styles[`menu-item`]}>
                    <a href='#'>Categories</a>
                </li>
                <li className={styles[`menu-item`]}>
                    <a href='#'>About Us</a>
                </li>
                <li className={styles[`menu-item`]}>
                    <a href='#'>Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}