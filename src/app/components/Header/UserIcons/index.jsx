import styles from './style.module.css';
import { userIcons } from '../data.js';

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