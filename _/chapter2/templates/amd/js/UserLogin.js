// AMD Module definition with dependencies
define([
        'backbone',
        'underscore',

        // text plugin that gets any file content as text
        'text!../templates/userLogin.html'
    ],
    function(Backbone, _, userLoginTpl) {
        'use strict';

        var UserLogin = Backbone.View.extend({
        	// Compile the template string that we received 
            template: _.template(userLoginTpl),
            render: function() {
                this.$el.html(this.template({
                    username: 'johndoe',
                    password: 'john'
                }));

                return this;
            }
        });

        return UserLogin;
    });
