import styles from './style.module.css';

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
                                <span className={styles['list-icon']}>
                                    {option.icon}
                                </span>
                                <li  className={styles['list-item-text']}>
                                    <a href={option.url}>{option.title}</a>
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