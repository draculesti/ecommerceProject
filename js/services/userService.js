import { createUser } from "./userApi.js";


export async const addUser = (user) => {

  try {
    return await createUser(user);
  } catch (error) {
    console.error(error);
    throw error;
  }

}