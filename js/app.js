(function(cms, Component){
	cms.App = App;
	cms.components = [];

	var _self;

	function App(element){
		_self = this;
		this.element = element;
		this.componentClass = '.component';

		this.initializeComponents();
		this.bindEvents();
	}

	App.prototype.constructor = App;
	App.prototype.currentMode = 'edit';

	App.prototype.initializeComponents = function(){
		var _componentClass = this.componentClass;
		this.pageComponents = $(_componentClass).map(this.createComponent);
	};

	App.prototype.bindEvents = function(){
		$('#mode select').change(toggleMode);
	}

	App.prototype.createComponent = function(){
		var componentName = $(this).data('component');
		var componentConstructor = cms.components[componentName];

		if(!componentName || !componentConstructor) {
			componentConstructor = Component;
		}

		return new componentConstructor(this,_self);
	};

	function toggleMode (ev){
		var value = $(ev.currentTarget).val();

		if(_self.currentMode != value){
			_self.element.data('mode', value);
			_self.currentMode = value;

			$.each(_self.pageComponents, function(index,value){
				value.setMode(_self.currentMode);
			});

		}
	};

})(window.cms, window.cms.Component);