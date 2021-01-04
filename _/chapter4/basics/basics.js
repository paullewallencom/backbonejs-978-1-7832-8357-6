var User = Backbone.Model.extend({
    defaults : {
        z : {}
    },
    initialize : function(){
        this.on('change', function(){
            console.log('User model changed!');
        });
    }
});

var Users = Backbone.Collection.extend({
    model: User,
    url : '/users',
    initialize : function(){
        this.on('change', function(){
            console.log('Users collection changed!');
        });
    }
});

var users = new Users(),
newUser = new User({
    name : 'Jayashi De',
    age : 21
});

users.add([newUser]);

newUser.set('age', 22);


var User = Backbone.Model.extend({
    defaults : {
        hobbies : []
    }
});

var user1 = new User(),
user2 = new User();

user1.get('hobbies').push('photography');
user2.get('hobbies').push('biking');

console.log(user1.get('hobbies'));