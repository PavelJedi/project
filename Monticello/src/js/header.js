//кнопки зі скролом по навігації
let aboutBtn = document.querySelector('#about-btn');

aboutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
    });
})

let projectsBtn = document.querySelector('#projects-btn');

projectsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#section-center').scrollIntoView({
        behavior: 'smooth'
    });
})

let newsBtn = document.querySelector('#news-btn');

newsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#news').scrollIntoView({
        behavior: 'smooth'
    });
})


let contactBtn = document.querySelector('#contact-btn');

contactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('sldjf');
    document.querySelector('#cont').scrollIntoView({
        behavior: 'smooth'
    });
})



//відкриття навігації у мобайл та таблет версіях
let header = document.querySelector('.header');
let navOpenBtn = document.querySelector('.nav-opener');

navOpenBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});


//кнопка для скролу до першої секції з hero
let scrollDown = document.querySelector('#scroll-down-btn');

scrollDown.addEventListener('click', () => {
    document.querySelector('#section-center').scrollIntoView({
        behavior: 'smooth'
    });
})

//swiper header
const swiperHeader = new Swiper('.swiper-header', {

    autoplay: {
        delay: 4000,
    },
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-header',
    },
});