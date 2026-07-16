const API_URL = "http://localhost:8080/mixapi/platillos/";

export  const getMenu = async() =>{
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch menu");
    }

    return await response.json();
}

export  const createProduct = async(product) => {
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


export  const updateProduct = async(id, product) => {
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


export  const deleteProduct = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Failed to delete product");
    }

    return true;
}
