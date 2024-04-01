import { ProductCard } from '../ProductCard';
import { productData } from '../ProductCard/data';
import styles from './style.module.css';

export const Trending = () => {
    return(
        <div className={styles.trending}>
            <div className={styles.text}>
                <h3 className={styles.title}>Trending</h3>
                <p className={styles.description}>Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.</p>
                <ProductCard />
            </div>
        </div>
    )
}