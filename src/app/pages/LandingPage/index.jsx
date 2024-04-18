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
//Fixing githib conflicts
import App from '../../components/customerDetails/index.jsx';
import { WhatPeopleSay } from '../../components/reviewSection/whatPeopleSay.jsx';
import AppCards from '../../components/reviewCards/index.jsx';
import SubscriptionCard from '../../components/newsLetterSection/index.jsx';
// import LoginPage from '../LoginPage/index.jsx';
// import SignupPage from '../SignupPage/index.jsx';
// import LoginFormFooter from '../../components/googleSignupButton/index.jsx';
//Fixing githib conflicts
import { AppProducts } from '../../components/productcard/index.jsx';
import { BestSellingSection } from '../../components/BestSellingSection/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import LoginPage from '../LoginPage/index.jsx';
//Fixing githib conflicts


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

            <AppProducts />
{/* //Fixing githib conflicts */}
            <App />
            <WhatPeopleSay />
            <AppCards />
            <SubscriptionCard />
            {/* <LoginPage />
            <SignupPage /> */}
            {/* <LoginFormFooter /> */}

            {/* <Title /> */}
            

            <customerDetails />
              {/* <Title /> */}
            <Footer />
            
            
        </section>
    )
}