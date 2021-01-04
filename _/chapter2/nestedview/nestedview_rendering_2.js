/*************************** Nested View Rendering - 2 *****************************/

var ParentView = Backbone.View.extend({
    initialize: function() {
        this.childView = new ChildView();
    },

    render: function() {
        this.$el.html(this.template);

        // Set view's el property before rendering
        this.childView.setElement('.child-1').render();

        return this;
    }
});

/*************************** Nested View Rendering - 2 ENDS *****************************/



/*************************** Initializing sub views *****************************/

var ParentView = Backbone.View.extend({
    subViews: [],
    initialize: function() {
        this.subViews.push(new ChildView(), new ChildView()];
    },

    render: function() {
        this.$el.html(this.template);

        _(this.subViews).each(function(view) {
            this.$el.append(view.render().el);
        }, this);

        return this;
    }
});


/*************************** Initializing sub views ENDS *****************************/


/*************************** Subviews close *****************************/

var BaseView = Backbone.View.extend({
    close: function() {
    	// If the _onCLose method exists in the view, call it
        if (this._onClose) {
            this._onClose();
        }

        // Remove the view
        this.remove();
    }
});

var ParentView = BaseView.extend({
    subViews: [],

    // Dispose all subviews here
    _onClose: function() {
        _(this.subViews).each(function(view) {
            view.close();
        });
    }
});
