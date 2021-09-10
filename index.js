const burgerButton = document.querySelector('.menu-bars');
const nav = document.getElementById('desktop-nav');

const burgerIcon = '<i class="fas fa-bars"></i>';

const showNav = () => {
  if (nav.style.display === '') {
    burgerButton.classList.add('active-button');
    burgerButton.innerHTML = 'X';
    nav.style.display = 'flex';
    nav.classList.add('active');
  } else {
    burgerButton.innerHTML = burgerIcon;
    nav.classList.remove('active');
    burgerButton.classList.remove('active-button');
    nav.style.display = '';
  }
};

burgerButton.addEventListener('click', () => {
  showNav();
});