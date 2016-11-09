var seafood = [{
	"title": "Downtown Fish Joint",
	"link": ""
}, {
	"title": "Ironside Fish & Oyster",
	"link": ""
}, {
	"title": "Pacific Fish Company",
	"link": ""
}, {
	"title": "Water Grill",
	"link": ""
}, {
	"title": "Eddie V's Prime Seafood",
	"link": ""
}, {
	"title": "Pacific Standard Coastal Kitchen",
	"link": ""
}, {
	"title": "The Fish Market",
	"link": ""
}, {
	"title": "Blue Point Coastal Cuisine",
	"link": ""
}, {
	"title": "Lou & Mickey's",
	"link": ""
}, {
	"title": "Crab Hut",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = seafood[Math.floor(Math.random() * seafood.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}