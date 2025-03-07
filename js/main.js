document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav__toggle');
    const navItems = document.querySelector('.nav__items');
  
    toggleBtn.addEventListener('click', () => {
      navItems.classList.toggle('nav__items--hidden');
    });
  });