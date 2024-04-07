import styles from './style.module.css';
import { questions } from './data';
import { FaPlus } from "react-icons/fa6";

export const FAQ = () => {
    return(
        <div className={styles.faq}>
            <div className={styles.text}>
                <h3 className={styles.title}>Frequently Asked <br/> Questions</h3>
                <p className={styles.description}>
                Find answers to common customer questions <br/> about ordering, shipping and returns.
                </p>
                <button className={styles['contact-btn']}>
                    Contact
                </button>
            </div>
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
        </div>
    )
}