// Curry method as described by Douglas Crockford
Function.prototype.curry = function ( ) {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function (  ) {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

// Functional mixin with cache
var DraggableMixin = (function(){
	var startDrag = function(options){
		console.log('Options = ', options);
	};
	var onDrag = function(){};

	return function(config){
		this.startDrag = startDrag.curry(config);
		this.onDrag = onDrag;

		return this;
	};
})();

var User = Backbone.Model.extend({
	defaults: {
		name: 'John Doe'
	}
});

// Parent view which has the render function
var BaseView = Backbone.View.extend({
	render: function () {
		var tpl = _.template(this.template),
		data = (this.model) ? this.model.toJSON() : {},
		html = tpl(data);

		this.$el.html(html);
		return this;
	}
});

// UserItemView already extends BaseView
var UserItemView = BaseView.extend({
	tagName : 'div',
	template : '<%= name %>'
});

// DraggableMixin method is called passing the config object 
DraggableMixin.call(UserItemView.prototype, {
	foo : 'bar'
});
// SortableMixin.call(UserItemView.prototype);

new UserItemView({
	model : new User()
}).render().startDrag();