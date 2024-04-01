import styles from './style.module.css';
import { CategoriesCards } from './CategoriesCards';
import { cardsData } from './data';

export const Categories = (props) => {
    return(
       <div className={styles.categories}>
            {
                cardsData.map((data) => {
                    return <CategoriesCards image={data.image} title={data.title} small={data.small} cover={data.cover} marginTop={data.marginTop} isWhite={data.isWhite}/>
                })
            }
      </div>
    )
}