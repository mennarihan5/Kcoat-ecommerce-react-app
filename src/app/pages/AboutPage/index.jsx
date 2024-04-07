import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { Hero } from '../../components/Hero/index.jsx';
import { About } from '../../components/About/index.jsx';
import { Trending } from '../../components/Trending/index.jsx';
import Banner from '../../components/discount/index.jsx';
import NewItems from '../../components/newarrival/index.jsx';
import { BestSellingSection } from '../../components/BestSellingSection/index.jsx';
import { AppProducts } from '../../components/productcard/index.jsx';
import { FAQ } from '../../components/FAQ/index.jsx';

import { Footer } from '../../components/Footer/index.jsx';


export const AboutPage = () => {
    return(
        <div className={styles.about}>
            <Header />
            {/* <Hero /> */}
            <About />
            <Trending />
            {/* <Banner />
            <NewItems />
            <AppProducts /> */}
            <BestSellingSection />
            <FAQ />
            
            <Footer />
        </div>
    )
}