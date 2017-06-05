(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.oval = global.oval || {}, global.oval.core = global.oval.core || {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var context = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = (function () {
    function Context() {
    }
    return Context;
}());
exports.Context = Context;

});

var core = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Internals
var $ = {
    Context: context.Context
};
exports.$ = $;

});

var core$1 = unwrapExports(core);
var core_1 = core.$;

exports['default'] = core$1;
exports.$ = core_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=oval-core.umd.js.map
