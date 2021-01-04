var User = Backbone.Model.extend({
	defaults: {
		name: 'John Doe'
	}
});

var UserItemView = Backbone.View.extend({
	tagName: 'div',
	template: '<span><%= name %></span>',
	render: function () {
		var tpl = _.template(this.template),
		html = tpl(this.model.toJSON());

		this.$el.html(html);
		return this;
	}
});

// Create a view instance passing a new model instance
var userItem = new UserItemView({
	model: new User
});

$(document.body).append(userItem.render().el);
