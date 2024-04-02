import styles from './style.module.css';

export const FooterMenu = ({title, options}) => {
    return(
        <nav>
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
                                    <span className={styles['social-media-icon']}>
                                        {option.whatsappIcon}
                                        {options.instagramIcon}
                                        {option.facebookIcon}
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