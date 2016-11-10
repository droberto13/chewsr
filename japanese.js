var japanese = [{
	"title": "Tajima Izakaya",
	"link": "https://www.yelp.com/biz/tajima-izakaya-san-diego-5"
}, {
	"title": "Yakitori Yakyudori & Ramen",
	"link": "https://www.yelp.com/biz/yakitori-yakyudori-and-ramen-san-diego?search_key=66803"
}, {
	"title": "Wa Dining OKAN",
	"link": "https://www.yelp.com/biz/wa-dining-okan-san-diego-2?search_key=66803"
}, {
	"title": "Tajima Ramen House",
	"link": "https://www.yelp.com/biz/tajima-ramen-house-san-diego-10?search_key=66803"
}, {
	"title": "Rakiraki Ramen & Tsukemen",
	"link": "https://www.yelp.com/biz/rakiraki-ramen-and-tsukemen-san-diego?search_key=66803"
}, {
	"title": "Izakaya Kanpai",
	"link": "https://www.yelp.com/biz/izakaya-kanpai-san-diego-4?search_key=66803"
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = japanese[Math.floor(Math.random() * japanese.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

//Loads the first search result in the alert, 6 miles from UCSD
//refer to http://stackoverflow.com/questions/13149211/yelp-api-google-app-script-oauth for yelp access
$(document).ready(function(){
//	$.post(https://api.yelp.com/oauth2/token);
	$.get("https://api.yelp.com/v3/businesses/searchlatitude=32.88435520000001&longitude=-117.23380659999998&radius=10000", function(data){
		alert("bizzName: " + businesses[0].name);
	});
});
	
for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}