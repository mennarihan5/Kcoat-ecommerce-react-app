import styles from './style.module.css';
import { SidebarTypeOptions } from './SidebarTypeOptions/index.jsx';
import { SidebarColorOptions } from './SidebarColorOptions/index.jsx';
import { SidebarSizeOptions } from './SidebarSizeOptions/index.jsx';
import { SidebarPriceOptions } from './SidebarPriceOptions/index.jsx';

export const FilterOptions = ({handleChange, clear, handleCheckboxChange, checkbox}) => {
    return (
        <div className={styles['filters-wrapper']}>
             <div className={styles.filter}>
                <div className={styles.filterItem}>
                    <SidebarTypeOptions handleChange={handleChange} clear={clear} />
                </div>
                <div className={styles.filterItem}>
                    <SidebarColorOptions handleChange={handleChange} clear={clear}/>
                </div>
                <div className={styles.filterItem}>
                    <SidebarSizeOptions handleChange={handleChange} clear={clear} handleCheckboxChange={handleCheckboxChange} checked={checkbox}/>
                </div>
                <div className={styles.filterItem}>
                     <SidebarPriceOptions handleChange={handleChange} clear={clear}/>
                </div>
             </div>
    </div>
    )
}

export const SidebarFilter = ({handleChange, clear, handleCheckboxChange, checkbox}) => {
    return (
        <div className={styles['sidebar-filter']}>
            <h3 className={styles['filter-title']}>Filter by</h3>
            <FilterOptions handleChange={handleChange} clear={clear} handleCheckboxChange={handleCheckboxChange} checked={checkbox}/>
            {/* <div className={styles.apply}>
                <input type="checkbox" id="check" />
                <p>Apply Filter</p>
            </div> */}
            <p className={styles.clear} onClick={clear} handleCheckboxChange={handleCheckboxChange}>Clear Filter</p>
        </div>
    )
}