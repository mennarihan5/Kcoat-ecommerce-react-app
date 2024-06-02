import styles from './style.module.css';
import { questions } from './data';
import { FaPlus } from "react-icons/fa6";
import FAQImg from '../../assets/images/FAQ.png';

export const FAQ = () => {
    return(
        <div className={styles.faq}>
            <div className={styles.text}>
                <h3 className={styles.title}>Frequently Asked Questions</h3>
                <p className={styles.description}>
                Find answers to common customer questions about ordering, shipping and returns.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles['questions-container']}>
                    {
                        questions.map((question) => {
                            return(
                                <div className={styles['question']}>
                                    <p className={styles['question-text']}>{question.q}</p>
                                    <div className={styles.icon}><FaPlus /></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles['img-container']}>
                    <img src={FAQImg} alt='FAQ'/>
                </div>
            </div>
        </div>
    )
}