import styles from './style.module.css';
import { Header } from '../../components/Header/index.jsx';
import { CategoriesPageCards } from '../../components/CategoriesPageCards/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';
import { ProductsGrid, ProductsGridCard } from '../../components/ProductsGrid/index.jsx';
import { SidebarFilter } from '../../components/SidebarFilter/index.jsx';
import { useState, useEffect } from 'react';
import { productsAPI } from '../../API/ProductsApi.js';


export const CategoriesPage = () => {
    const [products ,setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [checkbox, setCheckbox] = useState();


    const handleInputChange = (event) => {
        setQuery(event.target.value);
        console.log(event.target.value);
    } 
    const filteredItems = products.filter((product) => {
        product.title.toLowerCase().indexOf(query.toLocaleLowerCase() !== -1);
    })
    const handleChange = ((event) => {
        setSelectedCategory(event.target.value);
        
    })
    const handleClick = ((event) => {
        setSelectedCategory(event.target.value);
    })
    function filteredData(products, selected, query){
        let filteredProducts = products;
        
        if(query) {
            filteredProducts = filteredItems;
        }

        if(selected) {
            filteredProducts = filteredProducts.filter(
                ({id, title, price, category, description, image}) => 
                id === selected ||
                title === selected ||
                price === selected ||
                category === selected ||
                description === selected ||
                image === selected)
        }
        return filteredProducts.map(({id, title, price, category, description, image}) => (
            <ProductsGridCard 
            id={id}
            title={title}
            price={price}
            category={category}
            description={description}
            image={image}
            /> 
        )
        )
    }
    const results = filteredData(products, selectedCategory, query);

    const handleCheckboxChange = (event) => {
        setCheckbox(event.target.checked);
        console.log(event.target.checked);

        // if(checkbox.checked === true) {
        //     setCheckbox(false);
        // } 
    } 

    function clear () {
        setSelectedCategory(null);
        setQuery("");
    }

    useEffect(() => {
        async function fetchData() {
            try {
                // Call the productsAPI function to fetch products data
                const productsData = await productsAPI();
                
                // Set the fetched products data to state
                setProducts(productsData);
            
            } catch(error) {
                console.error("Error fetching products: ", error);
            }
        }
        
        // Call the fetchData function when the component mounts
        fetchData();
    }, [])

    return (
            <div className={styles['products-home-page']}>
            <Header />
            <CategoriesPageCards />
            <div className={styles['products-grid-wrapper']}>
                <SidebarFilter handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} clear={clear} checked={checkbox}/>
                <ProductsGrid results={results} />
            </div>
            <Footer />
            </div>
    )
}