const header = document.querySelector('header');
const burgerButton = document.querySelector('.menu-bars');
const burgerIcon = '<i class="fas fa-bars"></i>';
const nav = document.getElementById('desktop-nav');
console.log(header);
// console.log(burgerButton);
// console.log(burgerIcon);
// console.log(nav);

const showNav = () => {
  if (nav.style.display === '') {
    burgerButton.classList.add('active-button');
    nav.style.display = 'flex';
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
    burgerButton.classList.remove('active-button');
    nav.style.display = '';
  }
};

burgerButton.addEventListener('click', () => {
  showNav();
});