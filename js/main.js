
(function() {

const parallax_feature = document.getElementById('parallax_first');
const menuMain = document.querySelector('.navbar_main');

function scroll () {
    if (pageYOffset >= 100) {
        menuMain.classList.add('navbar_main_active');
        console.log(pageYOffset-1224);
        parallax_feature.style.backgroundPositionY = `${pageYOffset*0.5-900}px`;
        
    }
    else {
        menuMain.classList.remove('navbar_main_active');
    }
}




window.addEventListener('scroll', scroll);





}).call(this);