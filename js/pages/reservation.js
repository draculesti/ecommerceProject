const form = document.querySelector("#reservationForm");

const fields = {
  fullName: document.querySelector("#fullName"),
  phone: document.querySelector("#phone"),
  email: document.querySelector("#email"),
  date: document.querySelector("#date"),
  time: document.querySelector("#time"),
  guests: document.querySelector("#guests")
};

const showError = (input, message) => {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");

  const feedback = input.parentElement.querySelector(".invalid-feedback");
  feedback.textContent = message;
};

const showSuccess = (input) => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const validateName = () => {
  const value = fields.fullName.value.trim();

  if (!value) {
    showError(fields.fullName, "Nombre completo es requerido");
    return false;
  }

  if (value.length < 3) {
    showError(fields.fullName, "El Nombre tiene que tener al menos tres caracteres");
    return false;
  }

  showSuccess(fields.fullName);
  return true;
};

const validatePhone = () => {
  const value = fields.phone.value.trim();
  const phoneRegex = /^[0-9+\s()-]{8,15}$/;

  if (!value) {
    showError(fields.phone, "Telefono es requerido");
    return false;
  }

  if (!phoneRegex.test(value)) {
    showError(fields.phone, "Numero de telefono invalido");
    return false;
  }

  showSuccess(fields.phone);
  return true;
};

const validateEmail = () => {
  const value = fields.email.value.trim();

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    showError(fields.email, "Email es requerido");
    return false;
  }

  if (!emailRegex.test(value)) {
    showError(fields.email, "Direccion de email invalida");
    return false;
  }

  showSuccess(fields.email);
  return true;
};

const validateDate = () => {
  const value = fields.date.value;

  if (!value) {
    showError(fields.date, "La fecha es requerida");
    return false;
  }
  const selectedDate = new Date(value);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    showError(fields.date, "No puede ser una fecha pasada");
    return false;
  }

  showSuccess(fields.date);
  return true;
};

const validateTime = () => {
  const value = fields.time.value;

  if (!value) {
    showError(fields.time, "La hora es requerida");
    return false;
  }

  showSuccess(fields.time);
  return true;
};

const validateGuests = () => {
  const value = fields.guests.value;

  if (!value) {
    showError(fields.guests, "Porfavor agregue el numero de comensales");
    return false;
  }

  showSuccess(fields.guests);
  return true;
};

const validateForm = () => {
  return (
    validateName() &&
    validatePhone() &&
    validateEmail() &&
    validateDate() &&
    validateTime() &&
    validateGuests()
  );
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const reservation = {
    fullName: fields.fullName.value,
    phone: fields.phone.value,
    email: fields.email.value,
    date: fields.date.value,
    time: fields.time.value,
    guests: fields.guests.value
  };

  console.log(reservation);

  alert("Reservacion creada exitosa!");

  form.reset();

  Object.values(fields).forEach(field => {
    field.classList.remove("is-valid");
  });
});