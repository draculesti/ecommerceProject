import { createUser } from "./userApi.js";


export  const addUser = async(user) => {

  try {
    return await createUser(user);
  } catch (error) {
    console.error(error);
    throw error;
  }

}