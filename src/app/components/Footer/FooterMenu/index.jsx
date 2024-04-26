import styles from './style.module.css';
import { Link } from 'react-router-dom';

export const FooterMenu = ({title, options, contact}) => {
    const contactCol = contact ? styles.contact : "";
    return(
        <nav className={`${styles['footer-nav']} ${contactCol}`}>
         <p className={styles['footer-menu-title']}>{title}</p>
            <ul className={styles['footer-menu-list']}>
                {
                    options.map((option) => {
                        return (
                            <div className={styles['list-item']}>
                                <div className={styles['list-icon']}>
                                    {option.icon}
                                </div>
                                <li  className={styles['list-item-text']}>
                                    <Link to={option.url}>{option.title}</Link>
                                    <span className={styles['social-media-icons']}>
                                        <span>{option.whatsappIcon}</span>
                                        <span>{option.instagramIcon}</span>
                                        <span>{option.facebookIcon}</span>
                                    </span>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </nav>
    )
}