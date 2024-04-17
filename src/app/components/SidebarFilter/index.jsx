import styles from './style.module.css';
import { options } from './data.js';

export const FilterOptions = ({title, data}) => {
    return (
        <div className={styles['filters-wrapper']}>
                <div className={styles.filter}>
                    <h5 className={styles.title}>{title}</h5>
                    {
                        data.map((data) => {
                            return (
                                <div className={styles.options}>
                                    <div className={styles.option}>
                                        <input type="checkbox" id="check" />
                                        <label htmlFor="check">{data}</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
       </div>
    )
}

export const SidebarFilter = () => {
    return (
        <div className={styles['sidebar-filter']}>
            <h3 className={styles['filter-title']}>Filter by</h3>
            {
                options.map((option) => (
                    <FilterOptions title={option.title} data={option.data} />
            ))
            }
            <div className={styles.apply}>
                <input type="checkbox" id="check" />
                <p>Apply Filter</p>
            </div>
            <p className={styles.clear}>Clear Filter</p>
        </div>
    )
}