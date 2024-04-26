import react from "react";
import  styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';

export const CartPage = () => {
    return (
        <div className={styles.cart}>
            <div>
                <Header />
            </div>
            <div>
                <h1 className={styles.cart}>Cart</h1>
            </div>
        </div>
    )
}

export default CartPage;