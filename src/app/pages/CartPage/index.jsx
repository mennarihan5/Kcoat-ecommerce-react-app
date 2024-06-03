import React, { useState, useEffect } from "react";
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

    const [cartItemCount, setCartItemCount] = useState(0); // State to track total items in cart

    // Calculate subtotal based on the quantity of clothes and their prices
    const subtotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    useEffect(() => {
        // Update total cart item count whenever cartItems change
        const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        setCartItemCount(totalCount);
    }, [cartItems]);

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

    // Function to toggle the full item name
    const handleToggleArrow = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, showFull: !item.showFull } : item
            )
        );
    };

    return (
        <div className={styles.cart}>
            <Header cartItemCount={cartItemCount} />
            <div className={styles.container}>
                <div>
                    <h2 className={styles.yourCart}>Your Cart</h2>
                    <p className={styles.items}>{cartItemCount} items</p>
                </div>
                <div className={styles.middleHeading}>
                    <p className={styles.headingItem}> Item</p>
                    <p className={styles.headingQuantity}>Quantity</p>
                    <p className={styles.headingPrice}>Price</p>
                </div>
                <div><hr className={styles.line}/>   </div>
                <div className={styles.middleSection}>
                    <div className={styles.imageContainer}>
                        {cartItems.map(item => (
                            <div key={item.id} className={styles.item}>
                                <img src={item.imageSrc} alt="Product" className={styles.image} />
                                <div className={styles.details}>
                                    <p className={styles.itemName}>
                                        {item.showFull ? item.name : (item.name.length > 4 ? `${item.name.slice(0, 4)}...` : item.name)}
                                        {item.name.length > 4 && (
                                            <span className={styles.arrow} onClick={() => handleToggleArrow(item.id)}>
                                                {item.showFull ? "▲" : "▼"}
                                            </span>
                                        )}
                                    </p>
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
                </div>
                <div>
                    <Link to="/categories" className={styles.continueShopping}>Continue Shopping</Link>
                </div>
            </div>
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
                    <button className={styles.promoButtonLast}>CheckOut</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
