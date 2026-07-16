import { getMenu } from './menuApi';

export async const loadMenu = () => {
    try {
        const menu = await getMenu();
        return menu;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async const addMenuItem = (product) => {
    try {
        return await createProduct(product);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async const editMenuItem =(id, product) => {
    try {
        return await updateProduct(id, product);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async const removeMenuItem = (id) => {
    try {
        return await deleteProduct(id);
    } catch (error) {
        console.error(error);
        throw error;
    }
}