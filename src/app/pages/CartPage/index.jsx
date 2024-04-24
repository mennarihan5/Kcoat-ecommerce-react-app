import React, { useState } from "react";
import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import shorts from '../../assets/images/short.jpg';
import vintage from '../../assets/images/vintage skirt.jpg';
import trousers from '../../assets/images/Trouser.jpg';

export const CartPage = () => {
    // Dummy data for demonstration
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Short", quantity: 2, price: 5500, imageSrc: shorts },
        { id: 2, name: "Vintage SKirt", quantity: 1, price: 5500, imageSrc: vintage},
        { id: 3, name: "Trouser", quantity: 3, price: 5500, imageSrc: trousers}
    ]);

    const handleDecrease = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleIncrease = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    return (
        <div className={styles.cart}>
            <Header />
            <div className={styles.container}>
                <div className={styles.leftSection}>
                   <div><h2 className={styles.yourCart}>Your Cart</h2>
                   <h2 className={styles.heading1}>Item</h2>
                   </div> 
                   <div><p className={styles.items}>3 items</p>
                   </div> 
                </div>
                <div className={styles.middleSection}>
                    {/* <div className={styles.item}>
                        
                    </div>
                    <div className={styles.quantity}>
                        <h2 className={styles.heading2}>Quantity</h2>
                    </div>
                    <div className={styles.price}>
                        <h2 className={styles.heading3}>Price</h2>
                    </div> */}
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.imageContainer}>
                                <img src={item.imageSrc} alt="Product" className={styles.image} />
                                <div className={styles.details}>
                                    <p className={styles.itemName}>{item.name}</p>
                                </div>
                             </div>
                               
                             <div className={styles.quantityControl}>
                                <div
                                    className={styles.controlButton}
                                    onClick={() => handleDecrease(item.id)}
                                >
                                    -
                                </div>
                                <span className={styles.quantity}>{item.quantity}</span>
                                <div
                                    className={styles.controlButton}
                                    onClick={() => handleIncrease(item.id)}
                                >
                                    +
                                </div>
                            </div>
                            <p className={styles.itemPrice}>₦{item.price}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.rightSection}>
                    <h2 className={styles.sectionHeading}>Summary</h2>
                   
                <div className={styles.summaryItem}>
                    <p className={styles.summaryText}>Subtotal</p>
                    <p className={styles.summaryValue}>₦165.00</p>
                </div>
                <div className={styles.summaryItem}>
                    <p className={styles.summaryText}>Shipping</p>
                    <p className={styles.summaryValue}>₦10.00</p>
                </div>
                <div className={styles.summaryItem}>
                    <p className={styles.summaryText}>Promocode</p>
                    <button className={styles.promoButton}>Enter code</button>
                </div>

                <div className={styles.summaryItemLast}>
                    <p className={styles.summaryText}>Total</p>
                    <p className={styles.summaryValue}>₦17,500</p>
                    
                </div>
                <div className={styles.button}>
                    <button className={styles.promoButtonLast}>Check Out</button>
                    </div>
            </div>

                    
                    {/* Add summary and total cost details here */}
                </div>
            </div>
        
    );
};

export default CartPage;
