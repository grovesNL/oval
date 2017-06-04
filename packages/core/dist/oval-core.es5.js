function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var core = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function oval() {
    return;
}
exports.default = oval;

});

var core$1 = unwrapExports(core);

export default core$1;
//# sourceMappingURL=oval-core.es5.js.map
