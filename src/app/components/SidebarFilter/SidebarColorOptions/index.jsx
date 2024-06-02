import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarColorOptions = ({handleChange}) => {
    return(
        <div className={styles.options}>
            <h5 className={styles.title}>Color</h5>
            <FilterInput 
            handleChange={handleChange}
            value = "Black"
            title = "Black"   
            name =  "Black" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "White"
            title = "White"  
            name =  "White" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Grey"
            title = "Grey"   
            name =  "Grey" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Brown"
            title = "Brown"   
            name =  "Brown" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Red"
            title = "Red"   
            name =  "Red" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Blue"
            title = "Blue"   
            name =  "Blue" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Green"
            title = "Green"   
            name =  "Green" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Mixed"
            title = "Mixed"   
            name =  "Mixed" 
            />
        </div>
        
    )
}