function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var logger_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addPrefix(message) {
    return "oval: " + message;
}
function wrapHandler(handler, shouldThrow) {
    return function wrapped(message) {
        return handler(addPrefix(message), shouldThrow);
    };
}
function wrapConsole(logFunction, shouldThrow) {
    return function wrapped(message) {
        message = addPrefix(message);
        logFunction(message);
        if (shouldThrow) {
            throw new Error(message);
        }
    };
}
function logger(options) {
    var handler, errorHandler;
    if (options) {
        handler = wrapHandler(options.handler, false);
        errorHandler = wrapHandler(options.handler, true);
    }
    return {
        log: handler || wrapConsole(console.log, false),
        info: handler || wrapConsole(console.info, false),
        warn: handler || wrapConsole(console.warn, false),
        error: errorHandler || wrapConsole(console.error, true)
    };
}
exports.default = logger;

});

var context = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var Context = (function () {
    function Context(options) {
        this.$logger = logger_1.default(options.log);
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

export { core_1 as $ };export default core$1;
//# sourceMappingURL=oval-core.es5.js.map
