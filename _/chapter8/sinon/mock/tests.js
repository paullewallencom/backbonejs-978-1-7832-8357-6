var User = Backbone.Model.extend({
    defaults: {
        name: ''
    },

    // Split the name to provide an array of first and last name
    getNameAsArray: function() {
        return this.get('name').split(' ');
    }
});

test('should call getNameAsArray once and check it is called on the user model', function() {
    this.user = new User({
        name: 'Subodh Guha'
    });

    var mock = sinon.mock(this.user);

    mock.expects('getNameAsArray').once().on(this.user);
    this.user.getNameAsArray();
    mock.verify();
});
