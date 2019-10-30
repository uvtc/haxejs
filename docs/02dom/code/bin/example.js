// Generated by Haxe 4.0.0+ef18b627e
(function ($global) { "use strict";
var Main = function() {
	console.log("src/Main.hx:11:","DOM Example");
	$(function() {
		console.log("src/Main.hx:15:","Jquery DOM ready (easy way)");
		$(".container").append("<p>Jquery DOM ready (easy way)</p>");
	});
	$(window.document).ready(function() {
		console.log("src/Main.hx:20:","Jquery DOM ready (somewhat simular to original jQuery way)");
		$(".container").append("<p>Jquery DOM ready (somewhat simular to original jQuery way)</p>");
	});
	var document = window.document;
	document.addEventListener("DOMContentLoaded",function(event) {
		console.log("src/Main.hx:26:","VanillaJs DOM ready");
		var p = document.createElement("p");
		p.innerText = "VanillaJs DOM ready";
		document.querySelector(".container").appendChild(p);
	});
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})({});
