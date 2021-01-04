var User = Backbone.Model.extend({
    defaults: {
        name: ''
    },

    // Split the name to provide an array of first and last name
    getNameAsArray: function() {
        return this.get('name').split(' ');
    }
});


test('should call getNameAsArray and return an array', function() {
    this.user = new User({
        name: 'Krishnendu Saha'
    });

    // Added a spy on the the "getNameAsArray" method
    sinon.spy(this.user, 'getNameAsArray'); // or this.spy()
    this.user.getNameAsArray();

    // We check whether the method is called only once
    ok(this.user.getNameAsArray.calledOnce);

    // We check whether the returned value of this method is an array
    equal(_.isArray(this.user.getNameAsArray.returnValues[0]), true);
});
