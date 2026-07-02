


export const showError = (input, message) => {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');

  const feedback =
    input.parentElement.querySelector('.invalid-feedback');

  feedback.textContent = message;
};

 export const showSuccess = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
};