define(
    // Module dependencies
    ['jquery', 'backbone', 'underscore'],

    // This returns the complete module export
    function($, _, Backbone) {

        // Module definition
        var User = Backbone.Model.extend({});

        return User;
    });


define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        UserModel = require('app/models/user');

    var Users = Backbone.Collection.extend({
        model: UserModel
    });

    return Users;
});
