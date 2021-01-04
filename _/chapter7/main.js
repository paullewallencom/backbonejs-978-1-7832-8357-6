// File: main.js

define([
    'app/modules/user/views/userlist',
    'app/modules/user/views/userdetails'
], function(UserList, UserDetails) {
    var myVar;

    return {
        initialize: function() {
            this.showUserList();
        },

        showUsersList: function() {
            var userList = new UserList();
            userList.show();
        },

        showUserDetails: function(userModel) {
            var userDetails = new UserDetails({
                model: userModel
            });
            userDetails.show();
        }
    };
});
