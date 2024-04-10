import styles from './style.module.css';
import { data } from './data.js';

export const CategoriesPageCards = () => {
    return(
        <div className={styles['categories-page-cards']}>
            {
                data.map((card) => {
                    return(
                        <div className={styles.card}>
                            <img src={card.image} alt='image' />
                            <h3 className={styles.title}>{card.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}