import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarSizeOptions = ({handleChange, clear, handleCheckboxChange, checkbox}) => {
    return(
        <div className={styles.options}>
            <h5 className={styles.title}>Size</h5>
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            checked={checkbox}
            clear={clear}
            value = "XS"
            title = "XS"   
            name =  "XS"  
            />
            <FilterInput 
            handleChange={handleChange}
            value = "S"
            title = "S"  
            name =  "S" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "M"
            title = "M"  
            name = "M" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "L"
            title = "L"   
            name =  "L" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "XL"
            title = "XL"   
            name =  "XL" 
            />
        </div>
        
    )
}