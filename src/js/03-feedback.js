import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const userData = {};

const check_LS = () => {
  const dataFormLS =
    localStorage.getItem(LS_KEY) === null
      ? undefined
      : JSON.parse(localStorage.getItem(LS_KEY));

  if (!dataFormLS) return;

  for (const key in dataFormLS) {
    if (dataFormLS.hasOwnProperty(key)) {
      formEl.elements[key].value = dataFormLS[key];
      userData[key] = dataFormLS[key];
    }
  }
};
const onFormChange = e => {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(userData));
};

const onFormSubmit = e => {
  e.preventDefault();

  localStorage.removeItem(LS_KEY);
  e.currentTarget.reset();
};

formEl.addEventListener('input', throttle(onFormChange, 500));
formEl.addEventListener('submit', onFormSubmit);

check_LS();

console.log(userData);
