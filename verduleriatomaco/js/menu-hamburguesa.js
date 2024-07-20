document.addEventListener('DOMContentLoaded', function(){
    const hamburguer = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburguer.addEventListener('click', () =>{
        navList.classList.toggle('show');
    });
});