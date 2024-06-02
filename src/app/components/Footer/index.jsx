import styles from './style.module.css';
import {Logo} from '../Logo/index';
import { profileMenu, servicesMenu, contactMenu} from './data.js';
import { FooterMenu } from './FooterMenu/index.jsx';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo className={styles.logo} background={false}/>   
            <div className={styles['footer-menu-wrapper']}>
                <FooterMenu title="Profile" options={profileMenu} />
                <FooterMenu title="Services" options={servicesMenu}/>
                <FooterMenu title="Contact Us" options={contactMenu} contact={true}/>
            </div>
        </footer>
    )
}