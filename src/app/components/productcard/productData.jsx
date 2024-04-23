// ProductCard.js
import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import styles from './styles.module.css';
// import vector from '../../assets/images/vector.svg';

function ProductCard( {imageSrc, price, description, cardClass, id }) {
  return (
    <div className={`${cardClass} ${styles['product-card']}`}>
          <div className={styles['product-image']}>
              <div className={styles.heart}><FaRegHeart /></div>
              <img src={imageSrc} alt="Product" />
          </div>
          <div className={styles['product-info']}>
              <div className={styles.description}>{description}</div>
              <div className={styles.price}>{price}</div>
          </div>
    </div>
  );

  
}

export default ProductCard;
