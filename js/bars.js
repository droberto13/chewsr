var bars = [{
	"title": "Taste & Thirst",
	"link": ""
}, {
	"title": "Stout Public House",
	"link": ""
}, {
	"title": "Prohibition",
	"link": ""
}, {
	"title": "Werewolf",
	"link": ""
}, {
	"title": "Striders",
	"link": ""
}, {
	"title": "Karl Strauss Brewing Company",
	"link": ""
}, {
	"title": "Barleymash",
	"link": ""
}, {
	"title": "El Camino",
	"link": ""
}, {
	"title": "OMNIA",
	"link": ""
}, {
	"title": "Parq Nightclub",
	"link": ""
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = bars[Math.floor(Math.random() * bars.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}