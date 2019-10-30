// Generated by Haxe 4.0.0+ef18b627e
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new js__$Boot_HaxeError("EReg::matched");
		}
	}
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() {
	console.log("src/Main.hx:12:","thx.promise example");
	var promise = thx_promise__$Promise_Promise_$Impl_$.create(function(resolve,reject) {
		thx_Timer.delay(function() {
			if(Math.random() < 0.5) {
				resolve("success");
			} else {
				reject(new thx_Error("failure",null,{ fileName : "src/Main.hx", lineNumber : 19, className : "Main", methodName : "new"}));
			}
		},100);
	});
	thx_promise__$Promise_Promise_$Impl_$.either(promise,function(value) {
		console.log("src/Main.hx:24:","SUCCESS " + value);
	},function(error) {
		console.log("src/Main.hx:25:","ERROR " + Std.string(error));
	});
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x, x && x[0]=="0" && (x[1]=="x" || x[1]=="X") ? 16 : 10);
	if(isNaN(v)) {
		return null;
	}
	return v;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"]
	,CFunction: {_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_.__params__ = ["v"],$_)
};
var haxe_CallStack = function() { };
haxe_CallStack.__name__ = true;
haxe_CallStack.getStack = function(e) {
	if(e == null) {
		return [];
	}
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			if(haxe_CallStack.wrapCallSite != null) {
				site = haxe_CallStack.wrapCallSite(site);
			}
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe_StackItem.Method(className,methodName);
				}
			}
			var fileName = site.getFileName();
			var fileAddr = fileName == null ? -1 : fileName.indexOf("file:");
			if(haxe_CallStack.wrapCallSite != null && fileAddr > 0) {
				fileName = HxOverrides.substr(fileName,fileAddr + 6,null);
			}
			stack.push(haxe_StackItem.FilePos(method,fileName,site.getLineNumber(),site.getColumnNumber()));
		}
		return stack;
	};
	var a = haxe_CallStack.makeStack(e.stack);
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe_CallStack.callStack = function() {
	try {
		throw new Error();
	} catch( e ) {
		haxe_CallStack.lastException = e;
		var e1 = ((e) instanceof js__$Boot_HaxeError) ? e.val : e;
		var a = haxe_CallStack.getStack(e);
		a.shift();
		return a;
	}
};
haxe_CallStack.exceptionStack = function() {
	return haxe_CallStack.getStack(haxe_CallStack.lastException);
};
haxe_CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe_CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe_CallStack.itemToString = function(b,s) {
	switch(s._hx_index) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s.m;
		b.b += "module ";
		b.b += m == null ? "null" : "" + m;
		break;
	case 2:
		var col = s.column;
		var line = s.line;
		var file = s.file;
		var s1 = s.s;
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file == null ? "null" : "" + file;
		b.b += " line ";
		b.b += line == null ? "null" : "" + line;
		if(col != null) {
			b.b += " column ";
			b.b += col == null ? "null" : "" + col;
		}
		if(s1 != null) {
			b.b += ")";
		}
		break;
	case 3:
		var meth = s.method;
		var cname = s.classname;
		b.b += Std.string(cname == null ? "<unknown>" : cname);
		b.b += ".";
		b.b += meth == null ? "null" : "" + meth;
		break;
	case 4:
		var n = s.v;
		b.b += "local function #";
		b.b += n == null ? "null" : "" + n;
		break;
	}
};
haxe_CallStack.makeStack = function(s) {
	if(s == null) {
		return [];
	} else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") {
			stack.shift();
		}
		var m = [];
		var rie10 = new EReg("^   at ([A-Za-z0-9_. ]+) \\(([^)]+):([0-9]+):([0-9]+)\\)$","");
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			if(rie10.match(line)) {
				var path = rie10.matched(1).split(".");
				var meth = path.pop();
				var file = rie10.matched(2);
				var line1 = Std.parseInt(rie10.matched(3));
				var column = Std.parseInt(rie10.matched(4));
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function" ? haxe_StackItem.LocalFunction() : meth == "Global code" ? null : haxe_StackItem.Method(path.join("."),meth),file,line1,column));
			} else {
				m.push(haxe_StackItem.Module(StringTools.trim(line)));
			}
		}
		return m;
	} else {
		return s;
	}
};
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__ : true, __constructs__ : ["Some","None"]
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_.__params__ = ["v"],$_)
	,None: {_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g3 = 0;
			var _g11 = o.length;
			while(_g3 < _g11) {
				var i = _g3++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			haxe_CallStack.lastException = e1;
			var e2 = ((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str1 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var thx_Either = $hxEnums["thx.Either"] = { __ename__ : true, __constructs__ : ["Left","Right"]
	,Left: ($_=function(value) { return {_hx_index:0,value:value,__enum__:"thx.Either",toString:$estr}; },$_.__params__ = ["value"],$_)
	,Right: ($_=function(value) { return {_hx_index:1,value:value,__enum__:"thx.Either",toString:$estr}; },$_.__params__ = ["value"],$_)
};
var thx_Error = function(message,stack,pos) {
	Error.call(this,message);
	this.message = message;
	if(null == stack) {
		try {
			stack = haxe_CallStack.exceptionStack();
		} catch( e ) {
			haxe_CallStack.lastException = e;
			var e1 = ((e) instanceof js__$Boot_HaxeError) ? e.val : e;
			stack = [];
		}
		if(stack.length == 0) {
			try {
				stack = haxe_CallStack.callStack();
			} catch( e2 ) {
				haxe_CallStack.lastException = e2;
				var e3 = ((e2) instanceof js__$Boot_HaxeError) ? e2.val : e2;
				stack = [];
			}
		}
	}
	this.stackItems = stack;
	this.pos = pos;
};
thx_Error.__name__ = true;
thx_Error.fromDynamic = function(err,pos) {
	if(((err) instanceof thx_Error)) {
		return err;
	}
	return new thx_error_ErrorWrapper("" + Std.string(err),err,null,pos);
};
thx_Error.__super__ = Error;
thx_Error.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.message + "\nfrom: " + this.getPosition() + "\n\n" + this.stackToString();
	}
	,getPosition: function() {
		return this.pos.className + "." + this.pos.methodName + "() at " + this.pos.lineNumber;
	}
	,stackToString: function() {
		return haxe_CallStack.toString(this.stackItems);
	}
});
var thx_Timer = function() { };
thx_Timer.__name__ = true;
thx_Timer.delay = function(callback,delayms) {
	var id = setTimeout(callback,delayms);
	return function() {
		clearTimeout(id);
	};
};
var thx_error_ErrorWrapper = function(message,innerError,stack,pos) {
	thx_Error.call(this,message,stack,pos);
	this.innerError = innerError;
};
thx_error_ErrorWrapper.__name__ = true;
thx_error_ErrorWrapper.__super__ = thx_Error;
thx_error_ErrorWrapper.prototype = $extend(thx_Error.prototype,{
});
var thx_promise_Future = function() {
	this.handlers = [];
	this.state = haxe_ds_Option.None;
};
thx_promise_Future.__name__ = true;
thx_promise_Future.create = function(handler) {
	var future = new thx_promise_Future();
	handler($bind(future,future.setState));
	return future;
};
thx_promise_Future.prototype = {
	then: function(handler) {
		this.handlers.push(handler);
		this.update();
		return this;
	}
	,setState: function(newstate) {
		var _g = this.state;
		switch(_g._hx_index) {
		case 0:
			var r = _g.v;
			throw new thx_Error("future was already \"" + Std.string(r) + "\", can't apply the new state \"" + Std.string(newstate) + "\"",null,{ fileName : "thx/promise/Future.hx", lineNumber : 121, className : "thx.promise.Future", methodName : "setState"});
		case 1:
			this.state = haxe_ds_Option.Some(newstate);
			break;
		}
		this.update();
		return this;
	}
	,update: function() {
		var _g = this.state;
		switch(_g._hx_index) {
		case 0:
			var result = _g.v;
			var index = -1;
			while(++index < this.handlers.length) {
				var handler = this.handlers[index];
				handler(result);
			}
			this.handlers = [];
			break;
		case 1:
			break;
		}
	}
};
var thx_promise__$Promise_Promise_$Impl_$ = {};
thx_promise__$Promise_Promise_$Impl_$.__name__ = true;
thx_promise__$Promise_Promise_$Impl_$.create = function(callback) {
	var this1 = thx_promise_Future.create(function(cb) {
		try {
			callback(function(v) {
				cb(thx_Either.Right(v));
			},function(e) {
				cb(thx_Either.Left(e));
			});
		} catch( e1 ) {
			haxe_CallStack.lastException = e1;
			var future = thx_Error.fromDynamic(((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1,{ fileName : "thx/promise/Promise.hx", lineNumber : 90, className : "thx.promise._Promise.Promise_Impl_", methodName : "create"});
			cb(thx_Either.Left(future));
		}
	});
	return this1;
};
thx_promise__$Promise_Promise_$Impl_$.createUnsafe = function(callback) {
	var this1 = thx_promise_Future.create(function(cb) {
		callback(function(v) {
			cb(thx_Either.Right(v));
		},function(e) {
			cb(thx_Either.Left(e));
		});
	});
	return this1;
};
thx_promise__$Promise_Promise_$Impl_$.either = function(this1,success,failure) {
	return thx_promise__$Promise_Promise_$Impl_$.createUnsafe(function(resolve,reject) {
		this1.then(function(r) {
			try {
				switch(r._hx_index) {
				case 0:
					var e = r.value;
					failure(e);
					reject(e);
					break;
				case 1:
					var v = r.value;
					success(v);
					resolve(v);
					break;
				}
			} catch( e1 ) {
				haxe_CallStack.lastException = e1;
				var tmp = thx_Error.fromDynamic(((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1,{ fileName : "thx/promise/Promise.hx", lineNumber : 146, className : "thx.promise._Promise.Promise_Impl_", methodName : "either"});
				reject(tmp);
			}
		});
	});
};
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = "Date";
Object.defineProperty(js__$Boot_HaxeError.prototype,"message",{ get : function() {
	return String(this.val);
}});
js_Boot.__toStr = ({ }).toString;
var scope = ("undefined" !== typeof window && window) || ("undefined" !== typeof global && global) || Function("return this")();
if(!scope.setImmediate) {
	scope.setImmediate = function(callback) {
		scope.setTimeout(callback,0);
	};
}
var lastTime = 0;
var vendors = ["webkit","moz"];
var x = 0;
while(x < vendors.length && !scope.requestAnimationFrame) {
	scope.requestAnimationFrame = scope[vendors[x] + "RequestAnimationFrame"];
	scope.cancelAnimationFrame = scope[vendors[x] + "CancelAnimationFrame"] || scope[vendors[x] + "CancelRequestAnimationFrame"];
	++x;
}
if(!scope.requestAnimationFrame) {
	scope.requestAnimationFrame = function(callback1) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0,16 - (currTime - lastTime));
		var id = scope.setTimeout(function() {
			callback1(currTime + timeToCall);
		},timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};
}
if(!scope.cancelAnimationFrame) {
	scope.cancelAnimationFrame = function(id1) {
		scope.clearTimeout(id1);
	};
}
if(typeof(scope.performance) == "undefined") {
	scope.performance = { };
}
if(typeof(scope.performance.now) == "undefined") {
	var nowOffset = new Date().getTime();
	if(scope.performance.timing && scope.performance.timing.navigationStart) {
		nowOffset = scope.performance.timing.navigationStart;
	}
	var now = function() {
		return new Date() - nowOffset;
	};
	scope.performance.now = now;
}
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=example.js.map