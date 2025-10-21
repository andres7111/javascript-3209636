let score = 0;
const scoreEl = document.getElementById('score');
const clickableItems = document.querySelectorAll('.clickable');

clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;

    item.classList.add('fade-out');
    setTimeout(() => {
      item.style.display = 'none';
    }, 450);
  });
});

item,addEventListener("click", () => {
  item.style.filter = "grayscale(1)";
})


const nube = document.querySelector('.nube');
const tubo = document.querySelector('.tubo');

function toggleAnimation(el) {
  const state = el.style.animationPlayState;
  el.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
}

if (nube) {
  nube.addEventListener('click', () => toggleAnimation(nube));
}
if (tubo) {
  tubo.addEventListener('click', () => toggleAnimation(tubo));
}

