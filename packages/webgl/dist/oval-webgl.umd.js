(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.oval = global.oval || {}, global.oval.webgl = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function unwrapExports$1 (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var context$1 = createCommonjsModule$1(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = (function () {
    function Context() {
    }
    return Context;
}());
exports.Context = Context;

});

var core = createCommonjsModule$1(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Internals
var $ = {
    Context: context$1.Context,
};
exports.$ = $;

});

var core$1 = unwrapExports$1(core);
var core_1 = core.$;





var ovalCore_es5 = Object.freeze({
	$: core_1,
	default: core$1
});

var info_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Info = (function () {
    function Info() {
        /* TODO */
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("webgl2");
        this.MAX_COLOR_TARGETS = context.getParameter(context.MAX_COLOR_ATTACHMENTS);
    }
    return Info;
}());
function info() {
    return new Info();
}
exports.default = info;

});

var oval_core_1 = ( ovalCore_es5 && core$1 ) || ovalCore_es5;

var context_1 = createCommonjsModule(function (module, exports) {
"use strict";
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });


var Context = (function (_super) {
    __extends(Context, _super);
    function Context() {
        var _this = _super.call(this) || this;
        _this.$info = info_1.default();
        return _this;
    }
    return Context;
}(oval_core_1.$.Context));
function context() {
    return new Context();
}
exports.default = context;

});

var webgl = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.default = context_1.default;

});

var webgl$1 = unwrapExports(webgl);

return webgl$1;

})));
//# sourceMappingURL=oval-webgl.umd.js.map
