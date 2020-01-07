
(function() {
    const navbarMove = document.querySelector('.navbar_main');

function scroll () {
    if (pageYOffset >= 50) {
        navbarMove.classList.add('navbar_main_active');
    }
    else {
        navbarMove.classList.remove('navbar_main_active');
    }
}
window.addEventListener('scroll', scroll);

var attr = new Array();
    for (var i = 1; i < 4; ++i) {
        attr[i] = document.getElementById(`button-span-${i}`);
    }

var sliders = new Array();
    for (var i =1; i < 4; ++i) {
        sliders[i] = document.getElementById(`slider-${i}`);
    }

attr[1].addEventListener('click', function() {
    sliders[1].classList.remove('hero_wrap_dentist_equipments_first_active');
    sliders[2].classList.remove('hero_wrap_dentist_equipments_second_active');
    sliders[3].classList.remove('hero_wrap_dentist_equipments_third_active');
});

attr[2].addEventListener('click', function () {
    sliders[1].classList.add('hero_wrap_dentist_equipments_first_active');
    sliders[2].classList.add('hero_wrap_dentist_equipments_second_active');
    sliders[3].classList.remove('hero_wrap_dentist_equipments_third_active');

});

attr[3].addEventListener('click', function() {
    sliders[1].classList.add('hero_wrap_dentist_equipments_first_active');
    sliders[2].classList.remove('hero_wrap_dentist_equipments_second_active');
    sliders[3].classList.add('hero_wrap_dentist_equipments_third_active');
});




}).call(this);