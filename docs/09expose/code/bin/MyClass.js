// Generated by Haxe 4.0.0+ef18b627e
(function ($hx_exports, $global) { "use strict";
var MyClass = $hx_exports["MyClass"] = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, {});
