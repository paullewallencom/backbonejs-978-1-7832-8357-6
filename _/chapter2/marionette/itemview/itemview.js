var UserItemView = Marionette.ItemView.extend({
    template: _.template(['<% _.forEach(items, function(item){ %>',
        '<li><%= item.name %></li>',
        '<% }); %>'
    ].join('')),

    onRender: function() {
        // After render functionality here
    },

    onClose: function() {
        // Do some cleanup here
    }
});

var userItemView = new UserItemView({
    collection: new Backbone.Collection([{
        name: 'John Doe'
    }, {
        name: 'Dan Smith'
    }])
});

$(document.body).append(userItemView.render().el);

// Close and destroy the view after 2 seconds
setTimeout(function(){
	// userItemView.close();
}, 2000);
