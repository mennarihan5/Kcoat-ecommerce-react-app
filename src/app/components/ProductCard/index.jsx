import { productData } from './data';
import styles from './style.module.css';
import { FaRegHeart } from "react-icons/fa6";

export const ProductCard = () => {
    return(
        <div className={styles['products-card-wrapper']}>
            {
                productData.map((product) => {
                    return(
                        <div className={styles['product-card']} key={product.id}>
                            <div className={styles[`card-img`]}>
                                <img src={product.image}/>
                                <FaRegHeart />
                            </div>
                            <h4 className={styles[`card-title`]}>{product.title}</h4>
                            <div className={styles.price}>₦{product.price}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}