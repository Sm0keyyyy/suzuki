$(document).ready(function() {
  $('.btn-primary').on('click', function() {
    var mobil = $(this).closest('.card').find('.card-title').text();
    var spesifikasi = {
      'Suzuki Jimny': {
        'jenis-mobil': 'SUV - Mobil yang ideal untuk petualangan dan off-road.',
        'tahun-produksi': '2022',
        'kapasitas-mesin': '1.5L - Kapasitas mesin yang kuat untuk semua medan.',
        'jenis-transmisi': 'Automatic - Memudahkan berkendara di segala situasi.',
        'jenis-bahan-bakar': 'Bensin - Hemat dan efisien dengan teknologi terbaru.'
      },
      'Suzuki Baleno': {
        'jenis-mobil': 'Hatchback - Desain kompak dengan interior luas.',
        'tahun-produksi': '2022',
        'kapasitas-mesin': '1.2L - Mesin hemat bahan bakar dengan performa maksimal.',
        'jenis-transmisi': 'Manual - Kontrol penuh dalam genggaman.',
        'jenis-bahan-bakar': 'Bensin - Ramah lingkungan dengan emisi rendah.'
      },
      // Tambahkan model lainnya dengan penjelasan tambahan
    };

    var modal = new bootstrap.Modal($('#modalSpesifikasi')[0]);
    modal.show();

    $('#modalSpesifikasi').on('shown.bs.modal', function() {
      $('#jenis-mobil').text(spesifikasi[mobil]['jenis-mobil']);
      $('#tahun-produksi').text(spesifikasi[mobil]['tahun-produksi']);
      $('#kapasitas-mesin').text(spesifikasi[mobil]['kapasitas-mesin']);
      $('#jenis-transmisi').text(spesifikasi[mobil]['jenis-transmisi']);
      $('#jenis-bahan-bakar').text(spesifikasi[mobil]['jenis-bahan-bakar']);
      $('#fitur-keamanan').text(spesifikasi[mobil]['fitur-keamanan'] || 'Informasi tidak tersedia');
      $('#fitur-kenyamanan').text(spesifikasi[mobil]['fitur-kenyamanan'] || 'Informasi tidak tersedia');
      $('#fitur-hiburan').text(spesifikasi[mobil]['fitur-hiburan'] || 'Informasi tidak tersedia');
    });
  });
});




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