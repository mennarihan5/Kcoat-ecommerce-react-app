import react from 'react';
import styles from './style.module.css';
import firstbutton from '../../assets/images/firstbutton.svg';
import flexiblePayment from '../../assets/images/flexiblePayment.svg';
import customerSupport from '../../assets/images/customerSupport.svg';
import buyersProtection from '../../assets/images/buyersProtection.svg';

export const CustomerDetails = () => {
    return (<div>
    <div className={styles.customerDetails}>
        <img src={firstbutton} alt="firstbutton" className={styles.firstbutton} />
        <h1 className={styles.firstbuttonText}>Worldwide Delivery</h1>
        <p className={styles.paragraph}>To your destination</p>
        <div class="vertical-line"></div>

        <div className={styles.flexiblePayment}>
            <img src={flexiblePayment} alt="flexiblePayment" className={styles.flexiblePayment} />
            <h1 className={styles.flexiblePaymentText}>Flexible Payment</h1>
            <p className={styles.paragraph}>Payment with choices</p>
            <div class="vertical-line"></div>
        </div>

        <div className={styles.customerSupport}>
            <img src={customerSupport} alt="customerSupport" className={styles.customerSupport} />
            <h1 className={styles.customerSupportText}>Customer Support</h1>
            <p className={styles.paragraph}>24/7 Online Support</p>
            <div class="vertical-line"></div>
        </div>

        <div className={styles.buyersProtection}>
            <img src={buyersProtection} alt="buyersProtection" className={styles.buyersProtection} />
            <h1 className={styles.buyersProtectionText}>Buyers Protection</h1>
            <p className={styles.paragraph}>Secured Payment</p>
            <div class="vl"></div>
        </div>
    </div>
</div>
    )
}
export default CustomerDetails;
