var map;
var infowindow;

/*
 * The results are taken from Google Maps API
 */
function initMap() {
  var pyrmont = {lat: 32.880621, lng: -117.238955}; //TODO this only finds places close to UCSD

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    keyword: "japanese",
    radius: 8000, //TODO make this radius (in meters) customizable
    type: ['restaurant']
  }, callback);
}

/*
 * Creates an array containing the names of locations based on above search
 */
var japanese = [];
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      japanese.push(results[i].name);
    }
  }
}

/*
 * Randomizer code
 */
var current = new Date();
var easeOutExpo = function easeOutExpo(t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {
  var food = japanese[Math.floor(Math.random() * japanese.length)];
  elem.innerHTML = food;
};
for (var i = 0; i < 100; i++) {
  var delay = easeOutExpo(i, 0, 3000, 100);
  setTimeout(function () {
    return newFood(document.querySelector('.food'));
  }, delay);
}