(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_PUBLIC_KEY_HASH_LENGTH",
    ()=>BIP32_PUBLIC_KEY_HASH_LENGTH,
    "Bip32PrivateKeyHex",
    ()=>Bip32PrivateKeyHex,
    "Bip32PublicKeyHashHex",
    ()=>Bip32PublicKeyHashHex,
    "Bip32PublicKeyHex",
    ()=>Bip32PublicKeyHex,
    "Ed25519KeyHashHex",
    ()=>Ed25519KeyHashHex,
    "Ed25519PrivateExtendedKeyHex",
    ()=>Ed25519PrivateExtendedKeyHex,
    "Ed25519PrivateNormalKeyHex",
    ()=>Ed25519PrivateNormalKeyHex,
    "Ed25519PublicKeyHex",
    ()=>Ed25519PublicKeyHex,
    "Ed25519SignatureHex",
    ()=>Ed25519SignatureHex,
    "Hash28ByteBase16",
    ()=>Hash28ByteBase16,
    "Hash32ByteBase16",
    ()=>Hash32ByteBase16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
;
const BIP32_PUBLIC_KEY_HASH_LENGTH = 28;
const Ed25519SignatureHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 128);
const Bip32PublicKeyHex = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(key, 128);
const Bip32PrivateKeyHex = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(key, 192);
const Ed25519PublicKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
const Ed25519PrivateExtendedKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 128);
const Ed25519PrivateNormalKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
const Ed25519KeyHashHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 56);
const Bip32PublicKeyHashHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, BIP32_PUBLIC_KEY_HASH_LENGTH * 2);
const Hash32ByteBase16 = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
Hash32ByteBase16.fromHexBlob = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castHexBlob"])(value, 64);
const Hash28ByteBase16 = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 56);
Hash28ByteBase16.fromEd25519KeyHashHex = (value)=>value; //# sourceMappingURL=hexTypes.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ready",
    ()=>ready
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$blake2b$40$2$2e$1$2e$4$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/blake2b@2.1.4/node_modules/blake2b/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const ready = async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ready; //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/arithmetic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add256bits",
    ()=>add256bits,
    "add28Mul8",
    ()=>add28Mul8,
    "le32",
    ()=>le32
]);
const add28Mul8 = (x, y)=>{
    let carry = 0;
    const out = new Uint8Array(32);
    for(let i = 0; i < 28; i++){
        const r = x[i] + (y[i] << 3) + carry;
        out[i] = r & 0xff;
        carry = r >> 8;
    }
    for(let i = 28; i < 32; i++){
        const r = x[i] + carry;
        out[i] = r & 0xff;
        carry = r >> 8;
    }
    return out;
};
const add256bits = (x, y)=>{
    let carry = 0;
    const out = new Uint8Array(32);
    for(let i = 0; i < 32; i++){
        const r = x[i] + y[i] + carry;
        out[i] = r;
        carry = r >> 8;
    }
    return out;
};
const le32 = (i)=>new Uint8Array([
        i & 0xff,
        i >> 8 & 0xff,
        i >> 16 & 0xff,
        i >> 24 & 0xff
    ]); //# sourceMappingURL=arithmetic.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32KeyDerivation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "derivePrivate",
    ()=>derivePrivate,
    "derivePublic",
    ()=>derivePublic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/arithmetic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
;
;
;
const isHardenedDerivation = (index)=>index >= 2147483648;
const deriveHardened = (index, scalar, iv, chainCode)=>{
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1 + 64 + 4);
    data.writeUInt32LE(index, 1 + 64);
    scalar.copy(data, 1);
    iv.copy(data, 1 + 32);
    data[0] = 0x00;
    const zMac = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, chainCode);
    data[0] = 0x01;
    const ccMac = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, chainCode);
    return {
        ccMac,
        zMac
    };
};
const deriveSoft = (index, scalar, chainCode)=>{
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1 + 32 + 4);
    data.writeUInt32LE(index, 1 + 32);
    const vk = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(scalar));
    vk.copy(data, 1);
    data[0] = 0x02;
    const zMac = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, chainCode);
    data[0] = 0x03;
    const ccMac = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, chainCode);
    return {
        ccMac,
        zMac
    };
};
const pointOfTrunc28Mul8 = (sk)=>{
    const scalar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add28Mul8"])(new Uint8Array(32).fill(0), sk);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(scalar);
};
const derivePrivate = (key, index)=>{
    const kl = key.subarray(0, 32);
    const kr = key.subarray(32, 64);
    const cc = key.subarray(64, 96);
    const { ccMac, zMac } = isHardenedDerivation(index) ? deriveHardened(index, kl, kr, cc) : deriveSoft(index, kl, cc);
    const chainCode = ccMac.slice(32, 64);
    const zl = zMac.slice(0, 32);
    const zr = zMac.slice(32, 64);
    const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add28Mul8"])(kl, zl);
    const right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add256bits"])(kr, zr);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        left,
        right,
        chainCode
    ]);
};
const derivePublic = (key, index)=>{
    const pk = key.subarray(0, 32);
    const cc = key.subarray(32, 64);
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1 + 32 + 4);
    data.writeUInt32LE(index, 1 + 32);
    if (isHardenedDerivation(index)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('index', 'Public key can not be derived from a hardened index.');
    pk.copy(data, 1);
    data[0] = 0x02;
    const z = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, cc);
    data[0] = 0x03;
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_auth_hmacsha512(data, cc);
    const chainCode = c.slice(32, 64);
    const zl = z.slice(0, 32);
    const p = pointOfTrunc28Mul8(zl);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_core_ed25519_add(p, pk),
        chainCode
    ]);
}; //# sourceMappingURL=Bip32KeyDerivation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519KeyHash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ED25519_PUBLIC_KEY_HASH_LENGTH",
    ()=>ED25519_PUBLIC_KEY_HASH_LENGTH,
    "Ed25519KeyHash",
    ()=>Ed25519KeyHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ed25519KeyHash_hash;
;
;
const ED25519_PUBLIC_KEY_HASH_LENGTH = 28;
class Ed25519KeyHash {
    constructor(hash){
        _Ed25519KeyHash_hash.set(this, void 0);
        __classPrivateFieldSet(this, _Ed25519KeyHash_hash, hash, "f");
    }
    static fromBytes(hash) {
        if (hash.length !== ED25519_PUBLIC_KEY_HASH_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('hash', `Hash should be ${ED25519_PUBLIC_KEY_HASH_LENGTH} bytes; however ${hash.length} bytes were provided.`);
        return new Ed25519KeyHash(hash);
    }
    static fromHex(hash) {
        return Ed25519KeyHash.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hash, 'hex'));
    }
    bytes() {
        return __classPrivateFieldGet(this, _Ed25519KeyHash_hash, "f");
    }
    hex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Ed25519KeyHash_hash, "f")).toString('hex'));
    }
}
_Ed25519KeyHash_hash = new WeakMap(); //# sourceMappingURL=Ed25519KeyHash.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PublicKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ED25519_PUBLIC_KEY_LENGTH",
    ()=>ED25519_PUBLIC_KEY_LENGTH,
    "Ed25519PublicKey",
    ()=>Ed25519PublicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519KeyHash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ed25519PublicKey_keyMaterial;
;
;
;
;
const ED25519_PUBLIC_KEY_LENGTH = 32;
class Ed25519PublicKey {
    constructor(keyMaterial){
        _Ed25519PublicKey_keyMaterial.set(this, void 0);
        __classPrivateFieldSet(this, _Ed25519PublicKey_keyMaterial, keyMaterial, "f");
    }
    verify(signature, message) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_sign_verify_detached(signature.bytes(), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message, 'hex'), __classPrivateFieldGet(this, _Ed25519PublicKey_keyMaterial, "f"));
    }
    static fromBytes(keyMaterial) {
        if (keyMaterial.length !== ED25519_PUBLIC_KEY_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('keyMaterial', `Key should be ${ED25519_PUBLIC_KEY_LENGTH} bytes; however ${keyMaterial.length} bytes were provided.`);
        return new Ed25519PublicKey(keyMaterial);
    }
    static fromHex(keyMaterial) {
        return Ed25519PublicKey.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(keyMaterial, 'hex'));
    }
    hash() {
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_generichash(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_HASH_LENGTH"], __classPrivateFieldGet(this, _Ed25519PublicKey_keyMaterial, "f"));
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHash"].fromBytes(hash);
    }
    bytes() {
        return __classPrivateFieldGet(this, _Ed25519PublicKey_keyMaterial, "f");
    }
    hex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Ed25519PublicKey_keyMaterial, "f")).toString('hex'));
    }
}
_Ed25519PublicKey_keyMaterial = new WeakMap(); //# sourceMappingURL=Ed25519PublicKey.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PublicKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_ED25519_PUBLIC_KEY_LENGTH",
    ()=>BIP32_ED25519_PUBLIC_KEY_LENGTH,
    "Bip32PublicKey",
    ()=>Bip32PublicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32KeyDerivation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32KeyDerivation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Bip32PublicKey_key;
;
;
;
;
;
const BIP32_ED25519_PUBLIC_KEY_LENGTH = 64;
class Bip32PublicKey {
    constructor(key){
        _Bip32PublicKey_key.set(this, void 0);
        __classPrivateFieldSet(this, _Bip32PublicKey_key, key, "f");
    }
    static fromBytes(key) {
        if (key.length !== BIP32_ED25519_PUBLIC_KEY_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('key', `Key should be ${BIP32_ED25519_PUBLIC_KEY_LENGTH} bytes; however ${key.length} bytes were provided.`);
        return new Bip32PublicKey(key);
    }
    static fromHex(key) {
        return Bip32PublicKey.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(key, 'hex'));
    }
    toRawKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"].fromBytes(__classPrivateFieldGet(this, _Bip32PublicKey_key, "f").slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_LENGTH"]));
    }
    derive(derivationIndices) {
        let key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Bip32PublicKey_key, "f"));
        for (const index of derivationIndices){
            key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32KeyDerivation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivePublic"](key, index);
        }
        return Bip32PublicKey.fromBytes(key);
    }
    bytes() {
        return __classPrivateFieldGet(this, _Bip32PublicKey_key, "f");
    }
    hex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Bip32PublicKey_key, "f")).toString('hex'));
    }
    hash() {
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_generichash(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_PUBLIC_KEY_HASH_LENGTH"], __classPrivateFieldGet(this, _Bip32PublicKey_key, "f"));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHashHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hash).toString('hex'));
    }
}
_Bip32PublicKey_key = new WeakMap(); //# sourceMappingURL=Bip32PublicKey.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519Signature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ED25519_SIGNATURE_LENGTH",
    ()=>ED25519_SIGNATURE_LENGTH,
    "Ed25519Signature",
    ()=>Ed25519Signature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ed25519Signature_signature;
;
;
const ED25519_SIGNATURE_LENGTH = 64;
class Ed25519Signature {
    constructor(signature){
        _Ed25519Signature_signature.set(this, void 0);
        __classPrivateFieldSet(this, _Ed25519Signature_signature, signature, "f");
    }
    static fromBytes(signature) {
        if (signature.length !== ED25519_SIGNATURE_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('signature', `signature should be ${ED25519_SIGNATURE_LENGTH} bytes; however ${signature.length} bytes were provided.`);
        return new Ed25519Signature(signature);
    }
    static fromHex(signature) {
        return Ed25519Signature.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signature, 'hex'));
    }
    bytes() {
        return __classPrivateFieldGet(this, _Ed25519Signature_signature, "f");
    }
    hex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519SignatureHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Ed25519Signature_signature, "f")).toString('hex'));
    }
}
_Ed25519Signature_signature = new WeakMap(); //# sourceMappingURL=Ed25519Signature.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PrivateKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXTENDED_ED25519_PRIVATE_KEY_LENGTH",
    ()=>EXTENDED_ED25519_PRIVATE_KEY_LENGTH,
    "Ed25519PrivateKey",
    ()=>Ed25519PrivateKey,
    "Ed25519PrivateKeyType",
    ()=>Ed25519PrivateKeyType,
    "NORMAL_ED25519_PRIVATE_KEY_LENGTH",
    ()=>NORMAL_ED25519_PRIVATE_KEY_LENGTH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ed25519PrivateKey_keyMaterial;
;
;
;
;
;
const SCALAR_INDEX = 0;
const SCALAR_SIZE = 32;
const IV_INDEX = 32;
const IV_SIZE = 32;
const NORMAL_ED25519_PRIVATE_KEY_LENGTH = 32;
const EXTENDED_ED25519_PRIVATE_KEY_LENGTH = 64;
const extendedScalar = (extendedKey)=>extendedKey.slice(SCALAR_INDEX, SCALAR_SIZE);
const extendedIv = (extendedKey)=>extendedKey.slice(IV_INDEX, IV_INDEX + IV_SIZE);
const signExtendedDetached = (extendedKey, message)=>{
    const scalar = extendedScalar(extendedKey);
    const publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(scalar);
    const nonce = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_core_ed25519_scalar_reduce(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_hash_sha512(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        extendedIv(extendedKey),
        message
    ])));
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(nonce);
    let hram = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_hash_sha512(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        r,
        publicKey,
        message
    ]));
    hram = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_core_ed25519_scalar_reduce(hram);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        r,
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_core_ed25519_scalar_add(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_core_ed25519_scalar_mul(hram, scalar), nonce)
    ]);
};
var Ed25519PrivateKeyType;
(function(Ed25519PrivateKeyType) {
    Ed25519PrivateKeyType["Normal"] = "Normal";
    Ed25519PrivateKeyType["Extended"] = "Extended";
})(Ed25519PrivateKeyType || (Ed25519PrivateKeyType = {}));
class Ed25519PrivateKey {
    constructor(keyMaterial, type){
        _Ed25519PrivateKey_keyMaterial.set(this, void 0);
        __classPrivateFieldSet(this, _Ed25519PrivateKey_keyMaterial, keyMaterial, "f");
        this.__type = type;
    }
    toPublic() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"].fromBytes(this.__type === Ed25519PrivateKeyType.Extended ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(extendedScalar(__classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f"))) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_sign_seed_keypair(__classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f")).publicKey);
    }
    sign(message) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519Signature"].fromBytes(this.__type === Ed25519PrivateKeyType.Extended ? signExtendedDetached(__classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f"), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message, 'hex')) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_sign_detached(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message, 'hex'), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f"),
            this.toPublic().bytes()
        ])));
    }
    static fromNormalBytes(keyMaterial) {
        if (keyMaterial.length !== NORMAL_ED25519_PRIVATE_KEY_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('keyMaterial', `Key should be ${NORMAL_ED25519_PRIVATE_KEY_LENGTH} bytes; however ${keyMaterial.length} bytes were provided.`);
        return new Ed25519PrivateKey(keyMaterial, Ed25519PrivateKeyType.Normal);
    }
    static fromExtendedBytes(keyMaterial) {
        if (keyMaterial.length !== EXTENDED_ED25519_PRIVATE_KEY_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('keyMaterial', `Key should be ${EXTENDED_ED25519_PRIVATE_KEY_LENGTH} bytes; however ${keyMaterial.length} bytes were provided.`);
        return new Ed25519PrivateKey(keyMaterial, Ed25519PrivateKeyType.Extended);
    }
    static fromNormalHex(keyMaterial) {
        return Ed25519PrivateKey.fromNormalBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(keyMaterial, 'hex'));
    }
    static fromExtendedHex(keyMaterial) {
        return Ed25519PrivateKey.fromExtendedBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(keyMaterial, 'hex'));
    }
    bytes() {
        return __classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f");
    }
    hex() {
        return this.__type === Ed25519PrivateKeyType.Extended ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateExtendedKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f")).toString('hex')) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateNormalKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Ed25519PrivateKey_keyMaterial, "f")).toString('hex'));
    }
}
_Ed25519PrivateKey_keyMaterial = new WeakMap(); //# sourceMappingURL=Ed25519PrivateKey.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PrivateKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_ED25519_PRIVATE_KEY_LENGTH",
    ()=>BIP32_ED25519_PRIVATE_KEY_LENGTH,
    "Bip32PrivateKey",
    ()=>Bip32PrivateKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32KeyDerivation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32KeyDerivation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$pbkdf2$40$3$2e$1$2e$5$2f$node_modules$2f$pbkdf2$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/pbkdf2@3.1.5/node_modules/pbkdf2/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Bip32PrivateKey_key;
;
;
;
;
;
;
;
const SCALAR_INDEX = 0;
const SCALAR_SIZE = 32;
const PBKDF2_ITERATIONS = 4096;
const PBKDF2_KEY_SIZE = 96;
const PBKDF2_DIGEST_ALGORITHM = 'sha512';
const CHAIN_CODE_INDEX = 64;
const CHAIN_CODE_SIZE = 32;
const clampScalar = (scalar)=>{
    scalar[0] &= 248;
    scalar[31] &= 31;
    scalar[31] |= 64;
    return scalar;
};
const extendedScalar = (extendedKey)=>extendedKey.slice(SCALAR_INDEX, SCALAR_SIZE);
const BIP32_ED25519_PRIVATE_KEY_LENGTH = 96;
class Bip32PrivateKey {
    constructor(key){
        _Bip32PrivateKey_key.set(this, void 0);
        __classPrivateFieldSet(this, _Bip32PrivateKey_key, key, "f");
    }
    static fromBip39Entropy(entropy, password) {
        const xprv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$pbkdf2$40$3$2e$1$2e$5$2f$node_modules$2f$pbkdf2$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pbkdf2Sync"])(password, entropy, PBKDF2_ITERATIONS, PBKDF2_KEY_SIZE, PBKDF2_DIGEST_ALGORITHM);
        return Bip32PrivateKey.fromBytes(clampScalar(xprv));
    }
    static fromBytes(key) {
        if (key.length !== BIP32_ED25519_PRIVATE_KEY_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('key', `Key should be ${BIP32_ED25519_PRIVATE_KEY_LENGTH} bytes; however ${key.length} bytes were provided.`);
        return new Bip32PrivateKey(key);
    }
    static fromHex(key) {
        return Bip32PrivateKey.fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(key, 'hex'));
    }
    derive(derivationIndices) {
        let key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Bip32PrivateKey_key, "f"));
        for (const index of derivationIndices){
            key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32KeyDerivation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derivePrivate"](key, index);
        }
        return Bip32PrivateKey.fromBytes(key);
    }
    toRawKey() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"].fromExtendedBytes(__classPrivateFieldGet(this, _Bip32PrivateKey_key, "f").slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTENDED_ED25519_PRIVATE_KEY_LENGTH"]));
    }
    toPublic() {
        const scalar = extendedScalar(__classPrivateFieldGet(this, _Bip32PrivateKey_key, "f").slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTENDED_ED25519_PRIVATE_KEY_LENGTH"]));
        const publicKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].crypto_scalarmult_ed25519_base_noclamp(scalar);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKey"].fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            publicKey,
            __classPrivateFieldGet(this, _Bip32PrivateKey_key, "f").slice(CHAIN_CODE_INDEX, CHAIN_CODE_INDEX + CHAIN_CODE_SIZE)
        ]));
    }
    bytes() {
        return __classPrivateFieldGet(this, _Bip32PrivateKey_key, "f");
    }
    hex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Bip32PrivateKey_key, "f")).toString('hex'));
    }
}
_Bip32PrivateKey_key = new WeakMap(); //# sourceMappingURL=Bip32PrivateKey.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_ED25519_PRIVATE_KEY_LENGTH"],
    "BIP32_ED25519_PUBLIC_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_ED25519_PUBLIC_KEY_LENGTH"],
    "Bip32PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"],
    "Bip32PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKey"],
    "add256bits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add256bits"],
    "add28Mul8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add28Mul8"],
    "le32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["le32"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$arithmetic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/arithmetic.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32Ed25519.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=Bip32Ed25519.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ED25519_PUBLIC_KEY_HASH_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_HASH_LENGTH"],
    "ED25519_PUBLIC_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_LENGTH"],
    "ED25519_SIGNATURE_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_SIGNATURE_LENGTH"],
    "EXTENDED_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTENDED_ED25519_PRIVATE_KEY_LENGTH"],
    "Ed25519KeyHash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHash"],
    "Ed25519PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"],
    "Ed25519PrivateKeyType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKeyType"],
    "Ed25519PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"],
    "Ed25519Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519Signature"],
    "NORMAL_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NORMAL_ED25519_PRIVATE_KEY_LENGTH"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519KeyHash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519KeyHash.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/CmlBip32Ed25519.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmlBip32Ed25519",
    ()=>CmlBip32Ed25519
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/freeable.js [app-client] (ecmascript)");
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CmlBip32Ed25519_CML;
;
;
const EXTENDED_KEY_HEX_LENGTH = 128;
class CmlBip32Ed25519 {
    constructor(CML){
        _CmlBip32Ed25519_CML.set(this, void 0);
        __classPrivateFieldSet(this, _CmlBip32Ed25519_CML, CML, "f");
    }
    fromBip39Entropy(entropy, passphrase) {
        const hexKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PrivateKey.from_bip39_entropy(entropy, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(passphrase)));
            return cmlKey.as_bytes();
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hexKey).toString('hex'));
    }
    getPublicKey(privateKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPrivateKey = privateKey.length === EXTENDED_KEY_HEX_LENGTH ? scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PrivateKey.from_extended_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKey, 'hex'))) : scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PrivateKey.from_normal_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKey, 'hex')));
            const pubKeyBytes = scope.manage(cmlPrivateKey.to_public()).as_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(pubKeyBytes).toString('hex'));
        });
    }
    getPubKeyHash(publicKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPubKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PublicKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(publicKey, 'hex')));
            const keyHash = scope.manage(cmlPubKey.hash()).to_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(keyHash).toString('hex'));
        });
    }
    getRawPrivateKey(bip32PrivateKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPrivateKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PrivateKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(bip32PrivateKey, 'hex')));
            const bytes = scope.manage(cmlPrivateKey.to_raw_key()).as_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateExtendedKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(bytes).toString('hex'));
        });
    }
    getRawPublicKey(bip32PublicKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPublicKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PublicKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(bip32PublicKey, 'hex')));
            const bytes = scope.manage(cmlPublicKey.to_raw_key()).as_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(bytes).toString('hex'));
        });
    }
    getBip32PublicKey(privateKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPrivateKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PrivateKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKey, 'hex')));
            const pubKeyBytes = scope.manage(cmlPrivateKey.to_public()).as_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(pubKeyBytes).toString('hex'));
        });
    }
    derivePrivateKey(parentKey, derivationIndices) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            let cmlKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PrivateKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(parentKey, 'hex')));
            for (const index of derivationIndices){
                cmlKey = scope.manage(cmlKey.derive(index));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(cmlKey.as_bytes()).toString('hex'));
        });
    }
    derivePublicKey(parentKey, derivationIndices) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            let cmlKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Bip32PublicKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(parentKey, 'hex')));
            for (const index of derivationIndices){
                cmlKey = scope.manage(cmlKey.derive(index));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(cmlKey.as_bytes()).toString('hex'));
        });
    }
    sign(privateKey, message) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlPrivateKey = privateKey.length === EXTENDED_KEY_HEX_LENGTH ? scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PrivateKey.from_extended_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKey, 'hex'))) : scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PrivateKey.from_normal_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKey, 'hex')));
            const signature = scope.manage(cmlPrivateKey.sign(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message, 'hex'))).to_bytes();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519SignatureHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signature).toString('hex'));
        });
    }
    verify(signature, message, publicKey) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$freeable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usingAutoFree"])((scope)=>{
            const cmlKey = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").PublicKey.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(publicKey, 'hex')));
            const cmlSignature = scope.manage(__classPrivateFieldGet(this, _CmlBip32Ed25519_CML, "f").Ed25519Signature.from_bytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signature, 'hex')));
            return cmlKey.verify(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message, 'hex'), cmlSignature);
        });
    }
}
_CmlBip32Ed25519_CML = new WeakMap(); //# sourceMappingURL=CmlBip32Ed25519.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/SodiumBip32Ed25519.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SodiumBip32Ed25519",
    ()=>SodiumBip32Ed25519
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/Bip32PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/Ed25519Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/libsodium-wrappers-sumo@0.7.15/node_modules/libsodium-wrappers-sumo/dist/modules-sumo/libsodium-wrappers.js [app-client] (ecmascript)");
;
;
;
const EXTENDED_KEY_HEX_LENGTH = 128;
class SodiumBip32Ed25519 {
    constructor(){}
    static async create() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$libsodium$2d$wrappers$2d$sumo$40$0$2e$7$2e$15$2f$node_modules$2f$libsodium$2d$wrappers$2d$sumo$2f$dist$2f$modules$2d$sumo$2f$libsodium$2d$wrappers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ready;
        return Promise.resolve(new SodiumBip32Ed25519());
    }
    fromBip39Entropy(entropy, passphrase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"].fromBip39Entropy(entropy, passphrase).hex();
    }
    getPublicKey(privateKey) {
        const key = privateKey.length === EXTENDED_KEY_HEX_LENGTH ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"].fromExtendedHex(privateKey) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"].fromNormalHex(privateKey);
        return key.toPublic().hex();
    }
    getPubKeyHash(publicKey) {
        const pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"].fromHex(publicKey);
        return pubKey.hash().hex();
    }
    getRawPrivateKey(bip32PrivateKey) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"].fromHex(bip32PrivateKey).toRawKey().hex();
    }
    getRawPublicKey(bip32PublicKey) {
        const pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKey"].fromHex(bip32PublicKey);
        return pubKey.toRawKey().hex();
    }
    getBip32PublicKey(privateKey) {
        const privKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"].fromHex(privateKey);
        return privKey.toPublic().hex();
    }
    derivePrivateKey(parentKey, derivationIndices) {
        const privKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"].fromHex(parentKey);
        return privKey.derive(derivationIndices).hex();
    }
    derivePublicKey(parentKey, derivationIndices) {
        const pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$Bip32PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKey"].fromHex(parentKey);
        return pubKey.derive(derivationIndices).hex();
    }
    sign(privateKey, message) {
        const key = privateKey.length === EXTENDED_KEY_HEX_LENGTH ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"].fromExtendedHex(privateKey) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"].fromNormalHex(privateKey);
        return key.sign(message).hex();
    }
    verify(signature, message, publicKey) {
        const key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"].fromHex(publicKey);
        return key.verify(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$Ed25519Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519Signature"].fromHex(signature), message);
    }
} //# sourceMappingURL=SodiumBip32Ed25519.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmlBip32Ed25519",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$CmlBip32Ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmlBip32Ed25519"],
    "SodiumBip32Ed25519",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$SodiumBip32Ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SodiumBip32Ed25519"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$CmlBip32Ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/CmlBip32Ed25519.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$SodiumBip32Ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/SodiumBip32Ed25519.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=types.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_ED25519_PRIVATE_KEY_LENGTH"],
    "BIP32_ED25519_PUBLIC_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_ED25519_PUBLIC_KEY_LENGTH"],
    "BIP32_PUBLIC_KEY_HASH_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BIP32_PUBLIC_KEY_HASH_LENGTH"],
    "Bip32PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKey"],
    "Bip32PrivateKeyHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PrivateKeyHex"],
    "Bip32PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKey"],
    "Bip32PublicKeyHashHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHashHex"],
    "Bip32PublicKeyHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bip32PublicKeyHex"],
    "CmlBip32Ed25519",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmlBip32Ed25519"],
    "ED25519_PUBLIC_KEY_HASH_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_HASH_LENGTH"],
    "ED25519_PUBLIC_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_PUBLIC_KEY_LENGTH"],
    "ED25519_SIGNATURE_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ED25519_SIGNATURE_LENGTH"],
    "EXTENDED_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTENDED_ED25519_PRIVATE_KEY_LENGTH"],
    "Ed25519KeyHash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHash"],
    "Ed25519KeyHashHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"],
    "Ed25519PrivateExtendedKeyHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateExtendedKeyHex"],
    "Ed25519PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKey"],
    "Ed25519PrivateKeyType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateKeyType"],
    "Ed25519PrivateNormalKeyHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PrivateNormalKeyHex"],
    "Ed25519PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKey"],
    "Ed25519PublicKeyHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519PublicKeyHex"],
    "Ed25519Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519Signature"],
    "Ed25519SignatureHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519SignatureHex"],
    "Hash28ByteBase16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"],
    "Hash32ByteBase16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash32ByteBase16"],
    "NORMAL_ED25519_PRIVATE_KEY_LENGTH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NORMAL_ED25519_PRIVATE_KEY_LENGTH"],
    "SodiumBip32Ed25519",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SodiumBip32Ed25519"],
    "add256bits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add256bits"],
    "add28Mul8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add28Mul8"],
    "blake2b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$blake2b$40$2$2e$1$2e$4$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "le32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["le32"],
    "ready",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ready"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$blake2b$40$2$2e$1$2e$4$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/blake2b@2.1.4/node_modules/blake2b/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Bip32Ed25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Bip32Ed25519.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$Ed25519e$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/Ed25519e/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$strategies$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/strategies/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/types.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/index.js [app-client] (ecmascript) <export * as Crypto>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Crypto",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/index.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.1.32/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIP32_PUBLIC_KEY_HASH_LENGTH",
    ()=>BIP32_PUBLIC_KEY_HASH_LENGTH,
    "Bip32PrivateKeyHex",
    ()=>Bip32PrivateKeyHex,
    "Bip32PublicKeyHashHex",
    ()=>Bip32PublicKeyHashHex,
    "Bip32PublicKeyHex",
    ()=>Bip32PublicKeyHex,
    "Ed25519KeyHashHex",
    ()=>Ed25519KeyHashHex,
    "Ed25519PrivateExtendedKeyHex",
    ()=>Ed25519PrivateExtendedKeyHex,
    "Ed25519PrivateNormalKeyHex",
    ()=>Ed25519PrivateNormalKeyHex,
    "Ed25519PublicKeyHex",
    ()=>Ed25519PublicKeyHex,
    "Ed25519SignatureHex",
    ()=>Ed25519SignatureHex,
    "Hash28ByteBase16",
    ()=>Hash28ByteBase16,
    "Hash32ByteBase16",
    ()=>Hash32ByteBase16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.15.7/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
;
const BIP32_PUBLIC_KEY_HASH_LENGTH = 28;
const Ed25519SignatureHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 128);
const Bip32PublicKeyHex = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(key, 128);
const Bip32PrivateKeyHex = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(key, 192);
const Ed25519PublicKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
const Ed25519PrivateExtendedKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 128);
const Ed25519PrivateNormalKeyHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
const Ed25519KeyHashHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 56);
const Bip32PublicKeyHashHex = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, BIP32_PUBLIC_KEY_HASH_LENGTH * 2);
const Hash32ByteBase16 = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 64);
Hash32ByteBase16.fromHexBlob = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castHexBlob"])(value, 64);
const Hash28ByteBase16 = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$15$2e$7$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedHex"])(value, 56);
Hash28ByteBase16.fromEd25519KeyHashHex = (value)=>value; //# sourceMappingURL=hexTypes.js.map
}),
]);

//# sourceMappingURL=9e883__pnpm_bf4868ec._.js.map