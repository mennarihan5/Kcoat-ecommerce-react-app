import styles from './style.module.css';
import { Logo } from '../Logo/index.jsx';
import { NavBar } from './NavBar/index.jsx';
import { UserIcons } from './UserIcons/index.jsx';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logo} background={false} />
            </div>
            <NavBar />
            <UserIcons />
        </header>
    )
}