import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import Banner from '../../components/discount/index.jsx';
import {NewItems} from '../../components/newarrival/index.jsx';
import ProductCard from '../../components/productcard/productData.jsx';



export const LandingPage = () => {
    return (
        <section className={styles.header}>
            <Header />
            <Banner />
            <NewItems />
            <ProductCard />

        </section>
    )
}