
const API_URL = "http://localhost:8080/mixapi/usuarios/";

export async const createUser = (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}