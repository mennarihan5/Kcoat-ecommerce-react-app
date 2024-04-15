import styles from './style.module.css';
import { typeData } from './data.js';

export const FilterOptions = (props) => {
    return (
        <div className={styles['filters-wrapper']}>
                <div className={styles.filter}>
                    <h5 className={styles.title}>{props.title}</h5>
                    {
                        typeData.map((data) => {
                            return (
                                <div className={styles.options}>
                                    <div className={styles.option}>
                                        <input type="checkbox" id="check" />
                                        <p>{data}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {

                    }
                </div>
       </div>
    )
}

export const SidebarFilter = () => {
    return (
        <div className={styles['sidebar-filter']}>
            <h3>Filter by</h3>
            <FilterOptions title="Type"/>
            <p>Clear Filter</p>
        </div>
    )
}