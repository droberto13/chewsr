var cafe = [{
	"title": "Cafe Dell Alba",
	"link": ""
}, {
	"title": "Elixir Espresso Bar",
	"link": ""
}, {
	"title": "Kuma Cafe",
	"link": ""
}, {
	"title": "Achilles Coffee Roasters",
	"link": ""
}, {
	"title": "7 Cafe",
	"link": ""
}, {
	"title": "Brickyard Coffee & Tea",
	"link": ""
}, {
	"title": "Extraordinary Desserts",
	"link": ""
}, {
	"title": "Copa Vida",
	"link": ""
}, {
	"title": "SweetBricks",
	"link": ""
}, {
	"title": "Gelato Paradiso",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = cafe[Math.floor(Math.random() * cafe.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}