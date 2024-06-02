import styles from './style.module.css';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((show) => !show);
    }

    return (
        <nav className=''>
        <div className={styles[`hamburger-icon`]} onClick={toggleMenu}><FiAlignJustify /></div>
            <ul className={`${styles['nav-menu']} ${menu ? styles['show-nav'] : ""}`}>
                <li className={`${styles['menu-item']} ${styles['home']}`}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles[`menu-item`]}>
                    <Link to='/categories'>Categories</Link>
                </li>
                <li className={styles[`menu-item`]}>
                    <Link to='/about'>About Us</Link>
                </li>
                <li className={styles[`menu-item`]}>
                    <Link to='/help'>Help</Link>
                </li>
            </ul>
        </nav>
    )
}