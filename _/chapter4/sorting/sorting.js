var User = Backbone.Model.extend();

var Users = Backbone.Collection.extend({
    model: User,
    comparator: function(model1, model2) {
    	// If age is same, then sort by name
        if (model1.get('age') === model2.get('age')) {
            return model1.get('name') > model2.get('name');
        } else {
            return model1.get('age') > model2.get('age');
        }
    }
});


var users = new Users();
users.add([{
    name: 'John Doe',
    age: 29
}, {
    name: 'Richard Smith',
    age: 35
}, {
    name: 'Swarnendu De',
    age: 29
}, {
    name: 'Emily Johnson',
    age: 25
}, {
    name: 'Sarah Castle',
    age: 40
}, {
    name: 'Ben Cooper',
    age: 29
}]);

console.log(users.pluck('name'));
console.log(users.pluck('age'));


// comparator: function(model) {
//     return model.get('age');
// }

// comparator: function(model1, model2) {
//     return model1.get('age') < model2.get('age');
// }
