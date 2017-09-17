(function(cms) {
    
    cms.Component = Component;
    
    var _self,
        _currentMode,
        _currentState;


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

    Object.defineProperty(this, "currentState", { 
        get: function() {return _currentState},
        set: function (value){ _currentState = value; _self.toggleState(); } 
    });

    Component.prototype.isLogged = false;

    Component.prototype.initialize = function() {
        this.setMode(this.app.currentMode);
        this.setState(this.app.currentState);
        this.bindEvents();
    };

    Component.prototype.bindEvents = function() {

    };

    Component.prototype.setMode = function(mode) {
        $(this.element).removeClass(currentMode);
        this.isPreview = mode == 'preview';
        currentMode = mode;
    };

    Component.prototype.setState = function(state) {
        if(currentState){
            $(this.element).removeClass(currentState);
        }

        this.isLogged = state == 'loggedin';
        currentState= state;

    };

    Component.prototype.toggleMode = function() {

        $(this.element).attr('data-currentMode', currentMode);
        $(this.element).addClass(currentMode);
        this.onToggleMode();

    };


    Component.prototype.toggleState = function() {
        $(this.element).attr('data-currentState', currentState);
        $(this.element).addClass(currentState);
        this.onToggleState();
    };

    Component.prototype.onToggleMode = function(){
        
    };

    Component.prototype.onToggleState = function(){
        
    };

})(cms); 