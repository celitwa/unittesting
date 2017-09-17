(function(cms, Component) {

 	cms.components.Title = Title;
    
    function Title(el, app) {
    	Object.getPrototypeOf(Title.prototype).constructor.call(this,el,app);
    };

    Title.prototype = Object.create(cms.Component.prototype);
	Title.prototype.constructor = Title;    

	var title,
		title_color_input,
		logged_color_input,
		title_color,
		logged_color,
		_self;

	Title.prototype.initialize = function() {

		this.title = this.element.find('#title-value')[0];
		this.title_color_input = this.element.find('#color-value')[0];
		this.logged_color_input = this.element.find('#color-login-value')[0];

		_self = this;

		Component.prototype.initialize.call(this);
	};

	Title.prototype.bindEvents = function(){

		$(this.element).find('input').on('keydown', function(event){
			var field = $(this);

			if(event.keyCode == 13) {
				_self.setValue(field.val(), field.attr('id'));    
    		}
		});
	};

	Title.prototype.setValue = function(value, id){
		switch(id){
			case 'color-value':
				_self.setTitleColor(value);
			break;
			case 'color-login-value':
				_self.setLoggedColor(value);
			break;
		}
	};

	Title.prototype.onToggleMode = function(){
        this.title.readOnly = this.isPreview;  

        if(this.isPreview){
        	this.setState(currentState);        	
        } else {
        	this.updateColor(this.title_color ||'black');
        }

    };

    Title.prototype.onToggleState = function(){
    	var color;
        if(this.isLogged){
        	color = this.logged_color || this.title_color;
        	this.updateColor(color);
        } else {
        	this.updateColor(this.title_color ||'black');
        }
    };

    Title.prototype.setLoggedColor = function(color){
      	this.logged_color = color;
    };

    Title.prototype.setTitleColor = function(color){
    	this.title_color = color;
    	this.updateColor(color);  
    };

    Title.prototype.updateColor = function(color){
    	$(this.title).css({'color': color});
    };

})(window.cms, window.cms.Component);