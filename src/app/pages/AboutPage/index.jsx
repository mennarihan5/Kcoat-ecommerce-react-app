import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { About } from '../../components/About/index.jsx';
import { FAQ } from '../../components/FAQ/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

export const AboutPage = () => {
    return(
        <div className={styles.about}>
            <Header />
            <About />
            <Footer />
        </div>
    )
}