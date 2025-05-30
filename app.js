const bouton= document.getElementById('menu-btn');
const navbar= document.querySelector('.navbar-cache');
const annulnavnar= document.querySelector('.Go');


bouton.addEventListener('click',function () {
    navbar.style.display='flex';
});

annulnavnar.addEventListener('click',function(){
    navbar.style.display='none';
});