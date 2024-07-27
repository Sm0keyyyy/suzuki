
const toggleMenu = document.getElementById('togglemenu');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  menu.classList.toggle('show');
});

