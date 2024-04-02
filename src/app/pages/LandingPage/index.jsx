import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import Banner from '../../components/discount/index.jsx';
import {NewItems} from '../../components/newarrival/index.jsx';
// import ProductCard from '../../components/productCard/productData.jsx';
import { CustomerDetails } from '../../components/customerDetails/index.jsx';
// import { Title } from '../../components/reviewCard/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { Categories } from '../../components/Categories/index.jsx';
import { Trending } from '../../components/Trending/index.jsx';
import { cardsData } from '../../components/Categories/data.js';
import { AppProducts } from '../../components/ProductCard/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { Categories } from '../../components/Categories/index.jsx';
import { Trending } from '../../components/Trending/index.jsx';
import { BestSellingSection } from '../../components/BestSellingSection/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export const LandingPage = () => {
    return (
        <section className={styles.header}>
            <Header />
            <Hero />
            <Categories />
            <Trending />
            <BestSellingSection />
            <Banner />
            <NewItems />
            {/* <AppProducts /> */}
            <CustomerDetails />
            <Footer />
            {/* <Title /> */}
        </section>
    )
}