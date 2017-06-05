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

export default core;
//# sourceMappingURL=oval-core.es5.js.map
