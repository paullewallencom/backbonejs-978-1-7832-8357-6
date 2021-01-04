var User = Backbone.Model.extend({
    defaults: {
        name: ''
    },

    // Split the name to provide an array of first and last name
    getNameAsArray: function() {
        return this.get('name').split(' ');
    }
});

module("Should work when getNameAsArray method is called", {
    setup: function() {
        this.user = new User();

        // Use a stub to replace the getNameAsArray method
        this.userStub = sinon.stub(this.user, "getNameAsArray");
        this.userStub.returns([]);
    },

    // Restore the original method
    teardown: function() {
        this.userStub.restore();
    }
});

test('should call getNameAsArray and must return an empty array', function() {
    this.user.getNameAsArray();

    // Should return an empty array
    equal(_.isArray(this.user.getNameAsArray.returnValues[0]), true);
    equal(this.user.getNameAsArray.returnValues[0].length, 0);
});
