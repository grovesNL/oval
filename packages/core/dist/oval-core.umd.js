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
var OvalLogger = (function () {
    function OvalLogger(options) {
        var handler, errorHandler;
        if (options) {
            handler = wrapHandler(options.handler, false);
            errorHandler = wrapHandler(options.handler, true);
        }
        this.log = handler || wrapConsole(console.log, false);
        this.info = handler || wrapConsole(console.info, false);
        this.warn = handler || wrapConsole(console.warn, false);
        this.error = errorHandler || wrapConsole(console.error, true);
    }
    return OvalLogger;
}());
exports.OvalLogger = OvalLogger;
function logger(options) {
    return new OvalLogger(options);
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

exports['default'] = core$1;
exports.$ = core_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=oval-core.umd.js.map
