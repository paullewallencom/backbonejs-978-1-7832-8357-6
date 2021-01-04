// Functional mixin with cache
var DraggableMixin = (function() {
    var startDrag = function() {};
    var onDrag = function() {};

    return function(config) {
        this.startDrag = startDrag;
        this.onDrag = onDrag;

        return this;
    };
})();
