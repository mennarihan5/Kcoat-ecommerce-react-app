import React from 'react';
import styles from './styles.module.css';
import discount1 from '../../assets/images/discount1.svg';
import discount2 from '../../assets/images/discount2.svg';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.discountImg}>
        <img src={discount1} alt="discount1" className={styles.discount1} />
      </div>
      <section className={styles.discountSection}>
        <div className={styles.discountText}>
            <h1 className={styles.discountTitle}>30% Sales Off</h1><br />
            <p className={styles.para}>For every new subscriber</p>
            <Link href="/categories" className={styles.link}>Shop Now</Link>
        </div>
        {/* <p className={styles.paragraph}>For every new subscriber</p> */}
        {/* <a href="#" className={styles.link}>Shop Now</a> */}
      </section>
      <div className={styles.discountImg}>
        <img src={discount2} alt="discount2"  />
      </div>
    </div>
  );
}


export default Banner;
