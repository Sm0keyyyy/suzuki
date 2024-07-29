
const toggleMenu = document.getElementById('togglemenu');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  menu.classList.toggle('show');
});

// Animasi Card
const cards = document.querySelectorAll('#daftar-mobil .card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Animasi On Scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const cardHeight = card.offsetHeight;

    if (scrollY + viewportHeight > cardTop + cardHeight / 2) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
});




