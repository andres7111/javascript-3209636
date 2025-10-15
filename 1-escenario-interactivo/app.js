const btn = document.getElementById('cambiarColor');
const colorA = '#FFDAB9';
const colorB = '#078047ff';
let activoA = true;

document.body.style.transition = 'background-color 300ms ease';
document.body.style.backgroundColor = colorA;

btn.addEventListener('click', () => {
    activoA = !activoA;
    document.body.style.backgroundColor = activoA ? colorA : colorB;
});
