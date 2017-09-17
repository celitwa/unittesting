describe('Title', function() {
	var testTitle,
        cmsApp;
    
    beforeEach(
    	function(done) { 
            var titleComponent = '<div class="jasmine-test-parent"><div class="component title-component" data-component="Title">'+
            '<h1 class="component-title"> Title </h1>'+
            '<label for="title-value">Title text</label><input id="title-value" type="text"/>'+
            '<div class="component-properties">'+
                '<h2 class="component-subtitle">Properties</h2>'+
                '<label for="color-value">Title color</label><input id="color-value" type="text"/>'+
                '<label for="color-login-value">Logged In title color</label><input id="color-login-value" type="text"/>'+
            '</div>'+
        '</div></div>';

        document.body.insertAdjacentHTML('beforeend', titleComponent);

        var _root = $('.jasmine-test-parent');

        cmsApp = new cms.App(_root);

        done();
    	
    	}
    );   

    afterEach ( function(){
    	
    	$('.jasmine-test-parent').remove(); 
        cmsApp = null;
    });

    it('Title color changes on logged in', function(done){
        testTitle = new cms.components.Title($('[data-component="Title"]'), cmsApp);

        var loggedColor = 'rgb(255, 0, 0)';
        testTitle.setLoggedColor(loggedColor);
        testTitle.setTitleColor('rgb(0, 255, 0)');
        cmsApp.setMode('preview');
        cmsApp.setState('loggedin');

        var componentColor = $('.title-component #title-value').css('color');

        expect(componentColor).toBe(loggedColor);
        done();
    });

});