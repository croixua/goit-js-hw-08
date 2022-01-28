import Throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.elements.email;
const messageRef = formRef.elements.message;
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

const feedbackFormState = {
  email: '',
  message: '',
};

emailRef.addEventListener('input', Throttle(setFormEmail, 500));
messageRef.addEventListener('input', Throttle(setFormMessage, 500));
formRef.addEventListener('submit', onSubmit);

function setFormMessage() {
  feedbackFormState.message = messageRef.value;

  if (emailRef.value !== '') {
    feedbackFormState.email = emailRef.value;
  }
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
  } catch (error) {}
}

function setFormEmail() {
  feedbackFormState.email = emailRef.value;
  if (messageRef.value !== '') {
    feedbackFormState.message = messageRef.value;
  }

  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
  } catch (error) {}
}

function updateOutput() {
  try {
    const savedFormState = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedFormState = JSON.parse(savedFormState);

    emailRef.value = `${parsedFormState.email}`;
    messageRef.value = `${parsedFormState.message}`;
  } catch (error) {}
}

function onSubmit(e) {
  e.preventDefault();

  if (emailRef.value === '' || messageRef.value === '') {
    alert('Заполни все поля!');

    return;
  }

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  feedbackFormState.email = '';
  feedbackFormState.message = '';
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));

  formRef.reset();
}
