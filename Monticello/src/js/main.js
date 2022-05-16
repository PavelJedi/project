let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
         lat: 40.64, 
         lng: -73.93 },
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

