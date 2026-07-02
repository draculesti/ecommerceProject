import { saveReservation } from "../services/reservationService.js";
import { validateName, validatePhone, validateDate,validateEmail, validateGuests, validateTime } from "../utils/reservationValidators.js";

const form = document.getElementById('reservationForm');

const fields = {
  fullName: document.getElementById('fullName'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  date: document.getElementById('date'),
  time: document.getElementById('time'),
  guests: document.getElementById('guest')
};

const clearValidation = () => {
  Object.values(fields).forEach((field) => {
    field.classList.remove('is-valid');
    field.classList.remove('is-invalid');
  });
};

const validateForm = () => {
  const isNameValid = validateName(fields.fullName);
  const isPhoneValid = validatePhone(fields.phone);
  const isEmailValid = validateEmail(fields.email);
  const isDateValid = validateDate(fields.date);
  const isTimeValid = validateTime(fields.time);
  const isGuestsValid = validateGuests(fields.guests);

  return (
    isNameValid &&
    isPhoneValid &&
    isEmailValid &&
    isDateValid &&
    isTimeValid &&
    isGuestsValid
  );
};


fields.fullName.addEventListener('input', ()=> validateName(fields.fullName));
fields.phone.addEventListener('input', ()=> validatePhone(fields.phone));
fields.email.addEventListener('input', ()=> validateEmail(fields.email));
fields.date.addEventListener('change', ()=> validateDate(fields.date));
fields.time.addEventListener('change', ()=> validateTime(fields.time));
fields.guests.addEventListener('change', ()=> validateGuests(fields.guests));


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  const reservationData = {
    fullName: fields.fullName.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim(),
    date: fields.date.value,
    time: fields.time.value,
    guests: fields.guests.value
  };
  saveReservation(reservationData);

  alert('Reservation created successfully!');
  form.reset();
  clearValidation();
});