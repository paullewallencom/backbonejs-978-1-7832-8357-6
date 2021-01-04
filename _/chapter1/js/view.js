var MainView = Backbone.View.extend({
  el : '#main',
  render : function(){
    this.$el.html(new BaseView().render().el);
  }
});


var BaseView = Backbone.View.extend({
  template : '<h1><%= name %></h1>',
  render : function(){
    var html = _.template(this.template, {
      name : 'Swarnendu De'
    });
    this.$el.html(html);
    return this;    
  }
});

new MainView().render();