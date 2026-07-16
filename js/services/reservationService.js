const API_URL = "http://localhost:8080/api/reservations";

export async function saveReservation(reservation) {

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