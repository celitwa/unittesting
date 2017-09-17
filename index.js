(function (cms, document, window) {
	document.addEventListener('DOMContentLoaded', function() {
		var app = new cms.App($('#cms'));
	});
})(window.cms = window.cms || {} ,document,window);