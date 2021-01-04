// AMD Module definition with dependencies
define([
        'backbone',
        'underscore',

        // text plugin that gets any file content as text
        'tpl!../templates/userLogin.html'
    ],
    function(Backbone, _, userLoginTpl) {
        'use strict';

        var UserLogin = Backbone.View.extend({
        	// Here the template is already compiled
            template: userLoginTpl,
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
