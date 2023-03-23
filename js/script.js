let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}
