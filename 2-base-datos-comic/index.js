
(function(){
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  let current = 0;
  let interval = null;
  const AUTO_MS = 5000;

  function goTo(index){
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Ir al slide ' + (i+1));
    btn.addEventListener('click', () => { goTo(i); resetTimer(); });
    dotsContainer.appendChild(btn);
  });
  
  if (dotsContainer.children[0]) dotsContainer.children[0].classList.add('active');

  prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
  nextBtn.addEventListener('click', () => { next(); resetTimer(); });

  function startTimer(){ interval = setInterval(next, AUTO_MS); }
  function resetTimer(){ clearInterval(interval); startTimer(); }

  startTimer();

  
  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', startTimer);
})();


(function(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

