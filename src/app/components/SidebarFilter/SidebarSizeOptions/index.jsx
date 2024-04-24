import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarSizeOptions = ({handleChange, handleCheckboxChange, checkbox}) => {
    return(
        <div className={styles.options}>
            <h5 className={styles.title}>Size</h5>
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            checked={checkbox}
            value = "XS"
            title = "XS"   
            name =  "XS"  
            />
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "S"
            title = "S"  
            name =  "S" 
            />
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "M"
            title = "M"  
            name = "M" 
            />
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "L"
            title = "L"   
            name =  "L" 
            />
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "XL"
            title = "XL"   
            name =  "XL" 
            />
        </div>
        
    )
}