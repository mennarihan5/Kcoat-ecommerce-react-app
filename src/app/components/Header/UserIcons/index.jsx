import styles from './style.module.css';
import {ReactComponent as SearchIcon} from '../../../assets/images/search.svg';
import {ReactComponent as UserIcon} from '../../../assets//images/user.svg';
import {ReactComponent as HeartIcon} from '../../../assets//images/heart.svg';
import {ReactComponent as CartIcon} from '../../../assets//images/cart.svg';
import { Link } from 'react-router-dom';

export const UserIcons = (props) => {
    // const login = props.login ? 
    return(
        <div className={styles[`icons-wrapper`]}>
                <div className={styles.icon}>
                    <SearchIcon />
                </div>
                <div className={styles.icon}>
                    <Link to="/login"><UserIcon /></Link>
                </div>
                <div className={styles.icon}>
                    <Link to="/favorites"><HeartIcon /></Link>
                </div>
                <div className={styles.icon}>
                    <Link to="/cart"><CartIcon /></Link>
                </div>
        </div>
    )
}