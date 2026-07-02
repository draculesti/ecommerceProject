import { showError, showSuccess } from "./reservationhelpers.js";


export const validateName = (fullName) => {
  const value = fullName.value.trim();

  if (!value) {
    showError(fullName, 'Nombre es requerido');
    return false;
  }

  if (value.length < 5) {
    showError(
      fullName,
      'Nombre tiene que tener al menos 5 caracteres'
    );
    return false;
  }

  showSuccess(fullName);
  return true;
};

export const validatePhone = (phone) => {
  const value = phone.value.trim();

  const phoneRegex = /^[0-9+\s()-]{8,15}$/;

  if (!value) {
    showError(phone, 'Telefono es requerido');
    return false;
  }

  if (!phoneRegex.test(value)) {
    showError(phone, 'Telefono invalido, introduzca un telefono valido');
    return false;
  }

  showSuccess(phone);
  return true;
};

export const validateEmail = (email) => {
  const value = email.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    showError(email, 'Email es requerido');
    return false;
  }

  if (!emailRegex.test(value)) {
    showError(email, 'Direccion de email invalido.');
    return false;
  }

  showSuccess(email);
  return true;
};

export const validateDate = (date) => {
  const value = date.value;

  if (!value) {
    showError(date, 'Fecha de reservacion, requerida.');
    return false;
  }

  const selectedDate = new Date(value);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    showError(
      date,
      'La fecha de reservacion no puede ser pasada'
    );
    return false;
  }

  showSuccess(date);
  return true;
};

export const validateTime = (time) => {
  const value = time.value;

  if (!value) {
    showError(time, 'Hora de reservacion requerida.');
    return false;
  }

  showSuccess(time);
  return true;
};

export const validateGuests = (guests) => {
  const value = guests.value;

  if (!value) {
    showError(
      guests,
      'Porfavor seleccione el numero de comensales.'
    );
    return false;
  }

  showSuccess(guests);
  return true;
};


