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
                <div>
                    <h2>Item</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
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