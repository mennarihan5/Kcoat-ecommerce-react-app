import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx'

export const PrivacyPolicy = () => {
    return ( 
        <div>
            <Header />
            <div className={styles.privacy}>
                Privacy Policy
            </div>
            <Footer />
        </div>
    )
}