import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons library
import dinnerGown from '../../assets/images/dinnerGown.svg';
import pearlNecklace from '../../assets/images/pearlNecklace.svg';
import stiletto from '../../assets/images/stiletto.svg';
import shoulderBag from '../../assets/images/shoulderBag.svg';
import vintage from '../../assets/images/vintage.svg';
import menSuit from '../../assets/images/menSuit.svg';
import styles from './styles.module.css';
import ProductCard from './productData';
import vector from '../../assets/images/vector.svg';



    
    const products = [
      {
        id: 1,
        imageSrc: dinnerGown,
        description: "Dinner Gown",
        price: "₦5,500",
      },
      {
        id: 2,
        imageSrc: pearlNecklace,
        price: "₦5,500",
        description: "Pearl Necklace"
      }
      ,
      {
        id: 3,
        imageSrc: stiletto,
        price: "₦5,500",
        description: "Stiletto"
      },
      {
        id: 4,
        imageSrc: shoulderBag,
        price: "₦5,500",
        description: "Shoulder Bag"
      },
      {
        id: 5,
        imageSrc: vintage,
        price: "₦5,500",
        description: "Vintage Dress"
      },
      {
        id: 6,
        imageSrc: menSuit,
        price: "₦5,500",
        description: "Men Suit"
      }
      
    ];
  

    export function AppProducts () {
    let counter = 1;
    return (
      <div className={styles["products"]}>
      
        {products.map(product => {
          let cardClass = product.id === 1 ? styles['card-1'] : 
          product.id === 2 ? styles['card-2'] :
          product.id === 3 ? styles['card-3'] :
          product.id === 4 ? styles['card-4'] :
          product.id === 5 ? styles['card-5'] : 
          product.id === 6 ? styles['card-6'] : "";
          
          return (

                  <ProductCard 
                    imageSrc={product.imageSrc} 
                    price={product.price} 
                    description={product.description} 
                    id={product.id}
                    key={product.id}
                    cardClass={cardClass}
                    // counter={counter++}
                  />

          );
        })}
    
      </div>
    );
  }