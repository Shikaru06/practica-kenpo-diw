import './styles/main.scss';

const btnMovil = document.getElementById('btn-movil');
const menuMovil = document.getElementById('menu-movil');

// Mostrar u ocultar el menu al pulsar el boton
if (btnMovil && menuMovil) {
  btnMovil.addEventListener('click', () => {
    menuMovil.classList.toggle('activo');
  });
}
