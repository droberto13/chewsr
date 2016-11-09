var italian = [{
	"title": "Salvatore's Cucina Italiana",
	"link": ""
}, {
	"title": "Flour & Barley",
	"link": ""
}, {
	"title": "Sole Luna",
	"link": ""
}, {
	"title": "New York West",
	"link": ""
}, {
	"title": "Al Teatro Panini Grill",
	"link": ""
}, {
	"title": "Caps Pizza & Bar",
	"link": ""
}, {
	"title": "City Pizzeria",
	"link": ""
}, {
	"title": "Barbusa",
	"link": ""
}, {
	"title": "Buon Appetito",
	"link": ""
}, {
	"title": "Double Standard Kitchenetta",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = italian[Math.floor(Math.random() * italian.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}