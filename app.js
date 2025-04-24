document.addEventListener('DOMContentLoaded', function () {
  const gedungRadio = document.querySelectorAll('input[name="gedung"]');
  const lantaiRadio = document.querySelectorAll('input[name="lantai"]');
  const ruanganList = document.querySelectorAll('.list-data .card');

  function filterRuangan() {
    const selectedGedung = document.querySelector('input[name="gedung"]:checked')?.id;
    const selectedLantai = document.querySelector('input[name="lantai"]:checked')?.id;

    ruanganList.forEach((ruangan) => {
      const gedung = ruangan.querySelector('.card-gedung')?.textContent.trim();
      const ruanganGedung = gedung?.toLowerCase().replace(/\s+/g, '-');
      const lantai = ruangan.querySelector('.card-gedung')?.textContent.trim();

      if (
        (selectedGedung === 'untirta-cilegon' && gedung === 'Letter U') ||
        (selectedGedung === 'untirta-cilegon' && gedung === 'Gedung BR') ||
        (selectedGedung === 'untirta-cilegon' && gedung === 'Gedung COE') ||
        (selectedGedung === 'untirta-sindangsari' && gedung === 'Gedung FH') ||
        (selectedGedung === 'untirta-pakupatan' && gedung === 'Pakupatan') ||
        (selectedGedung === 'untirta-ciwaru' && gedung === 'Ciwaru')
      ) {
        if (selectedLantai === 'lantai-1' && gedung === 'Letter U') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-2' && gedung === 'Gedung BR') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-3' && gedung === 'Gedung COE') {
          ruangan.style.display = 'block';
        } else if (selectedLantai === 'lantai-4' && gedung === 'Gedung FH') {
          ruangan.style.display = 'block';
        } else {
          ruangan.style.display = 'none';
        }
      } else {
        ruangan.style.display = 'none';
      }
    });
  }

  // Aktifkan filter saat user klik
  gedungRadio.forEach((radio) => radio.addEventListener('change', filterRuangan));
  lantaiRadio.forEach((radio) => radio.addEventListener('change', filterRuangan));

  // Jalankan di awal
  filterRuangan();
});

// todo: add card status
const cardStatus = document.querySelectorAll('.card-status')

cardStatus.forEach((item) => {
  const status = item.getAttribute('class').split(' ')[1]
  console.log(status)

  const statusText = ['Available', 'Unavailable', 'Booking', 'Done']
  const result = statusText.find((item) => item.toLowerCase() === status)
  console.log(result)
  
  item.textContent = result;
})
/*
// todo: disable lantai 3 button for 'gedung-serbaguna'
const gedungRadio = document.querySelectorAll('input[name="gedung"]');
const lantai3Radio = document.querySelector('label[for="lantai-3"]');

// Fungsi untuk menangani pemilihan gedung
gedungRadio.forEach(item => {
  item.addEventListener('click', (el) => {
    let selectedGedung = item.getAttribute("id"); 
    console.log(selectedGedung);

    // Pastikan Gedung COE tidak menonaktifkan lantai-3
    if (selectedGedung === 'gedung-serbaguna') {
      lantai3Radio.previousElementSibling.setAttribute('disabled', true);
      lantai3Radio.classList.add('disabled');
    } else {
      lantai3Radio.previousElementSibling.setAttribute('disabled', false);
      lantai3Radio.classList.remove('disabled');
    }
  });
});

*/