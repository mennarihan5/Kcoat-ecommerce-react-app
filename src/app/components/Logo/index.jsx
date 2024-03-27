import styles from './style.module.css';
import { ReactComponent as LogoImg } from '../../assets/images/logo.svg';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <h1>
                <a href="#">
                    <LogoImg />
                </a>
            </h1>
        </div>
    )
}