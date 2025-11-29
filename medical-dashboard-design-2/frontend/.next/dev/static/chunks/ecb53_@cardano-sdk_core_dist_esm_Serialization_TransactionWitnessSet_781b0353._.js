(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/BootstrapWitness.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BootstrapWitness",
    ()=>BootstrapWitness
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _BootstrapWitness_vkey, _BootstrapWitness_signature, _BootstrapWitness_chainCode, _BootstrapWitness_attributes, _BootstrapWitness_originalBytes;
;
;
;
const BOOTSTRAP_WITNESS_ARRAY_SIZE = 4;
const EMPTY_ATTRIBUTES_CBOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"])('a0');
class BootstrapWitness {
    constructor(vkey, signature, chainCode, attributes){
        _BootstrapWitness_vkey.set(this, void 0);
        _BootstrapWitness_signature.set(this, void 0);
        _BootstrapWitness_chainCode.set(this, void 0);
        _BootstrapWitness_attributes.set(this, void 0);
        _BootstrapWitness_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _BootstrapWitness_vkey, vkey, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_signature, signature, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_chainCode, chainCode, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_attributes, attributes, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _BootstrapWitness_originalBytes, "f")) return __classPrivateFieldGet(this, _BootstrapWitness_originalBytes, "f");
        if (__classPrivateFieldGet(this, _BootstrapWitness_chainCode, "f").length / 2 !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Chaincode must be 32 bytes long, but got ${__classPrivateFieldGet(this, _BootstrapWitness_chainCode, "f").length / 2} bytes long`);
        writer.writeStartArray(BOOTSTRAP_WITNESS_ARRAY_SIZE);
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _BootstrapWitness_vkey, "f")));
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _BootstrapWitness_signature, "f")));
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _BootstrapWitness_chainCode, "f")));
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _BootstrapWitness_attributes, "f")));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== BOOTSTRAP_WITNESS_ARRAY_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${BOOTSTRAP_WITNESS_ARRAY_SIZE} elements, but got an array of ${length} elements`);
        const vkey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        const chainCode = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        const attributes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        reader.readEndArray();
        const witness = new BootstrapWitness(vkey, signature, chainCode, attributes);
        __classPrivateFieldSet(witness, _BootstrapWitness_originalBytes, cbor, "f");
        return witness;
    }
    toCore() {
        return {
            addressAttributes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Base64Blob"].fromBytes((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _BootstrapWitness_attributes, "f"))),
            chainCode: __classPrivateFieldGet(this, _BootstrapWitness_chainCode, "f"),
            key: __classPrivateFieldGet(this, _BootstrapWitness_vkey, "f"),
            signature: __classPrivateFieldGet(this, _BootstrapWitness_signature, "f")
        };
    }
    static fromCore(core) {
        if (!core.chainCode) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('Chaincode must be present');
        if (core.chainCode.length / 2 !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Chaincode must be 32 bytes long, but got ${core.chainCode.length / 2} bytes long`);
        return new BootstrapWitness(core.key, core.signature, core.chainCode, core.addressAttributes ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBase64(core.addressAttributes) : EMPTY_ATTRIBUTES_CBOR);
    }
    vkey() {
        return __classPrivateFieldGet(this, _BootstrapWitness_vkey, "f");
    }
    setVkey(vkey) {
        __classPrivateFieldSet(this, _BootstrapWitness_vkey, vkey, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_originalBytes, undefined, "f");
    }
    signature() {
        return __classPrivateFieldGet(this, _BootstrapWitness_signature, "f");
    }
    setSignature(signature) {
        __classPrivateFieldSet(this, _BootstrapWitness_signature, signature, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_originalBytes, undefined, "f");
    }
    chainCode() {
        return __classPrivateFieldGet(this, _BootstrapWitness_chainCode, "f");
    }
    setChainCode(chainCode) {
        if (chainCode.length / 2 !== 32) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Chaincode must be 32 bytes long, but got ${chainCode.length / 2} bytes long`);
        __classPrivateFieldSet(this, _BootstrapWitness_chainCode, chainCode, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_originalBytes, undefined, "f");
    }
    attributes() {
        return __classPrivateFieldGet(this, _BootstrapWitness_attributes, "f");
    }
    setAttributes(attributes) {
        __classPrivateFieldSet(this, _BootstrapWitness_attributes, attributes, "f");
        __classPrivateFieldSet(this, _BootstrapWitness_originalBytes, undefined, "f");
    }
}
_BootstrapWitness_vkey = new WeakMap(), _BootstrapWitness_signature = new WeakMap(), _BootstrapWitness_chainCode = new WeakMap(), _BootstrapWitness_attributes = new WeakMap(), _BootstrapWitness_originalBytes = new WeakMap(); //# sourceMappingURL=BootstrapWitness.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/RedeemerTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedeemerTag",
    ()=>RedeemerTag
]);
var RedeemerTag;
(function(RedeemerTag) {
    RedeemerTag[RedeemerTag["Spend"] = 0] = "Spend";
    RedeemerTag[RedeemerTag["Mint"] = 1] = "Mint";
    RedeemerTag[RedeemerTag["Cert"] = 2] = "Cert";
    RedeemerTag[RedeemerTag["Reward"] = 3] = "Reward";
    RedeemerTag[RedeemerTag["Voting"] = 4] = "Voting";
    RedeemerTag[RedeemerTag["Proposing"] = 5] = "Proposing";
})(RedeemerTag || (RedeemerTag = {})); //# sourceMappingURL=RedeemerTag.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redeemer",
    ()=>Redeemer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$blake2b$40$2$2e$1$2e$4$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blake2b$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/blake2b@2.1.4/node_modules/blake2b/index.js [app-client] (ecmascript) <export default as blake2b>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/ExUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/PlutusData/PlutusData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/RedeemerTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _Redeemer_tag, _Redeemer_index, _Redeemer_data, _Redeemer_exUnits, _Redeemer_originalBytes;
;
;
;
;
;
;
;
;
const REDEEMER_ARRAY_SIZE = 4;
const HASH_LENGTH_IN_BYTES = 32;
class Redeemer {
    constructor(tag, index, data, exUnits){
        _Redeemer_tag.set(this, void 0);
        _Redeemer_index.set(this, void 0);
        _Redeemer_data.set(this, void 0);
        _Redeemer_exUnits.set(this, void 0);
        _Redeemer_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Redeemer_tag, tag, "f");
        __classPrivateFieldSet(this, _Redeemer_index, index, "f");
        __classPrivateFieldSet(this, _Redeemer_data, data, "f");
        __classPrivateFieldSet(this, _Redeemer_exUnits, exUnits, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _Redeemer_originalBytes, "f")) return __classPrivateFieldGet(this, _Redeemer_originalBytes, "f");
        writer.writeStartArray(REDEEMER_ARRAY_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _Redeemer_tag, "f"));
        writer.writeInt(__classPrivateFieldGet(this, _Redeemer_index, "f"));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _Redeemer_data, "f").toCbor()));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _Redeemer_exUnits, "f").toCbor()));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== REDEEMER_ARRAY_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${REDEEMER_ARRAY_SIZE} elements, but got an array of ${length} elements`);
        const tag = Number(reader.readUInt());
        const index = reader.readUInt();
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusData"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const exUnits = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExUnits"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const redeemer = new Redeemer(tag, index, data, exUnits);
        __classPrivateFieldSet(redeemer, _Redeemer_originalBytes, cbor, "f");
        return redeemer;
    }
    toCore() {
        let purpose;
        switch(__classPrivateFieldGet(this, _Redeemer_tag, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Spend:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].spend;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Mint:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].mint;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Cert:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].certificate;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Reward:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].withdrawal;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Voting:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].vote;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Proposing:
                purpose = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].propose;
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Invalid redeemer type ${__classPrivateFieldGet(this, _Redeemer_tag, "f")}`);
        }
        return {
            data: __classPrivateFieldGet(this, _Redeemer_data, "f").toCore(),
            executionUnits: __classPrivateFieldGet(this, _Redeemer_exUnits, "f").toCore(),
            index: Number(__classPrivateFieldGet(this, _Redeemer_index, "f")),
            purpose
        };
    }
    static fromCore(redeemer) {
        let tag;
        switch(redeemer.purpose){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].spend:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Spend;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].mint:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Mint;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].certificate:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Cert;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].withdrawal:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Reward;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].vote:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Voting;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerPurpose"].propose:
                tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"].Proposing;
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Invalid redeemer type ${redeemer.purpose}`);
        }
        return new Redeemer(tag, BigInt(redeemer.index), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusData"].fromCore(redeemer.data), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExUnits"].fromCore(redeemer.executionUnits));
    }
    tag() {
        return __classPrivateFieldGet(this, _Redeemer_tag, "f");
    }
    setTag(tag) {
        __classPrivateFieldSet(this, _Redeemer_tag, tag, "f");
        __classPrivateFieldSet(this, _Redeemer_originalBytes, undefined, "f");
    }
    index() {
        return __classPrivateFieldGet(this, _Redeemer_index, "f");
    }
    setIndex(index) {
        __classPrivateFieldSet(this, _Redeemer_index, index, "f");
        __classPrivateFieldSet(this, _Redeemer_originalBytes, undefined, "f");
    }
    data() {
        return __classPrivateFieldGet(this, _Redeemer_data, "f");
    }
    setData(data) {
        __classPrivateFieldSet(this, _Redeemer_data, data, "f");
        __classPrivateFieldSet(this, _Redeemer_originalBytes, undefined, "f");
    }
    exUnits() {
        return __classPrivateFieldGet(this, _Redeemer_exUnits, "f");
    }
    setExUnits(exUnits) {
        __classPrivateFieldSet(this, _Redeemer_exUnits, exUnits, "f");
        __classPrivateFieldSet(this, _Redeemer_originalBytes, undefined, "f");
    }
    hash() {
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$blake2b$40$2$2e$1$2e$4$2f$node_modules$2f$blake2b$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__blake2b$3e$__["blake2b"](HASH_LENGTH_IN_BYTES).update(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(this.toCbor(), 'hex')).digest();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash32ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(hash));
    }
}
_Redeemer_tag = new WeakMap(), _Redeemer_index = new WeakMap(), _Redeemer_data = new WeakMap(), _Redeemer_exUnits = new WeakMap(), _Redeemer_originalBytes = new WeakMap(); //# sourceMappingURL=Redeemer.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redeemers",
    ()=>Redeemers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/ExUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/PlutusData/PlutusData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$conwayEra$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/conwayEra.js [app-client] (ecmascript)");
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
var _Redeemers_values, _Redeemers_originalBytes;
;
;
;
;
;
;
;
const MAP_INDEX_EMBEDDED_GROUP_SIZE = 2;
const MAP_VALUE_EMBEDDED_GROUP_SIZE = 2;
class Redeemers {
    constructor(redeemers){
        _Redeemers_values.set(this, void 0);
        _Redeemers_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Redeemers_values, [
            ...redeemers
        ], "f");
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _Redeemers_originalBytes, "f")) return __classPrivateFieldGet(this, _Redeemers_originalBytes, "f");
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$conwayEra$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inConwayEra"]) {
            const redeemersMap = new Map(__classPrivateFieldGet(this, _Redeemers_values, "f").map((redeemer)=>[
                    `${redeemer.tag()}:${redeemer.index()}`,
                    redeemer
                ]));
            writer.writeStartMap(redeemersMap.size);
            for (const redeemer of redeemersMap.values()){
                writer.writeStartArray(2);
                writer.writeInt(redeemer.tag());
                writer.writeInt(redeemer.index());
                writer.writeStartArray(2);
                writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(redeemer.data().toCbor()));
                writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(redeemer.exUnits().toCbor()));
            }
        } else {
            writer.writeStartArray(__classPrivateFieldGet(this, _Redeemers_values, "f").length);
            for (const data of __classPrivateFieldGet(this, _Redeemers_values, "f")){
                writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data.toCbor(), 'hex'));
            }
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const redeemers = [];
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap) {
            reader.readStartMap();
            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
                const indexLength = reader.readStartArray();
                if (indexLength !== MAP_INDEX_EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Redeemers map index should be an array of ${MAP_INDEX_EMBEDDED_GROUP_SIZE} elements, but got an array of ${indexLength} elements`);
                const tag = Number(reader.readUInt());
                const index = reader.readUInt();
                reader.readEndArray();
                const valueLength = reader.readStartArray();
                if (valueLength !== MAP_VALUE_EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Redeemers map value should be an array of ${MAP_VALUE_EMBEDDED_GROUP_SIZE} elements, but got an array of ${valueLength} elements`);
                const data = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusData"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
                const exUnits = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExUnits"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
                reader.readEndArray();
                redeemers.push(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemer"](tag, index, data, exUnits));
            }
            reader.readEndMap();
        } else {
            reader.readStartArray();
            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                redeemers.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemer"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
            }
            reader.readEndArray();
        }
        const result = new Redeemers(redeemers);
        __classPrivateFieldSet(result, _Redeemers_originalBytes, cbor, "f");
        return result;
    }
    toCore() {
        return __classPrivateFieldGet(this, _Redeemers_values, "f").map((redeemer)=>redeemer.toCore());
    }
    static fromCore(redeemers) {
        return new Redeemers(redeemers.map((redeemer)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemer"].fromCore(redeemer)));
    }
    values() {
        return __classPrivateFieldGet(this, _Redeemers_values, "f");
    }
    setValues(redeemers) {
        __classPrivateFieldSet(this, _Redeemers_values, [
            ...redeemers
        ], "f");
        __classPrivateFieldSet(this, _Redeemers_originalBytes, undefined, "f");
    }
    size() {
        return __classPrivateFieldGet(this, _Redeemers_values, "f").length;
    }
}
_Redeemers_values = new WeakMap(), _Redeemers_originalBytes = new WeakMap(); //# sourceMappingURL=Redeemers.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/VkeyWitness.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VkeyWitness",
    ()=>VkeyWitness
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _VkeyWitness_vkey, _VkeyWitness_signature, _VkeyWitness_originalBytes;
;
;
;
const VKEY_ARRAY_SIZE = 2;
class VkeyWitness {
    constructor(vkey, signature){
        _VkeyWitness_vkey.set(this, void 0);
        _VkeyWitness_signature.set(this, void 0);
        _VkeyWitness_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _VkeyWitness_vkey, vkey, "f");
        __classPrivateFieldSet(this, _VkeyWitness_signature, signature, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _VkeyWitness_originalBytes, "f")) return __classPrivateFieldGet(this, _VkeyWitness_originalBytes, "f");
        writer.writeStartArray(VKEY_ARRAY_SIZE);
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _VkeyWitness_vkey, "f")));
        writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _VkeyWitness_signature, "f")));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== VKEY_ARRAY_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${VKEY_ARRAY_SIZE} elements, but got an array of ${length} elements`);
        const vkey = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString());
        reader.readEndArray();
        const witness = new VkeyWitness(vkey, signature);
        __classPrivateFieldSet(witness, _VkeyWitness_originalBytes, cbor, "f");
        return witness;
    }
    toCore() {
        return [
            __classPrivateFieldGet(this, _VkeyWitness_vkey, "f"),
            __classPrivateFieldGet(this, _VkeyWitness_signature, "f")
        ];
    }
    static fromCore(signatureEntry) {
        return new VkeyWitness(signatureEntry[0], signatureEntry[1]);
    }
    vkey() {
        return __classPrivateFieldGet(this, _VkeyWitness_vkey, "f");
    }
    setVkey(vkey) {
        __classPrivateFieldSet(this, _VkeyWitness_vkey, vkey, "f");
        __classPrivateFieldSet(this, _VkeyWitness_originalBytes, undefined, "f");
    }
    signature() {
        return __classPrivateFieldGet(this, _VkeyWitness_signature, "f");
    }
    setSignature(signature) {
        __classPrivateFieldSet(this, _VkeyWitness_signature, signature, "f");
        __classPrivateFieldSet(this, _VkeyWitness_originalBytes, undefined, "f");
    }
}
_VkeyWitness_vkey = new WeakMap(), _VkeyWitness_signature = new WeakMap(), _VkeyWitness_originalBytes = new WeakMap(); //# sourceMappingURL=VkeyWitness.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/TransactionWitnessSet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionWitnessSet",
    ()=>TransactionWitnessSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$BootstrapWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/BootstrapWitness.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/CborSet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/NativeScript/NativeScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV1Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV2Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV3Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/PlutusData/PlutusData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$VkeyWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/VkeyWitness.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqWith.js [app-client] (ecmascript)");
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _TransactionWitnessSet_instances, _a, _TransactionWitnessSet_vkeywitnesses, _TransactionWitnessSet_nativeScripts, _TransactionWitnessSet_bootstrapWitnesses, _TransactionWitnessSet_plutusV1Scripts, _TransactionWitnessSet_plutusData, _TransactionWitnessSet_redeemers, _TransactionWitnessSet_plutusV2Scripts, _TransactionWitnessSet_plutusV3Scripts, _TransactionWitnessSet_originalBytes, _TransactionWitnessSet_getCoreScripts, _TransactionWitnessSet_getCddlScripts, _TransactionWitnessSet_getMapSize;
;
;
;
;
;
;
;
;
;
;
;
;
class TransactionWitnessSet {
    constructor(){
        _TransactionWitnessSet_instances.add(this);
        _TransactionWitnessSet_vkeywitnesses.set(this, void 0);
        _TransactionWitnessSet_nativeScripts.set(this, void 0);
        _TransactionWitnessSet_bootstrapWitnesses.set(this, void 0);
        _TransactionWitnessSet_plutusV1Scripts.set(this, void 0);
        _TransactionWitnessSet_plutusData.set(this, void 0);
        _TransactionWitnessSet_redeemers.set(this, void 0);
        _TransactionWitnessSet_plutusV2Scripts.set(this, void 0);
        _TransactionWitnessSet_plutusV3Scripts.set(this, void 0);
        _TransactionWitnessSet_originalBytes.set(this, undefined);
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_originalBytes, "f")) return __classPrivateFieldGet(this, _TransactionWitnessSet_originalBytes, "f");
        writer.writeStartMap(__classPrivateFieldGet(this, _TransactionWitnessSet_instances, "m", _TransactionWitnessSet_getMapSize).call(this));
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").size() > 0) {
            __classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").setValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").values(), (lhs, rhs)=>lhs.vkey() === rhs.vkey()));
            writer.writeInt(0n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f").size() > 0) {
            writer.writeInt(1n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").size() > 0) {
            __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").setValues((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$uniqWith$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").values(), (lhs, rhs)=>lhs.vkey() === rhs.vkey()));
            writer.writeInt(2n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f").size() > 0) {
            writer.writeInt(3n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f").size() > 0) {
            writer.writeInt(4n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f").size() > 0) {
            writer.writeInt(5n);
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f").toCbor()));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f").size() > 0) {
            writer.writeInt(6n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f").size() > 0) {
            writer.writeInt(7n);
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f").toCbor(), 'hex'));
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const witness = new TransactionWitnessSet();
        reader.readStartMap();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const key = reader.readInt();
            switch(key){
                case 0n:
                    witness.setVkeys(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$VkeyWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VkeyWitness"].fromCbor));
                    break;
                case 1n:
                    witness.setNativeScripts(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScript"].fromCbor));
                    break;
                case 2n:
                    witness.setBootstraps(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$BootstrapWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BootstrapWitness"].fromCbor));
                    break;
                case 3n:
                    witness.setPlutusV1Scripts(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV1Script"].fromCbor));
                    break;
                case 4n:
                    witness.setPlutusData(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusData"].fromCbor));
                    break;
                case 5n:
                    {
                        witness.setRedeemers(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemers"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
                        break;
                    }
                case 6n:
                    witness.setPlutusV2Scripts(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV2Script"].fromCbor));
                    break;
                case 7n:
                    witness.setPlutusV3Scripts(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV3Script"].fromCbor));
                    break;
            }
        }
        reader.readEndMap();
        __classPrivateFieldSet(witness, _TransactionWitnessSet_originalBytes, cbor, "f");
        return witness;
    }
    toCore() {
        const scripts = __classPrivateFieldGet(this, _TransactionWitnessSet_instances, "m", _TransactionWitnessSet_getCoreScripts).call(this);
        return {
            bootstrap: __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").toCore() : undefined,
            datums: __classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f").toCore() : undefined,
            redeemers: __classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f")?.size() ? __classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f").toCore() : undefined,
            scripts: scripts.length > 0 ? scripts : undefined,
            signatures: __classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f") ? new Map(__classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").toCore()) : new Map()
        };
    }
    static fromCore(coreWitness) {
        const witness = new TransactionWitnessSet();
        if (coreWitness.signatures) {
            witness.setVkeys(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore([
                ...coreWitness.signatures
            ], __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$VkeyWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VkeyWitness"].fromCore));
        }
        if (coreWitness.scripts) {
            const scripts = __classPrivateFieldGet(TransactionWitnessSet, _a, "m", _TransactionWitnessSet_getCddlScripts).call(TransactionWitnessSet, coreWitness.scripts);
            if (scripts.native) witness.setNativeScripts(scripts.native);
            if (scripts.plutusV1) witness.setPlutusV1Scripts(scripts.plutusV1);
            if (scripts.plutusV2) witness.setPlutusV2Scripts(scripts.plutusV2);
            if (scripts.plutusV3) witness.setPlutusV3Scripts(scripts.plutusV3);
        }
        if (coreWitness.redeemers) {
            witness.setRedeemers(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemers"].fromCore(coreWitness.redeemers));
        }
        if (coreWitness.datums) {
            witness.setPlutusData(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreWitness.datums, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$PlutusData$2f$PlutusData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusData"].fromCore));
        }
        if (coreWitness.bootstrap) {
            witness.setBootstraps(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreWitness.bootstrap, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$BootstrapWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BootstrapWitness"].fromCore));
        }
        return witness;
    }
    setVkeys(vkeys) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_vkeywitnesses, vkeys, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    vkeys() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f");
    }
    setNativeScripts(nativeScripts) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_nativeScripts, nativeScripts, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    nativeScripts() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f");
    }
    setBootstraps(bootstraps) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_bootstrapWitnesses, bootstraps, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    bootstraps() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f");
    }
    setPlutusV1Scripts(plutusV1Scripts) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_plutusV1Scripts, plutusV1Scripts, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    plutusV1Scripts() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f");
    }
    setPlutusData(plutusData) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_plutusData, plutusData, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    plutusData() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f");
    }
    setRedeemers(redeemers) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_redeemers, redeemers, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    redeemers() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f");
    }
    setPlutusV2Scripts(plutusV2Scripts) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_plutusV2Scripts, plutusV2Scripts, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    plutusV2Scripts() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f");
    }
    setPlutusV3Scripts(plutusV3Scripts) {
        __classPrivateFieldSet(this, _TransactionWitnessSet_plutusV3Scripts, plutusV3Scripts, "f");
        __classPrivateFieldSet(this, _TransactionWitnessSet_originalBytes, undefined, "f");
    }
    plutusV3Scripts() {
        return __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f");
    }
}
_a = TransactionWitnessSet, _TransactionWitnessSet_vkeywitnesses = new WeakMap(), _TransactionWitnessSet_nativeScripts = new WeakMap(), _TransactionWitnessSet_bootstrapWitnesses = new WeakMap(), _TransactionWitnessSet_plutusV1Scripts = new WeakMap(), _TransactionWitnessSet_plutusData = new WeakMap(), _TransactionWitnessSet_redeemers = new WeakMap(), _TransactionWitnessSet_plutusV2Scripts = new WeakMap(), _TransactionWitnessSet_plutusV3Scripts = new WeakMap(), _TransactionWitnessSet_originalBytes = new WeakMap(), _TransactionWitnessSet_instances = new WeakSet(), _TransactionWitnessSet_getCoreScripts = function _TransactionWitnessSet_getCoreScripts() {
    const plutusV1 = __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f").toCore() : [];
    const plutusV2 = __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f").toCore() : [];
    const plutusV3 = __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f").toCore() : [];
    const native = __classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f") ? __classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f").toCore() : [];
    return [
        ...plutusV1,
        ...plutusV2,
        ...plutusV3,
        ...native
    ];
}, _TransactionWitnessSet_getCddlScripts = function _TransactionWitnessSet_getCddlScripts(scripts) {
    const [coreNative, coreV1, coreV2, coreV3] = scripts.reduce(([native, v1, v2, v3], script)=>{
        if (script.__type === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptType"].Native) {
            native ? native.push(script) : native = [
                script
            ];
        } else {
            switch(script.version){
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1:
                    v1 ? v1.push(script) : v1 = [
                        script
                    ];
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V2:
                    v2 ? v2.push(script) : v2 = [
                        script
                    ];
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V3:
                    v3 ? v3.push(script) : v3 = [
                        script
                    ];
                    break;
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationFailure"].InvalidScriptType, `Script '${script}' is not supported.`);
            }
        }
        return [
            native,
            v1,
            v2,
            v3
        ];
    }, [
        null,
        null,
        null,
        null
    ]);
    return {
        ...coreNative && {
            native: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreNative, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScript"].fromCore)
        },
        ...coreV1 && {
            plutusV1: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreV1, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV1Script"].fromCore)
        },
        ...coreV2 && {
            plutusV2: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreV2, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV2Script"].fromCore)
        },
        ...coreV3 && {
            plutusV3: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(coreV3, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV3Script"].fromCore)
        }
    };
}, _TransactionWitnessSet_getMapSize = function _TransactionWitnessSet_getMapSize() {
    let mapSize = 0;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_vkeywitnesses, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_nativeScripts, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_bootstrapWitnesses, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV1Scripts, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusData, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_redeemers, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV2Scripts, "f").size() > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f") !== undefined && __classPrivateFieldGet(this, _TransactionWitnessSet_plutusV3Scripts, "f").size() > 0) ++mapSize;
    return mapSize;
}; //# sourceMappingURL=TransactionWitnessSet.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Redeemer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemer"],
    "RedeemerTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"],
    "Redeemers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemers"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$RedeemerTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/RedeemerTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$Redeemers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/Redeemers.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BootstrapWitness",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$BootstrapWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BootstrapWitness"],
    "Redeemer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemer"],
    "RedeemerTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedeemerTag"],
    "Redeemers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Redeemers"],
    "TransactionWitnessSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$TransactionWitnessSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionWitnessSet"],
    "VkeyWitness",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$VkeyWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VkeyWitness"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$Redeemer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/Redeemer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$BootstrapWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/BootstrapWitness.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$TransactionWitnessSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/TransactionWitnessSet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$TransactionWitnessSet$2f$VkeyWitness$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/TransactionWitnessSet/VkeyWitness.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ecb53_%40cardano-sdk_core_dist_esm_Serialization_TransactionWitnessSet_781b0353._.js.map