var UserItemView = BaseView.extend({
	tagName: 'div',
	template: '<span><%= name %></span>',
	render: function(){
    	// Call the parent view’s render function
    	UserItemView.prototype.render.apply(this, arguments);

    	// Add your code here
    	this.anotherFn();
    	return this;
    },

    anotherFn : function(){}
});
