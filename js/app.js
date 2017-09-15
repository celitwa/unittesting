(function(cms,Component){
	cms.App = App;

	var _self;

	function App(){
		_self = this;
	}

	App.prototype = Object.create(Component.prototype);
	App.prototype.constructor = App;

	App.prototype.initializeComponents = function(){

	};

	App.prototype.createComponent = function(){
		var componentName = $(this).data('component');
		var componentConstructor = components[componentName];

		if(!componentName || componentConstructor) {
			componentConstructor = Component;
		}

		return new componentConstructor(this,_self);
	};
})();