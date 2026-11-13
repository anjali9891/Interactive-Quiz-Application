document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    menuIcon.addEventListener('click', function() {
        sideNav.classList.toggle('open');
        menuIcon.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        sideNav.classList.remove('open');
        menuIcon.classList.remove('active');
    });
});
