import styles from './style.module.css';
import {Logo} from '../Logo/index';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.logo}>

            </div>
            <div className={styles['footer-columns']}>
                <div className={styles.column}>

                </div>
                <div className={styles.column}>

                </div>
                <div className={styles.column}>

                </div>
            </div>
        </footer>
    )
}