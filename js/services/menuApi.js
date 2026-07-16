const API_URL = "http://localhost:8080/api/products";

export async const getMenu = () =>{
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch menu");
    }

    return await response.json();
}

export async const createProduct =(product) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Failed to create product");
    }

    return response.json();
}


export async const updateProduct = (id, product) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Failed to update product");
    }

    return response.json();
}


export async const deleteProduct = (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Failed to delete product");
    }

    return true;
}
