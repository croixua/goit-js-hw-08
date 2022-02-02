import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.elements.email;
const messageRef = formRef.elements.message;
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

const feedbackFormState = {
  email: '',
  message: '',
};

formRef.addEventListener('input', throttle(setFormInput, 500));
formRef.addEventListener('submit', onSubmit);

function setFormInput() {
  if (emailRef.value !== '' || messageRef.value !== '') {
    feedbackFormState.email = emailRef.value;
    feedbackFormState.message = messageRef.value;
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
}

function updateOutput() {
  try {
    const savedFormState = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedFormState = JSON.parse(savedFormState);
    emailRef.value = parsedFormState.email;
    messageRef.value = parsedFormState.message;
  } catch {}
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
