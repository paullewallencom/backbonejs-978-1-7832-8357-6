/****************** Basic view ************************/
var UserView = Backbone.View.extend({
    render: function() {
        var html = "<h3>Backbone.js rocks!</h3>";

        this.$el.html(html);
        return this;
    }
});

var userView = new UserView();

// new UserView().render();
$(document.body).append(userView.render().el);


/****************** Event listeners *******************/

var UserView = Backbone.View.extend({
    html: '<button id="btn">Click me</button>',
    events: {
        'click #btn': 'onButtonClick',
        'click #bhaag' : function(){
            console.log('bhaag!')
        }
    },

    render: function() {
        this.$el.html(this.html);
        return this;
    },

    onButtonClick: function() {
        console.log('Button clicked');


        this.$el.append('<button id="bhaag">Bhaag</button>')
    }
});


var userView = new UserView();

// new UserView().render();
$(document.body).append(userView.render().el);
