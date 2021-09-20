let form = document.querySelector('.form');
let button = form.querySelector('.button--js');
let youName = form.querySelector('[name=name]');
let tel = form.querySelector('[name=tel]');
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('tel');
} catch (err) {
  isStorageSupport = false;
}
youName.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик по ссылке name');
  button.classList.remove('form--show');
});
tel.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Клик по ссылке телефон');
  if (storage) {
    tel.value = storage;
    youName.focus();
  } else {
    tel.focus();
  }
});
form.addEventListener('submit', function (evt) {
  if (!youName.value || !tel.value) {
    evt.preventDefault();
    button.classList.add('form--show');
    console.log('Нужно ввести имя и номер телефона');
    youName.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('tel', tel.value);
      button.classList.remove('form--show');
    }
  }
});
