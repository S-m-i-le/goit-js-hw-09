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

// const STOREGE_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// const myLocStorege = {
//   set: (key, data, json = false) => {
//     localStorage.setItem(key, json ? JSON.stringify(data) : data);
//   },
//   get: (key, json = false) => {
//     const data = localStorage.getItem(key);
//     if (!json) return data;
//     try {
//       return JSON.parse(data);
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   remove: key => {
//     localStorage.removeItem(key);
//   },
// };
// form.addEventListener('input', () => {
//   const formData = new FormData(form);
//   const formObject = {};
//   formData.forEach(value, key => (formObject[key] = value));
//   console.log(formObject);
//   myLocStorege.set(STOREGE_KEY, formObject, true);
// });

// const myFormData = myLocStorege.get(STOREGE_KEY, true);
// console.log(myFormData);
// Array.from(form.elements).forEach(element => {
//   const storageValue = myFormData[element.name];
//   if (storageValue) {
//     element.value = storageValue;
//   }
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   myLocStorege.remove(STOREGE_KEY);
//   form.reset();
// });

// ----------------------------------------
// const textarea = form.querySelector('textarea');

// const messageOld = localStorage.getItem(STOREGE_KEY);
// if (messageOld) {
//   form.textarea.value = messageOld;
// }

// form.addEventListener('input', () => {
//   const formData = new FormData(form);
//   const formObject = {};
//   formData.forEach(value, key => (formObject[key] = value));
//   console.log(formObject);
//   localStorage.setItem(STOREGE_KEY, JSON.stringify(formObject));
// });

//   const message = event.currentTarget.value;
//   setTimeout(() => {
//     localStorage.setItem(STOREGE_KEY, message);
//   }, 1000);
// });
