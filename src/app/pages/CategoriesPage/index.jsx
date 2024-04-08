import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { CategoriesPageCards } from '../../components/CategoriesPageCards/index.jsx';

export const CategoriesPage = () => {
    return (
        <div className={styles['products-home-page']}>
            <Header />
            <CategoriesPageCards />
        </div>
    )
}