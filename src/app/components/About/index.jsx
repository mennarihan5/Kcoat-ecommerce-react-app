import styles from './style.module.css';
import AboutImg1 from '../../assets/images/about1.png';
import AboutImg2 from '../../assets/images/about2.png';


export const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.text}>
                <h3 className={styles.title}>About Us</h3>
                <p className={styles.description}>
                At KCOAT, we believe that fashion is a powerful form of self-expression. <br/> Your appearance gives you out. Speak style speak you.
                </p>
                <button className={styles['contact-btn']}>
                    Contact Us
                </button>
            </div>
            <div className={styles['imgs-container']}>
                <div className={styles.images}>
                    <img className={styles.aboutImg2} src={AboutImg2}/>
                    <img className={styles.aboutImg1} src={AboutImg1}/>      
                </div>
            </div>
            {/* <div className={styles.olive}></div> */}
        </div>
    )
}