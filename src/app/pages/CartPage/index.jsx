import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import shorts from '../../assets/images/short.jpg';
import vintage from '../../assets/images/vintage skirt.jpg';
import trousers from '../../assets/images/Trouser.jpg';

export const CartPage = () => {
    // Dummy data for demonstration
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Short", quantity: 2, price: 5500, imageSrc: shorts },
        { id: 2, name: "Shirt", quantity: 1, price: 5500, imageSrc: vintage},
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

    const handleRemove = (itemId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    };

    // Calculate subtotal based on the quantity of clothes and their prices
    const subtotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    return (
        <div className={styles.cart}>
            <div>
                <Header />
            
            <div className={styles.container}>
            <div><h2 className={styles.yourCart}>Your Cart</h2>
            <p className={styles.items}>{cartItems.length} items</p>
            </div>
            <div className={styles.middleHeading}>
                <p className={styles.headingItem}> Item</p>
                <p className={styles.headingQuantity}>Quantity</p>
                <p className={styles.headingPrice}>Price</p>
            </div>
            <div><hr className={styles.line}/>   </div>

            <div className={styles.middleSection}>
            {cartItems.map(item => (
    <div key={item.id} className={styles.item}>
        <div className={styles.imageContainer}>
            <img src={item.imageSrc} alt="Product" className={styles.image} />
        </div>
        <div className={styles.details}>
            <p className={styles.itemName}>{item.name}</p>
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
        <span className={styles.x} onClick={() => handleRemove(item.id)}>

            X
        </span>
            
        
    </div>
))}
</div>
        <div> <Link to="/categories" className={styles.continueShopping}>Continue Shopping</Link> </div>
        
                <div className={styles.rightSection}>
                    <h2 className={styles.sectionHeading}>Summary</h2>
                   
                <div className={styles.summaryItem}>
                    <p className={styles.summaryText}>Subtotal</p>
                    <p className={styles.summaryValue}>₦{subtotal.toFixed(2)}</p>
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
                    <p className={styles.summaryValue}>₦{(subtotal + 10).toFixed(2)}</p>
                    
                </div>
                <div className={styles.button}>
                    <button className={styles.promoButtonLast}>Check Out</button>
                    </div>
            </div>

                    
                    {/* Add summary and total cost details here */}
                </div>
            </div>
        </div>
    );
};

export default CartPage;