var american = [{
	"title": "The Lion's Share",
	"link": ""
}, {
	"title": "Maza Grill Kabob",
	"link": ""
}, {
	"title": "Local Eatery & Drinking Hole",
	"link": ""
}, {
	"title": "Claim Jumper",
	"link": ""
}, {
	"title": "Seasons 52",
	"link": ""
}, {
	"title": "Veggilish",
	"link": ""
}, {
	"title": "All American Burgers",
	"link": ""
}, {
	"title": "7 Cafe",
	"link": ""
}, {
	"title": "Quality Coast Gourmet Street Kitchen",
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

	var food = american[Math.floor(Math.random() * american.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}