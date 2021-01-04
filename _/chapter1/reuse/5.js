// Pagination constructor function
var Pagination = function (noOfItemsInPage) {
	this.currentPage = 1;
	this.noOfItemsInPage = noOfItemsInPage;
}

// Use Underscore's extend method to add properties to your plugin
_.extend(Pagination.prototype, {
	nextPage: function () {},
	prevPage: function () {}
});

var paging1 = new Pagination(10);
var paging2 = new Pagination(20);
