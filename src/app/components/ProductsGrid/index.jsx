import styles from './style.module.css';
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const ProductsGridCard = ({id, title, price, category, description, image}) => {
    return(
            <div className={styles['product-card']} id={id}>
            <div className={styles.heart}><FaRegHeart /></div>
            <img src={image} alt={title} />
            <Link to ={`/singleProduct/${id}`} className={styles.title}>
                {title}
            </Link>
            <p className={styles.price}>{price} ₦</p>
            <div className={styles.stars}>
                <span><IoStarSharp /></span>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
            </div>
        </div>
    )
}

export const ProductsGrid = ({results, id, title, price, category, description, image}) => {
   
    return (
        <div className={styles['products-grid-wrapper']}>
            <h3 className={styles.showing}>Showing 15 of 30 Products</h3>
            <div className={styles['products-grid']}>
                {results}
                <div>
                    <ProductsGridCard 
                    id={id}
                    title={title}
                    price={price}
                    category={category}
                    description={description}
                    image={image}
                    />
                </div>    
            </div>
        </div>
    )
}


