_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

// User Model
var User = Backbone.Model.extend({
    defaults: {
        avatar: '',
        name: '',
        email: '',
        phone: '',
        twitter: ''
    }
});

// Users collection
var Users = Backbone.Collection.extend({
    model: User
});

// UserItem sub view
var UserItem = Backbone.View.extend({
    tagName: 'li',
    template: '#tpl_user_item',
    manage: true,
    events: {
        'click a': 'showDetails'
    },

    // Layoutmanager uses serialize method to apply the data into template
    serialize: function() {
        return this.model.toJSON();
    },

    showDetails: function() {    
        // Check if details view exists
        var detailsView = mainLayout.getView('.user-details');

        // If details view doesn't exist, create one, set the new model and render it
        if (!detailsView) {
            mainLayout.setView('.user-details', new UserDetails().setModel(this.model).render());
        } else {
            // Set the latest clicked model and re-render
            detailsView.setModel(this.model).render();
        }
    }
});

// User List view
var UserList = Backbone.View.extend({
    tagName: 'ul',
    className: 'nav nav-tabs nav-stacked',
    manage: true,

    // Before rendering the list, insert all the child list item into it
    beforeRender: function() {
        this.collection.each(function(model) {
            this.insertView(new UserItem({
                model: model
            }));
        }, this);
    }
});

// User Details view
var UserDetails = Backbone.View.extend({
    manage: true,
    template: '#tpl_user_details',

    serialize: function() {
        return this.model.toJSON();
    },

    // Set the selected model 
    setModel: function(model) {
        if (model) {
            this.model = model;
        }

        return this;
    }
});

// Create a coolection with some data
var users = new Users([{
    name: 'John Doe',
    avatar: 'avatar.png',
    phone: '+88-888-8888',
    twitter: 'johndoe',
    email: 'johndoe@example.com'
}, {
    name: 'Swarnendu De',
    avatar: 'avatar.png',
    phone: '+99-999-9999',
    twitter: 'swarnendude',
    email: 'swarnendude@example.com'
},{
    name: 'Dan Smith',
    avatar: 'avatar.png',
    phone: '+88-888-8888',
    twitter: 'johndoe',
    email: 'johndoe@example.com'
}, {
    name: 'Crish Hall',
    avatar: 'avatar.png',
    phone: '+99-999-9999',
    twitter: 'swarnendude',
    email: 'swarnendude@example.com'
},{
    name: 'Adam Cloe',
    avatar: 'avatar.png',
    phone: '+88-888-8888',
    twitter: 'johndoe',
    email: 'johndoe@example.com'
}, {
    name: 'Matt Green',
    avatar: 'avatar.png',
    phone: '+99-999-9999',
    twitter: 'swarnendude',
    email: 'swarnendude@example.com'
}]);

// Define the main layout
var MainLayout = Backbone.Layout.extend({
    template: "#tpl_main_content",

    // Assign the view to specific selectors
    views: {
        '.user-list': new UserList({
            collection: users
        })
    }
});

// Instantiate and render the layout
var mainLayout = new MainLayout();
$(document.body).append(mainLayout.render().el);
