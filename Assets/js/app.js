const iconopenMenu = document.getElementById('open-menu');
const menuMobile = document.getElementById('menu-mobile');
const iconcloseMenu = document.getElementById('close-menu-mobile');

iconopenMenu.addEventListener('click', function(e) {
    menuMobile.classList.add('active');
});

iconcloseMenu.addEventListener('click', function(e) {
    menuMobile.classList.remove('active');
});