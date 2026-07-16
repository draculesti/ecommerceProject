const API_URL = "http://localhost:8080/mixapi/reservaciones/";

export async const  saveReservation = ( reservation)=> {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  });

  if (!response.ok) {
    throw new Error("Failed to save reservation");
  }

  return await response.json();
}