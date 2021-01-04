// Objects as attribute in defaults
var User = Backbone.Model.extend({
    defaults: {
        hobbies: []
    }
});

var user1 = new User(),
    user2 = new User();

user1.get('hobbies').push('photography');
user2.get('hobbies').push('biking');

console.log(user1.get('hobbies'));
// Output => ["photography", "biking"]



// Using function as value of defaults
var User = Backbone.Model.extend({
    defaults: function() {
        console.log('called defaults function')
        return {
            hobbies: []
        }
    }
});

var user1 = new User(),
    user2 = new User();

user1.get('hobbies').push('photography');
user2.get('hobbies').push('biking');

console.log(user1.get('hobbies'));
// Output => ["photography", "biking"]
