var User = Backbone.Model.extend({
    url: 'server.json',
    defaults: {
        name: '',
        email: ''
    },

    parse: function(response) {
        return response.user;
    },

    toJSON: function() {
        return {
            user: this.attributes
        }
    }
});

var user = new User();
user.fetch({
    success: function() {
        console.log(user.get('name'));
    }
});


user.set({
    name : 'Swarnendu',
    email : 'swarnendu@email.com'
});

user.save();