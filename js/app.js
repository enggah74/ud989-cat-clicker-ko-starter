var initialCats = [
	{ 	"name": "Salt and Pepper Cat",
		"imgSrc": "img/22252709_010df3379e_z.jpg",
		"imgAttribution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYFdRgNf9rHQdkppGjM7Mg_PwACWxTUdElYkAfaq00jXfe0Anxg",
		"clickCount": 0,
		"nicknames": ['Casper']
	},
	{	"name": "Cute Cat",
		"imgSrc": "img/434164568_fea0ad4013_z.jpg",
		"imgAttribution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA",
		"clickCount": 0,
		"nicknames": ['Tigger']
	},
	{	"name": "Gray Cat",
		"imgSrc": "img/1413379559_412a540d29_z.jpg",
		"imgAttribution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4mdchZRSr3UmISa886P__z5aOwoIsf8MYKKWnCbFl9u7Stbz",
		"clickCount": 0,
		"nicknames": ['Shooby']
	},
	{	"name": "Standing Cat",
		"imgSrc": "img/4154543904_6e2428c421_z.jpg",
 		"imgAttribution": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWa2Jorj4uV90JfiCO5eGbLXaozO8uwpc4fMl95HvLfKDaQKjew",
		"clickCount": 0,
		"nicknames": ['Zzzzz']
	},
	{	"name": "Lying Cat",
		"imimgSrc": "img/9648464288_2516b35537_z.jpg",
		"imgAttribution": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8Uo2dgcZqUHJXbCwiRDQoIuZNjNcMo-DM0f857MGvK_6RXrQngA",
		"clickCount": 0,
		"nicknames": ['Zzzzz']
	}
];




var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observable(data.nicknames);



    this.title = ko.computed(function() {

		var title;
		var clicks = this.clickCount();

		if (clicks < 4) {
			title = "Newborn";
		} else if (clicks < 13) {
			title =  "Baby";
		} else if (clicks < 25) {
			title =  "Two-Year-Old";
		} else if (clicks < 37) {
			title =  "Toddler";
		} else if (clicks < 240) {
			title = "Teenager";
		} else if (clicks > 240) {
			title = "Adult";
		}
		return title;
    }, this);
}

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable ( this.catList() [0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}
}

ko.applyBindings(new ViewModel());