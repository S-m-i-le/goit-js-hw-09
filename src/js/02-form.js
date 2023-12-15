const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');
const storageKey = 'feedback-form-state';

window.addEventListener('load', () => {
  const storedData = JSON.parse(localStorage.getItem(storageKey));
  if (storedData) {
    emailInput.value = storedData.email;
    messageInput.value = storedData.message;
  }
});

form.addEventListener('input', () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  if (emailValue && messageValue) {
    const data = {
      email: emailValue,
      message: messageValue,
    };
    console.log(data);
    localStorage.removeItem(storageKey);
    form.reset();
  }
});
