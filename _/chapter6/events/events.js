var Login = Backbone.View.extend({
    'click #login' : 'doLogin',
    doLogin : function(){
        var me = this;

        $.ajax({
            url : 'login.json',
            method : 'POST',
            data : {
                username : 'foo',
                password : 'foo'
            },
            success : function(response){
                me.trigger('loggedin', response, 'foo', 'bar');
            }
        });
    }
});

var login = new Login();

login.on('loggedin', function(response, foo, bar){
    console.log(response, foo, bar);
});

login.doLogin();