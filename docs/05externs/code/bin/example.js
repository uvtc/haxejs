// Generated by Haxe 3.4.5
(function () { "use strict";
var Main = function() {
	console.log("Externs Example");
	console.log("MyJSClass.SOME_PROP: " + MyJSClass.SOME_PROP);
	console.log("MyJSClass.someFunc(): " + MyJSClass.someFunc());
	var _js = new MyJSClass();
	console.log("myProp: " + _js.myProp);
	_js.myFunc("Haxe Externs");
	console.log("myProp: " + _js.myProp);
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})();
