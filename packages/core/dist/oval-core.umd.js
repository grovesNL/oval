(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.oval = global.oval || {}, global.oval.core = factory());
}(this, (function () { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var core_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function core() {
    return;
}
exports.default = core;

});

var core = unwrapExports(core_1);

return core;

})));
//# sourceMappingURL=oval-core.umd.js.map
