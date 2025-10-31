//* JUEGO 1 *//
document.addEventListener('DOMContentLoaded', () => {
  function fadeOutAndHide(el) {
    if (!el) return;

    el.style.pointerEvents = 'none';
    el.classList.add('fade-out');
    const onEnd = (e) => {
      if (e && e.propertyName && e.propertyName !== 'opacity') return;
      el.style.display = 'none';
      el.removeEventListener('transitionend', onEnd);
    };
    el.addEventListener('transitionend', onEnd);

    setTimeout(() => { if (getComputedStyle(el).opacity === '0') el.style.display = 'none'; }, 600);
  }


  const scoreEl1 = document.querySelector('.section1 .score-board .score');
  let score1 = 0;

  const bloques = Array.from(document.querySelectorAll('.section1 .bloque.clickable'));
  bloques.forEach(b => {
    b.dataset.counted = '0';
    b.addEventListener('click', function onClick() {
      if (b.dataset.counted === '1') return;
      b.dataset.counted = '1';
      score1 += 1;
      if (scoreEl1) scoreEl1.textContent = String(score1);
      fadeOutAndHide(b);
    });
  });

  //* JUEGO 2 *//
  const scoreEl2 = document.querySelector('.section2 .score-board .score');
  let score2 = 0;

  const conos = Array.from(document.querySelectorAll('.section2 .conoo.clickable'));
  conos.forEach(c => {
    c.dataset.counted = '0';
    c.addEventListener('click', function onClick() {
      if (c.dataset.counted === '1') return;
      c.dataset.counted = '1';
    
      const val = parseInt(c.dataset.value || '1', 10);
      score2 += val;
      if (scoreEl2) scoreEl2.textContent = String(score2);
      fadeOutAndHide(c);
    });
  });

  //* JUEGO 3 *//
  const scoreEl3 = document.querySelector('.section3 .score-board .score');
  let score3 = 0;

  const rollitos = Array.from(document.querySelectorAll('.section3 .rollito.clickable'));
  rollitos.forEach(r => {
    r.dataset.counted = '0';
    r.addEventListener('click', function onClick() {
      if (r.dataset.counted === '1') return;
      r.dataset.counted = '1';
      
      const val = parseInt(r.dataset.value || '1', 10);
      score3 += val;
      if (scoreEl3) scoreEl3.textContent = String(score3);
      fadeOutAndHide(r);
    });
  });

  
  document.querySelectorAll('.animable').forEach(el => el.style.willChange = 'transform');


  //* NAVEGACIÓN ENTRE ESCENAS *//
  const escenas = Array.from(document.querySelectorAll('.escena'));
  let escenaIndex = 0;

  function showEscena(i) {
    if (!escenas.length) return;
    escenaIndex = (i + escenas.length) % escenas.length;
    escenas.forEach((s, idx) => {
      s.classList.toggle('activa', idx === escenaIndex);
    });
    
    document.querySelectorAll('.miniatura').forEach((m, idx) => {
      m.classList.toggle('active', idx === escenaIndex);
    });
  }

  
  showEscena(0);

  const btnNext = document.querySelector('.btn-siguiente');
  const btnPrev = document.querySelector('.btn-anterior');
  if (btnNext) btnNext.addEventListener('click', () => showEscena(escenaIndex + 1));
  if (btnPrev) btnPrev.addEventListener('click', () => showEscena(escenaIndex - 1));

  document.querySelectorAll('.miniatura').forEach(m => {
    m.addEventListener('click', () => {
      const idx = parseInt(m.dataset.index || '0', 10);
      showEscena(idx);
    });
  });
});
