const API_URL = "http://localhost:8080/mixapi/pedidos/";

export  const getCart = async()=> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Couldn't load cart");
    }

    return response.json();
}

export  const  addProductToCart = async(product)=> {
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