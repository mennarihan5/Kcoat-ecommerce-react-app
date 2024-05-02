import { useState, useEffect ,createContext } from "react";
import { useParams } from 'react-router-dom';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const [product, setProduct] = useState([]);
   const { id } = useParams();
   const imageArray = product.image && JSON.parse(product.image);
   const [isLoading, setIsLoading] = useState(true);


      
   useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(`https://kcoat-ecommerce-react-app.onrender.com/product/${id}`);
            // Call the productsAPI function to fetch products data
            const productsData = await response.json();
            console.log(productsData)
            // Set the fetched products data to state
            setProduct(productsData);
            console.log(productsData)

        } catch(error) {
            console.error("Error fetching products: ", error);
        }finally {
            setIsLoading(false); // Set loading to false after fetching data
        }
    }
    // Call the fetchData function when the component mounts
    fetchData();

}, [])

    // async function getProductById(productId) {
    //     try {
    //       const response = await fetch(`https://kcoat-ecommerce-react-app.onrender.com/product/${productId}`);
    //       const productData = await response.json();
    //       return productData;
    //     } catch (error) {
    //       console.error("Error fetching product data:", error);
    //       return null; 
    //     }
    //   }

      async function addToCart(productId, quantity = 1) {
        // Fetch product details from the API
        // const product = await fetchData(productId);
      
        if (!product) {
          console.error("Error fetching product data. Unable to add to cart.");
          return; // Handle potential errors
        }
      
        // Create a copy of the existing cart items
        const updatedCartItems = [...cartItems];
      
        // Find the existing item in the cart (if any)
        const existingItemIndex = updatedCartItems.findIndex(item => item.id === productId);
      
        // Update the quantity or add a new item
        if (existingItemIndex !== -1) {
          updatedCartItems[existingItemIndex].quantity += quantity;
        } else {
          updatedCartItems.push({ ...product, quantity }); // Include all product data
        }
      
        // Update the cart items state
        setCartItems(updatedCartItems);
      
        // (Optional) Trigger an event or update a state variable to notify other components
        console.log("Added to cart:", updatedCartItems); // Replace with event dispatch or state update
      }
      

      const handleDecrease = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    

    const handleIncrease = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleRemove = (itemId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== itemId)
        );
    };

    // Calculate subtotal based on the quantity of clothes and their prices
    const subtotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    
    const contextValue = {
        product,
        isLoading,
        imageArray,
        cartItems,
        subtotal,
        addToCart,
        handleDecrease,
        handleIncrease,
        handleRemove,
        
    };

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

}
