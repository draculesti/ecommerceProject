import { getMenu } from './menuApi.js';

export  const loadMenu = async() => {
    try {
        const menu = await getMenu();
        return menu;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export  const addMenuItem = async(product) => {
    try {
        return await createProduct(product);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export  const editMenuItem = async(id, product) => {
    try {
        return await updateProduct(id, product);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export  const removeMenuItem = async(id) => {
    try {
        return await deleteProduct(id);
    } catch (error) {
        console.error(error);
        throw error;
    }
}