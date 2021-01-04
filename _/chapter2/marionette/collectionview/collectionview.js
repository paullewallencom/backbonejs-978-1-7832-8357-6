// Create an ItemView instance for the child items
var UserItem = Marionette.ItemView.extend({
    tagName : 'li',
    template : '#tpl_user_item'
}); 

// Create a collection view and pass the item view class
var UsersView = Marionette.CollectionView.extend({
    tagName : 'ul',
    itemView : UserItem
});

var usersView = new UsersView({
    collection: new Backbone.Collection([{
        name: 'John Doe'
    }, {
        name: 'Dan Smith'
    }])
});

$(document.body).append(usersView.render().el);

// Close and destroy the view after 2 seconds
setTimeout(function(){
    usersView.close();
}, 2000);
