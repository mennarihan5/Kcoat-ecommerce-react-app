import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarTypeOptions = ({handleChange}) => {
    return(
        <div>
            <h5 className={styles.title}>Type</h5>
            <FilterInput 
            handleChange={handleChange}
            value = "Shirt"
            title = "Shirt"   
            name =  "Shirt" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Coats & Jackets"
            title = "Coats & Jackets"  
            name =  "Coats & Jackets" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Jeans"
            title = "Jeans"   
            name =  "Jeans" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Polo Shirt"
            title = "Polo Shirt"   
            name =  "Polo Shirt" 
            />
        </div>
        
    )
}