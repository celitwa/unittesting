(function (cms, document, window) {
	document.addEventListener('DOMContentLoaded', function() {
		var app = new cms.App();
		console.log(cms);
		console.log("Hi");
	});
})(window.cms = window.cms || {} ,document,window);