import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import Banner from '../../components/discount/index.jsx';
import {NewItems} from '../../components/newarrival/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { Categories } from '../../components/Categories/index.jsx';
import { Trending } from '../../components/Trending/index.jsx';
import { cardsData } from '../../components/Categories/data.js';

export const LandingPage = () => {
    return (
        <section className={styles.header}>
            <Header />
            <Hero />
            <Categories />
            <Trending />
            <Banner />
            <NewItems />
        </section>
    )
}