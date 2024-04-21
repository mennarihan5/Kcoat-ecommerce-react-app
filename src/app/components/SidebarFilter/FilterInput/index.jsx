import styles from './style.module.css';

export const FilterInput = ({handleChange, handleCheckboxChange, value , checkbox, title, name, color}) => {
    return(
        <div className={styles.option}>
            <input onChange={handleChange} onClick={handleCheckboxChange} checked={checkbox} name={name} type="checkbox" id="optionData" />
            <label htmlFor="optionData">{title}</label>
        </div>
    )
}