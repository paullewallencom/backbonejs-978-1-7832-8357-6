// Filename: main.js 
// Require.js allows us to configure shortcut alias 
require.config({
    baseUrl: 'js',
    paths: {
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        jquery: 'lib/jquery-2.0.1',
        text: 'lib/text',

        // Views
        userLogin: 'UserLogin'
    },

    shim: {
        jquery: 'jquery',
        backbone: 'backbone',
        underscore: 'underscore'
    }
});


require(['jquery', 'userLogin'], function($, UserLogin) {
    $(document.body).append(new UserLogin().render().el);
});
