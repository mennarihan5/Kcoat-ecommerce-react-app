import { FaHeart } from 'react-icons/fa'; // Importing the heart icon from react-icons library
import dinnerGown from '../../assets/images/dinnerGown.svg';
import pearlNecklace from '../../assets/images/pearlNecklace.svg';
import stiletto from '../../assets/images/stiletto.svg';
import shoulderBag from '../../assets/images/shoulderBag.svg';
import vintage from '../../assets/images/vintage.svg';
import menSuit from '../../assets/images/menSuit.svg';
import styles from './styles.module.css';



    
    export const products = [
      {
        id: 1,
        imageSrc: dinnerGown,
        price: "$19.99",
        description: "Product 1 description goes here"
      },
      {
        id: 2,
        imageSrc: pearlNecklace,
        price: "$24.99",
        description: "Product 2 description goes here"
      },
      {
        id: 3,
        imageSrc: stiletto,
        price: "$29.99",
        description: "Product 3 description goes here"
      },
      {
        id: 4,
        imageSrc: shoulderBag,
        price: "$14.99",
        description: "Product 4 description goes here"
      },
      {
        id: 5,
        imageSrc: vintage,
        price: "$34.99",
        description: "Product 5 description goes here"
      },
      {
        id: 6,
        imageSrc: menSuit,
        price: "$34.99",
        description: "Product 5 description goes here"
      }
    ];
  
    return (
      <div className="App">
        {/* Render ProductCard components for each product */}
        {products.map(product => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    );
  }
  
  export default App;