window.cms = [];

document.addEventListener('DOMContentLoaded', function() {
   var view = document.createElement("div");
   view.innerHtml = "Hello I'm a component";
   var component = new cms.Component();

   console.log("Hi");
});