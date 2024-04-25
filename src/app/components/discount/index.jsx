import React from 'react';
import styles from './styles.module.css';
import discount1 from '../../assets/images/discount1.svg';
import discount2 from '../../assets/images/discount2.svg';

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={discount1} alt="discount1" className={styles.discount1} />
      <section className={styles.discountSection}>
        <h1 className={styles.discountText}>30% Sales Off
          <br />  <p className={styles.para}>For every new subscriber</p>
          <a href="#" className={styles.link}>Shop Now</a>
        </h1>
        {/* <p className={styles.paragraph}>For every new subscriber</p> */}
        {/* <a href="#" className={styles.link}>Shop Now</a> */}
      </section>
      <img src={discount2} alt="discount2" className={styles.discount2} />
    </div>
  );
}


export default Banner;
