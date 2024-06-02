import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarSizeOptions = ({handleChange, handleCheckboxChange, checkbox}) => {
    return(
        <div className={styles.options}>
            <h5 className={styles.title}>Size</h5>
            <FilterInput 
            handleChange={handleChange}
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
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "XXL"
            title = "XXL"   
            name =  "XXL" 
            />
            <FilterInput 
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            value = "XXXL"
            title = "XXXL"   
            name =  "XXXL" 
            />
        </div>
        
    )
}