let navigation = document.querySelector('.header__navigation');
let menuButton = document.querySelector('.header__menu');
let navigationCross = document.querySelector('.navigation__cross');

menuButton.addEventListener('click', function () {
    navigation.classList.add('show-navigation');
})

navigationCross.addEventListener('click', function () {
    navigation.classList.remove('show-navigation');
})

var miniSlider = tns({
    container: ".slider-mini",
    mouseDrag: true,
    gutter: 20,
    autoWidth: true,
    nav: false,
    controls: true,
    // autoplay: true,
    autoplayButtonOutput: false,
    loop: true,
    items: 4,
    speed: 400,
    controlsContainer: ".mini-controls",
    prevButton: ".mini-prev",
    nextButton: ".mini-next",
    slideBy: 1,
});

//popup

let modalOverlay = document.querySelector('.modal__overlay');
let popup = document.querySelector('.modal__popup');
let popupCross = document.querySelector('.popup__cross');
let eventsButton = document.querySelector('.events__button');
let popupName = document.querySelector('.popup__name');
let popupForm = document.querySelector('.popup__form');

eventsButton.addEventListener('click', function (event) {
    event.preventDefault();
    modalOverlay.classList.add('show-modal');
    popupName.focus();
})

popupCross.addEventListener('click', function () {
    modalOverlay.classList.remove('show-modal');
})

// AJAX

popupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let form = new FormData(popupForm);

    request.send(form);

    popupForm.reset();

    request.addEventListener('readystatechange', function () { // отлавливаем изменения на сервере
        if (request.readyState === 4 && request.status == 200) { // состояние запроса и сервера
            popupForm.innerHTML = "Мы вас скоро перезвоним, спасибо";
        } else {
            popupForm.innerHTML = 'что-то пошло не так';
        }
    })
})