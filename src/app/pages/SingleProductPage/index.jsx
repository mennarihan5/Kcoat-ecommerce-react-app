import styles from './style.module.css';
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export const SingleProductPage = () => {
   const [product, setProduct] = useState([]);
   const { id } = useParams();
  
   useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            // Call the productsAPI function to fetch products data
            const productsData = await response.json();
            
            // Set the fetched products data to state
            setProduct(productsData);
        
        } catch(error) {
            console.error("Error fetching products: ", error);
        }
    }
    // Call the fetchData function when the component mounts
    fetchData();

}, [])
   
    return(
        <div>
            <Header />
                    <div className={styles['single-propduct-container']} id={id}>
                        <div className={styles['category-title']}>Categories {'>'} {product.category} {'>'} <span>{product.title}</span> </div>
                        <div className={styles['img-txt-wrapper']}>
                            <div className={styles['img-wrapper']}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={styles['text-wrapper']}>
                                <h3 className={styles.title}>{product.title}</h3>
                                <p className={styles.price}>₦{product.price}</p>
                                <div className={styles['rating-wrapper']}>
                                    <div className={styles.stars}>
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                    </div>
                                    <div className={styles['customers-rating']}>(20 Customers review)</div>
                                    {/* <div className={styles.rating}>Rating: {product.rating?.rate}</div> */}
                                </div>
                                <div className={styles['colors-wrapper']}>
                                    <h4 className={styles['colors-title']}>Color: Blue</h4>
                                    <div className={styles['colors-picker']}>
                                        <div className={styles.color1}></div>
                                        <div className={styles.color2}></div>
                                    </div>
                                </div>
                                <div className={styles['sizes-wrapper']}>
                                    <h4 className={styles['size-title']}>Select Size</h4>
                                    <div className={styles.sizes}>
                                        <div className={styles.size}>S</div>
                                        <div className={styles.size}>M</div>
                                        <div className={styles.size}>L</div>
                                        <div className={styles.size}>XL</div>
                                        <div className={styles.size}>XXL</div>
                                    </div>
                            </div>
                            <div className={styles['cart-wrapper']}>
                                <div className={styles.cart}>
                                    Add to Cart
                                </div>
                                <div className={styles.favorites}>
                                    <FaRegHeart />
                                </div>
                            </div>
                        </div>

                        </div>
                        <div className={styles['description-wrapper']}>
                            <h4>Description</h4>
                            <p className={styles.desc}>{product.description}</p>
                        </div>
                        <Link to='/categories'>
                            Back to categories
                        </Link>
                </div>
            <Footer />
        </div>
    )
}