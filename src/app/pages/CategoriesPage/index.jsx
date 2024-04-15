import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { CategoriesPageCards } from '../../components/CategoriesPageCards/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { ProductsGrid } from '../../components/ProductsGrid/index.jsx';
import { SidebarFilter } from '../../components/SidebarFilter/index.jsx';
import { FaRegHeart } from "react-icons/fa6";

export const CategoriesPage = () => {
    return (
        <div className={styles['products-home-page']}>
            <Header />
            <CategoriesPageCards />
            <div className={styles['products-grid-wrapper']}>
                <SidebarFilter />
                <ProductsGrid />
            </div>
            <Footer />
        </div>
    )
}