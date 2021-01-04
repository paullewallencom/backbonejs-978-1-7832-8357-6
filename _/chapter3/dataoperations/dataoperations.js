var User = Backbone.Model.extend({
	url : '/users'
});


/***************** Create model *******************/

var user = new User({
	name : 'Ashim De',
	age : 55
});

user.save({
	success : function(){},
	error : function(){}
});	


/***************** Update model *******************/

var user = new User({
	id : 23,
	name : 'Shankha De',
	age : 14
});

// Send PUT request to the server
user.save();	


/***************** Fetch model *******************/

var user = new User({
	id : 23
});

// Sends GET request to /users/23
user.fetch();


/***************** Destroy model *******************/

var user = new User({
	id : 23
});

user.destroy({
	success : function(){}
});