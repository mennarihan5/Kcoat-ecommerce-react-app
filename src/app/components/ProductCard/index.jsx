import styles from './style.module.css';
import { FaRegHeart } from "react-icons/fa6";

export const ProductCard = () => {
    return(
        <div className={styles.productCard}>
            <div className={styles[`card-img`]}>
                <img />
                <FaRegHeart />
            </div>
            <h4 className={styles[`card-title`]}></h4>
            <div className={styles.price}></div>
        </div>
    )
}