$(function () {//same as document.addEventllistener("dom content loaded event")
//same as document.query selector("#navbarToggle").addeventlistener..
//fixing mobile nav menu automatic collapse
	$("#navbarToggle").blur(function (event){
		var screenWidth= window.innerWidth;//width of the browser itself not screen monitor
		if(screenWidth<768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
	  console.log(responseText);
  },
  false);
});


global.$dc = dc;

})(window);
