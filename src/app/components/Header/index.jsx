import styles from './style.module.css';
import { Logo } from '../Logo/index.jsx';
import { userIcons } from './data.js';

export const NavBar = () => {
    return (
        <nav>
            <ul className={styles[`nav-menu`]}>
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

export const UserIcons = () => {
    return(
        <div className={styles[`icons-wrapper`]}>
            {
                userIcons.map((iconImg) => {
                    return (
                        <div className={styles.icon}>
                            <a href='#'>
                                {iconImg.icon}
                            </a>
                        </div>
                    )
                })
            }
       </div>
    )
}

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <NavBar />
            <UserIcons />
        </header>
    )
}