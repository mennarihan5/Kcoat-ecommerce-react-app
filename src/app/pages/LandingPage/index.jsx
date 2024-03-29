import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import Banner from '../../components/discount/index.jsx';

export const LandingPage = () => {
    return (
        <section className={styles.header}>
            <Header />
            <Banner />
        </section>
    )
}