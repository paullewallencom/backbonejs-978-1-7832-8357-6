/*************************************** Avoid view intstantiation in router methods *****************************/

/* View instantiate inside router */
Backbone.Router.extend({
  routes: {
    "users": "showUsers"
  },

  showUsers: function() {
    var usersView = new UsersView();
    usersView.render();
    $("#user_list").html(usersView.el);
  }
});


/* View instantiate in controller */
Backbone.Router.extend({
  routes: {
    "users": "showUsers"
  },

  showUsers: function() {
    UserController.showUsers();
  }
});

// User controller - for separation of code
UserController = {
  showUsers: function() {
    var usersView = new UsersView();
    usersView.render();
    $("#user_list").html(usersView.el);
  }
}

/*************************************** Avoid view intstantiation in router methods ENDS *****************************/

