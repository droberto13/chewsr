var mexican = [{
	"title": "Cocina 35",
	"link": ""
}, {
	"title": "The Taco Stand",
	"link": ""
}, {
	"title": "Old Gallery Coffee House",
	"link": ""
}, {
	"title": "Valentines Mexican Food",
	"link": ""
}, {
	"title": "Alamilla's Mexican Food",
	"link": ""
}, {
	"title": "Lucy's Taco Shop",
	"link": ""
}, {
	"title": "Il Fornaio",
	"link": ""
}, {
	"title": "La Cocina Loca",
	"link": ""
}, {
	"title": "Mariscos Mi Gusto Es",
	"link": ""
}, {
	"title": "La Puerta",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = mexican[Math.floor(Math.random() * mexican.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}