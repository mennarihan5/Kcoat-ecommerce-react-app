import styles from './style.module.css';
import arch from '../../assets/images/arch.png';
import cloths from '../../assets/images/cloths-hanged.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return(
        <section className={styles.hero}>
            <div className={styles.text}>
                <h2>Discover the Latest Fashion Trends and Styles</h2>
                <p>Shop our diverse selection of trendy clothing and accessories for 
                    both men and women</p> 
                <Link to='/categories'>
                    <button className={styles[`hero-btn`]}>Explore</button>
                </Link>
            </div>
            <div className={styles.image}>
                <img className={styles.arch} src={arch}/>
                <img className={styles.cloths} src={cloths}/>
            </div>
        </section>
    )
}