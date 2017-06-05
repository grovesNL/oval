function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var webgl_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function webgl() {
    return;
}
exports.default = webgl;

});

var webgl = unwrapExports(webgl_1);

export default webgl;
//# sourceMappingURL=oval-webgl.es5.js.map
