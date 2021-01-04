var Router = Backbone.Router.extend({
	routes : {
		'/users' : 'showAllUsers'
	},

	initialize : function(){
		 this.route(/^user\/(\d+)/, 'showUserDetails');
	},

	showAllUsers : function(){},

	showUserDetails : function(id){
		console.log('Test regex user id = ', id)
	}
});

var router = new Router();

Backbone.history.start();