var User = Backbone.Model.extend({
    validation: {
        emailRegEx: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
    },

    defaults: {
        name: '',
        email: ''
    },

    validate: function(attr) {
    var errors = {};

    if (attr.name.length === 0) {
        errors['name'] = 'Name is required';
    }

    if (attr.email.length === 0) {
        errors['email'] = 'Email is required';
    }

    if (!this.validation.emailRegEx.test(attr.email)) {
        errors['email'] = errors['email'] || 'Please provide a valid email';
    }

    return errors;
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

user.set('name', '', { validate: true });

user.set('email', 'johndoe#www.com', { validate: true });

/******************************** All error messages together *******************************/

validate = function(attr) {
    var errors = {};

    if (attr.name.length === 0) {
        errors['name'] = 'Name is required';
    }

    if (attr.email.length === 0) {
        errors['email'] = 'Email is required';
    }

    if (!this.validation.emailRegEx.test(attr.email)) {
        errors['email'] = errors['email'] || 'Please provide a valid email';
    }

    return errors;
}
