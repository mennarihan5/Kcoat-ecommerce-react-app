import { productData } from './data.js';
import styles from './style.module.css';
import { FaRegHeart } from "react-icons/fa6";
import { bestSellingData } from './data.js';

export const ProductCardSection = (props) => {
    return(
        <div className={styles['products-card-wrapper']}>
            {
                props.trending && productData.map((product) => {
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
            {
                props.bestselling && bestSellingData.map((product) => {
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