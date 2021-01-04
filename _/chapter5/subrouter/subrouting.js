var App = {};

/************************************ All-in-one router ****************************************/
var App.BaseRouter = Backbone.Router.extend({
	routes : {
		// Generic routes
		'' : 'showHome',
		'logout' : 'doLogout',

		// User specific routes
		'users/view/:id' : 'showUserDetails',
		'users/search' : 'searchUsers',

		// Company specific routes
		'company/:id' : 'showCompanyDetails',
		'company/users' : 'showCompanyDetails'
	},

	showHome : function(){},
	doLogout : function(){},

	showUserDetails : function(){},
	searchUsers : function(){},

	showCompanyDetails : function(){},
	showCompanyDetails : function(){},
});


/************************************ Subrouter ****************************************/

var App.BaseRouter = Backbone.Router.extend({
	routes : {
		// Generic routes
		'' : 'showHome',
		'logout' : 'doLogout',

		// User specific routes
		'users/*subroute' : 'redirectToUsersModule',

		// Company specific routes
		'company/*subroute' : 'redirectToCompanyModule'
	},

	showHome : function(){},
	doLogout : function(){},

	redirectToUsersModule : function(){
		if(!App.usersRouter){
			App.usersRouter = new App.UsersRouter('/users');
		}
	},
	
	redirectToCompanyModule : function(){
		if(!App.companyRouter){
			App.companyRouter = new App.CompanyRouter('/company');
		}
	}
});

var App.UsersRouter = Backbone.SubRoute.extend({
	routes : {
		'' : 'showUsers',
		'/view/:id' : 'showUserDetails',
		'search' : 'searchUsers'
	},

	showUsers : function(){},
	showUserDetails : function(){},
	searchUsers : function(){}
});
