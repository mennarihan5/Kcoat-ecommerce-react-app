import styles from './style.module.css';
import { Logo } from '../Logo/index.jsx';
import { NavBar } from './NavBar/index.jsx';
import { UserIcons } from './UserIcons/index.jsx';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo} />
            <NavBar />
            <UserIcons />
        </header>
    )
}