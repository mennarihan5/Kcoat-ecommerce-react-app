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
        price: "$5,500",
      },
      {
        id: 2,
        imageSrc: pearlNecklace,
        price: "$24.99",
        description: "Pearl Necklace"
      }
      ,
      {
        id: 3,
        imageSrc: stiletto,
        price: "$29.99",
        description: "Stiletto"
      },
      {
        id: 4,
        imageSrc: shoulderBag,
        price: "$14.99",
        description: "Shoulder Bag"
      },
      {
        id: 5,
        imageSrc: vintage,
        price: "$34.99",
        description: "Vintage Dress"
      },
      {
        id: 6,
        imageSrc: menSuit,
        price: "$34.99",
        description: "Men Suit"
      }
      
    ];
  

    export function AppProducts () {
    let counter = 1;
    return (
      <div className={styles["products"]}>
      
        {products.map(product => {
          let cardClass = counter == 1 || counter == 6 ? styles['long-card'] : styles['short-card'];
          
          return (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              price={product.price}
              description={product.description}
              cardClass={cardClass}
              id={styles['prodCard_' + counter]}
              counter={counter++}
            />
          );
        })}
    
      </div>
    );
  }