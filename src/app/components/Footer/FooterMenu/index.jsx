import styles from './style.module.css';

export const FooterMenu = ({title, options}) => {
    return(
        <nav>
            <ul className={styles['footer-menu-list']}>
                <h5 className={styles['footer-menu-title']}>{title}</h5>
                {
                    options.map((option) => {
                        return (
                            <li className={styles['list-item']}>
                                <a href={option.url}>{option.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}