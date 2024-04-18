import styles from './style.module.css';

export const FilterInput = ({handleChange, value, title, name, color}) => {
    return(
        <div className={styles.option}>
            <input onChange={handleChange} value={value} name={name} type="checkbox" id="optionData" />
            <label htmlFor="optionData">{title}</label>
        </div>
    )
}