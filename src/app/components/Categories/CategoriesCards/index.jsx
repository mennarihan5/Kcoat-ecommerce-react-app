import styles from './style.module.css';
import { Button } from '../../Button/index.jsx';
import { Link } from 'react-router-dom';

export const CategoriesCards = (props) => {
    const size = props.small ? styles['small-card'] : '';
    const coverImg = props.cover ? styles['cover-img'] : '';
    const margin = props.marginTop ? styles['margin-top'] : '';
    const whiteBtn = props.isWhite ? styles['white-btn'] : '';

    return(
            <div className={`${styles['categories-card']} ${size} ${coverImg} ${margin}`}>
                <img className={styles.img} src={props.image} alt='card images' />
                <div className={styles.details}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <div className={styles['card-btn']}>
                        <Button className={`${styles['default-btn']} ${whiteBtn}`} >
                            <Link className={styles.btn} to='/categories'>Shop Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
    )
}