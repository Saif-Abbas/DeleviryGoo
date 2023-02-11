let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.620289, lng: 39.174940 },
    zoom: 14,
  });
}

window.initMap = initMap;