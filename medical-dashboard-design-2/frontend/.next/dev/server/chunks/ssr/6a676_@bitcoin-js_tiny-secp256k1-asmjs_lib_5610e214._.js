module.exports = [
"[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/validate_error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_BAD_EXTRA_DATA",
    ()=>ERROR_BAD_EXTRA_DATA,
    "ERROR_BAD_HASH",
    ()=>ERROR_BAD_HASH,
    "ERROR_BAD_PARITY",
    ()=>ERROR_BAD_PARITY,
    "ERROR_BAD_POINT",
    ()=>ERROR_BAD_POINT,
    "ERROR_BAD_PRIVATE",
    ()=>ERROR_BAD_PRIVATE,
    "ERROR_BAD_RECOVERY_ID",
    ()=>ERROR_BAD_RECOVERY_ID,
    "ERROR_BAD_SIGNATURE",
    ()=>ERROR_BAD_SIGNATURE,
    "ERROR_BAD_TWEAK",
    ()=>ERROR_BAD_TWEAK,
    "throwError",
    ()=>throwError
]);
const ERROR_BAD_PRIVATE = 0;
const ERROR_BAD_POINT = 1;
const ERROR_BAD_TWEAK = 2;
const ERROR_BAD_HASH = 3;
const ERROR_BAD_SIGNATURE = 4;
const ERROR_BAD_EXTRA_DATA = 5;
const ERROR_BAD_PARITY = 6;
const ERROR_BAD_RECOVERY_ID = 7;
const ERRORS_MESSAGES = {
    [ERROR_BAD_PRIVATE.toString()]: "Expected Private",
    [ERROR_BAD_POINT.toString()]: "Expected Point",
    [ERROR_BAD_TWEAK.toString()]: "Expected Tweak",
    [ERROR_BAD_HASH.toString()]: "Expected Hash",
    [ERROR_BAD_SIGNATURE.toString()]: "Expected Signature",
    [ERROR_BAD_EXTRA_DATA.toString()]: "Expected Extra Data (32 bytes)",
    [ERROR_BAD_PARITY.toString()]: "Expected Parity (1 | 0)",
    [ERROR_BAD_RECOVERY_ID.toString()]: "Bad Recovery Id"
};
function throwError(errcode) {
    const message = ERRORS_MESSAGES[errcode.toString()] || `Unknow error code: ${errcode}`;
    throw new TypeError(message);
}
}),
"[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXTRA_DATA_SIZE",
    ()=>EXTRA_DATA_SIZE,
    "HASH_SIZE",
    ()=>HASH_SIZE,
    "PRIVATE_KEY_SIZE",
    ()=>PRIVATE_KEY_SIZE,
    "PUBLIC_KEY_COMPRESSED_SIZE",
    ()=>PUBLIC_KEY_COMPRESSED_SIZE,
    "PUBLIC_KEY_UNCOMPRESSED_SIZE",
    ()=>PUBLIC_KEY_UNCOMPRESSED_SIZE,
    "SIGNATURE_SIZE",
    ()=>SIGNATURE_SIZE,
    "TWEAK_SIZE",
    ()=>TWEAK_SIZE,
    "X_ONLY_PUBLIC_KEY_SIZE",
    ()=>X_ONLY_PUBLIC_KEY_SIZE,
    "isDERPoint",
    ()=>isDERPoint,
    "isPoint",
    ()=>isPoint,
    "isPointCompressed",
    ()=>isPointCompressed,
    "isPrivate",
    ()=>isPrivate,
    "isXOnlyPoint",
    ()=>isXOnlyPoint,
    "isZero",
    ()=>isZero,
    "validateExtraData",
    ()=>validateExtraData,
    "validateHash",
    ()=>validateHash,
    "validateParity",
    ()=>validateParity,
    "validatePoint",
    ()=>validatePoint,
    "validatePrivate",
    ()=>validatePrivate,
    "validateSignature",
    ()=>validateSignature,
    "validateSignatureCustom",
    ()=>validateSignatureCustom,
    "validateSignatureNonzeroRS",
    ()=>validateSignatureNonzeroRS,
    "validateSigrPMinusN",
    ()=>validateSigrPMinusN,
    "validateTweak",
    ()=>validateTweak,
    "validateXOnlyPoint",
    ()=>validateXOnlyPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/validate_error.js [app-ssr] (ecmascript)");
;
const PRIVATE_KEY_SIZE = 32;
const PUBLIC_KEY_COMPRESSED_SIZE = 33;
const PUBLIC_KEY_UNCOMPRESSED_SIZE = 65;
const X_ONLY_PUBLIC_KEY_SIZE = 32;
const TWEAK_SIZE = 32;
const HASH_SIZE = 32;
const EXTRA_DATA_SIZE = 32;
const SIGNATURE_SIZE = 64;
const BN32_ZERO = new Uint8Array(32);
const BN32_N = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
]);
// Difference between field and order
const BN32_P_MINUS_N = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
]);
function isUint8Array(value) {
    return value instanceof Uint8Array;
}
function cmpBN32(data1, data2) {
    for(let i = 0; i < 32; ++i){
        if (data1[i] !== data2[i]) {
            return data1[i] < data2[i] ? -1 : 1;
        }
    }
    return 0;
}
function isZero(x) {
    return cmpBN32(x, BN32_ZERO) === 0;
}
function isPrivate(x) {
    return isUint8Array(x) && x.length === PRIVATE_KEY_SIZE && cmpBN32(x, BN32_ZERO) > 0 && cmpBN32(x, BN32_N) < 0;
}
function isPoint(p) {
    return isUint8Array(p) && (p.length === PUBLIC_KEY_COMPRESSED_SIZE || p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE || p.length === X_ONLY_PUBLIC_KEY_SIZE);
}
function isXOnlyPoint(p) {
    return isUint8Array(p) && p.length === X_ONLY_PUBLIC_KEY_SIZE;
}
function isDERPoint(p) {
    return isUint8Array(p) && (p.length === PUBLIC_KEY_COMPRESSED_SIZE || p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE);
}
function isPointCompressed(p) {
    return isUint8Array(p) && p.length === PUBLIC_KEY_COMPRESSED_SIZE;
}
function isTweak(tweak) {
    return isUint8Array(tweak) && tweak.length === TWEAK_SIZE && cmpBN32(tweak, BN32_N) < 0;
}
function isHash(h) {
    return isUint8Array(h) && h.length === HASH_SIZE;
}
function isExtraData(e) {
    return e === undefined || isUint8Array(e) && e.length === EXTRA_DATA_SIZE;
}
function isSignature(signature) {
    return isUint8Array(signature) && signature.length === 64 && cmpBN32(signature.subarray(0, 32), BN32_N) < 0 && cmpBN32(signature.subarray(32, 64), BN32_N) < 0;
}
function isSigrLessThanPMinusN(signature) {
    return isUint8Array(signature) && signature.length === 64 && cmpBN32(signature.subarray(0, 32), BN32_P_MINUS_N) < 0;
}
function validateParity(p) {
    if (p !== 0 && p !== 1) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_PARITY"]);
}
function validatePrivate(d) {
    if (!isPrivate(d)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_PRIVATE"]);
}
function validatePoint(p) {
    if (!isPoint(p)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_POINT"]);
}
function validateXOnlyPoint(p) {
    if (!isXOnlyPoint(p)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_POINT"]);
}
function validateTweak(tweak) {
    if (!isTweak(tweak)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_TWEAK"]);
}
function validateHash(h) {
    if (!isHash(h)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_HASH"]);
}
function validateExtraData(e) {
    if (!isExtraData(e)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_EXTRA_DATA"]);
}
function validateSignature(signature) {
    if (!isSignature(signature)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_SIGNATURE"]);
}
function validateSignatureCustom(validatorFn) {
    if (!validatorFn()) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_SIGNATURE"]);
}
function validateSignatureNonzeroRS(signature) {
    if (isZero(signature.subarray(0, 32))) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_SIGNATURE"]);
    if (isZero(signature.subarray(32, 64))) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_SIGNATURE"]);
}
function validateSigrPMinusN(signature) {
    if (!isSigrLessThanPMinusN(signature)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throwError"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate_error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR_BAD_RECOVERY_ID"]);
}
}),
"[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/rand.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateInt32",
    ()=>generateInt32
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function generateInt32() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(4).readInt32BE(0);
}
}),
"[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/wasm_loader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Suppress TS2792: Cannot find module './secp256k1.asm.js'.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$secp256k1$2e$asm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/secp256k1.asm.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$secp256k1$2e$asm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
}),
"[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__initializeContext",
    ()=>__initializeContext,
    "isPoint",
    ()=>isPoint,
    "isPointCompressed",
    ()=>isPointCompressed,
    "isPrivate",
    ()=>isPrivate,
    "isXOnlyPoint",
    ()=>isXOnlyPoint,
    "pointAdd",
    ()=>pointAdd,
    "pointAddScalar",
    ()=>pointAddScalar,
    "pointCompress",
    ()=>pointCompress,
    "pointFromScalar",
    ()=>pointFromScalar,
    "pointMultiply",
    ()=>pointMultiply,
    "privateAdd",
    ()=>privateAdd,
    "privateNegate",
    ()=>privateNegate,
    "privateSub",
    ()=>privateSub,
    "recover",
    ()=>recover,
    "sign",
    ()=>sign,
    "signRecoverable",
    ()=>signRecoverable,
    "signSchnorr",
    ()=>signSchnorr,
    "verify",
    ()=>verify,
    "verifySchnorr",
    ()=>verifySchnorr,
    "xOnlyPointAddTweak",
    ()=>xOnlyPointAddTweak,
    "xOnlyPointAddTweakCheck",
    ()=>xOnlyPointAddTweakCheck,
    "xOnlyPointFromPoint",
    ()=>xOnlyPointFromPoint,
    "xOnlyPointFromScalar",
    ()=>xOnlyPointFromScalar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$uint8array$2d$tools$40$0$2e$0$2e$7$2f$node_modules$2f$uint8array$2d$tools$2f$src$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/uint8array-tools@0.0.7/node_modules/uint8array-tools/src/mjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bitcoin-js+tiny-secp256k1-asmjs@2.2.4/node_modules/@bitcoin-js/tiny-secp256k1-asmjs/lib/wasm_loader.js [app-ssr] (ecmascript)");
;
;
;
const WASM_BUFFER = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memory.buffer);
const WASM_PRIVATE_KEY_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PRIVATE_INPUT.value;
const WASM_PUBLIC_KEY_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PUBLIC_KEY_INPUT.value;
const WASM_PUBLIC_KEY_INPUT_PTR2 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].PUBLIC_KEY_INPUT2.value;
const WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].X_ONLY_PUBLIC_KEY_INPUT.value;
const WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].X_ONLY_PUBLIC_KEY_INPUT2.value;
const WASM_TWEAK_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].TWEAK_INPUT.value;
const WASM_HASH_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].HASH_INPUT.value;
const WASM_EXTRA_DATA_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].EXTRA_DATA_INPUT.value;
const WASM_SIGNATURE_INPUT_PTR = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SIGNATURE_INPUT.value;
const PRIVATE_KEY_INPUT = WASM_BUFFER.subarray(WASM_PRIVATE_KEY_PTR, WASM_PRIVATE_KEY_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIVATE_KEY_SIZE"]);
const PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR, WASM_PUBLIC_KEY_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_KEY_UNCOMPRESSED_SIZE"]);
const PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR2, WASM_PUBLIC_KEY_INPUT_PTR2 + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_KEY_UNCOMPRESSED_SIZE"]);
const X_ONLY_PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"]);
const X_ONLY_PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"]);
const TWEAK_INPUT = WASM_BUFFER.subarray(WASM_TWEAK_INPUT_PTR, WASM_TWEAK_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TWEAK_SIZE"]);
const HASH_INPUT = WASM_BUFFER.subarray(WASM_HASH_INPUT_PTR, WASM_HASH_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HASH_SIZE"]);
const EXTRA_DATA_INPUT = WASM_BUFFER.subarray(WASM_EXTRA_DATA_INPUT_PTR, WASM_EXTRA_DATA_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXTRA_DATA_SIZE"]);
const SIGNATURE_INPUT = WASM_BUFFER.subarray(WASM_SIGNATURE_INPUT_PTR, WASM_SIGNATURE_INPUT_PTR + __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGNATURE_SIZE"]);
function assumeCompression(compressed, p) {
    if (compressed === undefined) {
        return p !== undefined ? p.length : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_KEY_COMPRESSED_SIZE"];
    }
    return compressed ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_KEY_COMPRESSED_SIZE"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_KEY_UNCOMPRESSED_SIZE"];
}
function _isPoint(p) {
    try {
        PUBLIC_KEY_INPUT.set(p);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isPoint(p.length) === 1;
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function __initializeContext() {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].initializeContext();
}
function isPoint(p) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDERPoint"](p) && _isPoint(p);
}
function isPointCompressed(p) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPointCompressed"](p) && _isPoint(p);
}
function isXOnlyPoint(p) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isXOnlyPoint"](p) && _isPoint(p);
}
function isPrivate(d) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrivate"](d);
}
function pointAdd(pA, pB, compressed) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](pA);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](pB);
    const outputlen = assumeCompression(compressed, pA);
    try {
        PUBLIC_KEY_INPUT.set(pA);
        PUBLIC_KEY_INPUT2.set(pB);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pointAdd(pA.length, pB.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
        PUBLIC_KEY_INPUT2.fill(0);
    }
}
function pointAddScalar(p, tweak, compressed) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](p);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pointAddScalar(p.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function pointCompress(p, compressed) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](p);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pointCompress(p.length, outputlen);
        return PUBLIC_KEY_INPUT.slice(0, outputlen);
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function pointFromScalar(d, compressed) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    const outputlen = assumeCompression(compressed);
    try {
        PRIVATE_KEY_INPUT.set(d);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pointFromScalar(outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally{
        PRIVATE_KEY_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function xOnlyPointFromScalar(d) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    try {
        PRIVATE_KEY_INPUT.set(d);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].xOnlyPointFromScalar();
        return X_ONLY_PUBLIC_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"]);
    } finally{
        PRIVATE_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
}
function xOnlyPointFromPoint(p) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].xOnlyPointFromPoint(p.length);
        return X_ONLY_PUBLIC_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"]);
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
}
function pointMultiply(p, tweak, compressed) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](p);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
        PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].pointMultiply(p.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally{
        PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateAdd(d, tweak) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    try {
        PRIVATE_KEY_INPUT.set(d);
        TWEAK_INPUT.set(tweak);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].privateAdd() === 1 ? PRIVATE_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIVATE_KEY_SIZE"]) : null;
    } finally{
        PRIVATE_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateSub(d, tweak) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    // We can not pass zero tweak to WASM, because WASM use `secp256k1_ec_seckey_negate` for tweak negate.
    // (zero is not valid seckey)
    if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isZero"](tweak)) {
        return new Uint8Array(d);
    }
    try {
        PRIVATE_KEY_INPUT.set(d);
        TWEAK_INPUT.set(tweak);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].privateSub() === 1 ? PRIVATE_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIVATE_KEY_SIZE"]) : null;
    } finally{
        PRIVATE_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function privateNegate(d) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    try {
        PRIVATE_KEY_INPUT.set(d);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].privateNegate();
        return PRIVATE_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIVATE_KEY_SIZE"]);
    } finally{
        PRIVATE_KEY_INPUT.fill(0);
    }
}
function xOnlyPointAddTweak(p, tweak) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateXOnlyPoint"](p);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    try {
        X_ONLY_PUBLIC_KEY_INPUT.set(p);
        TWEAK_INPUT.set(tweak);
        const parity = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].xOnlyPointAddTweak();
        return parity !== -1 ? {
            parity,
            xOnlyPubkey: X_ONLY_PUBLIC_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"])
        } : null;
    } finally{
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function xOnlyPointAddTweakCheck(point, tweak, resultToCheck, tweakParity) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateXOnlyPoint"](point);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateXOnlyPoint"](resultToCheck);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateTweak"](tweak);
    const hasParity = tweakParity !== undefined;
    if (hasParity) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateParity"](tweakParity);
    try {
        X_ONLY_PUBLIC_KEY_INPUT.set(point);
        X_ONLY_PUBLIC_KEY_INPUT2.set(resultToCheck);
        TWEAK_INPUT.set(tweak);
        if (hasParity) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].xOnlyPointAddTweakCheck(tweakParity) === 1;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].xOnlyPointAddTweak();
            const newKey = X_ONLY_PUBLIC_KEY_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X_ONLY_PUBLIC_KEY_SIZE"]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$uint8array$2d$tools$40$0$2e$0$2e$7$2f$node_modules$2f$uint8array$2d$tools$2f$src$2f$mjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compare"])(newKey, resultToCheck) === 0;
        }
    } finally{
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT2.fill(0);
        TWEAK_INPUT.fill(0);
    }
}
function sign(h, d, e) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateExtraData"](e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined) EXTRA_DATA_INPUT.set(e);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sign(e === undefined ? 0 : 1);
        return SIGNATURE_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGNATURE_SIZE"]);
    } finally{
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined) EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function signRecoverable(h, d, e) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateExtraData"](e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined) EXTRA_DATA_INPUT.set(e);
        const recoveryId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].signRecoverable(e === undefined ? 0 : 1);
        const signature = SIGNATURE_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGNATURE_SIZE"]);
        return {
            signature,
            recoveryId
        };
    } finally{
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined) EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function signSchnorr(h, d, e) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePrivate"](d);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateExtraData"](e);
    try {
        HASH_INPUT.set(h);
        PRIVATE_KEY_INPUT.set(d);
        if (e !== undefined) EXTRA_DATA_INPUT.set(e);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].signSchnorr(e === undefined ? 0 : 1);
        return SIGNATURE_INPUT.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGNATURE_SIZE"]);
    } finally{
        HASH_INPUT.fill(0);
        PRIVATE_KEY_INPUT.fill(0);
        if (e !== undefined) EXTRA_DATA_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function verify(h, Q, signature, strict = false) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validatePoint"](Q);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignature"](signature);
    try {
        HASH_INPUT.set(h);
        PUBLIC_KEY_INPUT.set(Q);
        SIGNATURE_INPUT.set(signature);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].verify(Q.length, strict === true ? 1 : 0) === 1 ? true : false;
    } finally{
        HASH_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
function recover(h, signature, recoveryId, compressed = false) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignature"](signature);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignatureNonzeroRS"](signature);
    if (recoveryId & 2) {
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSigrPMinusN"](signature);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignatureCustom"](()=>isXOnlyPoint(signature.subarray(0, 32)));
    const outputlen = assumeCompression(compressed);
    try {
        HASH_INPUT.set(h);
        SIGNATURE_INPUT.set(signature);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].recover(outputlen, recoveryId) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally{
        HASH_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
        PUBLIC_KEY_INPUT.fill(0);
    }
}
function verifySchnorr(h, Q, signature) {
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateHash"](h);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateXOnlyPoint"](Q);
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignature"](signature);
    try {
        HASH_INPUT.set(h);
        X_ONLY_PUBLIC_KEY_INPUT.set(Q);
        SIGNATURE_INPUT.set(signature);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bitcoin$2d$js$2b$tiny$2d$secp256k1$2d$asmjs$40$2$2e$2$2e$4$2f$node_modules$2f40$bitcoin$2d$js$2f$tiny$2d$secp256k1$2d$asmjs$2f$lib$2f$wasm_loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].verifySchnorr() === 1 ? true : false;
    } finally{
        HASH_INPUT.fill(0);
        X_ONLY_PUBLIC_KEY_INPUT.fill(0);
        SIGNATURE_INPUT.fill(0);
    }
}
}),
];

//# sourceMappingURL=6a676_%40bitcoin-js_tiny-secp256k1-asmjs_lib_5610e214._.js.map