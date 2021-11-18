const menu = document.querySelector('.menu');

const manipulateMenu = () => {
  menu.classList.remove('d-hidden');
};

const menuListener = () => {
  const menuIcon = document.querySelector('.fa-bars');
  menuIcon.addEventListener('click', () => {
    manipulateMenu();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  menuListener();
});

menu.addEventListener('click', (event) => {
  const name = event.target.localName;
  console.log(name);
  if (name === 'a') {
    menu.classList.add('d-hidden');
  }
});