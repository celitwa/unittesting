(function(cms) {
    
    cms.Component = this;
    
    var Component = function(element, ns) { 
        this.element = element;
        this.cn = element.className;
        this.currentMode = "edit";

        initialize();

        this.initialize = function(element) {
            this.addComponent();
        };

        this.setEdit = function() {
            this.currentMode = "edit";
            toggleMode();
        };

        this.setPreview = function() {
            this.currentMode = "publish";
            toggleMode();
        };

        this.toggleMode = function() {
            var previousMode = this.currentMode == "edit" ? "publish" : "edit";
            if(this.cn.indexOf(previousMode) > - 1 ){
                element.classList.remove(previousMode);
            }
            element.classList.add(currentMode);
        };

        this.addComponent = function() {
            document.body.appendChild(element);
        }
    };
})(window.cms); 