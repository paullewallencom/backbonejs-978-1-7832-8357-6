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

// A simpler view class
var UserItemView = BaseView.extend({
	tagName: 'div',
	template: '<span><%= name %></span>'
});
