import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.css';


function ProductCard({ imageSrc, price, description }) {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-image']}>
        <img src={imageSrc} alt="Product" />
        <span className={styles['love-icon']}><FaHeart /></span>
      </div>
      <div className={styles['product-info']}>
        <div className={styles.price}>{price}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
