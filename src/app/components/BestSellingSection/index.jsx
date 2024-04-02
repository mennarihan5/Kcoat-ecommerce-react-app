import { ProductCardSection } from '../ProductCardSection/index.jsx';
import { bestSellingData } from '../ProductCardSection/data.js';
import styles from './style.module.css';

export const BestSellingSection = () => {
    return(
        <div className={styles.bestSelling}>
            <h3 className={styles.title}>Best Selling</h3>
            <p className={styles.description}>
                Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.
            </p>
            <div className={styles.text}>
                <h3 className={styles.title}>Best Selling</h3>
                <p className={styles.description}>
                    Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.
                </p>
            </div>
            <ProductCardSection products={bestSellingData} bestselling={true}/>
        </div>
    )
}