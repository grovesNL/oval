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

var logger_1 = createCommonjsModule$1(function (module, exports) {
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

var context$1 = createCommonjsModule$1(function (module, exports) {
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

var core = createCommonjsModule$1(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Internals
var $ = {
    Context: context$1.Context
};
exports.$ = $;

});

var core$1 = unwrapExports$1(core);
var core_1 = core.$;





var ovalCore_es5 = Object.freeze({
	$: core_1,
	default: core$1
});

var common = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// All WebGL1/2 constants
exports.GL_DEPTH_BUFFER_BIT = 0x00000100;
exports.GL_STENCIL_BUFFER_BIT = 0x00000400;
exports.GL_COLOR_BUFFER_BIT = 0x00004000;
exports.GL_POINTS = 0x0000;
exports.GL_LINES = 0x0001;
exports.GL_LINE_LOOP = 0x0002;
exports.GL_LINE_STRIP = 0x0003;
exports.GL_TRIANGLES = 0x0004;
exports.GL_TRIANGLE_STRIP = 0x0005;
exports.GL_TRIANGLE_FAN = 0x0006;
exports.GL_ZERO = 0;
exports.GL_ONE = 1;
exports.GL_SRC_COLOR = 0x0300;
exports.GL_ONE_MINUS_SRC_COLOR = 0x0301;
exports.GL_SRC_ALPHA = 0x0302;
exports.GL_ONE_MINUS_SRC_ALPHA = 0x0303;
exports.GL_DST_ALPHA = 0x0304;
exports.GL_ONE_MINUS_DST_ALPHA = 0x0305;
exports.GL_DST_COLOR = 0x0306;
exports.GL_ONE_MINUS_DST_COLOR = 0x0307;
exports.GL_SRC_ALPHA_SATURATE = 0x0308;
exports.GL_FUNC_ADD = 0x8006;
exports.GL_BLEND_EQUATION = 0x8009;
exports.GL_BLEND_EQUATION_RGB = 0x8009;
exports.GL_BLEND_EQUATION_ALPHA = 0x883d;
exports.GL_FUNC_SUBTRACT = 0x800a;
exports.GL_FUNC_REVERSE_SUBTRACT = 0x800b;
exports.GL_BLEND_DST_RGB = 0x80c8;
exports.GL_BLEND_SRC_RGB = 0x80c9;
exports.GL_BLEND_DST_ALPHA = 0x80ca;
exports.GL_BLEND_SRC_ALPHA = 0x80cb;
exports.GL_CONSTANT_COLOR = 0x8001;
exports.GL_ONE_MINUS_CONSTANT_COLOR = 0x8002;
exports.GL_CONSTANT_ALPHA = 0x8003;
exports.GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004;
exports.GL_BLEND_COLOR = 0x8005;
exports.GL_ARRAY_BUFFER = 0x8892;
exports.GL_ELEMENT_ARRAY_BUFFER = 0x8893;
exports.GL_ARRAY_BUFFER_BINDING = 0x8894;
exports.GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
exports.GL_STREAM_DRAW = 0x88e0;
exports.GL_STATIC_DRAW = 0x88e4;
exports.GL_DYNAMIC_DRAW = 0x88e8;
exports.GL_BUFFER_SIZE = 0x8764;
exports.GL_BUFFER_USAGE = 0x8765;
exports.GL_CURRENT_VERTEX_ATTRIB = 0x8626;
exports.GL_FRONT = 0x0404;
exports.GL_BACK = 0x0405;
exports.GL_FRONT_AND_BACK = 0x0408;
exports.GL_CULL_FACE = 0x0b44;
exports.GL_BLEND = 0x0be2;
exports.GL_DITHER = 0x0bd0;
exports.GL_STENCIL_TEST = 0x0b90;
exports.GL_DEPTH_TEST = 0x0b71;
exports.GL_SCISSOR_TEST = 0x0c11;
exports.GL_POLYGON_OFFSET_FILL = 0x8037;
exports.GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e;
exports.GL_SAMPLE_COVERAGE = 0x80a0;
exports.GL_NO_ERROR = 0;
exports.GL_INVALID_ENUM = 0x0500;
exports.GL_INVALID_VALUE = 0x0501;
exports.GL_INVALID_OPERATION = 0x0502;
exports.GL_OUT_OF_MEMORY = 0x0505;
exports.GL_CW = 0x0900;
exports.GL_CCW = 0x0901;
exports.GL_LINE_WIDTH = 0x0b21;
exports.GL_ALIASED_POINT_SIZE_RANGE = 0x846d;
exports.GL_ALIASED_LINE_WIDTH_RANGE = 0x846e;
exports.GL_CULL_FACE_MODE = 0x0b45;
exports.GL_FRONT_FACE = 0x0b46;
exports.GL_DEPTH_RANGE = 0x0b70;
exports.GL_DEPTH_WRITEMASK = 0x0b72;
exports.GL_DEPTH_CLEAR_VALUE = 0x0b73;
exports.GL_DEPTH_FUNC = 0x0b74;
exports.GL_STENCIL_CLEAR_VALUE = 0x0b91;
exports.GL_STENCIL_FUNC = 0x0b92;
exports.GL_STENCIL_FAIL = 0x0b94;
exports.GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95;
exports.GL_STENCIL_PASS_DEPTH_PASS = 0x0b96;
exports.GL_STENCIL_REF = 0x0b97;
exports.GL_STENCIL_VALUE_MASK = 0x0b93;
exports.GL_STENCIL_WRITEMASK = 0x0b98;
exports.GL_STENCIL_BACK_FUNC = 0x8800;
exports.GL_STENCIL_BACK_FAIL = 0x8801;
exports.GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
exports.GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
exports.GL_STENCIL_BACK_REF = 0x8ca3;
exports.GL_STENCIL_BACK_VALUE_MASK = 0x8ca4;
exports.GL_STENCIL_BACK_WRITEMASK = 0x8ca5;
exports.GL_VIEWPORT = 0x0ba2;
exports.GL_SCISSOR_BOX = 0x0c10;
exports.GL_COLOR_CLEAR_VALUE = 0x0c22;
exports.GL_COLOR_WRITEMASK = 0x0c23;
exports.GL_UNPACK_ALIGNMENT = 0x0cf5;
exports.GL_PACK_ALIGNMENT = 0x0d05;
exports.GL_MAX_TEXTURE_SIZE = 0x0d33;
exports.GL_MAX_VIEWPORT_DIMS = 0x0d3a;
exports.GL_SUBPIXEL_BITS = 0x0d50;
exports.GL_RED_BITS = 0x0d52;
exports.GL_GREEN_BITS = 0x0d53;
exports.GL_BLUE_BITS = 0x0d54;
exports.GL_ALPHA_BITS = 0x0d55;
exports.GL_DEPTH_BITS = 0x0d56;
exports.GL_STENCIL_BITS = 0x0d57;
exports.GL_POLYGON_OFFSET_UNITS = 0x2a00;
exports.GL_POLYGON_OFFSET_FACTOR = 0x8038;
exports.GL_TEXTURE_BINDING_2D = 0x8069;
exports.GL_SAMPLE_BUFFERS = 0x80a8;
exports.GL_SAMPLES = 0x80a9;
exports.GL_SAMPLE_COVERAGE_VALUE = 0x80aa;
exports.GL_SAMPLE_COVERAGE_INVERT = 0x80ab;
exports.GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3;
exports.GL_DONT_CARE = 0x1100;
exports.GL_FASTEST = 0x1101;
exports.GL_NICEST = 0x1102;
exports.GL_GENERATE_MIPMAP_HINT = 0x8192;
exports.GL_BYTE = 0x1400;
exports.GL_UNSIGNED_BYTE = 0x1401;
exports.GL_SHORT = 0x1402;
exports.GL_UNSIGNED_SHORT = 0x1403;
exports.GL_INT = 0x1404;
exports.GL_UNSIGNED_INT = 0x1405;
exports.GL_FLOAT = 0x1406;
exports.GL_DEPTH_COMPONENT = 0x1902;
exports.GL_ALPHA = 0x1906;
exports.GL_RGB = 0x1907;
exports.GL_RGBA = 0x1908;
exports.GL_LUMINANCE = 0x1909;
exports.GL_LUMINANCE_ALPHA = 0x190a;
exports.GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033;
exports.GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034;
exports.GL_UNSIGNED_SHORT_5_6_5 = 0x8363;
exports.GL_FRAGMENT_SHADER = 0x8b30;
exports.GL_VERTEX_SHADER = 0x8b31;
exports.GL_MAX_VERTEX_ATTRIBS = 0x8869;
exports.GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb;
exports.GL_MAX_VARYING_VECTORS = 0x8dfc;
exports.GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d;
exports.GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c;
exports.GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872;
exports.GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd;
exports.GL_SHADER_TYPE = 0x8b4f;
exports.GL_DELETE_STATUS = 0x8b80;
exports.GL_LINK_STATUS = 0x8b82;
exports.GL_VALIDATE_STATUS = 0x8b83;
exports.GL_ATTACHED_SHADERS = 0x8b85;
exports.GL_ACTIVE_UNIFORMS = 0x8b86;
exports.GL_ACTIVE_ATTRIBUTES = 0x8b89;
exports.GL_SHADING_LANGUAGE_VERSION = 0x8b8c;
exports.GL_CURRENT_PROGRAM = 0x8b8d;
exports.GL_NEVER = 0x0200;
exports.GL_LESS = 0x0201;
exports.GL_EQUAL = 0x0202;
exports.GL_LEQUAL = 0x0203;
exports.GL_GREATER = 0x0204;
exports.GL_NOTEQUAL = 0x0205;
exports.GL_GEQUAL = 0x0206;
exports.GL_ALWAYS = 0x0207;
exports.GL_KEEP = 0x1e00;
exports.GL_REPLACE = 0x1e01;
exports.GL_INCR = 0x1e02;
exports.GL_DECR = 0x1e03;
exports.GL_INVERT = 0x150a;
exports.GL_INCR_WRAP = 0x8507;
exports.GL_DECR_WRAP = 0x8508;
exports.GL_VENDOR = 0x1f00;
exports.GL_RENDERER = 0x1f01;
exports.GL_VERSION = 0x1f02;
exports.GL_NEAREST = 0x2600;
exports.GL_LINEAR = 0x2601;
exports.GL_NEAREST_MIPMAP_NEAREST = 0x2700;
exports.GL_LINEAR_MIPMAP_NEAREST = 0x2701;
exports.GL_NEAREST_MIPMAP_LINEAR = 0x2702;
exports.GL_LINEAR_MIPMAP_LINEAR = 0x2703;
exports.GL_TEXTURE_MAG_FILTER = 0x2800;
exports.GL_TEXTURE_MIN_FILTER = 0x2801;
exports.GL_TEXTURE_WRAP_S = 0x2802;
exports.GL_TEXTURE_WRAP_T = 0x2803;
exports.GL_TEXTURE_2D = 0x0de1;
exports.GL_TEXTURE = 0x1702;
exports.GL_TEXTURE_CUBE_MAP = 0x8513;
exports.GL_TEXTURE_BINDING_CUBE_MAP = 0x8514;
exports.GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
exports.GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
exports.GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
exports.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
exports.GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
exports.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
exports.GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c;
exports.GL_TEXTURE0 = 0x84c0;
exports.GL_TEXTURE1 = 0x84c1;
exports.GL_TEXTURE2 = 0x84c2;
exports.GL_TEXTURE3 = 0x84c3;
exports.GL_TEXTURE4 = 0x84c4;
exports.GL_TEXTURE5 = 0x84c5;
exports.GL_TEXTURE6 = 0x84c6;
exports.GL_TEXTURE7 = 0x84c7;
exports.GL_TEXTURE8 = 0x84c8;
exports.GL_TEXTURE9 = 0x84c9;
exports.GL_TEXTURE10 = 0x84ca;
exports.GL_TEXTURE11 = 0x84cb;
exports.GL_TEXTURE12 = 0x84cc;
exports.GL_TEXTURE13 = 0x84cd;
exports.GL_TEXTURE14 = 0x84ce;
exports.GL_TEXTURE15 = 0x84cf;
exports.GL_TEXTURE16 = 0x84d0;
exports.GL_TEXTURE17 = 0x84d1;
exports.GL_TEXTURE18 = 0x84d2;
exports.GL_TEXTURE19 = 0x84d3;
exports.GL_TEXTURE20 = 0x84d4;
exports.GL_TEXTURE21 = 0x84d5;
exports.GL_TEXTURE22 = 0x84d6;
exports.GL_TEXTURE23 = 0x84d7;
exports.GL_TEXTURE24 = 0x84d8;
exports.GL_TEXTURE25 = 0x84d9;
exports.GL_TEXTURE26 = 0x84da;
exports.GL_TEXTURE27 = 0x84db;
exports.GL_TEXTURE28 = 0x84dc;
exports.GL_TEXTURE29 = 0x84dd;
exports.GL_TEXTURE30 = 0x84de;
exports.GL_TEXTURE31 = 0x84df;
exports.GL_ACTIVE_TEXTURE = 0x84e0;
exports.GL_REPEAT = 0x2901;
exports.GL_CLAMP_TO_EDGE = 0x812f;
exports.GL_MIRRORED_REPEAT = 0x8370;
exports.GL_FLOAT_VEC2 = 0x8b50;
exports.GL_FLOAT_VEC3 = 0x8b51;
exports.GL_FLOAT_VEC4 = 0x8b52;
exports.GL_INT_VEC2 = 0x8b53;
exports.GL_INT_VEC3 = 0x8b54;
exports.GL_INT_VEC4 = 0x8b55;
exports.GL_BOOL = 0x8b56;
exports.GL_BOOL_VEC2 = 0x8b57;
exports.GL_BOOL_VEC3 = 0x8b58;
exports.GL_BOOL_VEC4 = 0x8b59;
exports.GL_FLOAT_MAT2 = 0x8b5a;
exports.GL_FLOAT_MAT3 = 0x8b5b;
exports.GL_FLOAT_MAT4 = 0x8b5c;
exports.GL_SAMPLER_2D = 0x8b5e;
exports.GL_SAMPLER_CUBE = 0x8b60;
exports.GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
exports.GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
exports.GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
exports.GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
exports.GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a;
exports.GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
exports.GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f;
exports.GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a;
exports.GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b;
exports.GL_COMPILE_STATUS = 0x8b81;
exports.GL_LOW_FLOAT = 0x8df0;
exports.GL_MEDIUM_FLOAT = 0x8df1;
exports.GL_HIGH_FLOAT = 0x8df2;
exports.GL_LOW_INT = 0x8df3;
exports.GL_MEDIUM_INT = 0x8df4;
exports.GL_HIGH_INT = 0x8df5;
exports.GL_FRAMEBUFFER = 0x8d40;
exports.GL_RENDERBUFFER = 0x8d41;
exports.GL_RGBA4 = 0x8056;
exports.GL_RGB5_A1 = 0x8057;
exports.GL_RGB565 = 0x8d62;
exports.GL_DEPTH_COMPONENT16 = 0x81a5;
exports.GL_STENCIL_INDEX = 0x1901;
exports.GL_STENCIL_INDEX8 = 0x8d48;
exports.GL_RENDERBUFFER_WIDTH = 0x8d42;
exports.GL_RENDERBUFFER_HEIGHT = 0x8d43;
exports.GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44;
exports.GL_RENDERBUFFER_RED_SIZE = 0x8d50;
exports.GL_RENDERBUFFER_GREEN_SIZE = 0x8d51;
exports.GL_RENDERBUFFER_BLUE_SIZE = 0x8d52;
exports.GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53;
exports.GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54;
exports.GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55;
exports.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0;
exports.GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1;
exports.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2;
exports.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3;
exports.GL_COLOR_ATTACHMENT0 = 0x8ce0;
exports.GL_DEPTH_ATTACHMENT = 0x8d00;
exports.GL_STENCIL_ATTACHMENT = 0x8d20;
exports.GL_NONE = 0;
exports.GL_FRAMEBUFFER_COMPLETE = 0x8cd5;
exports.GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6;
exports.GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7;
exports.GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9;
exports.GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd;
exports.GL_FRAMEBUFFER_BINDING = 0x8ca6;
exports.GL_RENDERBUFFER_BINDING = 0x8ca7;
exports.GL_MAX_RENDERBUFFER_SIZE = 0x84e8;
exports.GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506;
exports.GL_UNPACK_FLIP_Y_WEBGL = 0x9240;
exports.GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
exports.GL_CONTEXT_LOST_WEBGL = 0x9242;
exports.GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
exports.GL_BROWSER_DEFAULT_WEBGL = 0x9244;
exports.GL_READ_BUFFER = 0x0c02;
exports.GL_UNPACK_ROW_LENGTH = 0x0cf2;
exports.GL_UNPACK_SKIP_ROWS = 0x0cf3;
exports.GL_UNPACK_SKIP_PIXELS = 0x0cf4;
exports.GL_PACK_ROW_LENGTH = 0x0d02;
exports.GL_PACK_SKIP_ROWS = 0x0d03;
exports.GL_PACK_SKIP_PIXELS = 0x0d04;
exports.GL_COLOR = 0x1800;
exports.GL_DEPTH = 0x1801;
exports.GL_STENCIL = 0x1802;
exports.GL_RED = 0x1903;
exports.GL_RGB8 = 0x8051;
exports.GL_RGBA8 = 0x8058;
exports.GL_RGB10_A2 = 0x8059;
exports.GL_TEXTURE_BINDING_3D = 0x806a;
exports.GL_UNPACK_SKIP_IMAGES = 0x806d;
exports.GL_UNPACK_IMAGE_HEIGHT = 0x806e;
exports.GL_TEXTURE_3D = 0x806f;
exports.GL_TEXTURE_WRAP_R = 0x8072;
exports.GL_MAX_3D_TEXTURE_SIZE = 0x8073;
exports.GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368;
exports.GL_MAX_ELEMENTS_VERTICES = 0x80e8;
exports.GL_MAX_ELEMENTS_INDICES = 0x80e9;
exports.GL_TEXTURE_MIN_LOD = 0x813a;
exports.GL_TEXTURE_MAX_LOD = 0x813b;
exports.GL_TEXTURE_BASE_LEVEL = 0x813c;
exports.GL_TEXTURE_MAX_LEVEL = 0x813d;
exports.GL_MIN = 0x8007;
exports.GL_MAX = 0x8008;
exports.GL_DEPTH_COMPONENT24 = 0x81a6;
exports.GL_MAX_TEXTURE_LOD_BIAS = 0x84fd;
exports.GL_TEXTURE_COMPARE_MODE = 0x884c;
exports.GL_TEXTURE_COMPARE_FUNC = 0x884d;
exports.GL_CURRENT_QUERY = 0x8865;
exports.GL_QUERY_RESULT = 0x8866;
exports.GL_QUERY_RESULT_AVAILABLE = 0x8867;
exports.GL_STREAM_READ = 0x88e1;
exports.GL_STREAM_COPY = 0x88e2;
exports.GL_STATIC_READ = 0x88e5;
exports.GL_STATIC_COPY = 0x88e6;
exports.GL_DYNAMIC_READ = 0x88e9;
exports.GL_DYNAMIC_COPY = 0x88ea;
exports.GL_MAX_DRAW_BUFFERS = 0x8824;
exports.GL_DRAW_BUFFER0 = 0x8825;
exports.GL_DRAW_BUFFER1 = 0x8826;
exports.GL_DRAW_BUFFER2 = 0x8827;
exports.GL_DRAW_BUFFER3 = 0x8828;
exports.GL_DRAW_BUFFER4 = 0x8829;
exports.GL_DRAW_BUFFER5 = 0x882a;
exports.GL_DRAW_BUFFER6 = 0x882b;
exports.GL_DRAW_BUFFER7 = 0x882c;
exports.GL_DRAW_BUFFER8 = 0x882d;
exports.GL_DRAW_BUFFER9 = 0x882e;
exports.GL_DRAW_BUFFER10 = 0x882f;
exports.GL_DRAW_BUFFER11 = 0x8830;
exports.GL_DRAW_BUFFER12 = 0x8831;
exports.GL_DRAW_BUFFER13 = 0x8832;
exports.GL_DRAW_BUFFER14 = 0x8833;
exports.GL_DRAW_BUFFER15 = 0x8834;
exports.GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49;
exports.GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a;
exports.GL_SAMPLER_3D = 0x8b5f;
exports.GL_SAMPLER_2D_SHADOW = 0x8b62;
exports.GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b;
exports.GL_PIXEL_PACK_BUFFER = 0x88eb;
exports.GL_PIXEL_UNPACK_BUFFER = 0x88ec;
exports.GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed;
exports.GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef;
exports.GL_FLOAT_MAT2x3 = 0x8b65; //tslint:disable-line
exports.GL_FLOAT_MAT2x4 = 0x8b66; //tslint:disable-line
exports.GL_FLOAT_MAT3x2 = 0x8b67; //tslint:disable-line
exports.GL_FLOAT_MAT3x4 = 0x8b68; //tslint:disable-line
exports.GL_FLOAT_MAT4x2 = 0x8b69; //tslint:disable-line
exports.GL_FLOAT_MAT4x3 = 0x8b6a; //tslint:disable-line
exports.GL_SRGB = 0x8c40;
exports.GL_SRGB8 = 0x8c41;
exports.GL_SRGB8_ALPHA8 = 0x8c43;
exports.GL_COMPARE_REF_TO_TEXTURE = 0x884e;
exports.GL_RGBA32F = 0x8814;
exports.GL_RGB32F = 0x8815;
exports.GL_RGBA16F = 0x881a;
exports.GL_RGB16F = 0x881b;
exports.GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd;
exports.GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff;
exports.GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904;
exports.GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905;
exports.GL_MAX_VARYING_COMPONENTS = 0x8b4b;
exports.GL_TEXTURE_2D_ARRAY = 0x8c1a;
exports.GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d;
exports.GL_R11F_G11F_B10F = 0x8c3a;
exports.GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;
exports.GL_RGB9_E5 = 0x8c3d;
exports.GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;
exports.GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f;
exports.GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80;
exports.GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
exports.GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84;
exports.GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85;
exports.GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88;
exports.GL_RASTERIZER_DISCARD = 0x8c89;
exports.GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a;
exports.GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b;
exports.GL_INTERLEAVED_ATTRIBS = 0x8c8c;
exports.GL_SEPARATE_ATTRIBS = 0x8c8d;
exports.GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e;
exports.GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f;
exports.GL_RGBA32UI = 0x8d70;
exports.GL_RGB32UI = 0x8d71;
exports.GL_RGBA16UI = 0x8d76;
exports.GL_RGB16UI = 0x8d77;
exports.GL_RGBA8UI = 0x8d7c;
exports.GL_RGB8UI = 0x8d7d;
exports.GL_RGBA32I = 0x8d82;
exports.GL_RGB32I = 0x8d83;
exports.GL_RGBA16I = 0x8d88;
exports.GL_RGB16I = 0x8d89;
exports.GL_RGBA8I = 0x8d8e;
exports.GL_RGB8I = 0x8d8f;
exports.GL_RED_INTEGER = 0x8d94;
exports.GL_RGB_INTEGER = 0x8d98;
exports.GL_RGBA_INTEGER = 0x8d99;
exports.GL_SAMPLER_2D_ARRAY = 0x8dc1;
exports.GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4;
exports.GL_SAMPLER_CUBE_SHADOW = 0x8dc5;
exports.GL_UNSIGNED_INT_VEC2 = 0x8dc6;
exports.GL_UNSIGNED_INT_VEC3 = 0x8dc7;
exports.GL_UNSIGNED_INT_VEC4 = 0x8dc8;
exports.GL_INT_SAMPLER_2D = 0x8dca;
exports.GL_INT_SAMPLER_3D = 0x8dcb;
exports.GL_INT_SAMPLER_CUBE = 0x8dcc;
exports.GL_INT_SAMPLER_2D_ARRAY = 0x8dcf;
exports.GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2;
exports.GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3;
exports.GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4;
exports.GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7;
exports.GL_DEPTH_COMPONENT32F = 0x8cac;
exports.GL_DEPTH32F_STENCIL8 = 0x8cad;
exports.GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;
exports.GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210;
exports.GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211;
exports.GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212;
exports.GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213;
exports.GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214;
exports.GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215;
exports.GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216;
exports.GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217;
exports.GL_FRAMEBUFFER_DEFAULT = 0x8218;
exports.GL_DEPTH_STENCIL_ATTACHMENT = 0x821a;
exports.GL_DEPTH_STENCIL = 0x84f9;
exports.GL_UNSIGNED_INT_24_8 = 0x84fa;
exports.GL_DEPTH24_STENCIL8 = 0x88f0;
exports.GL_UNSIGNED_NORMALIZED = 0x8c17;
exports.GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6;
exports.GL_READ_FRAMEBUFFER = 0x8ca8;
exports.GL_DRAW_FRAMEBUFFER = 0x8ca9;
exports.GL_READ_FRAMEBUFFER_BINDING = 0x8caa;
exports.GL_RENDERBUFFER_SAMPLES = 0x8cab;
exports.GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4;
exports.GL_MAX_COLOR_ATTACHMENTS = 0x8cdf;
exports.GL_COLOR_ATTACHMENT1 = 0x8ce1;
exports.GL_COLOR_ATTACHMENT2 = 0x8ce2;
exports.GL_COLOR_ATTACHMENT3 = 0x8ce3;
exports.GL_COLOR_ATTACHMENT4 = 0x8ce4;
exports.GL_COLOR_ATTACHMENT5 = 0x8ce5;
exports.GL_COLOR_ATTACHMENT6 = 0x8ce6;
exports.GL_COLOR_ATTACHMENT7 = 0x8ce7;
exports.GL_COLOR_ATTACHMENT8 = 0x8ce8;
exports.GL_COLOR_ATTACHMENT9 = 0x8ce9;
exports.GL_COLOR_ATTACHMENT10 = 0x8cea;
exports.GL_COLOR_ATTACHMENT11 = 0x8ceb;
exports.GL_COLOR_ATTACHMENT12 = 0x8cec;
exports.GL_COLOR_ATTACHMENT13 = 0x8ced;
exports.GL_COLOR_ATTACHMENT14 = 0x8cee;
exports.GL_COLOR_ATTACHMENT15 = 0x8cef;
exports.GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56;
exports.GL_MAX_SAMPLES = 0x8d57;
exports.GL_HALF_FLOAT = 0x140b;
exports.GL_RG = 0x8227;
exports.GL_RG_INTEGER = 0x8228;
exports.GL_R8 = 0x8229;
exports.GL_RG8 = 0x822b;
exports.GL_R16F = 0x822d;
exports.GL_R32F = 0x822e;
exports.GL_RG16F = 0x822f;
exports.GL_RG32F = 0x8230;
exports.GL_R8I = 0x8231;
exports.GL_R8UI = 0x8232;
exports.GL_R16I = 0x8233;
exports.GL_R16UI = 0x8234;
exports.GL_R32I = 0x8235;
exports.GL_R32UI = 0x8236;
exports.GL_RG8I = 0x8237;
exports.GL_RG8UI = 0x8238;
exports.GL_RG16I = 0x8239;
exports.GL_RG16UI = 0x823a;
exports.GL_RG32I = 0x823b;
exports.GL_RG32UI = 0x823c;
exports.GL_VERTEX_ARRAY_BINDING = 0x85b5;
exports.GL_R8_SNORM = 0x8f94;
exports.GL_RG8_SNORM = 0x8f95;
exports.GL_RGB8_SNORM = 0x8f96;
exports.GL_RGBA8_SNORM = 0x8f97;
exports.GL_SIGNED_NORMALIZED = 0x8f9c;
exports.GL_COPY_READ_BUFFER = 0x8f36;
exports.GL_COPY_WRITE_BUFFER = 0x8f37;
exports.GL_COPY_READ_BUFFER_BINDING = 0x8f36;
exports.GL_COPY_WRITE_BUFFER_BINDING = 0x8f37;
exports.GL_UNIFORM_BUFFER = 0x8a11;
exports.GL_UNIFORM_BUFFER_BINDING = 0x8a28;
exports.GL_UNIFORM_BUFFER_START = 0x8a29;
exports.GL_UNIFORM_BUFFER_SIZE = 0x8a2a;
exports.GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b;
exports.GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d;
exports.GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e;
exports.GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f;
exports.GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30;
exports.GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31;
exports.GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33;
exports.GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34;
exports.GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36;
exports.GL_UNIFORM_TYPE = 0x8a37;
exports.GL_UNIFORM_SIZE = 0x8a38;
exports.GL_UNIFORM_BLOCK_INDEX = 0x8a3a;
exports.GL_UNIFORM_OFFSET = 0x8a3b;
exports.GL_UNIFORM_ARRAY_STRIDE = 0x8a3c;
exports.GL_UNIFORM_MATRIX_STRIDE = 0x8a3d;
exports.GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e;
exports.GL_UNIFORM_BLOCK_BINDING = 0x8a3f;
exports.GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
exports.GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42;
exports.GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
exports.GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
exports.GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
exports.GL_INVALID_INDEX = 0xffffffff;
exports.GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122;
exports.GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125;
exports.GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111;
exports.GL_OBJECT_TYPE = 0x9112;
exports.GL_SYNC_CONDITION = 0x9113;
exports.GL_SYNC_STATUS = 0x9114;
exports.GL_SYNC_FLAGS = 0x9115;
exports.GL_SYNC_FENCE = 0x9116;
exports.GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117;
exports.GL_UNSIGNALED = 0x9118;
exports.GL_SIGNALED = 0x9119;
exports.GL_ALREADY_SIGNALED = 0x911a;
exports.GL_TIMEOUT_EXPIRED = 0x911b;
exports.GL_CONDITION_SATISFIED = 0x911c;
exports.GL_WAIT_FAILED = 0x911d;
exports.GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001;
exports.GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe;
exports.GL_ANY_SAMPLES_PASSED = 0x8c2f;
exports.GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a;
exports.GL_SAMPLER_BINDING = 0x8919;
exports.GL_RGB10_A2UI = 0x906f;
exports.GL_INT_2_10_10_10_REV = 0x8d9f;
exports.GL_TRANSFORM_FEEDBACK = 0x8e22;
exports.GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23;
exports.GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24;
exports.GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25;
exports.GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f;
exports.GL_MAX_ELEMENT_INDEX = 0x8d6b;
exports.GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df;
exports.GL_TIMEOUT_IGNORED = -1; //tslint:disable-line
exports.GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247;

});

var info_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function parseVersion(version, context) {
    var parsed = /([0-9]+)\.?([0-9]*)?/.exec(version);
    var majorVersion, minorVersion;
    if (parsed) {
        majorVersion = Number(parsed[1]);
        if (parsed[2]) {
            minorVersion = Number(parsed[2]);
        }
        else {
            if (process.env.NODE_ENV !== "production") {
                context.$logger.warn("Unable to parse minor version in '" + version + "', assumed to be " + majorVersion + ".0");
            }
            minorVersion = 0;
        }
    }
    else {
        if (process.env.NODE_ENV !== "production") {
            context.$logger.warn("Unable to parse version string '" + version + "', fell back to 1.0");
        }
        majorVersion = 1;
        minorVersion = 0;
    }
    return { majorVersion: majorVersion, minorVersion: minorVersion };
}
var Info = (function () {
    function Info(context) {
        this._context = context;
        var _a = parseVersion(context.$gl.getParameter(common.GL_VERSION), context), majorVersion = _a.majorVersion, minorVersion = _a.minorVersion;
        this.majorVersion = majorVersion;
        this.minorVersion = minorVersion;
        this.maxColorTargets = context.$gl.getParameter(common.GL_MAX_COLOR_ATTACHMENTS);
    }
    return Info;
}());
exports.Info = Info;
function info(context) {
    return new Info(context);
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


var WebGLContext = (function (_super) {
    __extends(WebGLContext, _super);
    function WebGLContext(options) {
        var _this = _super.call(this, options) || this;
        var canvas = document.createElement("canvas");
        var gl = canvas.getContext("webgl2");
        _this.$gl = gl;
        _this.$info = info_1.default(_this);
        return _this;
    }
    return WebGLContext;
}(oval_core_1.$.Context));
exports.WebGLContext = WebGLContext;
function context(options) {
    return new WebGLContext(options);
}
exports.default = context;

});

var webgl = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.default = context_1.default;

});

var webgl$1 = unwrapExports(webgl);

export default webgl$1;
//# sourceMappingURL=oval-webgl.es5.js.map
