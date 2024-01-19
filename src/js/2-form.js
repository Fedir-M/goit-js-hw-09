const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('.feedback-form input');
const textAreaEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', onFormData);
formEl.addEventListener('submit', onSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function dataFormLocalStorage() {
  const { email, message } = formData;

  if (email) {
    inputEmailEl.value = email;
  }
  if (message) {
    textAreaEl.value = message;
  }
}
dataFormLocalStorage();

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!inputEmailEl.value || !textAreaEl.value) {
    return alert('Your email or message are empty! Fill down these fields.');
  }

  console.log(formData);
  formData.email = '';
  formData.message = '';
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
}
