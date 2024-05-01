import styles from './style.module.css';
import { ReactComponent as SearchIcon } from '../../../assets/images/search.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/user.svg';
import { ReactComponent as HeartIcon } from '../../../assets/images/heart.svg';
import { ReactComponent as CartIcon } from '../../../assets/images/cart.svg';
import { Link } from 'react-router-dom';

export const UserIcons = (props) => {
    return (
        <div className={styles[`icons-wrapper`]} role="navigation" aria-label="User Navigation">
            <div className={styles.icon} aria-label="Search">
                <SearchIcon />
            </div>
            <div className={styles.icon} aria-label="User">
                <Link to="/login"><UserIcon /></Link>
            </div>
            <div className={styles.icon} aria-label="Favorites">
                <Link to="/favorites"><HeartIcon /></Link>
            </div>
            <div className={styles.icon} aria-label="Cart">
                <Link to="/cart"><CartIcon /></Link>
            </div>
        </div>
    )
}
