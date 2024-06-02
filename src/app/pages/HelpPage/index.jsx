import styles from './styles.module.css';
import { FAQ } from '../../components/FAQ';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const HelpPage = () => {
    return(
        <div className={styles.help}>
            <Header />
            <FAQ />
            <Footer />
        </div>
    )
}