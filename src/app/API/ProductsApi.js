const url = "https://kcoat-ecommerce-react-app.onrender.com/product";

export async function productsAPI() {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch(error) {
        console.error("Error fetching products: ", error);
    }
    
}



        