import { productData } from '../ProductCardSection/data.js';
import { ProductCardSection } from '../ProductCardSection/index.jsx';
import styles from './style.module.css';

export const Trending = () => {
    return(
        <div className={styles.trending}>
            <div className={styles.text}>
                <h4 className={styles.discover}>Discover</h4>
                <h3 className={styles.title}>Trending</h3>
                <p className={styles.description}>Explore our curated selection of trendy outfits, jewelry, bags, slides, heels, and more.</p>
            </div>    
            <ProductCardSection products={productData} trending={true}/>
        </div>
    )
}