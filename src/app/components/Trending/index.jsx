import { ProductCardSection } from '../ProductCardSection/index.jsx';
import { productData } from '../ProductCardSection/data.js';
import styles from './style.module.css';

export const Trending = () => {
    return(
        <div className={styles.trending}>
            <div className={styles.text}>
                <h3 className={styles.title}>Trending</h3>
                <p className={styles.description}>Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.</p>
                <ProductCardSection products={productData} trending={true}/>
            </div>
        </div>
    )
}