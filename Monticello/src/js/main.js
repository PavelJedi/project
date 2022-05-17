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
        el: ".pagination1",
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
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 40.64,
            lng: -73.93
        },
        zoom: 11,
    });

    //   var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    //   var marker = new google.maps.Marker({
    //     position:{
    //         lat: 40.64, 
    //          lng: -73.93
    //     },
    //     map: map,
    //     icon: iconBase + 'Pin.png'
    //   });

    new google.maps.Marker({
        position: {
            lat: 40.64,
            lng: -73.93
        },
        map,
        title: "Anything"
    });
}

window.initMap = initMap;