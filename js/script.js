// FAQ Interaktif
document.querySelectorAll('.faq-question').forEach(q =>
  q.addEventListener('click', () => q.parentElement.classList.toggle('active'))
);

// Carousel Galeri
const wrap = document.querySelector('.gallery-wrapper');
const btnL = document.getElementById('leftBtn');
const btnR = document.getElementById('rightBtn');
const step = 320;

btnR.onclick = () => wrap.scrollBy({ left: step, behavior: 'smooth' });
btnL.onclick = () => wrap.scrollBy({ left: -step, behavior: 'smooth' });

// Geser pakai drag / touch
let startX, startScroll, down = false;
const start = e => { down = true; startX = (e.pageX || e.touches[0].pageX) - wrap.offsetLeft; startScroll = wrap.scrollLeft; };
const move = e => { if (!down) return; e.preventDefault(); const x = (e.pageX || e.touches[0].pageX) - wrap.offsetLeft; wrap.scrollLeft = startScroll - (x - startX) * 1.5; };
const stop = () => down = false;

['mousedown','touchstart'].forEach(ev => wrap.addEventListener(ev, start));
['mousemove','touchmove'].forEach(ev => wrap.addEventListener(ev, move));
['mouseup','mouseleave','touchend'].forEach(ev => wrap.addEventListener(ev, stop));

// Notifikasi komentar elegan
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('commentForm');
  const notif = document.getElementById('notif');

  if (!form || !notif) return; // jika elemen belum ditemukan

  form.addEventListener('submit', e => {
    e.preventDefault(); // mencegah reload
    notif.classList.add('show'); // tampilkan notifikasi
    setTimeout(() => notif.classList.remove('show'), 3500); // sembunyikan lagi
    form.reset(); // kosongkan form
  });
});
