var Cat = function() {
	this.clickCount = ko.observable(0);
	console.dir(this.clickCount());
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

	this.names = ko.observableArray([
        {name: "Tabtab"},
        {name: "T-Bone"},
        {name: "Mr. T"},
        {name: "Tabitha Tab Tabby Catty Cat"},
    ]);

    this.level = ko.computed(function() {
		var title;

		if (this.clickCount() < 3) {
			title = "Newborn";
		} else if (this.clickCount() < 13) {
			title =  "Baby";
		} else if (this.clickCount() < 25) {
			title =  "Two-Year-Old";
		} else if (this.clickCount() < 37) {
			title =  "Toddler";
		} else if (this.clickCount() < 240) {
			title = "Teenager";
		} else if (this.clickCount() > 240) {
			title = "Adult";
		}
		return title;
    }, this);
}

var ViewModel = function() {

	this.currentCat = ko.observable (new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());