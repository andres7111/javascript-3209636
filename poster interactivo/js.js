//*Juego 1 //*
const container = document.querySelectorAll('.game-container');

container.forEach(container => {
  let score = 0;
  const scoreEl = container.querySelector('.score');
  const clickableItems = container.querySelectorAll('.clickable');

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      score++;
      if (scoreEl) scoreEl.textContent = score;

      item.classList.add('fade-out');
      setTimeout(() => {
        item.style.display = 'none';
      }, 450);
    });
  });

  const nube = container.querySelector('.nube');
  const tubo = container.querySelector('.tubo');

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
});

//*Juego 2//*

const containers = document.querySelectorAll('.game-container2');

containers.forEach(container => {
  let score = 0;
  const scoreEl = container.querySelector('.score');
  const clickableItems = container.querySelectorAll('.clickable');

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      score++;
      if (scoreEl) scoreEl.textContent = score;

      item.classList.add('fade-out');
      setTimeout(() => {
        item.style.display = 'none';
      }, 450);
    });
  });


  const banderas = container.querySelector('.banderas');
  const carro = container.querySelector('.carro');

  function toggleAnimation(el) {
    const state = el.style.animationPlayState;
    el.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
  }

  if (banderas) {
    banderas.addEventListener('click', () => toggleAnimation(banderas));
  }
  if (carro) {
    carro.addEventListener('click', () => toggleAnimation(carro));
  }
});

//*Juego 3//*

const containerss3 = document.querySelectorAll('.game-containerss3');

containerss3.forEach(container => {
  let score = 0;
  const scoreEl = container.querySelector('.score');
  const clickableItems = container.querySelectorAll('.clickable');

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      score++;
      if (scoreEl) scoreEl.textContent = score;

      item.classList.add('fade-out');
      setTimeout(() => {
        item.style.display = 'none';
      }, 450);
    });
  });

  const cubo = container.querySelector('.cubo');
  const chuzos = container.querySelector('.chuzos');

  function toggleAnimation(el) {
    const state = el.style.animationPlayState;
    el.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
  }

  if (cubo) {
    cubo.addEventListener('click', () => toggleAnimation(cubo));
  }
  if (chuzos) {
    chuzos.addEventListener('click', () => toggleAnimation(chuzos));
  }
});



