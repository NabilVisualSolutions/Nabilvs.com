
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.header-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
