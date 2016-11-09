var chinese = [{
	"title": "Asian Bistro",
	"link": ""
}, {
	"title": "J Wok",
	"link": ""
}, {
	"title": "Dragon's Den",
	"link": ""
}, {
	"title": "Spicy House Coronado",
	"link": ""
}, {
	"title": "Panda Inn",
	"link": ""
}, {
	"title": "Hong Kong Restaurant",
	"link": ""
}, {
	"title": "JinBuCha",
	"link": ""
}, {
	"title": "Panda Express",
	"link": ""
}, {
	"title": "Peking Restaurant",
	"link": ""
}, {
	"title": "Great Wall Express",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = chinese[Math.floor(Math.random() * chinese.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}