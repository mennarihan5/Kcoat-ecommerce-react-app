import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

export const ProductsGrid = () => {
    const [data ,setData] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then((apiData) => {
            setData(apiData);

            console.log(apiData);
        })
    }, [])
    return (
        <div className={styles['products-grid-wrapper']}>
            <h3 className={styles.showing}>Showing 15 of 30 Products</h3>
            <div className={styles['products-grid']}>
            {
                data.map((product) => {
                    return (
                        <div className={styles['product-card']} key={product.id}>
                            <div className={styles.heart}><FaRegHeart /></div>
                            <img src={product.images} alt={product.title} />
                            <h3 className={styles.title}>{product.title}</h3>
                            <p className={styles.price}>{product.price} $</p>
                            <div className={styles.stars}>
                                <span><IoStarSharp /></span>
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                                <IoStarSharp />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}