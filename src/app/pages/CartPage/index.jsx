import react from "react";
import  styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';

export const CartPage = () => {
    return (
        <div className={styles.cart}>
            <div>
                <Header />
            </div>
            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <h2 className={styles.yourcart}>Your Cart</h2>
                </div>
                <div>
                    <p className={styles.items}>3 items</p>
                </div>
                <div className={styles.middleSection}>
                    <h2 className={styles.heading1}> Item</h2>
                    <h2 className={styles.heading2}>Quantity</h2>
                    <h2 className={styles.heading3}>Price</h2>
                
                </div>
        
                
                <div className={styles.rightSection}>
                    <h2 className={styles.sectionHeading}>Summary</h2>
                    {/* Add summary and total cost details here */}
                </div>
            </div>
        </div>
    )
}

export default CartPage;