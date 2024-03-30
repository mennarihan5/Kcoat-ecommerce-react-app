import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import Banner from '../../components/discount/index.jsx';
import {NewItems} from '../../components/newarrival/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';

export const LandingPage = () => {
    return (
        <section className={styles.header}>
            <Header />
            <Hero />
            <Banner />
            <NewItems />
        </section>
    )
}