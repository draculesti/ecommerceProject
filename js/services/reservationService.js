
// reservations = [{ 10:[{},{}],11:,[{},{}]  }];

export const saveReservation = (reservation) =>{
  let reservations = JSON.parse(localStorage.getItem("reservations"));
  if (!reservations) {
      localStorage.setItem("reservations", JSON.stringify(menuItems));
  }

}