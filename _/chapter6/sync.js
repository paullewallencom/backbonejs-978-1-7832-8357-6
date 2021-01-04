// FooApi is a public api with 'add', 'edit', 'read' 
// and 'delete' methods

var User = Backbone.Model.extend({
    // ...
    sync: function(method, model, options) {
        options || (options = {});

        switch (method) {
            case 'create':
                FooApi.add(options.data);
                break;

            case 'update':
                FooApi.edit(options.data);
                break;

            case 'delete':
                FooApi.delete({
                    id: options.data.id
                });
                break;

            case 'read':
                FooApi.read({
                    id: options.data.id
                });
                break;
        }
        // Other stuff
    }
});

var user = new User({
	name : 'Manali',
	age : 29
});

// This will call FooApi.add() method
user.save();