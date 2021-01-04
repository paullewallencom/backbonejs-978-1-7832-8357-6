/* Comment out others blocks of A, B, C while testing one block */

/* A. Basic Test Case */

Function to check a prime number
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

test('Test a prime number', function(){
	expect(2);
	ok(isPrime(3), '3 is a prime number');
	equal(isPrime(8), false, '8 is not a prime number');
});

/* B. QUnit module (), setup () and teardown () */

module('1st module', {
	setup : function(){
		// Runs before each test
	},
	teardown: function(){
		// Runs after each test
	}
});
test('Test 1', function(){});
test('Test 1', function(){});

module('2nd module');
test('Test 1', function(){});

/* C. Test Backbone.js Components */

var User = Backbone.Model.extend({
	defaults : {
		name : 'Swapan Guha',
		age : 56
	}
});

module('User model tests', {
	setup : function(){
		this.user = new User();
		this.user.set('age', 62);
	}
});

test('Can be instantiated with a default name and age to be set', function(){
	expect (2);

	equal(this.user.get('name'), 'Swapan Guha');
	equal(this.user.get('age'), 64);
});
