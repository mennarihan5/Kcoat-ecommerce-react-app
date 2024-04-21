// ProductCard.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './styles.module.css';
import vector from '../../assets/images/vector.svg';

function ProductCard( {imageSrc, price, description, cardClass, id }) {
  return (
    <div className={`${cardClass} ${styles['product-card']}`}>

          <div className={styles['product-image']}>
              <img src={imageSrc} alt="Product" />
              {/* <span className={styles['love-icon']}><FaHeart /></span> */}
              <img src={vector} alt='Vector' className={styles.vector} />
              {/* { <img src=     alt='Vector' className={styles.vector} /> */}
          </div>
          <div className={styles['product-info']}>
              <div className={styles.description}>{description}</div>
              <div className={styles.price}>{price}</div>
          </div>
    </div>
  );

  
}

export default ProductCard;
