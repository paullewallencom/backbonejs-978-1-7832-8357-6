/******* Method validators *********/

var User = Backbone.Model.extend({
    validation: {
        name: function(value, attr, computedState) {
            if (!value) {
                return 'Name is required';
            }
        },

        email: 'validateEmail'
    },

    validateEmail: function(value, attr, computedState) {
        if (!value) {
            return 'Email is required';
        }
    }
});

/******** Validation messages *********/
{
    name: {
        required: true,
        msg: 'Name is required'
    },

    email: [{
        required: true,
        msg: 'Email is required'
    }, {
        pattern: 'email',
        msg: 'Please provide a valid email'
    }]
}
