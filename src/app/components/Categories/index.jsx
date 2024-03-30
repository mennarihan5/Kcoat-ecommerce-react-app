import { Button } from 'bootstrap';
import styles from './style.module.css';

export const categoriesCards = () => {
    return(
        <div className={styles[`categories-card`]}>
            <img className={styles.img} />
            <h3 className={styles.title}></h3>
            <Button />
        </div>

    )
}

export const Categories = () => {
    return(
        <div className={styles.categories}>
            Categories
        </div>
    )
}