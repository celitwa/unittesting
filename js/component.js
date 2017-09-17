(function(cms) {
    
    cms.Component = Component;
    
    var _self,
        _currentMode;


    function Component(el,app) { 
        _self = this;
        this.element = $(el);
        this.app = app;

        this.initialize();
    };


    Object.defineProperty(this, "currentMode", { 
        get: function() {return _currentMode},
        set: function (value){ _currentMode = value; _self.toggleMode(); } 
    });


    Component.prototype.initialize = function() {
        this.setMode(this.app.currentMode);
    };

    Component.prototype.setMode = function(mode) {
        $(this.element).removeClass(currentMode);
        currentMode = mode;
    };

    Component.prototype.toggleMode = function() {

        $(this.element).data('currentMode', currentMode);
        $(this.element).addClass(currentMode);

    };

})(window.cms); 