const API_URL = "http://localhost:8080/api/cart";

export async const getCart = ()=> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Couldn't load cart");
    }

    return response.json();
}

export async const  addProductToCart = (product)=> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Couldn't add product");
    }

    return response.json();
}