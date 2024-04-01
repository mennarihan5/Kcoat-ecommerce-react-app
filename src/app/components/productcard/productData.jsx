// ProductCard.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.css';

function ProductCard( {imageSrc, price, description, cardClass, id }) {
  return (
    <div className={styles['product-card']}>
      <div className={cardClass} id={id} >
        <div className={styles['product-image']}>
          <img src={imageSrc} alt="Produc]]]t" />
          <span className={styles['love-icon']}><FaHeart /></span>
        </div>
        <div className={styles['product-info']}>
        <div className={styles.description}>{description}</div>
          <div className={styles.price}>{price}</div>
         
        </div>
      </div>
    </div>
  );

  
}

export default ProductCard;
