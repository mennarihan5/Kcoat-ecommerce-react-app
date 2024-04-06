import { aboutData } from './data.js';
import styles from './style.module.css';

export const About = () => {
    console.log(aboutData.title)
    return(
        <div className={styles.about}>
            <div className={styles.text}>
                <h3 className={styles.title}>About Us</h3>
                <p className={styles.description}>
                    At KCOAT, we believe that fashion is a powerful form of self-expression. Our mission  is to provide you with trendy clothing and accessories  that help you make a statement and embrace your unique style. With selection of outfits, jewelries, bags, slides, heels and more!!! We have everything you need to stay on top of the latest fashion trends. Shop with us today and let your style shine!
                </p>
            </div>
            <div className={styles['images-container']}>
            {
                aboutData.map((data) => {
                    return(
                        <div className={styles['about-card']}>
                            <h4 className={styles['card-title']}>{data.title}hiii</h4>
                            <div className={styles['card-img']}><img src={data.img} alt="model image"/></div>
                        </div> 
                    )
                })
            }       
            </div>
        </div>
    )
}