const menu = document.getElementById('menu');
const nav = document.getElementById('menu-navegacion');

let stateMenu = false;
menu.addEventListener('click', () => {
    if (!stateMenu) {
        nav.classList.remove('oculto');
        nav.classList.add('visible');
    }else{
        nav.classList.remove('visible');
        nav.classList.add('oculto');
    }
    stateMenu = !stateMenu;
})