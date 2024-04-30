const url = "https://kcoat-ecommerce-react-app.onrender.com/product";

export async function productsAPI() {
    try {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.error("Error fetching products: ", error);
    }
    
}



        