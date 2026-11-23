import './styles/main.scss';

const btn = document.getElementById('btn-movil');
const menu = document.getElementById('menu-movil');

btn.onclick = function() {
  menu.classList.toggle('activo');
};
