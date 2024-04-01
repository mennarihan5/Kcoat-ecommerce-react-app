import { ProductCard } from '../ProductCard/index.jsx';
import { bestSellingData } from '../ProductCard/data.js';
import styles from './style.module.css';

export const BestSelling = () => {
    console.log(bestSellingData);
    return(
        <div className={styles.bestSelling}>
            <h3 className={styles.title}>Best Selling</h3>
            <p className={styles.description}>
                Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.
            </p>
            <ProductCard products={bestSellingData} bestselling={true}/>
        </div>
    )
}