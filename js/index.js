var mexican = [{
	"title": "Cocina 35",
	"link": "https://www.yelp.com/biz/tajima-izakaya-san-diego-5"
}, {
	"title": "The Taco Stand",
	"link": "https://www.yelp.com/biz/yakitori-yakyudori-and-ramen-san-diego?search_key=66803"
}, {
	"title": "Old Gallery Coffee House",
	"link": "https://www.yelp.com/biz/wa-dining-okan-san-diego-2?search_key=66803"
}, {
	"title": "Valentines Mexican Food",
	"link": "https://www.yelp.com/biz/tajima-ramen-house-san-diego-10?search_key=66803"
}, {
	"title": "Alamilla's Mexican Food",
	"link": "https://www.yelp.com/biz/rakiraki-ramen-and-tsukemen-san-diego?search_key=66803"
}, {
	"title": "Lucy's Taco Shop",
	"link": "https://www.yelp.com/biz/izakaya-kanpai-san-diego-4?search_key=66803"
}, {
	"title": "Il Fornaio",
	"link": "https://www.yelp.com/biz/yakitori-yakyudori-and-ramen-san-diego?search_key=66803"
}, {
	"title": "La Cocina Loca",
	"link": "https://www.yelp.com/biz/wa-dining-okan-san-diego-2?search_key=66803"
}, {
	"title": "Mariscos Mi Gusto Es",
	"link": "https://www.yelp.com/biz/tajima-ramen-house-san-diego-10?search_key=66803"
}, {
	"title": "La Puerta",
	"link": "https://www.yelp.com/biz/rakiraki-ramen-and-tsukemen-san-diego?search_key=66803"
}];
var current = new Date();

var easeOutExpo = function easeOutExpo(t, b, c, d) {

	return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

var newFood = function newFood(elem) {

	var food = foods[Math.floor(Math.random() * foods.length)];

	elem.innerHTML = food.title;
	elem.href = food.link;
};

for (var i = 0; i < 100; i++) {

	var delay = easeOutExpo(i, 0, 3000, 100);

	setTimeout(function () {
		return newFood(document.querySelector('.food'));
	}, delay);
}