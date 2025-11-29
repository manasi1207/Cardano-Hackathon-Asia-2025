(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @enum {number}
 */ exports.MT = {
    POS_INT: 0,
    NEG_INT: 1,
    BYTE_STRING: 2,
    UTF8_STRING: 3,
    ARRAY: 4,
    MAP: 5,
    TAG: 6,
    SIMPLE_FLOAT: 7
};
/**
 * @enum {number}
 */ exports.TAG = {
    DATE_STRING: 0,
    DATE_EPOCH: 1,
    POS_BIGINT: 2,
    NEG_BIGINT: 3,
    DECIMAL_FRAC: 4,
    BIGFLOAT: 5,
    BASE64URL_EXPECTED: 21,
    BASE64_EXPECTED: 22,
    BASE16_EXPECTED: 23,
    CBOR: 24,
    URI: 32,
    BASE64URL: 33,
    BASE64: 34,
    REGEXP: 35,
    MIME: 36,
    // https://github.com/input-output-hk/cbor-sets-spec/blob/master/CBOR_SETS.md
    SET: 258
};
/**
 * @enum {number}
 */ exports.NUMBYTES = {
    ZERO: 0,
    ONE: 24,
    TWO: 25,
    FOUR: 26,
    EIGHT: 27,
    INDEFINITE: 31
};
/**
 * @enum {number}
 */ exports.SIMPLE = {
    FALSE: 20,
    TRUE: 21,
    NULL: 22,
    UNDEFINED: 23
};
exports.SYMS = {
    NULL: Symbol.for('github.com/hildjj/node-cbor/null'),
    UNDEFINED: Symbol.for('github.com/hildjj/node-cbor/undef'),
    PARENT: Symbol.for('github.com/hildjj/node-cbor/parent'),
    BREAK: Symbol.for('github.com/hildjj/node-cbor/break'),
    STREAM: Symbol.for('github.com/hildjj/node-cbor/stream')
};
exports.SHIFT32 = 0x100000000;
exports.BI = {
    MINUS_ONE: BigInt(-1),
    NEG_MAX: BigInt(-1) - BigInt(Number.MAX_SAFE_INTEGER),
    MAXINT32: BigInt('0xffffffff'),
    MAXINT64: BigInt('0xffffffffffffffff'),
    SHIFT32: BigInt(exports.SHIFT32)
};
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
const stream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const constants = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
const { NUMBYTES, SHIFT32, BI, SYMS } = constants;
const MAX_SAFE_HIGH = 0x1fffff;
/**
 * Convert a UTF8-encoded Buffer to a JS string.  If possible, throw an error
 * on invalid UTF8.  Byte Order Marks are not looked at or stripped.
 *
 * @private
 */ const td = new TextDecoder('utf8', {
    fatal: true,
    ignoreBOM: true
});
exports.utf8 = (buf)=>td.decode(buf);
exports.utf8.checksUTF8 = true;
function isReadable(s) {
    // Is this a readable stream?  In the webpack version, instanceof isn't
    // working correctly.
    if (s instanceof stream.Readable) {
        return true;
    }
    return [
        'read',
        'on',
        'pipe'
    ].every((f)=>typeof s[f] === 'function');
}
exports.isBufferish = function isBufferish(b) {
    return b && typeof b === 'object' && (Buffer.isBuffer(b) || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof ArrayBuffer || b instanceof DataView);
};
exports.bufferishToBuffer = function bufferishToBuffer(b) {
    if (Buffer.isBuffer(b)) {
        return b;
    } else if (ArrayBuffer.isView(b)) {
        return Buffer.from(b.buffer, b.byteOffset, b.byteLength);
    } else if (b instanceof ArrayBuffer) {
        return Buffer.from(b);
    }
    return null;
};
exports.parseCBORint = function parseCBORint(ai, buf) {
    switch(ai){
        case NUMBYTES.ONE:
            return buf.readUInt8(0);
        case NUMBYTES.TWO:
            return buf.readUInt16BE(0);
        case NUMBYTES.FOUR:
            return buf.readUInt32BE(0);
        case NUMBYTES.EIGHT:
            {
                const f = buf.readUInt32BE(0);
                const g = buf.readUInt32BE(4);
                if (f > MAX_SAFE_HIGH) {
                    return BigInt(f) * BI.SHIFT32 + BigInt(g);
                }
                return f * SHIFT32 + g;
            }
        default:
            throw new Error(`Invalid additional info for int: ${ai}`);
    }
};
exports.writeHalf = function writeHalf(buf, half) {
    // Assume 0, -0, NaN, Infinity, and -Infinity have already been caught
    // HACK: everyone settle in.  This isn't going to be pretty.
    // Translate cn-cbor's C code (from Carsten Borman):
    // uint32_t be32;
    // uint16_t be16, u16;
    // union {
    //   float f;
    //   uint32_t u;
    // } u32;
    // u32.f = float_val;
    const u32 = Buffer.allocUnsafe(4);
    u32.writeFloatBE(half, 0);
    const u = u32.readUInt32BE(0);
    // If ((u32.u & 0x1FFF) == 0) { /* worth trying half */
    // hildjj: If the lower 13 bits aren't 0,
    // we will lose precision in the conversion.
    // mant32 = 24bits, mant16 = 11bits, 24-11 = 13
    if ((u & 0x1FFF) !== 0) {
        return false;
    }
    // Sign, exponent, mantissa
    //   int s16 = (u32.u >> 16) & 0x8000;
    //   int exp = (u32.u >> 23) & 0xff;
    //   int mant = u32.u & 0x7fffff;
    let s16 = u >> 16 & 0x8000; // Top bit is sign
    const exp = u >> 23 & 0xff; // Then 5 bits of exponent
    const mant = u & 0x7fffff;
    // Hildjj: zeros already handled.  Assert if you don't believe me.
    //   if (exp == 0 && mant == 0)
    //     ;              /* 0.0, -0.0 */
    //   else if (exp >= 113 && exp <= 142) /* normalized */
    //     s16 += ((exp - 112) << 10) + (mant >> 13);
    if (exp >= 113 && exp <= 142) {
        s16 += (exp - 112 << 10) + (mant >> 13);
    } else if (exp >= 103 && exp < 113) {
        // Denormalized numbers
        //   else if (exp >= 103 && exp < 113) { /* denorm, exp16 = 0 */
        //     if (mant & ((1 << (126 - exp)) - 1))
        //       goto float32;         /* loss of precision */
        //     s16 += ((mant + 0x800000) >> (126 - exp));
        if (mant & (1 << 126 - exp) - 1) {
            return false;
        }
        s16 += mant + 0x800000 >> 126 - exp;
    } else {
        //   } else if (exp == 255 && mant == 0) { /* Inf */
        //     s16 += 0x7c00;
        // hildjj: Infinity already handled
        //   } else
        //     goto float32;           /* loss of range */
        return false;
    }
    // Done
    //   ensure_writable(3);
    //   u16 = s16;
    //   be16 = hton16p((const uint8_t*)&u16);
    buf.writeUInt16BE(s16);
    return true;
};
exports.parseHalf = function parseHalf(buf) {
    const sign = buf[0] & 0x80 ? -1 : 1;
    const exp = (buf[0] & 0x7C) >> 2;
    const mant = (buf[0] & 0x03) << 8 | buf[1];
    if (!exp) {
        return sign * 5.9604644775390625e-8 * mant;
    } else if (exp === 0x1f) {
        return sign * (mant ? NaN : Infinity);
    }
    return sign * 2 ** (exp - 25) * (1024 + mant);
};
exports.parseCBORfloat = function parseCBORfloat(buf) {
    switch(buf.length){
        case 2:
            return exports.parseHalf(buf);
        case 4:
            return buf.readFloatBE(0);
        case 8:
            return buf.readDoubleBE(0);
        default:
            throw new Error(`Invalid float size: ${buf.length}`);
    }
};
exports.hex = function hex(s) {
    return Buffer.from(s.replace(/^0x/, ''), 'hex');
};
exports.bin = function bin(s) {
    s = s.replace(/\s/g, '');
    let start = 0;
    let end = s.length % 8 || 8;
    const chunks = [];
    while(end <= s.length){
        chunks.push(parseInt(s.slice(start, end), 2));
        start = end;
        end += 8;
    }
    return Buffer.from(chunks);
};
exports.arrayEqual = function arrayEqual(a, b) {
    if (a == null && b == null) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    return a.length === b.length && a.every((elem, i)=>elem === b[i]);
};
exports.bufferToBigInt = function bufferToBigInt(buf) {
    return BigInt(`0x${buf.toString('hex')}`);
};
exports.cborValueToString = function cborValueToString(val, float_bytes = -1) {
    switch(typeof val){
        case 'symbol':
            {
                switch(val){
                    case SYMS.NULL:
                        return 'null';
                    case SYMS.UNDEFINED:
                        return 'undefined';
                    case SYMS.BREAK:
                        return 'BREAK';
                }
                // Impossible in node 10
                /* istanbul ignore if */ if (val.description) {
                    return val.description;
                }
                // On node10, Symbol doesn't have description.  Parse it out of the
                // toString value, which looks like `Symbol(foo)`.
                const s = val.toString();
                const m = s.match(/^Symbol\((?<name>.*)\)/);
                /* istanbul ignore if */ if (m && m.groups.name) {
                    // Impossible in node 12+
                    /* istanbul ignore next */ return m.groups.name;
                }
                return 'Symbol';
            }
        case 'string':
            return JSON.stringify(val);
        case 'bigint':
            return val.toString();
        case 'number':
            {
                const s = Object.is(val, -0) ? '-0' : String(val);
                return float_bytes > 0 ? `${s}_${float_bytes}` : s;
            }
        case 'object':
            {
                if (!val) {
                    return 'null';
                }
                const buf = exports.bufferishToBuffer(val);
                if (buf) {
                    const hex = buf.toString('hex');
                    return float_bytes === -Infinity ? hex : `h'${hex}'`;
                }
                if (val && typeof val[Symbol.for('nodejs.util.inspect.custom')] === 'function') {
                    return val[Symbol.for('nodejs.util.inspect.custom')]();
                }
                // Shouldn't get non-empty arrays here
                if (Array.isArray(val)) {
                    return '[]';
                }
                // This should be all that is left
                return '{}';
            }
    }
    return String(val);
};
exports.guessEncoding = function guessEncoding(input, encoding) {
    if (typeof input === 'string') {
        return new NoFilter(input, encoding == null ? 'hex' : encoding);
    }
    const buf = exports.bufferishToBuffer(input);
    if (buf) {
        return new NoFilter(buf);
    }
    if (isReadable(input)) {
        return input;
    }
    throw new Error('Unknown input type');
};
const B64URL_SWAPS = {
    '=': '',
    '+': '-',
    '/': '_'
};
/**
 * @param {Buffer|Uint8Array|Uint8ClampedArray|ArrayBuffer|DataView} buf
 *   Buffer to convert.
 * @returns {string} Base64url string.
 * @private
 */ exports.base64url = function base64url(buf) {
    return exports.bufferishToBuffer(buf).toString('base64').replace(/[=+/]/g, (c)=>B64URL_SWAPS[c]);
};
/**
 * @param {Buffer|Uint8Array|Uint8ClampedArray|ArrayBuffer|DataView} buf
 *   Buffer to convert.
 * @returns {string} Base64 string.
 * @private
 */ exports.base64 = function base64(buf) {
    return exports.bufferishToBuffer(buf).toString('base64');
};
exports.isBigEndian = function isBigEndian() {
    const array = new Uint8Array(4);
    const view = new Uint32Array(array.buffer);
    return !((view[0] = 1) & array[0]);
};
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/vendor/binary-parse-stream/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Tweaked version of nathan7's binary-parse-stream
// (see https://github.com/nathan7/binary-parse-stream)
// Uses NoFilter instead of the readable in the original.  Removes
// the ability to read -1, which was odd and un-needed.
// License for binary-parse-stream: MIT
// binary-parse-stream is now unmaintained, so I have rewritten it as
// more modern JS so I can get tsc to help check types.
// eslint-disable-next-line n/prefer-node-protocol
const stream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
/**
 * BinaryParseStream is a TransformStream that consumes buffers and outputs
 * objects on the other end.  It expects your subclass to implement a `_parse`
 * method that is a generator.  When your generator yields a number, it'll be
 * fed a buffer of that length from the input.  When your generator returns,
 * the return value will be pushed to the output side.
 *
 * @extends stream.Transform
 */ class BinaryParseStream extends stream.Transform {
    /**
   * Creates an instance of BinaryParseStream.
   *
   * @memberof BinaryParseStream
   * @param {stream.TransformOptions} options Stream options.
   */ constructor(options){
        super(options);
        // Doesn't work to pass these in as opts, for some reason
        // also, work around typescript not knowing TransformStream internals
        // eslint-disable-next-line dot-notation
        this['_writableState'].objectMode = false;
        // eslint-disable-next-line dot-notation
        this['_readableState'].objectMode = true;
        this.bs = new NoFilter();
        this.__restart();
    }
    /**
   * Transforming.
   *
   * @param {any} fresh Buffer to transcode.
   * @param {BufferEncoding} _encoding Name of encoding.
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _transform(fresh, _encoding, cb) {
        this.bs.write(fresh);
        while(this.bs.length >= this.__needed){
            let ret = null;
            const chunk = this.__needed === null ? undefined : this.bs.read(this.__needed);
            try {
                ret = this.__parser.next(chunk);
            } catch (e) {
                return cb(e);
            }
            if (this.__needed) {
                this.__fresh = false;
            }
            if (ret.done) {
                this.push(ret.value);
                this.__restart();
            } else {
                this.__needed = ret.value || Infinity;
            }
        }
        return cb();
    }
    /**
   * Subclasses must override this to set their parsing behavior.  Yield a
   * number to receive a Buffer of that many bytes.
   *
   * @abstract
   * @returns {Generator<number, any, Buffer>}
   */ /* istanbul ignore next */ *_parse() {
        throw new Error('Must be implemented in subclass');
    }
    __restart() {
        this.__needed = null;
        this.__parser = this._parse();
        this.__fresh = true;
    }
    /**
   * Flushing.
   *
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _flush(cb) {
        cb(this.__fresh ? null : new Error('unexpected end of input'));
    }
}
module.exports = BinaryParseStream;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/tagged.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const constants = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)");
const INTERNAL_JSON = Symbol('INTERNAL_JSON');
function setBuffersToJSON(obj, fn) {
    // The data item tagged can be a byte string or any other data item.  In the
    // latter case, the tag applies to all of the byte string data items
    // contained in the data item, except for those contained in a nested data
    // item tagged with an expected conversion.
    if (utils.isBufferish(obj)) {
        obj.toJSON = fn;
    } else if (Array.isArray(obj)) {
        for (const v of obj){
            setBuffersToJSON(v, fn);
        }
    } else if (obj && typeof obj === 'object') {
        // FFS, complexity in the protocol.
        // There's some circular dependency in here.
        // eslint-disable-next-line no-use-before-define
        if (!(obj instanceof Tagged) || obj.tag < 21 || obj.tag > 23) {
            for (const v of Object.values(obj)){
                setBuffersToJSON(v, fn);
            }
        }
    }
}
function b64this() {
    // eslint-disable-next-line no-invalid-this
    return utils.base64(this);
}
function b64urlThis() {
    // eslint-disable-next-line no-invalid-this
    return utils.base64url(this);
}
function hexThis() {
    // eslint-disable-next-line no-invalid-this
    return this.toString('hex');
}
function swapEndian(ab, size, byteOffset, byteLength) {
    const dv = new DataView(ab);
    const [getter, setter] = {
        2: [
            dv.getUint16,
            dv.setUint16
        ],
        4: [
            dv.getUint32,
            dv.setUint32
        ],
        8: [
            dv.getBigUint64,
            dv.setBigUint64
        ]
    }[size];
    const end = byteOffset + byteLength;
    for(let offset = byteOffset; offset < end; offset += size){
        setter.call(dv, offset, getter.call(dv, offset, true));
    }
}
/**
 * Convert a tagged value to a more interesting JavaScript type.  Errors
 * thrown in this function will be captured into the "err" property of the
 * original Tagged instance.
 *
 * @callback TagFunction
 * @param {any} value The value inside the tag.
 * @param {Tagged} tag The enclosing Tagged instance; useful if you want to
 *   modify it and return it.  Also available as "this".
 * @returns {any} The transformed value.
 */ /**
 * A mapping from tag number to a tag decoding function.
 *
 * @typedef {Object.<string, TagFunction>} TagMap
 */ /**
 * @type {TagMap}
 * @private
 */ const TAGS = {
    // Standard date/time string; see Section 3.4.1
    0: (v)=>new Date(v),
    // Epoch-based date/time; see Section 3.4.2
    1: (v)=>new Date(v * 1000),
    // Positive bignum; see Section 3.4.3
    2: (v)=>utils.bufferToBigInt(v),
    // Negative bignum; see Section 3.4.3
    3: (v)=>constants.BI.MINUS_ONE - utils.bufferToBigInt(v),
    // Expected conversion to base64url encoding; see Section 3.4.5.2
    21: (v, tag)=>{
        if (utils.isBufferish(v)) {
            tag[INTERNAL_JSON] = b64urlThis;
        } else {
            setBuffersToJSON(v, b64urlThis);
        }
        return tag;
    },
    // Expected conversion to base64 encoding; see Section 3.4.5.2
    22: (v, tag)=>{
        if (utils.isBufferish(v)) {
            tag[INTERNAL_JSON] = b64this;
        } else {
            setBuffersToJSON(v, b64this);
        }
        return tag;
    },
    // Expected conversion to base16 encoding; see Section Section 3.4.5.2
    23: (v, tag)=>{
        if (utils.isBufferish(v)) {
            tag[INTERNAL_JSON] = hexThis;
        } else {
            setBuffersToJSON(v, hexThis);
        }
        return tag;
    },
    // URI; see Section 3.4.5.3
    32: (v)=>new URL(v),
    // Base64url; see Section 3.4.5.3
    33: (v, tag)=>{
        // If any of the following apply:
        // -  the encoded text string contains non-alphabet characters or
        //    only 1 alphabet character in the last block of 4 (where
        //    alphabet is defined by Section 5 of [RFC4648] for tag number 33
        //    and Section 4 of [RFC4648] for tag number 34), or
        if (!v.match(/^[a-zA-Z0-9_-]+$/)) {
            throw new Error('Invalid base64url characters');
        }
        const last = v.length % 4;
        if (last === 1) {
            throw new Error('Invalid base64url length');
        }
        // -  the padding bits in a 2- or 3-character block are not 0, or
        if (last === 2) {
            // The last 4 bits of the last character need to be zero.
            if ('AQgw'.indexOf(v[v.length - 1]) === -1) {
                throw new Error('Invalid base64 padding');
            }
        } else if (last === 3) {
            // The last 2 bits of the last character need to be zero.
            if ('AEIMQUYcgkosw048'.indexOf(v[v.length - 1]) === -1) {
                throw new Error('Invalid base64 padding');
            }
        }
        //    Or
        // -  the base64url encoding has padding characters,
        // (caught above)
        // the string is invalid.
        return tag;
    },
    // Base64; see Section 3.4.5.3
    34: (v, tag)=>{
        // If any of the following apply:
        // -  the encoded text string contains non-alphabet characters or
        //    only 1 alphabet character in the last block of 4 (where
        //    alphabet is defined by Section 5 of [RFC4648] for tag number 33
        //    and Section 4 of [RFC4648] for tag number 34), or
        const m = v.match(/^[a-zA-Z0-9+/]+(?<padding>={0,2})$/);
        if (!m) {
            throw new Error('Invalid base64 characters');
        }
        if (v.length % 4 !== 0) {
            throw new Error('Invalid base64 length');
        }
        // -  the padding bits in a 2- or 3-character block are not 0, or
        if (m.groups.padding === '=') {
            // The last 4 bits of the last character need to be zero.
            if ('AQgw'.indexOf(v[v.length - 2]) === -1) {
                throw new Error('Invalid base64 padding');
            }
        } else if (m.groups.padding === '==') {
            // The last 2 bits of the last character need to be zero.
            if ('AEIMQUYcgkosw048'.indexOf(v[v.length - 3]) === -1) {
                throw new Error('Invalid base64 padding');
            }
        }
        // -  the base64 encoding has the wrong number of padding characters,
        // (caught above)
        // the string is invalid.
        return tag;
    },
    // Regular expression; see Section 2.4.4.3
    35: (v)=>new RegExp(v),
    // https://github.com/input-output-hk/cbor-sets-spec/blob/master/CBOR_SETS.md
    258: (v)=>new Set(v)
};
const TYPED_ARRAY_TAGS = {
    64: Uint8Array,
    65: Uint16Array,
    66: Uint32Array,
    // 67: BigUint64Array,  Safari doesn't implement
    68: Uint8ClampedArray,
    69: Uint16Array,
    70: Uint32Array,
    // 71: BigUint64Array,  Safari doesn't implement
    72: Int8Array,
    73: Int16Array,
    74: Int32Array,
    // 75: BigInt64Array,  Safari doesn't implement
    // 76: reserved
    77: Int16Array,
    78: Int32Array,
    // 79: BigInt64Array,  Safari doesn't implement
    // 80: not implemented, float16 array
    81: Float32Array,
    82: Float64Array,
    // 83: not implemented, float128 array
    // 84: not implemented, float16 array
    85: Float32Array,
    86: Float64Array
};
// Safari
if (typeof BigUint64Array !== 'undefined') {
    TYPED_ARRAY_TAGS[67] = BigUint64Array;
    TYPED_ARRAY_TAGS[71] = BigUint64Array;
}
if (typeof BigInt64Array !== 'undefined') {
    TYPED_ARRAY_TAGS[75] = BigInt64Array;
    TYPED_ARRAY_TAGS[79] = BigInt64Array;
}
function toTypedArray(val, tagged) {
    if (!utils.isBufferish(val)) {
        throw new TypeError('val not a buffer');
    }
    const { tag } = tagged;
    // See https://tools.ietf.org/html/rfc8746
    const TypedClass = TYPED_ARRAY_TAGS[tag];
    if (!TypedClass) {
        throw new Error(`Invalid typed array tag: ${tag}`);
    }
    const little = tag & 0b00000100;
    const float = (tag & 0b00010000) >> 4;
    const sz = 2 ** (float + (tag & 0b00000011));
    if (!little !== utils.isBigEndian() && sz > 1) {
        swapEndian(val.buffer, sz, val.byteOffset, val.byteLength);
    }
    const ab = val.buffer.slice(val.byteOffset, val.byteOffset + val.byteLength);
    return new TypedClass(ab);
}
for (const n of Object.keys(TYPED_ARRAY_TAGS)){
    TAGS[n] = toTypedArray;
}
/**
 * @type {TagMap}
 * @private
 */ let current_TAGS = {};
/**
 * A CBOR tagged item, where the tag does not have semantics specified at the
 * moment, or those semantics threw an error during parsing. Typically this will
 * be an extension point you're not yet expecting.
 */ class Tagged {
    /**
   * Creates an instance of Tagged.
   *
   * @param {number} tag The number of the tag.
   * @param {any} value The value inside the tag.
   * @param {Error} [err] The error that was thrown parsing the tag, or null.
   */ constructor(tag, value, err){
        this.tag = tag;
        this.value = value;
        this.err = err;
        if (typeof this.tag !== 'number') {
            throw new Error(`Invalid tag type (${typeof this.tag})`);
        }
        if (this.tag < 0 || (this.tag | 0) !== this.tag) {
            throw new Error(`Tag must be a positive integer: ${this.tag}`);
        }
    }
    toJSON() {
        if (this[INTERNAL_JSON]) {
            return this[INTERNAL_JSON].call(this.value);
        }
        const ret = {
            tag: this.tag,
            value: this.value
        };
        if (this.err) {
            ret.err = this.err;
        }
        return ret;
    }
    /**
   * Convert to a String.
   *
   * @returns {string} String of the form '1(2)'.
   */ toString() {
        return `${this.tag}(${JSON.stringify(this.value)})`;
    }
    /**
   * Push the simple value onto the CBOR stream.
   *
   * @param {object} gen The generator to push onto.
   * @returns {boolean} True on success.
   */ encodeCBOR(gen) {
        gen._pushTag(this.tag);
        return gen.pushAny(this.value);
    }
    /**
   * If we have a converter for this type, do the conversion.  Some converters
   * are built-in.  Additional ones can be passed in.  If you want to remove
   * a built-in converter, pass a converter in whose value is 'null' instead
   * of a function.
   *
   * @param {object} converters Keys in the object are a tag number, the value
   *   is a function that takes the decoded CBOR and returns a JavaScript value
   *   of the appropriate type.  Throw an exception in the function on errors.
   * @returns {any} The converted item.
   */ convert(converters) {
        let f = converters == null ? undefined : converters[this.tag];
        if (f === null) {
            return this;
        }
        if (typeof f !== 'function') {
            f = Tagged.TAGS[this.tag];
            if (typeof f !== 'function') {
                return this;
            }
        }
        try {
            return f.call(this, this.value, this);
        } catch (error) {
            if (error && error.message && error.message.length > 0) {
                this.err = error.message;
            } else {
                this.err = error;
            }
            return this;
        }
    }
    /**
   * The current set of supported tags.  May be modified by plugins.
   *
   * @type {TagMap}
   * @static
   */ static get TAGS() {
        return current_TAGS;
    }
    static set TAGS(val) {
        current_TAGS = val;
    }
    /**
   * Reset the supported tags to the original set, before any plugins modified
   * the list.
   */ static reset() {
        Tagged.TAGS = {
            ...TAGS
        };
    }
}
Tagged.INTERNAL_JSON = INTERNAL_JSON;
Tagged.reset();
module.exports = Tagged;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/simple.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MT, SIMPLE, SYMS } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
/**
 * A CBOR Simple Value that does not map onto a known constant.
 */ class Simple {
    /**
   * Creates an instance of Simple.
   *
   * @param {number} value The simple value's integer value.
   */ constructor(value){
        if (typeof value !== 'number') {
            throw new Error(`Invalid Simple type: ${typeof value}`);
        }
        if (value < 0 || value > 255 || (value | 0) !== value) {
            throw new Error(`value must be a small positive integer: ${value}`);
        }
        this.value = value;
    }
    /**
   * Debug string for simple value.
   *
   * @returns {string} Formated string of `simple(value)`.
   */ toString() {
        return `simple(${this.value})`;
    }
    /**
   * Debug string for simple value.
   *
   * @param {number} _depth How deep are we?
   * @param {object} _opts Options.
   * @returns {string} Formatted string of `simple(value)`.
   */ [Symbol.for('nodejs.util.inspect.custom')](_depth, _opts) {
        return `simple(${this.value})`;
    }
    /**
   * Push the simple value onto the CBOR stream.
   *
   * @param {object} gen The generator to push onto.
   * @returns {boolean} True on success.
   */ encodeCBOR(gen) {
        return gen._pushInt(this.value, MT.SIMPLE_FLOAT);
    }
    /**
   * Is the given object a Simple?
   *
   * @param {any} obj Object to test.
   * @returns {boolean} Is it Simple?
   */ static isSimple(obj) {
        return obj instanceof Simple;
    }
    /**
   * Decode from the CBOR additional information into a JavaScript value.
   * If the CBOR item has no parent, return a "safe" symbol instead of
   * `null` or `undefined`, so that the value can be passed through a
   * stream in object mode.
   *
   * @param {number} val The CBOR additional info to convert.
   * @param {boolean} [has_parent=true] Does the CBOR item have a parent?
   * @param {boolean} [parent_indefinite=false] Is the parent element
   *   indefinitely encoded?
   * @returns {(null|undefined|boolean|symbol|Simple)} The decoded value.
   * @throws {Error} Invalid BREAK.
   */ static decode(val, has_parent = true, parent_indefinite = false) {
        switch(val){
            case SIMPLE.FALSE:
                return false;
            case SIMPLE.TRUE:
                return true;
            case SIMPLE.NULL:
                if (has_parent) {
                    return null;
                }
                return SYMS.NULL;
            case SIMPLE.UNDEFINED:
                if (has_parent) {
                    return undefined;
                }
                return SYMS.UNDEFINED;
            case -1:
                if (!has_parent || !parent_indefinite) {
                    throw new Error('Invalid BREAK');
                }
                return SYMS.BREAK;
            default:
                return new Simple(val);
        }
    }
}
module.exports = Simple;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/decoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BinaryParseStream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/vendor/binary-parse-stream/index.js [app-client] (ecmascript)");
const Tagged = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/tagged.js [app-client] (ecmascript)");
const Simple = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/simple.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
const constants = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
const { MT, NUMBYTES, SYMS, BI } = constants;
const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
const COUNT = Symbol('count');
const MAJOR = Symbol('major type');
const ERROR = Symbol('error');
const NOT_FOUND = Symbol('not found');
function parentArray(parent, typ, count) {
    const a = [];
    a[COUNT] = count;
    a[SYMS.PARENT] = parent;
    a[MAJOR] = typ;
    return a;
}
function parentBufferStream(parent, typ) {
    const b = new NoFilter();
    b[COUNT] = -1;
    b[SYMS.PARENT] = parent;
    b[MAJOR] = typ;
    return b;
}
class UnexpectedDataError extends Error {
    constructor(byte, value){
        super(`Unexpected data: 0x${byte.toString(16)}`);
        this.name = 'UnexpectedDataError';
        this.byte = byte;
        this.value = value;
    }
}
/**
 * Things that can act as inputs, from which a NoFilter can be created.
 *
 * @typedef {string|Buffer|ArrayBuffer|ArrayBufferView
 *   |DataView|import('stream').Readable} BufferLike
 */ /**
 * @typedef ExtendedResults
 * @property {any} value The value that was found.
 * @property {number} length The number of bytes of the original input that
 *   were read.
 * @property {Buffer} bytes The bytes of the original input that were used
 *   to produce the value.
 * @property {Buffer} [unused] The bytes that were left over from the original
 *   input.  This property only exists if {@linkcode Decoder.decodeFirst} or
 *   {@linkcode Decoder.decodeFirstSync} was called.
 */ /**
 * @typedef DecoderOptions
 * @property {number} [max_depth=-1] The maximum depth to parse.
 *   Use -1 for "until you run out of memory".  Set this to a finite
 *   positive number for un-trusted inputs.  Most standard inputs won't nest
 *   more than 100 or so levels; I've tested into the millions before
 *   running out of memory.
 * @property {Tagged.TagMap} [tags] Mapping from tag number to function(v),
 *   where v is the decoded value that comes after the tag, and where the
 *   function returns the correctly-created value for that tag.
 * @property {boolean} [preferMap=false] If true, prefer to generate Map
 *   instances to plain objects, even if there are no entries in the map
 *   or if all of the keys are strings.
 * @property {boolean} [preferWeb=false] If true, prefer Uint8Arrays to
 *   be generated instead of node Buffers.  This might turn on some more
 *   changes in the future, so forward-compatibility is not guaranteed yet.
 * @property {BufferEncoding} [encoding='hex'] The encoding of the input.
 *   Ignored if input is a Buffer.
 * @property {boolean} [required=false] Should an error be thrown when no
 *   data is in the input?
 * @property {boolean} [extendedResults=false] If true, emit extended
 *   results, which will be an object with shape {@link ExtendedResults}.
 *   The value will already have been null-checked.
 * @property {boolean} [preventDuplicateKeys=false] If true, error is
 *   thrown if a map has duplicate keys.
 */ /**
 * @callback decodeCallback
 * @param {Error} [error] If one was generated.
 * @param {any} [value] The decoded value.
 * @returns {void}
 */ /**
 * @param {DecoderOptions|decodeCallback|string} opts Options,
 *   the callback, or input incoding.
 * @param {decodeCallback} [cb] Called on completion.
 * @returns {{options: DecoderOptions, cb: decodeCallback}} Normalized.
 * @throws {TypeError} On unknown option type.
 * @private
 */ function normalizeOptions(opts, cb) {
    switch(typeof opts){
        case 'function':
            return {
                options: {},
                cb: opts
            };
        case 'string':
            return {
                options: {
                    encoding: opts
                },
                cb
            };
        case 'object':
            return {
                options: opts || {},
                cb
            };
        default:
            throw new TypeError('Unknown option type');
    }
}
/**
 * Decode a stream of CBOR bytes by transforming them into equivalent
 * JavaScript data.  Because of the limitations of Node object streams,
 * special symbols are emitted instead of NULL or UNDEFINED.  Fix those
 * up by calling {@link Decoder.nullcheck}.
 *
 * @extends BinaryParseStream
 */ class Decoder extends BinaryParseStream {
    /**
   * Create a parsing stream.
   *
   * @param {DecoderOptions} [options={}] Options.
   */ constructor(options = {}){
        const { tags = {}, max_depth = -1, preferMap = false, preferWeb = false, required = false, encoding = 'hex', extendedResults = false, preventDuplicateKeys = false, ...superOpts } = options;
        super({
            defaultEncoding: encoding,
            ...superOpts
        });
        this.running = true;
        this.max_depth = max_depth;
        this.tags = tags;
        this.preferMap = preferMap;
        this.preferWeb = preferWeb;
        this.extendedResults = extendedResults;
        this.required = required;
        this.preventDuplicateKeys = preventDuplicateKeys;
        if (extendedResults) {
            this.bs.on('read', this._onRead.bind(this));
            this.valueBytes = new NoFilter();
        }
    }
    /**
   * Check the given value for a symbol encoding a NULL or UNDEFINED value in
   * the CBOR stream.
   *
   * @param {any} val The value to check.
   * @returns {any} The corrected value.
   * @throws {Error} Nothing was found.
   * @static
   * @example
   * myDecoder.on('data', val => {
   *   val = Decoder.nullcheck(val)
   *   // ...
   * })
   */ static nullcheck(val) {
        switch(val){
            case SYMS.NULL:
                return null;
            case SYMS.UNDEFINED:
                return undefined;
            // Leaving this in for now as belt-and-suspenders, but I'm pretty sure
            // it can't happen.
            /* istanbul ignore next */ case NOT_FOUND:
                /* istanbul ignore next */ throw new Error('Value not found');
            default:
                return val;
        }
    }
    /**
   * Decode the first CBOR item in the input, synchronously.  This will throw
   * an exception if the input is not valid CBOR, or if there are more bytes
   * left over at the end (if options.extendedResults is not true).
   *
   * @param {BufferLike} input If a Readable stream, must have
   *   received the `readable` event already, or you will get an error
   *   claiming "Insufficient data".
   * @param {DecoderOptions|string} [options={}] Options or encoding for input.
   * @returns {ExtendedResults|any} The decoded value.
   * @throws {UnexpectedDataError} Data is left over after decoding.
   * @throws {Error} Insufficient data.
   */ static decodeFirstSync(input, options = {}) {
        if (input == null) {
            throw new TypeError('input required');
        }
        ({ options } = normalizeOptions(options));
        const { encoding = 'hex', ...opts } = options;
        const c = new Decoder(opts);
        const s = utils.guessEncoding(input, encoding);
        // For/of doesn't work when you need to call next() with a value
        // generator created by parser will be "done" after each CBOR entity
        // parser will yield numbers of bytes that it wants
        const parser = c._parse();
        let state = parser.next();
        while(!state.done){
            const b = s.read(state.value);
            if (b == null || b.length !== state.value) {
                throw new Error('Insufficient data');
            }
            if (c.extendedResults) {
                c.valueBytes.write(b);
            }
            state = parser.next(b);
        }
        let val = null;
        if (c.extendedResults) {
            val = state.value;
            val.unused = s.read();
        } else {
            val = Decoder.nullcheck(state.value);
            if (s.length > 0) {
                const nextByte = s.read(1);
                s.unshift(nextByte);
                throw new UnexpectedDataError(nextByte[0], val);
            }
        }
        return val;
    }
    /**
   * Decode all of the CBOR items in the input into an array.  This will throw
   * an exception if the input is not valid CBOR; a zero-length input will
   * return an empty array.
   *
   * @param {BufferLike} input What to parse?
   * @param {DecoderOptions|string} [options={}] Options or encoding
   *   for input.
   * @returns {Array<ExtendedResults>|Array<any>} Array of all found items.
   * @throws {TypeError} No input provided.
   * @throws {Error} Insufficient data provided.
   */ static decodeAllSync(input, options = {}) {
        if (input == null) {
            throw new TypeError('input required');
        }
        ({ options } = normalizeOptions(options));
        const { encoding = 'hex', ...opts } = options;
        const c = new Decoder(opts);
        const s = utils.guessEncoding(input, encoding);
        const res = [];
        while(s.length > 0){
            const parser = c._parse();
            let state = parser.next();
            while(!state.done){
                const b = s.read(state.value);
                if (b == null || b.length !== state.value) {
                    throw new Error('Insufficient data');
                }
                if (c.extendedResults) {
                    c.valueBytes.write(b);
                }
                state = parser.next(b);
            }
            res.push(Decoder.nullcheck(state.value));
        }
        return res;
    }
    /**
   * Decode the first CBOR item in the input.  This will error if there are
   * more bytes left over at the end (if options.extendedResults is not true),
   * and optionally if there were no valid CBOR bytes in the input.  Emits the
   * {Decoder.NOT_FOUND} Symbol in the callback if no data was found and the
   * `required` option is false.
   *
   * @param {BufferLike} input What to parse?
   * @param {DecoderOptions|decodeCallback|string} [options={}] Options, the
   *   callback, or input encoding.
   * @param {decodeCallback} [cb] Callback.
   * @returns {Promise<ExtendedResults|any>} Returned even if callback is
   *   specified.
   * @throws {TypeError} No input provided.
   */ static decodeFirst(input, options = {}, cb = null) {
        if (input == null) {
            throw new TypeError('input required');
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = 'hex', required = false, ...opts } = options;
        const c = new Decoder(opts);
        let v = NOT_FOUND;
        const s = utils.guessEncoding(input, encoding);
        const p = new Promise((resolve, reject)=>{
            c.on('data', (val)=>{
                v = Decoder.nullcheck(val);
                c.close();
            });
            c.once('error', (er)=>{
                if (c.extendedResults && er instanceof UnexpectedDataError) {
                    v.unused = c.bs.slice();
                    return resolve(v);
                }
                if (v !== NOT_FOUND) {
                    // Typescript work-around
                    // eslint-disable-next-line dot-notation
                    er['value'] = v;
                }
                v = ERROR;
                c.close();
                return reject(er);
            });
            c.once('end', ()=>{
                switch(v){
                    case NOT_FOUND:
                        if (required) {
                            return reject(new Error('No CBOR found'));
                        }
                        return resolve(v);
                    // Pretty sure this can't happen, but not *certain*.
                    /* istanbul ignore next */ case ERROR:
                        /* istanbul ignore next */ return undefined;
                    default:
                        return resolve(v);
                }
            });
        });
        if (typeof cb === 'function') {
            p.then((val)=>cb(null, val), cb);
        }
        s.pipe(c);
        return p;
    }
    /**
   * @callback decodeAllCallback
   * @param {Error} error If one was generated.
   * @param {Array<ExtendedResults>|Array<any>} value All of the decoded
   *   values, wrapped in an Array.
   */ /**
   * Decode all of the CBOR items in the input.  This will error if there are
   * more bytes left over at the end.
   *
   * @param {BufferLike} input What to parse?
   * @param {DecoderOptions|decodeAllCallback|string} [options={}]
   *   Decoding options, the callback, or the input encoding.
   * @param {decodeAllCallback} [cb] Callback.
   * @returns {Promise<Array<ExtendedResults>|Array<any>>} Even if callback
   *   is specified.
   * @throws {TypeError} No input specified.
   */ static decodeAll(input, options = {}, cb = null) {
        if (input == null) {
            throw new TypeError('input required');
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = 'hex', ...opts } = options;
        const c = new Decoder(opts);
        const vals = [];
        c.on('data', (val)=>vals.push(Decoder.nullcheck(val)));
        const p = new Promise((resolve, reject)=>{
            c.on('error', reject);
            c.on('end', ()=>resolve(vals));
        });
        if (typeof cb === 'function') {
            p.then((v)=>cb(undefined, v), (er)=>cb(er, undefined));
        }
        utils.guessEncoding(input, encoding).pipe(c);
        return p;
    }
    /**
   * Stop processing.
   */ close() {
        this.running = false;
        this.__fresh = true;
    }
    /**
   * Only called if extendedResults is true.
   *
   * @ignore
   */ _onRead(data) {
        this.valueBytes.write(data);
    }
    /**
   * @returns {Generator<number, any, Buffer>} Yields a number of bytes,
   *   returns anything, next returns a Buffer.
   * @throws {Error} Maximum depth exceeded.
   * @yields {number} Number of bytes to read.
   * @ignore
   */ *_parse() {
        let parent = null;
        let depth = 0;
        let val = null;
        while(true){
            if (this.max_depth >= 0 && depth > this.max_depth) {
                throw new Error(`Maximum depth ${this.max_depth} exceeded`);
            }
            const [octet] = yield 1;
            if (!this.running) {
                this.bs.unshift(Buffer.from([
                    octet
                ]));
                throw new UnexpectedDataError(octet);
            }
            const mt = octet >> 5;
            const ai = octet & 0x1f;
            const parent_major = parent == null ? undefined : parent[MAJOR];
            const parent_length = parent == null ? undefined : parent.length;
            switch(ai){
                case NUMBYTES.ONE:
                    this.emit('more-bytes', mt, 1, parent_major, parent_length);
                    [val] = yield 1;
                    break;
                case NUMBYTES.TWO:
                case NUMBYTES.FOUR:
                case NUMBYTES.EIGHT:
                    {
                        const numbytes = 1 << ai - 24;
                        this.emit('more-bytes', mt, numbytes, parent_major, parent_length);
                        const buf = yield numbytes;
                        val = mt === MT.SIMPLE_FLOAT ? buf : utils.parseCBORint(ai, buf);
                        break;
                    }
                case 28:
                case 29:
                case 30:
                    this.running = false;
                    throw new Error(`Additional info not implemented: ${ai}`);
                case NUMBYTES.INDEFINITE:
                    switch(mt){
                        case MT.POS_INT:
                        case MT.NEG_INT:
                        case MT.TAG:
                            throw new Error(`Invalid indefinite encoding for MT ${mt}`);
                    }
                    val = -1;
                    break;
                default:
                    val = ai;
            }
            switch(mt){
                case MT.POS_INT:
                    break;
                case MT.NEG_INT:
                    if (val === Number.MAX_SAFE_INTEGER) {
                        val = BI.NEG_MAX;
                    } else {
                        val = typeof val === 'bigint' ? BI.MINUS_ONE - val : -1 - val;
                    }
                    break;
                case MT.BYTE_STRING:
                case MT.UTF8_STRING:
                    switch(val){
                        case 0:
                            this.emit('start-string', mt, val, parent_major, parent_length);
                            if (mt === MT.UTF8_STRING) {
                                val = '';
                            } else {
                                val = this.preferWeb ? new Uint8Array(0) : Buffer.allocUnsafe(0);
                            }
                            break;
                        case -1:
                            this.emit('start', mt, SYMS.STREAM, parent_major, parent_length);
                            parent = parentBufferStream(parent, mt);
                            depth++;
                            continue;
                        default:
                            this.emit('start-string', mt, val, parent_major, parent_length);
                            val = yield val;
                            if (mt === MT.UTF8_STRING) {
                                val = utils.utf8(val);
                            } else if (this.preferWeb) {
                                val = new Uint8Array(val.buffer, val.byteOffset, val.length);
                            }
                    }
                    break;
                case MT.ARRAY:
                case MT.MAP:
                    switch(val){
                        case 0:
                            if (mt === MT.MAP) {
                                val = this.preferMap ? new Map() : {};
                            } else {
                                val = [];
                            }
                            break;
                        case -1:
                            this.emit('start', mt, SYMS.STREAM, parent_major, parent_length);
                            parent = parentArray(parent, mt, -1);
                            depth++;
                            continue;
                        default:
                            this.emit('start', mt, val, parent_major, parent_length);
                            parent = parentArray(parent, mt, val * (mt - 3));
                            depth++;
                            continue;
                    }
                    break;
                case MT.TAG:
                    this.emit('start', mt, val, parent_major, parent_length);
                    parent = parentArray(parent, mt, 1);
                    parent.push(val);
                    depth++;
                    continue;
                case MT.SIMPLE_FLOAT:
                    if (typeof val === 'number') {
                        if (ai === NUMBYTES.ONE && val < 32) {
                            throw new Error(`Invalid two-byte encoding of simple value ${val}`);
                        }
                        const hasParent = parent != null;
                        val = Simple.decode(val, hasParent, hasParent && parent[COUNT] < 0);
                    } else {
                        val = utils.parseCBORfloat(val);
                    }
            }
            this.emit('value', val, parent_major, parent_length, ai);
            let again = false;
            while(parent != null){
                if (val === SYMS.BREAK) {
                    parent[COUNT] = 1;
                } else if (Array.isArray(parent)) {
                    parent.push(val);
                } else {
                    // Assert: parent instanceof NoFilter
                    const pm = parent[MAJOR];
                    if (pm != null && pm !== mt) {
                        this.running = false;
                        throw new Error('Invalid major type in indefinite encoding');
                    }
                    parent.write(val);
                }
                if (--parent[COUNT] !== 0) {
                    again = true;
                    break;
                }
                --depth;
                delete parent[COUNT];
                if (Array.isArray(parent)) {
                    switch(parent[MAJOR]){
                        case MT.ARRAY:
                            val = parent;
                            break;
                        case MT.MAP:
                            {
                                let allstrings = !this.preferMap;
                                if (parent.length % 2 !== 0) {
                                    throw new Error(`Invalid map length: ${parent.length}`);
                                }
                                for(let i = 0, len = parent.length; allstrings && i < len; i += 2){
                                    if (typeof parent[i] !== 'string' || parent[i] === '__proto__') {
                                        allstrings = false;
                                        break;
                                    }
                                }
                                if (allstrings) {
                                    val = {};
                                    for(let i = 0, len = parent.length; i < len; i += 2){
                                        if (this.preventDuplicateKeys && Object.prototype.hasOwnProperty.call(val, parent[i])) {
                                            throw new Error('Duplicate keys in a map');
                                        }
                                        val[parent[i]] = parent[i + 1];
                                    }
                                } else {
                                    val = new Map();
                                    for(let i = 0, len = parent.length; i < len; i += 2){
                                        if (this.preventDuplicateKeys && val.has(parent[i])) {
                                            throw new Error('Duplicate keys in a map');
                                        }
                                        val.set(parent[i], parent[i + 1]);
                                    }
                                }
                                break;
                            }
                        case MT.TAG:
                            {
                                const t = new Tagged(parent[0], parent[1]);
                                val = t.convert(this.tags);
                                break;
                            }
                    }
                } else /* istanbul ignore else */ if (parent instanceof NoFilter) {
                    // Only parent types are Array and NoFilter for (Array/Map) and
                    // (bytes/string) respectively.
                    switch(parent[MAJOR]){
                        case MT.BYTE_STRING:
                            val = parent.slice();
                            if (this.preferWeb) {
                                val = new Uint8Array(/** @type {Buffer} */ val.buffer, /** @type {Buffer} */ val.byteOffset, /** @type {Buffer} */ val.length);
                            }
                            break;
                        case MT.UTF8_STRING:
                            val = parent.toString('utf-8');
                            break;
                    }
                }
                this.emit('stop', parent[MAJOR]);
                const old = parent;
                parent = parent[SYMS.PARENT];
                delete old[SYMS.PARENT];
                delete old[MAJOR];
            }
            if (!again) {
                if (this.extendedResults) {
                    const bytes = this.valueBytes.slice();
                    const ret = {
                        value: Decoder.nullcheck(val),
                        bytes,
                        length: bytes.length
                    };
                    this.valueBytes = new NoFilter();
                    return ret;
                }
                return val;
            }
        }
    }
}
Decoder.NOT_FOUND = NOT_FOUND;
module.exports = Decoder;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/commented.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const stream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)");
const Decoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/decoder.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
const { MT, NUMBYTES, SYMS } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
function plural(c) {
    if (c > 1) {
        return 's';
    }
    return '';
}
/**
 * @typedef CommentOptions
 * @property {number} [max_depth=10] How many times to indent
 *   the dashes.
 * @property {number} [depth=1] Initial indentation depth.
 * @property {boolean} [no_summary=false] If true, omit the summary
 *   of the full bytes read at the end.
 * @property {object} [tags] Mapping from tag number to function(v),
 *   where v is the decoded value that comes after the tag, and where the
 *   function returns the correctly-created value for that tag.
 * @property {boolean} [preferWeb=false] If true, prefer Uint8Arrays to
 *   be generated instead of node Buffers.  This might turn on some more
 *   changes in the future, so forward-compatibility is not guaranteed yet.
 * @property {BufferEncoding} [encoding='hex'] Encoding to use for input, if it
 *   is a string.
 */ /**
 * @callback commentCallback
 * @param {Error} [error] If one was generated.
 * @param {string} [commented] The comment string.
 * @returns {void}
 */ /**
 * Normalize inputs to the static functions.
 *
 * @param {CommentOptions|commentCallback|string|number} opts Encoding,
 *   max_depth, or callback.
 * @param {commentCallback} [cb] Called on completion.
 * @returns {{options: CommentOptions, cb: commentCallback}} Normalized value.
 * @throws {TypeError} Unknown option type.
 * @private
 */ function normalizeOptions(opts, cb) {
    switch(typeof opts){
        case 'function':
            return {
                options: {},
                cb: opts
            };
        case 'string':
            return {
                options: {
                    encoding: opts
                },
                cb
            };
        case 'number':
            return {
                options: {
                    max_depth: opts
                },
                cb
            };
        case 'object':
            return {
                options: opts || {},
                cb
            };
        default:
            throw new TypeError('Unknown option type');
    }
}
/**
 * Generate the expanded format of RFC 8949, section 3.2.2.
 *
 * @extends stream.Transform
 */ class Commented extends stream.Transform {
    /**
   * Create a CBOR commenter.
   *
   * @param {CommentOptions} [options={}] Stream options.
   */ constructor(options = {}){
        const { depth = 1, max_depth = 10, no_summary = false, // Decoder options
        tags = {}, preferWeb, encoding, // Stream.Transform options
        ...superOpts } = options;
        super({
            ...superOpts,
            readableObjectMode: false,
            writableObjectMode: false
        });
        this.depth = depth;
        this.max_depth = max_depth;
        this.all = new NoFilter();
        if (!tags[24]) {
            tags[24] = this._tag_24.bind(this);
        }
        this.parser = new Decoder({
            tags,
            max_depth,
            preferWeb,
            encoding
        });
        this.parser.on('value', this._on_value.bind(this));
        this.parser.on('start', this._on_start.bind(this));
        this.parser.on('start-string', this._on_start_string.bind(this));
        this.parser.on('stop', this._on_stop.bind(this));
        this.parser.on('more-bytes', this._on_more.bind(this));
        this.parser.on('error', this._on_error.bind(this));
        if (!no_summary) {
            this.parser.on('data', this._on_data.bind(this));
        }
        this.parser.bs.on('read', this._on_read.bind(this));
    }
    /**
   * @param {Buffer} v Descend into embedded CBOR.
   * @private
   */ _tag_24(v) {
        const c = new Commented({
            depth: this.depth + 1,
            no_summary: true
        });
        c.on('data', (b)=>this.push(b));
        c.on('error', (er)=>this.emit('error', er));
        c.end(v);
    }
    /**
   * Transforming.
   *
   * @param {any} fresh Buffer to transcode.
   * @param {BufferEncoding} encoding Name of encoding.
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _transform(fresh, encoding, cb) {
        this.parser.write(fresh, encoding, cb);
    }
    /**
   * Flushing.
   *
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _flush(cb) {
        // TODO: find the test that covers this, and look at the return value
        return this.parser._flush(cb);
    }
    /**
   * Comment on an input Buffer or string, creating a string passed to the
   * callback.  If callback not specified, a promise is returned.
   *
   * @param {string|Buffer|ArrayBuffer|Uint8Array|Uint8ClampedArray
   *   |DataView|stream.Readable} input Something to parse.
   * @param {CommentOptions|commentCallback|string|number} [options={}]
   *   Encoding, max_depth, or callback.
   * @param {commentCallback} [cb] If specified, called on completion.
   * @returns {Promise} If cb not specified.
   * @throws {Error} Input required.
   */ static comment(input, options = {}, cb = null) {
        if (input == null) {
            throw new Error('input required');
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const bs = new NoFilter();
        const { encoding = 'hex', ...opts } = options;
        const d = new Commented(opts);
        let p = null;
        if (typeof cb === 'function') {
            d.on('end', ()=>{
                cb(null, bs.toString('utf8'));
            });
            d.on('error', cb);
        } else {
            p = new Promise((resolve, reject)=>{
                d.on('end', ()=>{
                    resolve(bs.toString('utf8'));
                });
                d.on('error', reject);
            });
        }
        d.pipe(bs);
        utils.guessEncoding(input, encoding).pipe(d);
        return p;
    }
    /**
   * @ignore
   */ _on_error(er) {
        this.push('ERROR: ');
        this.push(er.toString());
        this.push('\n');
    }
    /**
   * @ignore
   */ _on_read(buf) {
        this.all.write(buf);
        const hex = buf.toString('hex');
        this.push(new Array(this.depth + 1).join('  '));
        this.push(hex);
        let ind = (this.max_depth - this.depth) * 2 - hex.length;
        if (ind < 1) {
            ind = 1;
        }
        this.push(new Array(ind + 1).join(' '));
        this.push('-- ');
    }
    /**
   * @ignore
   */ _on_more(mt, len, _parent_mt, _pos) {
        let desc = '';
        this.depth++;
        switch(mt){
            case MT.POS_INT:
                desc = 'Positive number,';
                break;
            case MT.NEG_INT:
                desc = 'Negative number,';
                break;
            case MT.ARRAY:
                desc = 'Array, length';
                break;
            case MT.MAP:
                desc = 'Map, count';
                break;
            case MT.BYTE_STRING:
                desc = 'Bytes, length';
                break;
            case MT.UTF8_STRING:
                desc = 'String, length';
                break;
            case MT.SIMPLE_FLOAT:
                if (len === 1) {
                    desc = 'Simple value,';
                } else {
                    desc = 'Float,';
                }
                break;
        }
        this.push(`${desc} next ${len} byte${plural(len)}\n`);
    }
    /**
   * @ignore
   */ _on_start_string(mt, len, _parent_mt, _pos) {
        let desc = '';
        this.depth++;
        switch(mt){
            case MT.BYTE_STRING:
                desc = `Bytes, length: ${len}`;
                break;
            case MT.UTF8_STRING:
                desc = `String, length: ${len.toString()}`;
                break;
        }
        this.push(`${desc}\n`);
    }
    /**
   * @ignore
   */ _on_start(mt, tag, parent_mt, pos) {
        this.depth++;
        switch(parent_mt){
            case MT.ARRAY:
                this.push(`[${pos}], `);
                break;
            case MT.MAP:
                if (pos % 2) {
                    this.push(`{Val:${Math.floor(pos / 2)}}, `);
                } else {
                    this.push(`{Key:${Math.floor(pos / 2)}}, `);
                }
                break;
        }
        switch(mt){
            case MT.TAG:
                this.push(`Tag #${tag}`);
                if (tag === 24) {
                    this.push(' Encoded CBOR data item');
                }
                break;
            case MT.ARRAY:
                if (tag === SYMS.STREAM) {
                    this.push('Array (streaming)');
                } else {
                    this.push(`Array, ${tag} item${plural(tag)}`);
                }
                break;
            case MT.MAP:
                if (tag === SYMS.STREAM) {
                    this.push('Map (streaming)');
                } else {
                    this.push(`Map, ${tag} pair${plural(tag)}`);
                }
                break;
            case MT.BYTE_STRING:
                this.push('Bytes (streaming)');
                break;
            case MT.UTF8_STRING:
                this.push('String (streaming)');
                break;
        }
        this.push('\n');
    }
    /**
   * @ignore
   */ _on_stop(_mt) {
        this.depth--;
    }
    /**
   * @private
   */ _on_value(val, parent_mt, pos, ai) {
        if (val !== SYMS.BREAK) {
            switch(parent_mt){
                case MT.ARRAY:
                    this.push(`[${pos}], `);
                    break;
                case MT.MAP:
                    if (pos % 2) {
                        this.push(`{Val:${Math.floor(pos / 2)}}, `);
                    } else {
                        this.push(`{Key:${Math.floor(pos / 2)}}, `);
                    }
                    break;
            }
        }
        const str = utils.cborValueToString(val, -Infinity);
        if (typeof val === 'string' || Buffer.isBuffer(val)) {
            if (val.length > 0) {
                this.push(str);
                this.push('\n');
            }
            this.depth--;
        } else {
            this.push(str);
            this.push('\n');
        }
        switch(ai){
            case NUMBYTES.ONE:
            case NUMBYTES.TWO:
            case NUMBYTES.FOUR:
            case NUMBYTES.EIGHT:
                this.depth--;
        }
    }
    /**
   * @ignore
   */ _on_data() {
        this.push('0x');
        this.push(this.all.read().toString('hex'));
        this.push('\n');
    }
}
module.exports = Commented;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/diagnose.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const stream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const Decoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/decoder.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
const { MT, SYMS } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
/**
 * Things that can act as inputs, from which a NoFilter can be created.
 *
 * @typedef {string|Buffer|ArrayBuffer|ArrayBufferView
 *   |DataView|stream.Readable} BufferLike
 */ /**
 * @typedef DiagnoseOptions
 * @property {string} [separator='\n'] Output between detected objects.
 * @property {boolean} [stream_errors=false] Put error info into the
 *   output stream.
 * @property {number} [max_depth=-1] The maximum depth to parse.
 *   Use -1 for "until you run out of memory".  Set this to a finite
 *   positive number for un-trusted inputs.  Most standard inputs won't nest
 *   more than 100 or so levels; I've tested into the millions before
 *   running out of memory.
 * @property {object} [tags] Mapping from tag number to function(v),
 *   where v is the decoded value that comes after the tag, and where the
 *   function returns the correctly-created value for that tag.
 * @property {boolean} [preferWeb=false] If true, prefer Uint8Arrays to
 *   be generated instead of node Buffers.  This might turn on some more
 *   changes in the future, so forward-compatibility is not guaranteed yet.
 * @property {BufferEncoding} [encoding='hex'] The encoding of input, ignored if
 *   input is not string.
 */ /**
 * @callback diagnoseCallback
 * @param {Error} [error] If one was generated.
 * @param {string} [value] The diagnostic value.
 * @returns {void}
 */ /**
 * @param {DiagnoseOptions|diagnoseCallback|string} opts Options,
 *   the callback, or input incoding.
 * @param {diagnoseCallback} [cb] Called on completion.
 * @returns {{options: DiagnoseOptions, cb: diagnoseCallback}} Normalized.
 * @throws {TypeError} Unknown option type.
 * @private
 */ function normalizeOptions(opts, cb) {
    switch(typeof opts){
        case 'function':
            return {
                options: {},
                cb: opts
            };
        case 'string':
            return {
                options: {
                    encoding: opts
                },
                cb
            };
        case 'object':
            return {
                options: opts || {},
                cb
            };
        default:
            throw new TypeError('Unknown option type');
    }
}
/**
 * Output the diagnostic format from a stream of CBOR bytes.
 *
 * @extends stream.Transform
 */ class Diagnose extends stream.Transform {
    /**
   * Creates an instance of Diagnose.
   *
   * @param {DiagnoseOptions} [options={}] Options for creation.
   */ constructor(options = {}){
        const { separator = '\n', stream_errors = false, // Decoder options
        tags, max_depth, preferWeb, encoding, // Stream.Transform options
        ...superOpts } = options;
        super({
            ...superOpts,
            readableObjectMode: false,
            writableObjectMode: false
        });
        this.float_bytes = -1;
        this.separator = separator;
        this.stream_errors = stream_errors;
        this.parser = new Decoder({
            tags,
            max_depth,
            preferWeb,
            encoding
        });
        this.parser.on('more-bytes', this._on_more.bind(this));
        this.parser.on('value', this._on_value.bind(this));
        this.parser.on('start', this._on_start.bind(this));
        this.parser.on('stop', this._on_stop.bind(this));
        this.parser.on('data', this._on_data.bind(this));
        this.parser.on('error', this._on_error.bind(this));
    }
    /**
   * Transforming.
   *
   * @param {any} fresh Buffer to transcode.
   * @param {BufferEncoding} encoding Name of encoding.
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _transform(fresh, encoding, cb) {
        this.parser.write(fresh, encoding, cb);
    }
    /**
   * Flushing.
   *
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _flush(cb) {
        this.parser._flush((er)=>{
            if (this.stream_errors) {
                if (er) {
                    this._on_error(er);
                }
                return cb();
            }
            return cb(er);
        });
    }
    /**
   * Convenience function to return a string in diagnostic format.
   *
   * @param {BufferLike} input The CBOR bytes to format.
   * @param {DiagnoseOptions |diagnoseCallback|string} [options={}]
   *   Options, the callback, or the input encoding.
   * @param {diagnoseCallback} [cb] Callback.
   * @returns {Promise} If callback not specified.
   * @throws {TypeError} Input not provided.
   */ static diagnose(input, options = {}, cb = null) {
        if (input == null) {
            throw new TypeError('input required');
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = 'hex', ...opts } = options;
        const bs = new NoFilter();
        const d = new Diagnose(opts);
        let p = null;
        if (typeof cb === 'function') {
            d.on('end', ()=>cb(null, bs.toString('utf8')));
            d.on('error', cb);
        } else {
            p = new Promise((resolve, reject)=>{
                d.on('end', ()=>resolve(bs.toString('utf8')));
                d.on('error', reject);
            });
        }
        d.pipe(bs);
        utils.guessEncoding(input, encoding).pipe(d);
        return p;
    }
    /**
   * @ignore
   */ _on_error(er) {
        if (this.stream_errors) {
            this.push(er.toString());
        } else {
            this.emit('error', er);
        }
    }
    /** @private */ _on_more(mt, len, _parent_mt, _pos) {
        if (mt === MT.SIMPLE_FLOAT) {
            this.float_bytes = ({
                2: 1,
                4: 2,
                8: 3
            })[len];
        }
    }
    /** @private */ _fore(parent_mt, pos) {
        switch(parent_mt){
            case MT.BYTE_STRING:
            case MT.UTF8_STRING:
            case MT.ARRAY:
                if (pos > 0) {
                    this.push(', ');
                }
                break;
            case MT.MAP:
                if (pos > 0) {
                    if (pos % 2) {
                        this.push(': ');
                    } else {
                        this.push(', ');
                    }
                }
        }
    }
    /** @private */ _on_value(val, parent_mt, pos) {
        if (val === SYMS.BREAK) {
            return;
        }
        this._fore(parent_mt, pos);
        const fb = this.float_bytes;
        this.float_bytes = -1;
        this.push(utils.cborValueToString(val, fb));
    }
    /** @private */ _on_start(mt, tag, parent_mt, pos) {
        this._fore(parent_mt, pos);
        switch(mt){
            case MT.TAG:
                this.push(`${tag}(`);
                break;
            case MT.ARRAY:
                this.push('[');
                break;
            case MT.MAP:
                this.push('{');
                break;
            case MT.BYTE_STRING:
            case MT.UTF8_STRING:
                this.push('(');
                break;
        }
        if (tag === SYMS.STREAM) {
            this.push('_ ');
        }
    }
    /** @private */ _on_stop(mt) {
        switch(mt){
            case MT.TAG:
                this.push(')');
                break;
            case MT.ARRAY:
                this.push(']');
                break;
            case MT.MAP:
                this.push('}');
                break;
            case MT.BYTE_STRING:
            case MT.UTF8_STRING:
                this.push(')');
                break;
        }
    }
    /** @private */ _on_data() {
        this.push(this.separator);
    }
}
module.exports = Diagnose;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/encoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const stream = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const NoFilter = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/nofilter@3.1.0/node_modules/nofilter/lib/index.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/utils.js [app-client] (ecmascript)");
const constants = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
const { MT, NUMBYTES, SHIFT32, SIMPLE, SYMS, TAG, BI } = constants;
const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
const HALF = MT.SIMPLE_FLOAT << 5 | NUMBYTES.TWO;
const FLOAT = MT.SIMPLE_FLOAT << 5 | NUMBYTES.FOUR;
const DOUBLE = MT.SIMPLE_FLOAT << 5 | NUMBYTES.EIGHT;
const TRUE = MT.SIMPLE_FLOAT << 5 | SIMPLE.TRUE;
const FALSE = MT.SIMPLE_FLOAT << 5 | SIMPLE.FALSE;
const UNDEFINED = MT.SIMPLE_FLOAT << 5 | SIMPLE.UNDEFINED;
const NULL = MT.SIMPLE_FLOAT << 5 | SIMPLE.NULL;
const BREAK = Buffer.from([
    0xff
]);
const BUF_NAN = Buffer.from('f97e00', 'hex');
const BUF_INF_NEG = Buffer.from('f9fc00', 'hex');
const BUF_INF_POS = Buffer.from('f97c00', 'hex');
const BUF_NEG_ZERO = Buffer.from('f98000', 'hex');
/**
 * Generate the CBOR for a value.  If you are using this, you'll either need
 * to call {@link Encoder.write} with a Buffer, or look into the internals of
 * Encoder to reuse existing non-documented behavior.
 *
 * @callback EncodeFunction
 * @param {Encoder} enc The encoder to use.
 * @param {any} val The value to encode.
 * @returns {boolean} True on success.
 */ /**
 * A mapping from tag number to a tag decoding function.
 *
 * @typedef {Object.<string, EncodeFunction>} SemanticMap
 */ /**
 * @type {SemanticMap}
 * @private
 */ const SEMANTIC_TYPES = {};
/**
 * @type {SemanticMap}
 * @private
 */ let current_SEMANTIC_TYPES = {};
/**
 * @param {string} str String to normalize.
 * @returns {"number"|"float"|"int"|"string"} Normalized.
 * @throws {TypeError} Invalid input.
 * @private
 */ function parseDateType(str) {
    if (!str) {
        return 'number';
    }
    switch(str.toLowerCase()){
        case 'number':
            return 'number';
        case 'float':
            return 'float';
        case 'int':
        case 'integer':
            return 'int';
        case 'string':
            return 'string';
    }
    throw new TypeError(`dateType invalid, got "${str}"`);
}
/**
 * @typedef ObjectOptions
 * @property {boolean} [indefinite = false] Force indefinite encoding for this
 *   object.
 * @property {boolean} [skipTypes = false] Do not use available type mappings
 *   for this object, but encode it as a "normal" JS object would be.
 */ /**
 * @typedef EncodingOptions
 * @property {any[]|object} [genTypes=[]] Array of pairs of
 *   `type`, `function(Encoder)` for semantic types to be encoded.  Not
 *   needed for Array, Date, Buffer, Map, RegExp, Set, or URL.
 *   If an object, the keys are the constructor names for the types.
 * @property {boolean} [canonical=false] Should the output be
 *   canonicalized.
 * @property {boolean|WeakSet} [detectLoops=false] Should object loops
 *   be detected?  This will currently add memory to track every part of the
 *   object being encoded in a WeakSet.  Do not encode
 *   the same object twice on the same encoder, without calling
 *   `removeLoopDetectors` in between, which will clear the WeakSet.
 *   You may pass in your own WeakSet to be used; this is useful in some
 *   recursive scenarios.
 * @property {("number"|"float"|"int"|"string")} [dateType="number"] -
 *   how should dates be encoded?  "number" means float or int, if no
 *   fractional seconds.
 * @property {any} [encodeUndefined=undefined] How should an
 *   "undefined" in the input be encoded.  By default, just encode a CBOR
 *   undefined.  If this is a buffer, use those bytes without re-encoding
 *   them.  If this is a function, the function will be called (which is a
 *   good time to throw an exception, if that's what you want), and the
 *   return value will be used according to these rules.  Anything else will
 *   be encoded as CBOR.
 * @property {boolean} [disallowUndefinedKeys=false] Should
 *   "undefined" be disallowed as a key in a Map that is serialized?  If
 *   this is true, encode(new Map([[undefined, 1]])) will throw an
 *   exception.  Note that it is impossible to get a key of undefined in a
 *   normal JS object.
 * @property {boolean} [collapseBigIntegers=false] Should integers
 *   that come in as ECMAscript bigint's be encoded
 *   as normal CBOR integers if they fit, discarding type information?
 * @property {number} [chunkSize=4096] Number of characters or bytes
 *   for each chunk, if obj is a string or Buffer, when indefinite encoding.
 * @property {boolean} [omitUndefinedProperties=false] When encoding
 *   objects or Maps, do not include a key if its corresponding value is
 *   `undefined`.
 */ /**
 * Transform JavaScript values into CBOR bytes.  The `Writable` side of
 * the stream is in object mode.
 *
 * @extends stream.Transform
 */ class Encoder extends stream.Transform {
    /**
   * Creates an instance of Encoder.
   *
   * @param {EncodingOptions} [options={}] Options for the encoder.
   */ constructor(options = {}){
        const { canonical = false, encodeUndefined, disallowUndefinedKeys = false, dateType = 'number', collapseBigIntegers = false, detectLoops = false, omitUndefinedProperties = false, genTypes = [], ...superOpts } = options;
        super({
            ...superOpts,
            readableObjectMode: false,
            writableObjectMode: true
        });
        this.canonical = canonical;
        this.encodeUndefined = encodeUndefined;
        this.disallowUndefinedKeys = disallowUndefinedKeys;
        this.dateType = parseDateType(dateType);
        this.collapseBigIntegers = this.canonical ? true : collapseBigIntegers;
        /** @type {WeakSet?} */ this.detectLoops = undefined;
        if (typeof detectLoops === 'boolean') {
            if (detectLoops) {
                this.detectLoops = new WeakSet();
            }
        } else if (detectLoops instanceof WeakSet) {
            this.detectLoops = detectLoops;
        } else {
            throw new TypeError('detectLoops must be boolean or WeakSet');
        }
        this.omitUndefinedProperties = omitUndefinedProperties;
        this.semanticTypes = {
            ...Encoder.SEMANTIC_TYPES
        };
        if (Array.isArray(genTypes)) {
            for(let i = 0, len = genTypes.length; i < len; i += 2){
                this.addSemanticType(genTypes[i], genTypes[i + 1]);
            }
        } else {
            for (const [k, v] of Object.entries(genTypes)){
                this.addSemanticType(k, v);
            }
        }
    }
    /**
   * Transforming.
   *
   * @param {any} fresh Buffer to transcode.
   * @param {BufferEncoding} _encoding Name of encoding.
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ _transform(fresh, _encoding, cb) {
        const ret = this.pushAny(fresh);
        // Old transformers might not return bool.  undefined !== false
        cb(ret === false ? new Error('Push Error') : undefined);
    }
    /**
   * Flushing.
   *
   * @param {stream.TransformCallback} cb Callback when done.
   * @ignore
   */ // eslint-disable-next-line class-methods-use-this
    _flush(cb) {
        cb();
    }
    /**
   * @param {number} val Number(0-255) to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushUInt8(val) {
        const b = Buffer.allocUnsafe(1);
        b.writeUInt8(val, 0);
        return this.push(b);
    }
    /**
   * @param {number} val Number(0-65535) to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushUInt16BE(val) {
        const b = Buffer.allocUnsafe(2);
        b.writeUInt16BE(val, 0);
        return this.push(b);
    }
    /**
   * @param {number} val Number(0..2**32-1) to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushUInt32BE(val) {
        const b = Buffer.allocUnsafe(4);
        b.writeUInt32BE(val, 0);
        return this.push(b);
    }
    /**
   * @param {number} val Number to encode as 4-byte float.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushFloatBE(val) {
        const b = Buffer.allocUnsafe(4);
        b.writeFloatBE(val, 0);
        return this.push(b);
    }
    /**
   * @param {number} val Number to encode as 8-byte double.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushDoubleBE(val) {
        const b = Buffer.allocUnsafe(8);
        b.writeDoubleBE(val, 0);
        return this.push(b);
    }
    /**
   * @returns {boolean} True on success.
   * @ignore
   */ _pushNaN() {
        return this.push(BUF_NAN);
    }
    /**
   * @param {number} obj Positive or negative infinity.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushInfinity(obj) {
        const half = obj < 0 ? BUF_INF_NEG : BUF_INF_POS;
        return this.push(half);
    }
    /**
   * Choose the best float representation for a number and encode it.
   *
   * @param {number} obj A number that is known to be not-integer, but not
   *   how many bytes of precision it needs.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushFloat(obj) {
        if (this.canonical) {
            // TODO: is this enough slower to hide behind canonical?
            // It's certainly enough of a hack (see utils.parseHalf)
            // From section 3.9:
            // If a protocol allows for IEEE floats, then additional canonicalization
            // rules might need to be added.  One example rule might be to have all
            // floats start as a 64-bit float, then do a test conversion to a 32-bit
            // float; if the result is the same numeric value, use the shorter value
            // and repeat the process with a test conversion to a 16-bit float.  (This
            // rule selects 16-bit float for positive and negative Infinity as well.)
            // which seems pretty much backwards to me.
            const b2 = Buffer.allocUnsafe(2);
            if (utils.writeHalf(b2, obj)) {
                // I have convinced myself that there are no cases where writeHalf
                // will return true but `utils.parseHalf(b2) !== obj)`
                return this._pushUInt8(HALF) && this.push(b2);
            }
        }
        if (Math.fround(obj) === obj) {
            return this._pushUInt8(FLOAT) && this._pushFloatBE(obj);
        }
        return this._pushUInt8(DOUBLE) && this._pushDoubleBE(obj);
    }
    /**
   * Choose the best integer representation for a postive number and encode
   * it.  If the number is over MAX_SAFE_INTEGER, fall back on float (but I
   * don't remember why).
   *
   * @param {number} obj A positive number that is known to be an integer,
   *   but not how many bytes of precision it needs.
   * @param {number} mt The Major Type number to combine with the integer.
   *   Not yet shifted.
   * @param {number} [orig] The number before it was transformed to positive.
   *   If the mt is NEG_INT, and the positive number is over MAX_SAFE_INT,
   *   then we'll encode this as a float rather than making the number
   *   negative again and losing precision.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushInt(obj, mt, orig) {
        const m = mt << 5;
        if (obj < 24) {
            return this._pushUInt8(m | obj);
        }
        if (obj <= 0xff) {
            return this._pushUInt8(m | NUMBYTES.ONE) && this._pushUInt8(obj);
        }
        if (obj <= 0xffff) {
            return this._pushUInt8(m | NUMBYTES.TWO) && this._pushUInt16BE(obj);
        }
        if (obj <= 0xffffffff) {
            return this._pushUInt8(m | NUMBYTES.FOUR) && this._pushUInt32BE(obj);
        }
        let max = Number.MAX_SAFE_INTEGER;
        if (mt === MT.NEG_INT) {
            // Special case for Number.MIN_SAFE_INTEGER - 1
            max--;
        }
        if (obj <= max) {
            return this._pushUInt8(m | NUMBYTES.EIGHT) && this._pushUInt32BE(Math.floor(obj / SHIFT32)) && this._pushUInt32BE(obj % SHIFT32);
        }
        if (mt === MT.NEG_INT) {
            return this._pushFloat(orig);
        }
        return this._pushFloat(obj);
    }
    /**
   * Choose the best integer representation for a number and encode it.
   *
   * @param {number} obj A number that is known to be an integer,
   *   but not how many bytes of precision it needs.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushIntNum(obj) {
        if (Object.is(obj, -0)) {
            return this.push(BUF_NEG_ZERO);
        }
        if (obj < 0) {
            return this._pushInt(-obj - 1, MT.NEG_INT, obj);
        }
        return this._pushInt(obj, MT.POS_INT);
    }
    /**
   * @param {number} obj Plain JS number to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushNumber(obj) {
        if (isNaN(obj)) {
            return this._pushNaN();
        }
        if (!isFinite(obj)) {
            return this._pushInfinity(obj);
        }
        if (Math.round(obj) === obj) {
            return this._pushIntNum(obj);
        }
        return this._pushFloat(obj);
    }
    /**
   * @param {string} obj String to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushString(obj) {
        const len = Buffer.byteLength(obj, 'utf8');
        return this._pushInt(len, MT.UTF8_STRING) && this.push(obj, 'utf8');
    }
    /**
   * @param {boolean} obj Bool to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushBoolean(obj) {
        return this._pushUInt8(obj ? TRUE : FALSE);
    }
    /**
   * @param {undefined} obj Ignored.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushUndefined(obj) {
        switch(typeof this.encodeUndefined){
            case 'undefined':
                return this._pushUInt8(UNDEFINED);
            case 'function':
                return this.pushAny(this.encodeUndefined(obj));
            case 'object':
                {
                    const buf = utils.bufferishToBuffer(this.encodeUndefined);
                    if (buf) {
                        return this.push(buf);
                    }
                }
        }
        return this.pushAny(this.encodeUndefined);
    }
    /**
   * @param {null} _obj Ignored.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushNull(_obj) {
        return this._pushUInt8(NULL);
    }
    /**
   * @param {number} tag Tag number to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushTag(tag) {
        return this._pushInt(tag, MT.TAG);
    }
    /**
   * @param {bigint} obj BigInt to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ _pushJSBigint(obj) {
        let m = MT.POS_INT;
        let tag = TAG.POS_BIGINT;
        // BigInt doesn't have -0
        if (obj < 0) {
            obj = -obj + BI.MINUS_ONE;
            m = MT.NEG_INT;
            tag = TAG.NEG_BIGINT;
        }
        if (this.collapseBigIntegers && obj <= BI.MAXINT64) {
            // Special handiling for 64bits
            if (obj <= 0xffffffff) {
                return this._pushInt(Number(obj), m);
            }
            return this._pushUInt8(m << 5 | NUMBYTES.EIGHT) && this._pushUInt32BE(Number(obj / BI.SHIFT32)) && this._pushUInt32BE(Number(obj % BI.SHIFT32));
        }
        let str = obj.toString(16);
        if (str.length % 2) {
            str = `0${str}`;
        }
        const buf = Buffer.from(str, 'hex');
        return this._pushTag(tag) && Encoder._pushBuffer(this, buf);
    }
    /**
   * @param {object} obj Object to encode.
   * @param {ObjectOptions} [opts] Options for encoding this object.
   * @returns {boolean} True on success.
   * @throws {Error} Loop detected.
   * @ignore
   */ _pushObject(obj, opts) {
        if (!obj) {
            return this._pushNull(obj);
        }
        opts = {
            indefinite: false,
            skipTypes: false,
            ...opts
        };
        if (!opts.indefinite) {
            // This will only happen the first time through for indefinite encoding
            if (this.detectLoops) {
                if (this.detectLoops.has(obj)) {
                    throw new Error(`\
Loop detected while CBOR encoding.
Call removeLoopDetectors before resuming.`);
                } else {
                    this.detectLoops.add(obj);
                }
            }
        }
        if (!opts.skipTypes) {
            const f = obj.encodeCBOR;
            if (typeof f === 'function') {
                return f.call(obj, this);
            }
            const converter = this.semanticTypes[obj.constructor.name];
            if (converter) {
                return converter.call(obj, this, obj);
            }
        }
        const keys = Object.keys(obj).filter((k)=>{
            const tv = typeof obj[k];
            return tv !== 'function' && (!this.omitUndefinedProperties || tv !== 'undefined');
        });
        const cbor_keys = {};
        if (this.canonical) {
            // Note: this can't be a normal sort, because 'b' needs to sort before
            // 'aa'
            keys.sort((a, b)=>{
                // Always strings, so don't bother to pass options.
                // hold on to the cbor versions, since there's no need
                // to encode more than once
                const a_cbor = cbor_keys[a] || (cbor_keys[a] = Encoder.encode(a));
                const b_cbor = cbor_keys[b] || (cbor_keys[b] = Encoder.encode(b));
                return a_cbor.compare(b_cbor);
            });
        }
        if (opts.indefinite) {
            if (!this._pushUInt8(MT.MAP << 5 | NUMBYTES.INDEFINITE)) {
                return false;
            }
        } else if (!this._pushInt(keys.length, MT.MAP)) {
            return false;
        }
        let ck = null;
        for(let j = 0, len2 = keys.length; j < len2; j++){
            const k = keys[j];
            if (this.canonical && (ck = cbor_keys[k])) {
                if (!this.push(ck)) {
                    return false;
                }
            } else if (!this._pushString(k)) {
                return false;
            }
            if (!this.pushAny(obj[k])) {
                return false;
            }
        }
        if (opts.indefinite) {
            if (!this.push(BREAK)) {
                return false;
            }
        } else if (this.detectLoops) {
            this.detectLoops.delete(obj);
        }
        return true;
    }
    /**
   * @param {any[]} objs Array of supported things.
   * @returns {Buffer} Concatenation of encodings for the supported things.
   * @ignore
   */ _encodeAll(objs) {
        const bs = new NoFilter({
            highWaterMark: this.readableHighWaterMark
        });
        this.pipe(bs);
        for (const o of objs){
            this.pushAny(o);
        }
        this.end();
        return bs.read();
    }
    /**
   * Add an encoding function to the list of supported semantic types.  This
   * is useful for objects for which you can't add an encodeCBOR method.
   *
   * @param {string|Function} type The type to encode.
   * @param {EncodeFunction} fun The encoder to use.
   * @returns {EncodeFunction?} The previous encoder or undefined if there
   *   wasn't one.
   * @throws {TypeError} Invalid function.
   */ addSemanticType(type, fun) {
        const typeName = typeof type === 'string' ? type : type.name;
        const old = this.semanticTypes[typeName];
        if (fun) {
            if (typeof fun !== 'function') {
                throw new TypeError('fun must be of type function');
            }
            this.semanticTypes[typeName] = fun;
        } else if (old) {
            delete this.semanticTypes[typeName];
        }
        return old;
    }
    /**
   * Push any supported type onto the encoded stream.
   *
   * @param {any} obj The thing to encode.
   * @returns {boolean} True on success.
   * @throws {TypeError} Unknown type for obj.
   */ pushAny(obj) {
        switch(typeof obj){
            case 'number':
                return this._pushNumber(obj);
            case 'bigint':
                return this._pushJSBigint(obj);
            case 'string':
                return this._pushString(obj);
            case 'boolean':
                return this._pushBoolean(obj);
            case 'undefined':
                return this._pushUndefined(obj);
            case 'object':
                return this._pushObject(obj);
            case 'symbol':
                switch(obj){
                    case SYMS.NULL:
                        return this._pushNull(null);
                    case SYMS.UNDEFINED:
                        return this._pushUndefined(undefined);
                    // TODO: Add pluggable support for other symbols
                    default:
                        throw new TypeError(`Unknown symbol: ${obj.toString()}`);
                }
            default:
                throw new TypeError(`Unknown type: ${typeof obj}, ${typeof obj.toString === 'function' ? obj.toString() : ''}`);
        }
    }
    /**
   * Encode an array and all of its elements.
   *
   * @param {Encoder} gen Encoder to use.
   * @param {any[]} obj Array to encode.
   * @param {object} [opts] Options.
   * @param {boolean} [opts.indefinite=false] Use indefinite encoding?
   * @returns {boolean} True on success.
   */ static pushArray(gen, obj, opts) {
        opts = {
            indefinite: false,
            ...opts
        };
        const len = obj.length;
        if (opts.indefinite) {
            if (!gen._pushUInt8(MT.ARRAY << 5 | NUMBYTES.INDEFINITE)) {
                return false;
            }
        } else if (!gen._pushInt(len, MT.ARRAY)) {
            return false;
        }
        for(let j = 0; j < len; j++){
            if (!gen.pushAny(obj[j])) {
                return false;
            }
        }
        if (opts.indefinite) {
            if (!gen.push(BREAK)) {
                return false;
            }
        }
        return true;
    }
    /**
   * Remove the loop detector WeakSet for this Encoder.
   *
   * @returns {boolean} True when the Encoder was reset, else false.
   */ removeLoopDetectors() {
        if (!this.detectLoops) {
            return false;
        }
        this.detectLoops = new WeakSet();
        return true;
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {Date} obj Date to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushDate(gen, obj) {
        switch(gen.dateType){
            case 'string':
                return gen._pushTag(TAG.DATE_STRING) && gen._pushString(obj.toISOString());
            case 'int':
                return gen._pushTag(TAG.DATE_EPOCH) && gen._pushIntNum(Math.round(obj.getTime() / 1000));
            case 'float':
                // Force float
                return gen._pushTag(TAG.DATE_EPOCH) && gen._pushFloat(obj.getTime() / 1000);
            case 'number':
            default:
                // If we happen to have an integral number of seconds,
                // use integer.  Otherwise, use float.
                return gen._pushTag(TAG.DATE_EPOCH) && gen.pushAny(obj.getTime() / 1000);
        }
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {Buffer} obj Buffer to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushBuffer(gen, obj) {
        return gen._pushInt(obj.length, MT.BYTE_STRING) && gen.push(obj);
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {NoFilter} obj Buffer to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushNoFilter(gen, obj) {
        return Encoder._pushBuffer(gen, obj.slice());
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {RegExp} obj RegExp to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushRegexp(gen, obj) {
        return gen._pushTag(TAG.REGEXP) && gen.pushAny(obj.source);
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {Set} obj Set to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushSet(gen, obj) {
        if (!gen._pushTag(TAG.SET)) {
            return false;
        }
        if (!gen._pushInt(obj.size, MT.ARRAY)) {
            return false;
        }
        for (const x of obj){
            if (!gen.pushAny(x)) {
                return false;
            }
        }
        return true;
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {URL} obj URL to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushURL(gen, obj) {
        return gen._pushTag(TAG.URI) && gen.pushAny(obj.toString());
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {object} obj Boxed String, Number, or Boolean object to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushBoxed(gen, obj) {
        return gen.pushAny(obj.valueOf());
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {Map} obj Map to encode.
   * @returns {boolean} True on success.
   * @throws {Error} Map key that is undefined.
   * @ignore
   */ static _pushMap(gen, obj, opts) {
        opts = {
            indefinite: false,
            ...opts
        };
        let entries = [
            ...obj.entries()
        ];
        if (gen.omitUndefinedProperties) {
            entries = entries.filter(([_k, v])=>v !== undefined);
        }
        if (opts.indefinite) {
            if (!gen._pushUInt8(MT.MAP << 5 | NUMBYTES.INDEFINITE)) {
                return false;
            }
        } else if (!gen._pushInt(entries.length, MT.MAP)) {
            return false;
        }
        // Memoizing the cbor only helps in certain cases, and hurts in most
        // others.  Just avoid it.
        if (gen.canonical) {
            // Keep the key/value pairs together, so we don't have to do odd
            // gets with object keys later
            const enc = new Encoder({
                genTypes: gen.semanticTypes,
                canonical: gen.canonical,
                detectLoops: Boolean(gen.detectLoops),
                dateType: gen.dateType,
                disallowUndefinedKeys: gen.disallowUndefinedKeys,
                collapseBigIntegers: gen.collapseBigIntegers
            });
            const bs = new NoFilter({
                highWaterMark: gen.readableHighWaterMark
            });
            enc.pipe(bs);
            entries.sort(([a], [b])=>{
                // Both a and b are the keys
                enc.pushAny(a);
                const a_cbor = bs.read();
                enc.pushAny(b);
                const b_cbor = bs.read();
                return a_cbor.compare(b_cbor);
            });
            for (const [k, v] of entries){
                if (gen.disallowUndefinedKeys && typeof k === 'undefined') {
                    throw new Error('Invalid Map key: undefined');
                }
                if (!(gen.pushAny(k) && gen.pushAny(v))) {
                    return false;
                }
            }
        } else {
            for (const [k, v] of entries){
                if (gen.disallowUndefinedKeys && typeof k === 'undefined') {
                    throw new Error('Invalid Map key: undefined');
                }
                if (!(gen.pushAny(k) && gen.pushAny(v))) {
                    return false;
                }
            }
        }
        if (opts.indefinite) {
            if (!gen.push(BREAK)) {
                return false;
            }
        }
        return true;
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param {NodeJS.TypedArray} obj Array to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushTypedArray(gen, obj) {
        // See https://tools.ietf.org/html/rfc8746
        let typ = 0b01000000;
        let sz = obj.BYTES_PER_ELEMENT;
        const { name } = obj.constructor;
        if (name.startsWith('Float')) {
            typ |= 0b00010000;
            sz /= 2;
        } else if (!name.includes('U')) {
            typ |= 0b00001000;
        }
        if (name.includes('Clamped') || sz !== 1 && !utils.isBigEndian()) {
            typ |= 0b00000100;
        }
        typ |= ({
            1: 0b00,
            2: 0b01,
            4: 0b10,
            8: 0b11
        })[sz];
        if (!gen._pushTag(typ)) {
            return false;
        }
        return Encoder._pushBuffer(gen, Buffer.from(obj.buffer, obj.byteOffset, obj.byteLength));
    }
    /**
   * @param {Encoder} gen Encoder.
   * @param { ArrayBuffer } obj Array to encode.
   * @returns {boolean} True on success.
   * @ignore
   */ static _pushArrayBuffer(gen, obj) {
        return Encoder._pushBuffer(gen, Buffer.from(obj));
    }
    /**
   * Encode the given object with indefinite length.  There are apparently
   * some (IMO) broken implementations of poorly-specified protocols that
   * REQUIRE indefinite-encoding.  See the example for how to add this as an
   * `encodeCBOR` function to an object or class to get indefinite encoding.
   *
   * @param {Encoder} gen The encoder to use.
   * @param {string|Buffer|Array|Map|object} [obj] The object to encode.  If
   *   null, use "this" instead.
   * @param {EncodingOptions} [options={}] Options for encoding.
   * @returns {boolean} True on success.
   * @throws {Error} No object to encode or invalid indefinite encoding.
   * @example <caption>Force indefinite encoding:</caption>
   * const o = {
   *   a: true,
   *   encodeCBOR: cbor.Encoder.encodeIndefinite,
   * }
   * const m = []
   * m.encodeCBOR = cbor.Encoder.encodeIndefinite
   * cbor.encodeOne([o, m])
   */ static encodeIndefinite(gen, obj, options = {}) {
        if (obj == null) {
            if (this == null) {
                throw new Error('No object to encode');
            }
            obj = this;
        }
        // TODO: consider other options
        const { chunkSize = 4096 } = options;
        let ret = true;
        const objType = typeof obj;
        let buf = null;
        if (objType === 'string') {
            // TODO: make sure not to split surrogate pairs at the edges of chunks,
            // since such half-surrogates cannot be legally encoded as UTF-8.
            ret = ret && gen._pushUInt8(MT.UTF8_STRING << 5 | NUMBYTES.INDEFINITE);
            let offset = 0;
            while(offset < obj.length){
                const endIndex = offset + chunkSize;
                ret = ret && gen._pushString(obj.slice(offset, endIndex));
                offset = endIndex;
            }
            ret = ret && gen.push(BREAK);
        } else if (buf = utils.bufferishToBuffer(obj)) {
            ret = ret && gen._pushUInt8(MT.BYTE_STRING << 5 | NUMBYTES.INDEFINITE);
            let offset = 0;
            while(offset < buf.length){
                const endIndex = offset + chunkSize;
                ret = ret && Encoder._pushBuffer(gen, buf.slice(offset, endIndex));
                offset = endIndex;
            }
            ret = ret && gen.push(BREAK);
        } else if (Array.isArray(obj)) {
            ret = ret && Encoder.pushArray(gen, obj, {
                indefinite: true
            });
        } else if (obj instanceof Map) {
            ret = ret && Encoder._pushMap(gen, obj, {
                indefinite: true
            });
        } else {
            if (objType !== 'object') {
                throw new Error('Invalid indefinite encoding');
            }
            ret = ret && gen._pushObject(obj, {
                indefinite: true,
                skipTypes: true
            });
        }
        return ret;
    }
    /**
   * Encode one or more JavaScript objects, and return a Buffer containing the
   * CBOR bytes.
   *
   * @param {...any} objs The objects to encode.
   * @returns {Buffer} The encoded objects.
   */ static encode(...objs) {
        return new Encoder()._encodeAll(objs);
    }
    /**
   * Encode one or more JavaScript objects canonically (slower!), and return
   * a Buffer containing the CBOR bytes.
   *
   * @param {...any} objs The objects to encode.
   * @returns {Buffer} The encoded objects.
   */ static encodeCanonical(...objs) {
        return new Encoder({
            canonical: true
        })._encodeAll(objs);
    }
    /**
   * Encode one JavaScript object using the given options.
   *
   * @param {any} obj The object to encode.
   * @param {EncodingOptions} [options={}] Passed to the Encoder constructor.
   * @returns {Buffer} The encoded objects.
   */ static encodeOne(obj, options) {
        return new Encoder(options)._encodeAll([
            obj
        ]);
    }
    /**
   * Encode one JavaScript object using the given options in a way that
   * is more resilient to objects being larger than the highWaterMark
   * number of bytes.  As with the other static encode functions, this
   * will still use a large amount of memory.  Use a stream-based approach
   * directly if you need to process large and complicated inputs.
   *
   * @param {any} obj The object to encode.
   * @param {EncodingOptions} [options={}] Passed to the Encoder constructor.
   * @returns {Promise<Buffer>} A promise for the encoded buffer.
   */ static encodeAsync(obj, options) {
        return new Promise((resolve, reject)=>{
            const bufs = [];
            const enc = new Encoder(options);
            enc.on('data', (buf)=>bufs.push(buf));
            enc.on('error', reject);
            enc.on('finish', ()=>resolve(Buffer.concat(bufs)));
            enc.pushAny(obj);
            enc.end();
        });
    }
    /**
   * The currently supported set of semantic types.  May be modified by plugins.
   *
   * @type {SemanticMap}
   */ static get SEMANTIC_TYPES() {
        return current_SEMANTIC_TYPES;
    }
    static set SEMANTIC_TYPES(val) {
        current_SEMANTIC_TYPES = val;
    }
    /**
   * Reset the supported semantic types to the original set, before any
   * plugins modified the list.
   */ static reset() {
        Encoder.SEMANTIC_TYPES = {
            ...SEMANTIC_TYPES
        };
    }
}
Object.assign(SEMANTIC_TYPES, {
    Array: Encoder.pushArray,
    Date: Encoder._pushDate,
    Buffer: Encoder._pushBuffer,
    [Buffer.name]: Encoder._pushBuffer,
    Map: Encoder._pushMap,
    NoFilter: Encoder._pushNoFilter,
    [NoFilter.name]: Encoder._pushNoFilter,
    RegExp: Encoder._pushRegexp,
    Set: Encoder._pushSet,
    ArrayBuffer: Encoder._pushArrayBuffer,
    Uint8ClampedArray: Encoder._pushTypedArray,
    Uint8Array: Encoder._pushTypedArray,
    Uint16Array: Encoder._pushTypedArray,
    Uint32Array: Encoder._pushTypedArray,
    Int8Array: Encoder._pushTypedArray,
    Int16Array: Encoder._pushTypedArray,
    Int32Array: Encoder._pushTypedArray,
    Float32Array: Encoder._pushTypedArray,
    Float64Array: Encoder._pushTypedArray,
    URL: Encoder._pushURL,
    Boolean: Encoder._pushBoxed,
    Number: Encoder._pushBoxed,
    String: Encoder._pushBoxed
});
// Safari needs to get better.
if (typeof BigUint64Array !== 'undefined') {
    SEMANTIC_TYPES[BigUint64Array.name] = Encoder._pushTypedArray;
}
if (typeof BigInt64Array !== 'undefined') {
    SEMANTIC_TYPES[BigInt64Array.name] = Encoder._pushTypedArray;
}
Encoder.reset();
module.exports = Encoder;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
const encoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/encoder.js [app-client] (ecmascript)");
const decoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/decoder.js [app-client] (ecmascript)");
const { MT } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/constants.js [app-client] (ecmascript)");
/**
 * Wrapper around a JavaScript Map object that allows the keys to be
 * any complex type.  The base Map object allows this, but will only
 * compare the keys by identity, not by value.  CborMap translates keys
 * to CBOR first (and base64's them to ensure by-value comparison).
 *
 * This is not a subclass of Object, because it would be tough to get
 * the semantics to be an exact match.
 *
 * @extends Map
 */ class CborMap extends Map {
    /**
   * Creates an instance of CborMap.
   *
   * @param {Iterable<any>} [iterable] An Array or other iterable
   *   object whose elements are key-value pairs (arrays with two elements, e.g.
   *   <code>[[ 1, 'one' ],[ 2, 'two' ]]</code>). Each key-value pair is added
   *   to the new CborMap; null values are treated as undefined.
   */ constructor(iterable){
        super(iterable);
    }
    /**
   * @ignore
   * @param {unknown} key
   * @returns {string}
   */ static _encode(key) {
        return encoder.encodeCanonical(key).toString('base64');
    }
    /**
   * @ignore
   * @param {string} key
   * @returns {unknown}
   */ static _decode(key) {
        return decoder.decodeFirstSync(key, 'base64');
    }
    /**
   * Retrieve a specified element.
   *
   * @param {any} key The key identifying the element to retrieve.
   *   Can be any type, which will be serialized into CBOR and compared by
   *   value.
   * @returns {any} The element if it exists, or <code>undefined</code>.
   */ get(key) {
        return super.get(CborMap._encode(key));
    }
    /**
   * Adds or updates an element with a specified key and value.
   *
   * @param {any} key The key identifying the element to store.
   *   Can be any type, which will be serialized into CBOR and compared by
   *   value.
   * @param {any} val The element to store.
   * @returns {this} This object.
   */ set(key, val) {
        return super.set(CborMap._encode(key), val);
    }
    /**
   * Removes the specified element.
   *
   * @param {any} key The key identifying the element to delete. Can be any
   *   type, which will be serialized into CBOR and compared by value.
   * @returns {boolean} True if an element in the Map object existed and has
   *   been removed, or false if the element does not exist.
   */ delete(key) {
        return super.delete(CborMap._encode(key));
    }
    /**
   * Does an element with the specified key exist?
   *
   * @param {any} key The key identifying the element to check.
   *   Can be any type, which will be serialized into CBOR and compared by
   *   value.
   * @returns {boolean} True if an element with the specified key exists in
   *   the Map object; otherwise false.
   */ has(key) {
        return super.has(CborMap._encode(key));
    }
    /**
   * Returns a new Iterator object that contains the keys for each element
   * in the Map object in insertion order.  The keys are decoded into their
   * original format.
   *
   * @returns {MapIterator<any>}
   */ *keys() {
        for (const k of super.keys()){
            yield CborMap._decode(k);
        }
    }
    /**
   * Returns a new Iterator object that contains the [key, value] pairs for
   * each element in the Map object in insertion order.
   *
   * @returns {MapIterator<any>} Key value pairs.
   * @yields {any[]} Key value pairs.
   */ *entries() {
        for (const kv of super.entries()){
            yield [
                CborMap._decode(kv[0]),
                kv[1]
            ];
        }
    }
    /**
   * Returns a new Iterator object that contains the [key, value] pairs for
   * each element in the Map object in insertion order.
   *
   * @returns {MapIterator<any>} Key value pairs.
   */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
   * Executes a provided function once per each key/value pair in the Map
   * object, in insertion order.
   *
   * @param {function(any, any, Map<any,any>): undefined} fun Function to
   *   execute for each element, which takes a value, a key, and the Map
   *   being traversed.
   * @param {any} thisArg Value to use as this when executing callback.
   * @throws {TypeError} Invalid function.
   */ forEach(fun, thisArg = this) {
        if (typeof fun !== 'function') {
            throw new TypeError('Must be function');
        }
        for (const kv of super.entries()){
            fun.call(thisArg, kv[1], CborMap._decode(kv[0]), this);
        }
    }
    /**
   * Push the simple value onto the CBOR stream.
   *
   * @param {import('./encoder.js')} gen The generator to push onto.
   * @returns {boolean} True on success.
   */ encodeCBOR(gen) {
        if (!gen._pushInt(this.size, MT.MAP)) {
            return false;
        }
        if (gen.canonical) {
            const entries = Array.from(super.entries()).map((kv)=>[
                    Buffer.from(kv[0], 'base64'),
                    kv[1]
                ]);
            entries.sort((a, b)=>a[0].compare(b[0]));
            for (const kv of entries){
                if (!(gen.push(kv[0]) && gen.pushAny(kv[1]))) {
                    return false;
                }
            }
        } else {
            for (const kv of super.entries()){
                if (!(gen.push(Buffer.from(kv[0], 'base64')) && gen.pushAny(kv[1]))) {
                    return false;
                }
            }
        }
        return true;
    }
}
module.exports = CborMap;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/objectRecorder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Record objects that pass by in a stream.  If the same object is used more
 * than once, it can be value-shared using shared values.
 *
 * @see {@link http://cbor.schmorp.de/value-sharing}
 */ class ObjectRecorder {
    constructor(){
        this.clear();
    }
    /**
   * Clear all of the objects that have been seen.  Revert to recording mode.
   */ clear() {
        this.map = new WeakMap();
        this.count = 0;
        this.recording = true;
    }
    /**
   * Stop recording.
   */ stop() {
        this.recording = false;
    }
    /**
   * Determine if wrapping a tag 28 or 29 around an object that has been
   * reused is appropriate.  This method stores state for which objects have
   * been seen.
   *
   * @param {object} obj Any object about to be serialized.
   * @returns {number} If recording: -1 for first use, index for second use.
   *   If not recording, -1 for never-duplicated, -2 for first use, index for
   *   subsequent uses.
   * @throws {Error} Recording does not match playback.
   */ check(obj) {
        const val = this.map.get(obj);
        if (val) {
            if (val.length > 1) {
                if (val[0] || this.recording) {
                    return val[1];
                }
                val[0] = true;
                return ObjectRecorder.FIRST;
            }
            if (!this.recording) {
                return ObjectRecorder.NEVER;
            }
            val.push(this.count++);
            // Second use while recording
            return val[1];
        }
        if (!this.recording) {
            throw new Error('New object detected when not recording');
        }
        this.map.set(obj, [
            false
        ]);
        // First use while recording
        return ObjectRecorder.NEVER;
    }
}
ObjectRecorder.NEVER = -1;
ObjectRecorder.FIRST = -2;
module.exports = ObjectRecorder;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/sharedValueEncoder.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Encoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/encoder.js [app-client] (ecmascript)");
const ObjectRecorder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/objectRecorder.js [app-client] (ecmascript)");
const { Buffer } = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js [app-client] (ecmascript)");
/**
 * Implement value sharing.
 *
 * @see {@link cbor.schmorp.de/value-sharing}
 */ class SharedValueEncoder extends Encoder {
    constructor(opts){
        super(opts);
        this.valueSharing = new ObjectRecorder();
    }
    /**
   * @param {object} obj Object to encode.
   * @param {import('./encoder').ObjectOptions} [opts] Options for encoding
   *   this object.
   * @returns {boolean} True on success.
   * @throws {Error} Loop detected.
   * @ignore
   */ _pushObject(obj, opts) {
        if (obj !== null) {
            const shared = this.valueSharing.check(obj);
            switch(shared){
                case ObjectRecorder.FIRST:
                    // Prefix with tag 28
                    this._pushTag(28);
                    break;
                case ObjectRecorder.NEVER:
                    break;
                default:
                    return this._pushTag(29) && this._pushIntNum(shared);
            }
        }
        return super._pushObject(obj, opts);
    }
    /**
   * Between encoding runs, stop recording, and start outputing correct tags.
   */ stopRecording() {
        this.valueSharing.stop();
    }
    /**
   * Remove the existing recording and start over.  Do this between encoding
   * pairs.
   */ clearRecording() {
        this.valueSharing.clear();
    }
    /**
   * Encode one or more JavaScript objects, and return a Buffer containing the
   * CBOR bytes.
   *
   * @param {...any} objs The objects to encode.
   * @returns {Buffer} The encoded objects.
   */ static encode(...objs) {
        const enc = new SharedValueEncoder();
        // eslint-disable-next-line no-empty-function
        enc.on('data', ()=>{}); // Sink all writes
        for (const o of objs){
            enc.pushAny(o);
        }
        enc.stopRecording();
        enc.removeAllListeners('data');
        return enc._encodeAll(objs);
    }
    /**
   * Encode one or more JavaScript objects canonically (slower!), and return
   * a Buffer containing the CBOR bytes.
   *
   * @param {...any} _objs The objects to encode.
   * @returns {Buffer} Never.
   * @throws {Error} Always.  This combination doesn't work at the moment.
   */ static encodeCanonical(..._objs) {
        throw new Error('Cannot encode canonically in a SharedValueEncoder, which serializes objects multiple times.');
    }
    /**
   * Encode one JavaScript object using the given options.
   *
   * @param {any} obj The object to encode.
   * @param {import('./encoder').EncodingOptions} [options={}]
   *   Passed to the Encoder constructor.
   * @returns {Buffer} The encoded objects.
   * @static
   */ static encodeOne(obj, options) {
        const enc = new SharedValueEncoder(options);
        // eslint-disable-next-line no-empty-function
        enc.on('data', ()=>{}); // Sink all writes
        enc.pushAny(obj);
        enc.stopRecording();
        enc.removeAllListeners('data');
        return enc._encodeAll([
            obj
        ]);
    }
    /**
   * Encode one JavaScript object using the given options in a way that
   * is more resilient to objects being larger than the highWaterMark
   * number of bytes.  As with the other static encode functions, this
   * will still use a large amount of memory.  Use a stream-based approach
   * directly if you need to process large and complicated inputs.
   *
   * @param {any} obj The object to encode.
   * @param {import('./encoder').EncodingOptions} [options={}]
   *   Passed to the Encoder constructor.
   * @returns {Promise<Buffer>} A promise for the encoded buffer.
   */ static encodeAsync(obj, options) {
        return new Promise((resolve, reject)=>{
            /** @type {Buffer[]} */ const bufs = [];
            const enc = new SharedValueEncoder(options);
            // eslint-disable-next-line no-empty-function
            enc.on('data', ()=>{});
            enc.on('error', reject);
            enc.on('finish', ()=>resolve(Buffer.concat(bufs)));
            enc.pushAny(obj);
            enc.stopRecording();
            enc.removeAllListeners('data');
            enc.on('data', (buf)=>bufs.push(buf));
            enc.pushAny(obj);
            enc.end();
        });
    }
}
module.exports = SharedValueEncoder;
}),
"[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/cbor.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Commented = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/commented.js [app-client] (ecmascript)");
const Diagnose = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/diagnose.js [app-client] (ecmascript)");
const Decoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/decoder.js [app-client] (ecmascript)");
const Encoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/encoder.js [app-client] (ecmascript)");
const Simple = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/simple.js [app-client] (ecmascript)");
const Tagged = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/tagged.js [app-client] (ecmascript)");
const Map = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/map.js [app-client] (ecmascript)");
const SharedValueEncoder = __turbopack_context__.r("[project]/frontend/node_modules/.pnpm/cbor@10.0.11/node_modules/cbor/lib/sharedValueEncoder.js [app-client] (ecmascript)");
module.exports = {
    Commented,
    Diagnose,
    Decoder,
    Encoder,
    Simple,
    Tagged,
    Map,
    SharedValueEncoder,
    /**
   * Convenience name for {@linkcode Commented.comment}.
   */ comment: Commented.comment,
    /**
   * Convenience name for {@linkcode Decoder.decodeAll}.
   */ decodeAll: Decoder.decodeAll,
    /**
   * Convenience name for {@linkcode Decoder.decodeFirst}.
   */ decodeFirst: Decoder.decodeFirst,
    /**
   * Convenience name for {@linkcode Decoder.decodeAllSync}.
   */ decodeAllSync: Decoder.decodeAllSync,
    /**
   * Convenience name for {@linkcode Decoder.decodeFirstSync}.
   */ decodeFirstSync: Decoder.decodeFirstSync,
    /**
   * Convenience name for {@linkcode Diagnose.diagnose}.
   */ diagnose: Diagnose.diagnose,
    /**
   * Convenience name for {@linkcode Encoder.encode}.
   */ encode: Encoder.encode,
    /**
   * Convenience name for {@linkcode Encoder.encodeCanonical}.
   */ encodeCanonical: Encoder.encodeCanonical,
    /**
   * Convenience name for {@linkcode Encoder.encodeOne}.
   */ encodeOne: Encoder.encodeOne,
    /**
   * Convenience name for {@linkcode Encoder.encodeAsync}.
   */ encodeAsync: Encoder.encodeAsync,
    /**
   * Convenience name for {@linkcode Decoder.decodeFirstSync}.
   */ decode: Decoder.decodeFirstSync,
    /**
   * The codec information for
   * {@link https://github.com/Level/encoding-down encoding-down}, which is a
   * codec framework for leveldb.  CBOR is a particularly convenient format for
   * both keys and values, as it can deal with a lot of types that JSON can't
   * handle without losing type information.
   *
   * @example
   * const level = require('level')
   * const cbor = require('cbor')
   *
   * async function putget() {
   *   const db = level('./db', {
   *     keyEncoding: cbor.leveldb,
   *     valueEncoding: cbor.leveldb,
   *   })
   *
   *   await db.put({a: 1}, 9857298342094820394820394820398234092834n)
   *   const val = await db.get({a: 1})
   * }
   */ leveldb: {
        decode: Decoder.decodeFirstSync,
        encode: Encoder.encode,
        buffer: true,
        name: 'cbor'
    },
    /**
   * Reset everything that we can predict a plugin might have altered in good
   * faith.  For now that includes the default set of tags that decoding and
   * encoding will use.
   */ reset () {
        Encoder.reset();
        Tagged.reset();
    }
};
}),
]);

//# sourceMappingURL=33e71_cbor_8e171cf1._.js.map