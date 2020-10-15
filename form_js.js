const first = document.querySelector('.first-name');
const last = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const error = document.querySelector('.error');
sms = 'Invaild Form';
const form = document.getElementById('form');
form.addEventListener('submit', show);
function show(e) {
  e.preventDefault();
  if (first.value === '') {
    display(first);
  } else {
    remove(first);
  }
  if (last.value === '') {
    display(last);
  } else {
    remove(last);
  }
  if (email.value === '') {
    display(email);
  } else {
    remove(email);
  }
  if (password.value === '') {
    display(password);
  } else {
    remove(password);
  }
}
function display(tag) {
  tag.style.borderColor = 'red';
  error.innerText = sms;
}
function remove(tag) {
  tag.style.borderColor = '';
  error.innerText = '';
}
