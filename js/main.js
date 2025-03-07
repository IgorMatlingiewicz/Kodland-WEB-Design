document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav__toggle');
    const navItems = document.querySelector('.nav__items');
  
    toggleBtn.addEventListener('click', () => {
      // Dodaj/usuń klasę --hidden
      navItems.classList.toggle('nav__items--hidden');
    });
  });