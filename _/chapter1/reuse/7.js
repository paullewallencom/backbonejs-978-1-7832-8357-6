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

// Functional mixin
var DraggableMixin = function(config){
	this.startDrag = function(){};
	this.onDrag = function(){};

	return this;
}

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
}).startDrag();

