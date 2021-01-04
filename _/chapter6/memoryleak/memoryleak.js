// Memory leak
var MyView = Backbone.View.extend({
    tpl: '<%= name %> <%= age %>',
    model: new Backbone.Model({
        name: 'Suramya',
        age: 29
    }),

    initialize: function() {
        this.model.on('change', this.render, this);
    },

    render: function() {
        var html = _.template(this.tpl, this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    close: function () { 
        this.model.off('change', this.render, this);
        this.remove(); 
    } 
});

var myView = new MyView();
$(document.body).append(myView.render().el);

myView.model.set('age', 30);
myView.close();


myView.model.set('age', 32);


