/************************ Basic filtering **************************/


var users = new Backbone.Collection([{
    name: 'John',
    company: 'A'
}, {
    name: 'Bill',
    company: 'B'
}, {
    name: 'Rick',
    company: 'A'
}]);

console.log(users.where({
    company: 'A'
}));



/*********************** Reset filtered collection *******************/

var filteredData = users.where({
    company: 'A'
});

users.reset(filteredData);

console.log(users);



/*********************** Second Collection with filtered data *******************/

var filteredData = users.where({
    company: 'A'
});

// Create a new collection that will only hold filtered data
var filteredCollection = new Backbone.Collection();

// Reset this collection every time there is a new set of filtered data
filteredCollection.reset(filteredData);

console.log(filteredCollection, users);


/*********************** Second Collection with filtered data *******************/

var FilterCollection = Backbone.Collection.extend({
    _totalData: [],
    _isFiltered: false,

    initialize: function(data) {
        // The initial data sent to collection will be saved
        if (data) {
            this._setTotalData(data);
        }

        // If some data is added later, 
        // that should refelct in _totalData 
        this.on('add', function() {
            this._setTotalData();
        }, this);
    },

    // Everytime a new data has been added to the collection
    _setTotalData: function(data) {
        this._totalData = data || this.toJSON();
    },

    // Apply a new filter to the colelction
    applyFilter: function(criteria) {
        // Clear the previous filter
        this.clearFilter();

        // Apply new filter 
        this.reset(this.where(criteria));
        this._isFiltered = true;
    },

    // Clear all filters applied to this collection
    clearFilter: function() {
        if (this._isFiltered) {
            // Reset the collection with complete data set
            this.reset(this._totalData);
            this._isFiltered = false;
        }
    }
});


var filteredCollection = new FilterCollection([{
    name: 'John',
    company: 'A'
}, {
    name: 'Bill',
    company: 'B'
}, {
    name: 'Rick',
    company: 'A'
}]);

filteredCollection.add({
    name: 'John',
    company: 'C'
});

// Filter with company
filteredCollection.applyFilter({
    company: 'A'
});

// Filter with name
filteredCollection.applyFilter({
    name: 'John'
});

console.log('filteredCollection = ', filteredCollection);
