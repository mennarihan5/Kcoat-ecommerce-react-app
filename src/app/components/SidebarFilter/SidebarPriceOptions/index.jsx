import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarPriceOptions = ({handleChange}) => {
    return(
        <div className={styles.options}>
            <h5 className={styles.title}>Price</h5>
            <FilterInput 
            handleChange={handleChange}
            value = "₦1,500 to ₦5,000"
            title = "₦1,500 to ₦5,000"   
            name =  "₦1,500 to ₦5,000" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "₦5,000 to ₦8,500"
            title = "₦5,000 to ₦8,500"  
            name =  "₦5,000 to ₦8,500"
            />
            <FilterInput 
            handleChange={handleChange}
            value = "₦8,500 to ₦11,500"
            title = "₦8,500 to ₦11,500"   
            name =  "₦8,500 to ₦11,500" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "₦11,500 to ₦14,500"
            title = "₦11,500 to ₦14,500"   
            name =  "₦11,500 to ₦14,500" 
            />
        </div>
        
    )
}