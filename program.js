alert('coucou');

var mapElement = document.getElementById('map')
var mapOptions = {
  zoom: 14,
  center: {
    lat: 48.8566,
    lng: 2.3522
  }
};

function initMap() {
  new google.maps.Map(mapElement, mapOptions);
}