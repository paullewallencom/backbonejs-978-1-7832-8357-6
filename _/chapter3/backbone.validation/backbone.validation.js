var User = Backbone.Model.extend({
    validation: {
        name: {
            required: true
        },

        email: {
            required: true,
            pattenr: 'email'
        }
    },

    defaults: {
        name: '',
        email: ''
    }
});


var UserView = Backbone.View.extend({
    initialize: function() {
        this.model.on('invalid', this.handleError, this);
    },

    handleError: function(model, error, options) {
        console.log(error);
    }
});

var user = new User();

var userView = new UserView({
    model: user
});

// user.set({
//     name: '',
//     email: 'johndoe#www.com'
// }, {
//     validate: true
// });

console.log(user)

user.set('name', '', {
    validate: true
});

user.set('email', 'johndoe#www.com', {
    validate: true
});
