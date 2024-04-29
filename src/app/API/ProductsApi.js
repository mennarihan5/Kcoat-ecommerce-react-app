const url = "https://fakestoreapi.com/products";

export async function productsAPI() {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch(error) {
        console.error("Error fetching products: ", error);
    }
    
}



        