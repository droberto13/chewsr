var categories = [{
	"title": "Mexican",
	"link": "mexican.html"
}, {
	"title": "American",
	"link": "american.html"
}, {
	"title": "Italian",
	"link": "italian.html"
}, {
	"title": "Indian",
	"link": "indian.html"
}, {
	"title": "Japanese",
	"link": "japanese.html"
}, {
	"title": "Chinese",
	"link": "chinese.html"
}, {
	"title": "Vietnamese",
	"link": "vietnamese.html"
}, {
	"title": "Korean",
	"link": "korean.html"
}, {
	"title": "Greek",
	"link": "greek.html"
}, {
	"title": "French",
	"link": "french.html"
}, {
	"title": "Thai",
	"link": "thai.html"
}];


var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = categories[Math.floor(Math.random() * categories.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}