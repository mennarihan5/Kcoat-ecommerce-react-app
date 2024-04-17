import styles from './style.module.css';

export const Button = (props) => {
    const {children, className} = props;
    
    return(
        <div className={`${styles.button} ${className}`}>
            {children}
        </div>
    )
}