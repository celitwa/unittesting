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
	App.prototype.currentState = 'loggedin';

	App.prototype.initializeComponents = function(){
		var _componentClass = this.componentClass;
		this.pageComponents = $(_componentClass).map(this.createComponent);
	};


	App.prototype.bindEvents = function(){
		$('#mode select#view-mode').change(listenChange);
		$('#mode select#login-state').change(listenChange);
	}

	App.prototype.createComponent = function(){
		var componentName = $(this).data('component');
		var componentConstructor = cms.components[componentName];

		if(!componentName || !componentConstructor) {
			componentConstructor = Component;
		}

		return new componentConstructor(this,_self);
	};

	App.prototype.setMode = function(value){
		this.currentMode = value;
		this.toggleMode(value);
	};

	App.prototype.setState= function(value){
		if(this.currentMode == 'preview'){
			this.currentState = value;
			this.toggleState(value);
		}
	};

	function listenChange(ev) {
		var value = $(ev.currentTarget).val();

		switch($(ev.currentTarget).attr('id')){
			case 'view-mode':
				_self.setMode(value);
			break;
			case 'login-state':
				_self.setState(value);
			break;
		}
	};

	App.prototype.toggleMode= function(value){		
		$(_self.element).attr('data-mode', value);

		$.each(_self.pageComponents, function(index,value){
			value.setMode(_self.currentMode);
		});
	};

	App.prototype.toggleState = function(value){
		$(_self.element).attr('data-state', value);

		$.each(_self.pageComponents, function(index,value){
			value.setState(_self.currentState);
		});
	};

})(cms, cms.Component);