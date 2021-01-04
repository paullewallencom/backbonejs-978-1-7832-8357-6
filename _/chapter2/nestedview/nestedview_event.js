var User = Backbone.Model.extend({
    defaults: {
        id : 0,
        name: 'John Doe'
    }
});

var Users = Backbone.Collection.extend({
    model: User
});

var UserItemView = Backbone.View.extend({
    tagName: 'li',
    template: '<%= name %>',
    render: function() {
        var tpl = _.template(this.template),
            html = tpl(this.model.toJSON());

        this.$el.html(html);
        return this;
    }
});

var UsersView = Backbone.View.extend({
    tagName: 'ul',
    events : {
        'click li' : 'showUserName'
    },
    render: function() {
        var html = '';

        // Iterate over the collection and add each name as a list item
        this.collection.each(function(model){
            html += '<li id="' + model.get('id') + '">' + model.get('name') + '</li>';
        }, this);

        this.$el.html(html);
        return this;
    },

    showUserName : function(a,b,c){
        console.log(a,b,c)
    }
});

var users = new Users([{
    id : 1,
    name: 'John Doe'
}, {
    id : 2,
    name: 'Dan Smith'
}]);

var usersView = new UsersView({
    collection : users
});

$(document.body).append(usersView.render().el);

console.log(users)