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
    Context: context.Context,
};
exports.$ = $;

});

var core$1 = unwrapExports(core);
var core_1 = core.$;

export { core_1 as $ };export default core$1;
//# sourceMappingURL=oval-core.es5.js.map
