const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesToScroll: 1,
    spaceBetween: 15,
    // autoplay: true,
    // autoplaySpeed: 4,
    loop: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    paginationType: "bullets",
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});