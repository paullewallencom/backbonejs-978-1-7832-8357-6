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

// A simple object with some methods
var DraggableMixin = {
	startDrag : function(){
		// It will have the context of the main class 
		console.log('Context = ', this);
	},
	onDrag : function(){}
}

// UserItemView already extends BaseView
var UserItemView = BaseView.extend({
	tagName : 'div',
	template : '<%= itemName %>'
});

// We just copy the Mixin's properties into the View
_.extend(UserItemView.prototype, DraggableMixin, {
	otherFn : function(){}
});

var itemView = new UserItemView();

// Call the mixin's method
itemView.startDrag();

