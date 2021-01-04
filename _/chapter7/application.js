// File: application.js

define([
    'underscore',
    'backbone',
    'router'
], function(_, Backbone, Router) {
    var PubSub = _.extend({}, Backbone.Events);

    var Application = function() {
        // Do useful stuff here
    }

    _.extend(Application.prototype, {
        pubsub: new PubSub(),
        init: function() {
          Backbone.history.start();
        }
    });

    return Application;
});
