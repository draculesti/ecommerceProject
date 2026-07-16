import * as cartApi from "./cartApi";

export const cleanPrice = (price) => {
    if (typeof price === "number") return price;

    return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
};

export async const addToCart =(product) => {

    const productToAdd = {
        id: product.id,
        quantity: 1
    };

    return await cartApi.addProductToCart(productToAdd);
}