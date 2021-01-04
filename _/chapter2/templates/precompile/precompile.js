var TplManager = {
    templates: {},
    cachedTemplates: {},

    getCachedTemplate: function(tplName) {
        // If compiled template already exists, return that
        if (this.cachedTemplates.hasOwnProperty(tplName)) {
            return this.cachedTemplates[tplName];
        }

        if (this.templates.hasOwnProperty(tplName)) {
            // Store the template functions 
            this.cachedTemplates[tplName] = _.template(this.templates[tplName]);
        }

        return this.cachedTemplates[tplName];
    }
};

TplManager.templates.userProfile = [
    '<h3> <%= name %> </h3>',
    '<img src="<%= avatar %> />"',
    '<p>Address : <%= address %></p>'
].join('\n');

TplManager.templates.userLogin = [
    '<ul>',
    '<li>Username: <input type="text" value="<%= username %>"/></li>',
    '<li>Password: <input type="password" value="<%= password %>"/></li>',
    '</ul>'
].join('\n');

var UserView = Backbone.View.extend({
    template : TplManager.getCachedTemplate('userLogin'),
    render : function(){
        this.$el.html(this.template({
            username : 'johndoe',
            password : 'john'
        }));

        return this;
    }
}); 

$(document.body).html(new UserView().render().el);