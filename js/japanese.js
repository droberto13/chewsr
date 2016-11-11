
/*
 * The results are taken from Google Maps API
 * Refer to https://developers.google.com/maps/documentation/javascript/places
 */
var map;
var infowindow;
var service;
function initMap() {
  var pyrmont = {lat: 32.880621, lng: -117.238955}; //TODO this only finds places close to UCSD, make this current location

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    keyword: "japanese", //this is the keyword to search places for
    radius: 8000, //TODO make this radius (in meters) customizable based off index screen
    type: ['restaurant'] //you could also change this too if you like; for list of types see https://developers.google.com/places/supported_types
  }, callback);
}



/*
 * Creates array containing the locations based on above search
 */
var names = [];
var rating = [];
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
//      if(results[i].opening_hours.open_now){ //only shows locations currently open
        names.push(results[i].name);
        rating.push(results[i].rating);
//      }
    }
    randomize();
  }
}



/*
 * Randomizer code
 */
var current = new Date();
var index;
var randomize = function randomize(){
  for (var i = 0; i < 100; i++) {
    var delay = easeOutExpo(i, 0, 3000, 100);
    setTimeout(function () {
      return newFood(document.querySelector('.food'));
    }, delay);
  }
  /*
  service.getDetails(placeid[index], function(place, status){
    if(status == google.maps.places.PlacesServiceStatus.OK){
      for(var i = 0; i < place.photos.length; i++){
        var img = photos[i].getURL();
        document.getElementById('foodpic').src = img;
      }
    }
  });
  */
};

var easeOutExpo = function easeOutExpo(t, b, c, d) {
  return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {
  if(names.length == 0){ //if 0 results
    elem.innerHTML = "No results found :(";
  }
  else{
    index = Math.floor(Math.random() * names.length);
    var food = names[index];
    var rat = rating[index];
    elem.innerHTML = food;
    document.querySelector('.rating').innerHTML = rat;
  }
};
