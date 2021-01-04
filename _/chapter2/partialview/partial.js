var User = Backbone.Model.extend({
    defaults: {
        name: 'John Doe',
        address: 'Kolkata, India'
    }
});

var UserView = Backbone.View.extend({

    el: '#main_content',

    template: _.template(['<ul>',
        '<li><%= name %></li>',
        '<li class="address"><%= address %></li>',
        '</ul>',
        '<p><button id="change_address_btn">Change Address</button></p>'
    ].join('')),

    events: {
        'click #change_address_btn': function() {
            this.model.set({
                address: 'Bangalore, India',
                name: 'Swarnendu De'
            });
        }
    },

    initialize: function() {
        this.model.on('change:address', this.showChangedAddress, this);
    },

    render: function() {
        // We render complete view template with model's data        
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    showChangedAddress: function() {
        // We are using the same template though another template can anyway be used here
        var html = this.template(this.model.toJSON()),
            // Selector of the element whose value needs to be updated
            addressElSelector = ".address";

        // Replace only the contents of the .address element
        this.$(addressElSelector).replaceWith($(addressElSelector, html));
    }
});

var userView = new UserView({
    model: new User()
}).render();
