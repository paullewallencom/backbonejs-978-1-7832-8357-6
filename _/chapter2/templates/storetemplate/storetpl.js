var TplManager = {
    templates: {}
};

TplManager.templates.userProfile = [
    '<h3> <%= name %> </h3>',
    '<img src="<%= avatar %>" />',
    '<p>Address : <%= address %></p>'
].join('\n');

TplManager.templates.userLogin = [
    '<ul>',
    '<li>Username: <input type="text" value="<%= username %>"/></li>',
    '<li>Password: <input type="password" value="<%= password %>"/></li>',
    '</ul>'
].join('\n');

var UserView = Backbone.View.extend({
	template : _.template(TplManager.templates.userLogin),
	render : function(){
		this.$el.html(this.template({
			username : 'johndoe',
			password : 'john'
		}));

		return this;
	}
});	

$(document.body).html(new UserView().render().el);