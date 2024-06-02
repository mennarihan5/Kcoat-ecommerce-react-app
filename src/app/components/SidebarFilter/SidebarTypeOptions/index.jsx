import styles from './style.module.css';
import { FilterInput } from '../FilterInput';

export const SidebarTypeOptions = ({handleChange}) => {
    return(
        <div className={styles.options}>
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
            <FilterInput 
            handleChange={handleChange}
            value = "Shorts"
            title = "Shorts"   
            name =  "Shorts" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Joggers"
            title = "Joggers"   
            name =  "Joggers" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Trousers & Chinos"
            title = "Trousers & Chinos"   
            name =  "Trousers & Chinos" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Hoodies"
            title = "Hoodies"   
            name =  "Hoodies" 
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Shoes"
            title = "Shoes"   
            name =  "Shoes"
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Sportswear"
            title = "Sportswear"   
            name =  "Sportswear"
            />
            <FilterInput 
            handleChange={handleChange}
            value = "Sweatshirts"
            title = "Sweatshirts"   
            name =  "Sweatshirts"
            />
        </div>
        
    )
}