/** 
*  With a collection
**/ 

var Users = Backbone.Collection.extend({
    model: Backbone.Model,
    localStorage: new Backbone.LocalStorage("users")
});

var users = new Users();

// Add items to collection
users.add([{
    name: 'Soumendu De'
}, {
    name: 'Bikash Debroy'
}])

// Sync collection data to localstorage
users.each(function(user) {
    user.save();
});



/** 
*  With a model
**/ 

var User = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("single-user")
});

new User()
.set({
    name: 'foo'
})
.save();
