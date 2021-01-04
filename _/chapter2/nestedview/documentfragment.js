var User = Backbone.Model.extend({
    defaults: {
        id: 0,
        name: 'John Doe'
    }
});

var Users = Backbone.Collection.extend({
    model: User
});

var UserItemView = Backbone.View.extend({
    tagName: 'li',
    template: '<%= name %>',
    events: {
        'click': 'showUserName'
    },
    render: function() {
        var tpl = _.template(this.template),
            html = tpl(this.model.toJSON());

        this.$el.html(html);
        return this;
    },

    showUserName: function() {
        console.log('Clicked user\'s name =', this.model.get('name'));
    }
});

var UsersView = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        // Clean up the view first 
        this.$el.empty();

        // Create a document fragment
        var fragment = document.createDocumentFragment();

        // Iterate over the collection and add each view emenet to the fragment
        this.collection.each(function(model) {
            fragment.appendChild(new UserItemView({
                model: model
            }).render().el);
        }, this);

        // Apend the fragment to the 
        this.$el.append(fragment);

        return this;
    }
});

var users = new Users([{
    id: 1,
    name: 'John Doe'
}, {
    id: 2,
    name: 'Dan Smith'
}]);

var usersView = new UsersView({
    collection: users
});

$(document.body).append(usersView.render().el);

console.log(users)
