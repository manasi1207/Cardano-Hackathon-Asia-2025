(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetadatumList",
    ()=>MetadatumList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _MetadatumList_array, _MetadatumList_useIndefiniteEncoding;
;
;
;
;
class MetadatumList {
    constructor(){
        _MetadatumList_array.set(this, new Array());
        _MetadatumList_useIndefiniteEncoding.set(this, false);
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _MetadatumList_useIndefiniteEncoding, "f")) {
            writer.writeStartArray();
        } else {
            writer.writeStartArray(__classPrivateFieldGet(this, _MetadatumList_array, "f").length);
        }
        for (const elem of __classPrivateFieldGet(this, _MetadatumList_array, "f")){
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(elem.toCbor()));
        }
        if (__classPrivateFieldGet(this, _MetadatumList_useIndefiniteEncoding, "f")) writer.writeEndArray();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(writer.encode());
    }
    static fromCbor(cbor) {
        const list = new MetadatumList();
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length === null) __classPrivateFieldSet(list, _MetadatumList_useIndefiniteEncoding, true, "f");
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
            list.add(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"].fromCbor((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(reader.readEncodedValue())));
        }
        reader.readEndArray();
        return list;
    }
    getLength() {
        return __classPrivateFieldGet(this, _MetadatumList_array, "f").length;
    }
    get(index) {
        return __classPrivateFieldGet(this, _MetadatumList_array, "f")[index];
    }
    add(elem) {
        __classPrivateFieldGet(this, _MetadatumList_array, "f").push(elem);
    }
    equals(other) {
        if (__classPrivateFieldGet(this, _MetadatumList_array, "f").length !== __classPrivateFieldGet(other, _MetadatumList_array, "f").length) return false;
        for(let i = 0; i < __classPrivateFieldGet(this, _MetadatumList_array, "f").length; ++i){
            if (!__classPrivateFieldGet(this, _MetadatumList_array, "f")[i].equals(__classPrivateFieldGet(other, _MetadatumList_array, "f")[i])) return false;
        }
        return true;
    }
}
_MetadatumList_array = new WeakMap(), _MetadatumList_useIndefiniteEncoding = new WeakMap(); //# sourceMappingURL=MetadatumList.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetadatumMap",
    ()=>MetadatumMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _MetadatumMap_map, _MetadatumMap_useIndefiniteEncoding;
;
;
;
;
;
class MetadatumMap {
    constructor(){
        _MetadatumMap_map.set(this, new Map());
        _MetadatumMap_useIndefiniteEncoding.set(this, false);
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _MetadatumMap_useIndefiniteEncoding, "f")) {
            writer.writeStartMap();
        } else {
            writer.writeStartMap(__classPrivateFieldGet(this, _MetadatumMap_map, "f").size);
        }
        for (const [key, value] of __classPrivateFieldGet(this, _MetadatumMap_map, "f").entries()){
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(key.toCbor()));
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(value.toCbor()));
        }
        if (__classPrivateFieldGet(this, _MetadatumMap_useIndefiniteEncoding, "f")) writer.writeEndMap();
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(writer.encode());
    }
    static fromCbor(cbor) {
        const map = new MetadatumMap();
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const size = reader.readStartMap();
        if (size === null) __classPrivateFieldSet(map, _MetadatumMap_useIndefiniteEncoding, true, "f");
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"].fromCbor((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(reader.readEncodedValue()));
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"].fromCbor((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(reader.readEncodedValue()));
            map.insert(key, value);
        }
        reader.readEndMap();
        return map;
    }
    getLength() {
        return __classPrivateFieldGet(this, _MetadatumMap_map, "f").size;
    }
    insert(key, value) {
        __classPrivateFieldGet(this, _MetadatumMap_map, "f").set(key, value);
    }
    get(key) {
        if (!__classPrivateFieldGet(this, _MetadatumMap_map, "f")) return undefined;
        const element = [
            ...__classPrivateFieldGet(this, _MetadatumMap_map, "f").entries()
        ].find((entry)=>entry[0].equals(key));
        if (!element) return undefined;
        return element[1];
    }
    getKeys() {
        const list = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumList"]();
        for (const elem of __classPrivateFieldGet(this, _MetadatumMap_map, "f").keys()){
            list.add(elem);
        }
        return list;
    }
    equals(other) {
        if (__classPrivateFieldGet(this, _MetadatumMap_useIndefiniteEncoding, "f") !== __classPrivateFieldGet(other, _MetadatumMap_useIndefiniteEncoding, "f")) return false;
        if (__classPrivateFieldGet(this, _MetadatumMap_map, "f").size !== __classPrivateFieldGet(other, _MetadatumMap_map, "f").size) return false;
        const thisEntries = [
            ...__classPrivateFieldGet(this, _MetadatumMap_map, "f").entries()
        ];
        const otherEntries = [
            ...__classPrivateFieldGet(other, _MetadatumMap_map, "f").entries()
        ];
        for(let i = 0; i < __classPrivateFieldGet(this, _MetadatumMap_map, "f").size; ++i){
            if (!thisEntries[i][0].equals(otherEntries[i][0])) return false;
            if (!thisEntries[i][1].equals(otherEntries[i][1])) return false;
        }
        return true;
    }
}
_MetadatumMap_map = new WeakMap(), _MetadatumMap_useIndefiniteEncoding = new WeakMap(); //# sourceMappingURL=MetadatumMap.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatumKind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionMetadatumKind",
    ()=>TransactionMetadatumKind
]);
var TransactionMetadatumKind;
(function(TransactionMetadatumKind) {
    TransactionMetadatumKind[TransactionMetadatumKind["Map"] = 0] = "Map";
    TransactionMetadatumKind[TransactionMetadatumKind["List"] = 1] = "List";
    TransactionMetadatumKind[TransactionMetadatumKind["Integer"] = 2] = "Integer";
    TransactionMetadatumKind[TransactionMetadatumKind["Bytes"] = 3] = "Bytes";
    TransactionMetadatumKind[TransactionMetadatumKind["Text"] = 4] = "Text";
})(TransactionMetadatumKind || (TransactionMetadatumKind = {})); //# sourceMappingURL=TransactionMetadatumKind.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionMetadatum",
    ()=>TransactionMetadatum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatumKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _TransactionMetadatum_map, _TransactionMetadatum_list, _TransactionMetadatum_integer, _TransactionMetadatum_bytes, _TransactionMetadatum_text, _TransactionMetadatum_kind, _TransactionMetadatum_originalBytes;
;
;
;
;
;
;
;
const MAX_WORD64 = 18446744073709551615n;
const check64Length = (metadatum)=>{
    const len = typeof metadatum === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(metadatum, 'utf8').length : metadatum.length;
    if (len > 64) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationFailure"].MaxLengthLimit, `Metadatum value '${metadatum}' is too long. Length is ${len}. Max length is 64 bytes`);
};
class TransactionMetadatum {
    constructor(){
        _TransactionMetadatum_map.set(this, undefined);
        _TransactionMetadatum_list.set(this, undefined);
        _TransactionMetadatum_integer.set(this, undefined);
        _TransactionMetadatum_bytes.set(this, undefined);
        _TransactionMetadatum_text.set(this, undefined);
        _TransactionMetadatum_kind.set(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map);
        _TransactionMetadatum_originalBytes.set(this, undefined);
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _TransactionMetadatum_originalBytes, "f")) return __classPrivateFieldGet(this, _TransactionMetadatum_originalBytes, "f");
        let cbor;
        switch(__classPrivateFieldGet(this, _TransactionMetadatum_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map:
                {
                    cbor = __classPrivateFieldGet(this, _TransactionMetadatum_map, "f").toCbor();
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].List:
                {
                    cbor = __classPrivateFieldGet(this, _TransactionMetadatum_list, "f").toCbor();
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Bytes:
                {
                    const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
                    check64Length(__classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f"));
                    writer.writeByteString(__classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f"));
                    cbor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(writer.encode());
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Text:
                {
                    const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
                    check64Length(__classPrivateFieldGet(this, _TransactionMetadatum_text, "f"));
                    writer.writeTextString(__classPrivateFieldGet(this, _TransactionMetadatum_text, "f"));
                    cbor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(writer.encode());
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer:
                {
                    const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
                    if (__classPrivateFieldGet(this, _TransactionMetadatum_integer, "f") >= 0 && __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f") <= MAX_WORD64 || __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f") < 0 && __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f") >= -1n - MAX_WORD64) {
                        writer.writeInt(__classPrivateFieldGet(this, _TransactionMetadatum_integer, "f"));
                    } else {
                        writer.writeBigInteger(__classPrivateFieldGet(this, _TransactionMetadatum_integer, "f"));
                    }
                    cbor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(writer.encode());
                    break;
                }
            default:
                throw new Error('Unsupported TransactionMetadatum kind');
        }
        return cbor;
    }
    static fromCbor(cbor) {
        const data = new TransactionMetadatum();
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const peekTokenType = reader.peekState();
        switch(peekTokenType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Tag:
                {
                    const tag = reader.peekTag();
                    switch(tag){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborTag"].UnsignedBigNum:
                            {
                                reader.readTag();
                                const bytes = reader.readByteString();
                                __classPrivateFieldSet(data, _TransactionMetadatum_integer, TransactionMetadatum.bufferToBigint(bytes), "f");
                                __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer, "f");
                                break;
                            }
                        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborTag"].NegativeBigNum:
                            {
                                reader.readTag();
                                const bytes = reader.readByteString();
                                __classPrivateFieldSet(data, _TransactionMetadatum_integer, TransactionMetadatum.bufferToBigint(bytes) * -1n, "f");
                                __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer, "f");
                                break;
                            }
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].NegativeInteger:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].UnsignedInteger:
                {
                    __classPrivateFieldSet(data, _TransactionMetadatum_integer, reader.readInt(), "f");
                    __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer, "f");
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthByteString:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].ByteString:
                {
                    __classPrivateFieldSet(data, _TransactionMetadatum_bytes, reader.readByteString(), "f");
                    __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Bytes, "f");
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthTextString:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].TextString:
                {
                    __classPrivateFieldSet(data, _TransactionMetadatum_text, reader.readTextString(), "f");
                    __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Text, "f");
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartArray:
                {
                    __classPrivateFieldSet(data, _TransactionMetadatum_list, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumList"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].List, "f");
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap:
                {
                    __classPrivateFieldSet(data, _TransactionMetadatum_map, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumMap"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map, "f");
                    break;
                }
            default:
                {
                    throw new Error('Invalid Plutus Data');
                }
        }
        __classPrivateFieldSet(data, _TransactionMetadatum_originalBytes, cbor, "f");
        return data;
    }
    toCore() {
        switch(__classPrivateFieldGet(this, _TransactionMetadatum_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Bytes:
                return new Uint8Array(__classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f"));
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Text:
                return __classPrivateFieldGet(this, _TransactionMetadatum_text, "f");
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer:
                return __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f");
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].List:
                return TransactionMetadatum.mapToCoreMetadatumList(__classPrivateFieldGet(this, _TransactionMetadatum_list, "f"));
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map:
                {
                    const metadatumMap = __classPrivateFieldGet(this, _TransactionMetadatum_map, "f");
                    const coreMap = new Map();
                    const keys = metadatumMap.getKeys();
                    for(let i = 0; i < keys.getLength(); i++){
                        const key = keys.get(i);
                        coreMap.set(key.toCore(), metadatumMap.get(key).toCore());
                    }
                    return coreMap;
                }
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"](`TransactionMetadatum mapping for kind ${__classPrivateFieldGet(this, _TransactionMetadatum_kind, "f")}`);
        }
    }
    static fromCore(metadatum) {
        if (metadatum === null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationFailure"].InvalidType);
        switch(typeof metadatum){
            case 'number':
            case 'boolean':
            case 'undefined':
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationFailure"].InvalidType);
            case 'bigint':
                {
                    return TransactionMetadatum.newInteger(metadatum);
                }
            case 'string':
                check64Length(metadatum);
                return TransactionMetadatum.newText(metadatum);
            default:
                {
                    if (Array.isArray(metadatum)) {
                        const metadatumList = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumList"]();
                        for (const metadataItem of metadatum){
                            metadatumList.add(TransactionMetadatum.fromCore(metadataItem));
                        }
                        return TransactionMetadatum.newList(metadatumList);
                    } else if (ArrayBuffer.isView(metadatum)) {
                        check64Length(metadatum);
                        return TransactionMetadatum.newBytes(metadatum);
                    }
                    const metadataMap = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumMap"]();
                    for (const [key, data] of metadatum.entries()){
                        metadataMap.insert(TransactionMetadatum.fromCore(key), TransactionMetadatum.fromCore(data));
                    }
                    return TransactionMetadatum.newMap(metadataMap);
                }
        }
    }
    static newMap(map) {
        const data = new TransactionMetadatum();
        __classPrivateFieldSet(data, _TransactionMetadatum_map, map, "f");
        __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map, "f");
        return data;
    }
    static newList(list) {
        const data = new TransactionMetadatum();
        __classPrivateFieldSet(data, _TransactionMetadatum_list, list, "f");
        __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].List, "f");
        return data;
    }
    static newInteger(integer) {
        const data = new TransactionMetadatum();
        __classPrivateFieldSet(data, _TransactionMetadatum_integer, integer, "f");
        __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer, "f");
        return data;
    }
    static newBytes(bytes) {
        const data = new TransactionMetadatum();
        __classPrivateFieldSet(data, _TransactionMetadatum_bytes, bytes, "f");
        __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Bytes, "f");
        return data;
    }
    static newText(text) {
        const data = new TransactionMetadatum();
        __classPrivateFieldSet(data, _TransactionMetadatum_text, text, "f");
        __classPrivateFieldSet(data, _TransactionMetadatum_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Text, "f");
        return data;
    }
    getKind() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_kind, "f");
    }
    asMap() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_map, "f");
    }
    asList() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_list, "f");
    }
    asInteger() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f");
    }
    asBytes() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f");
    }
    asText() {
        return __classPrivateFieldGet(this, _TransactionMetadatum_text, "f");
    }
    equals(other) {
        let result = false;
        switch(__classPrivateFieldGet(this, _TransactionMetadatum_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Bytes:
                if (__classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f") && __classPrivateFieldGet(other, _TransactionMetadatum_bytes, "f")) {
                    return __classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f").length === __classPrivateFieldGet(other, _TransactionMetadatum_bytes, "f").length && __classPrivateFieldGet(this, _TransactionMetadatum_bytes, "f").every((value, index)=>value === __classPrivateFieldGet(other, _TransactionMetadatum_bytes, "f")[index]);
                }
                return false;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Integer:
                return __classPrivateFieldGet(this, _TransactionMetadatum_integer, "f") === __classPrivateFieldGet(other, _TransactionMetadatum_integer, "f");
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Text:
                return __classPrivateFieldGet(this, _TransactionMetadatum_text, "f") === __classPrivateFieldGet(other, _TransactionMetadatum_text, "f");
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].List:
                if (__classPrivateFieldGet(this, _TransactionMetadatum_list, "f") && __classPrivateFieldGet(other, _TransactionMetadatum_list, "f")) {
                    return __classPrivateFieldGet(this, _TransactionMetadatum_list, "f").equals(__classPrivateFieldGet(other, _TransactionMetadatum_list, "f"));
                }
                return false;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"].Map:
                if (__classPrivateFieldGet(this, _TransactionMetadatum_map, "f") && __classPrivateFieldGet(other, _TransactionMetadatum_map, "f")) {
                    return __classPrivateFieldGet(this, _TransactionMetadatum_map, "f").equals(__classPrivateFieldGet(other, _TransactionMetadatum_map, "f"));
                }
                return false;
            default:
                result = false;
        }
        return result;
    }
    static mapToCoreMetadatumList(list) {
        const items = [];
        for(let i = 0; i < list.getLength(); i++){
            const element = list.get(i);
            items.push(element.toCore());
        }
        return items;
    }
    static bufferToBigint(buffer) {
        let ret = 0n;
        for (const i of buffer.values()){
            const bi = BigInt(i);
            ret = (ret << 8n) + bi;
        }
        return ret;
    }
}
_TransactionMetadatum_map = new WeakMap(), _TransactionMetadatum_list = new WeakMap(), _TransactionMetadatum_integer = new WeakMap(), _TransactionMetadatum_bytes = new WeakMap(), _TransactionMetadatum_text = new WeakMap(), _TransactionMetadatum_kind = new WeakMap(), _TransactionMetadatum_originalBytes = new WeakMap(); //# sourceMappingURL=TransactionMetadatum.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/GeneralTransactionMetadata.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneralTransactionMetadata",
    ()=>GeneralTransactionMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatum.js [app-client] (ecmascript)");
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
var _GeneralTransactionMetadata_metadata, _GeneralTransactionMetadata_originalBytes;
;
;
;
;
class GeneralTransactionMetadata {
    constructor(metadata){
        _GeneralTransactionMetadata_metadata.set(this, void 0);
        _GeneralTransactionMetadata_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _GeneralTransactionMetadata_metadata, metadata, "f");
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _GeneralTransactionMetadata_originalBytes, "f")) return __classPrivateFieldGet(this, _GeneralTransactionMetadata_originalBytes, "f");
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        writer.writeStartMap(__classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").size);
        for (const [key, val] of __classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").entries()){
            writer.writeInt(key);
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(val.toCbor()));
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const generalTransactionMetadata = new Map();
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        reader.readStartMap();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const label = reader.readInt();
            const metadatum = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
            generalTransactionMetadata.set(label, metadatum);
        }
        reader.readEndMap();
        return new GeneralTransactionMetadata(generalTransactionMetadata);
    }
    toCore() {
        return new Map([
            ...__classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").entries()
        ].map((metadata)=>[
                metadata[0],
                metadata[1].toCore()
            ]));
    }
    static fromCore(metadata) {
        return new GeneralTransactionMetadata(new Map([
            ...metadata.entries()
        ].map((entry)=>[
                entry[0],
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"].fromCore(entry[1])
            ])));
    }
    metadata() {
        return __classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f");
    }
    setMetadata(metadata) {
        __classPrivateFieldSet(this, _GeneralTransactionMetadata_metadata, metadata, "f");
        __classPrivateFieldSet(this, _GeneralTransactionMetadata_originalBytes, undefined, "f");
    }
    equals(other) {
        if (__classPrivateFieldGet(this, _GeneralTransactionMetadata_originalBytes, "f") === __classPrivateFieldGet(other, _GeneralTransactionMetadata_originalBytes, "f")) return true;
        if (__classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").size !== __classPrivateFieldGet(other, _GeneralTransactionMetadata_metadata, "f").size) return false;
        const thisEntries = [
            ...__classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").entries()
        ];
        const otherEntries = [
            ...__classPrivateFieldGet(other, _GeneralTransactionMetadata_metadata, "f").entries()
        ];
        for(let i = 0; i < __classPrivateFieldGet(this, _GeneralTransactionMetadata_metadata, "f").size; ++i){
            if (thisEntries[i][0] !== otherEntries[i][0]) return false;
            if (!thisEntries[i][1].equals(otherEntries[i][1])) return false;
        }
        return true;
    }
}
_GeneralTransactionMetadata_metadata = new WeakMap(), _GeneralTransactionMetadata_originalBytes = new WeakMap(); //# sourceMappingURL=GeneralTransactionMetadata.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/AuxiliaryData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALONZO_AUX_TAG",
    ()=>ALONZO_AUX_TAG,
    "AuxiliaryData",
    ()=>AuxiliaryData,
    "SHELLEY_ERA_FIELDS_COUNT",
    ()=>SHELLEY_ERA_FIELDS_COUNT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/GeneralTransactionMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/NativeScript/NativeScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV1Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV2Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Scripts/PlutusScript/PlutusV3Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/util/misc/encoding.js [app-client] (ecmascript)");
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
var _AuxiliaryData_instances, _a, _AuxiliaryData_metadata, _AuxiliaryData_nativeScripts, _AuxiliaryData_plutusV1Scripts, _AuxiliaryData_plutusV2Scripts, _AuxiliaryData_plutusV3Scripts, _AuxiliaryData_originalBytes, _AuxiliaryData_getMapSize, _AuxiliaryData_getCoreScripts, _AuxiliaryData_getCddlScripts;
;
;
;
;
;
;
;
const SHELLEY_ERA_FIELDS_COUNT = 2;
const ALONZO_AUX_TAG = 259;
class AuxiliaryData {
    constructor(){
        _AuxiliaryData_instances.add(this);
        _AuxiliaryData_metadata.set(this, void 0);
        _AuxiliaryData_nativeScripts.set(this, void 0);
        _AuxiliaryData_plutusV1Scripts.set(this, void 0);
        _AuxiliaryData_plutusV2Scripts.set(this, void 0);
        _AuxiliaryData_plutusV3Scripts.set(this, void 0);
        _AuxiliaryData_originalBytes.set(this, undefined);
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _AuxiliaryData_originalBytes, "f")) return __classPrivateFieldGet(this, _AuxiliaryData_originalBytes, "f");
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        const elementsSize = __classPrivateFieldGet(this, _AuxiliaryData_instances, "m", _AuxiliaryData_getMapSize).call(this);
        if (elementsSize === 1 && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").metadata().size > 0) {
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").toCbor()));
        } else if (elementsSize === SHELLEY_ERA_FIELDS_COUNT && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").metadata().size > 0 && __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").length > 0) {
            writer.writeStartArray(elementsSize);
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").toCbor()));
            writer.writeStartArray(__classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").length);
            for (const script of __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f")){
                writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(script.toCbor()));
            }
        } else {
            writer.writeTag(ALONZO_AUX_TAG);
            writer.writeStartMap(elementsSize);
            if (__classPrivateFieldGet(this, _AuxiliaryData_metadata, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").metadata().size > 0) {
                writer.writeInt(0n);
                writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").toCbor()));
            }
            if (__classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").length > 0) {
                writer.writeInt(1n);
                writer.writeStartArray(__classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").length);
                for (const script of __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f")){
                    writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(script.toCbor()));
                }
            }
            if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f").length > 0) {
                writer.writeInt(2n);
                writer.writeStartArray(__classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f").length);
                for (const script of __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f")){
                    writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(script.toCbor()));
                }
            }
            if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f").length > 0) {
                writer.writeInt(3n);
                writer.writeStartArray(__classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f").length);
                for (const script of __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f")){
                    writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(script.toCbor()));
                }
            }
            if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f").length > 0) {
                writer.writeInt(4n);
                writer.writeStartArray(__classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f").length);
                for (const script of __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f")){
                    writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(script.toCbor()));
                }
            }
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const auxData = new AuxiliaryData();
        const peekState = reader.peekState();
        if (peekState === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap) {
            __classPrivateFieldSet(auxData, _AuxiliaryData_metadata, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
        } else if (peekState === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Tag) {
            const tag = reader.readTag();
            if (tag !== ALONZO_AUX_TAG) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected tag '${ALONZO_AUX_TAG}', but got ${tag}.`);
            }
            reader.readStartMap();
            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
                const key = reader.readInt();
                switch(key){
                    case 0n:
                        __classPrivateFieldSet(auxData, _AuxiliaryData_metadata, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                        break;
                    case 1n:
                        auxData.setNativeScripts(new Array());
                        reader.readStartArray();
                        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                            auxData.nativeScripts().push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScript"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
                        }
                        reader.readEndArray();
                        break;
                    case 2n:
                        {
                            auxData.setPlutusV1Scripts(new Array());
                            reader.readStartArray();
                            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                                auxData.plutusV1Scripts().push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV1Script"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
                            }
                            reader.readEndArray();
                            break;
                        }
                    case 3n:
                        {
                            auxData.setPlutusV2Scripts(new Array());
                            reader.readStartArray();
                            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                                auxData.plutusV2Scripts().push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV2Script"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
                            }
                            reader.readEndArray();
                            break;
                        }
                    case 4n:
                        {
                            auxData.setPlutusV3Scripts(new Array());
                            reader.readStartArray();
                            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                                auxData.plutusV3Scripts().push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV3Script"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
                            }
                            reader.readEndArray();
                            break;
                        }
                }
            }
            reader.readEndMap();
        } else {
            reader.readStartArray();
            __classPrivateFieldSet(auxData, _AuxiliaryData_metadata, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
            auxData.setNativeScripts(new Array());
            reader.readStartArray();
            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                auxData.nativeScripts().push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScript"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
            }
            reader.readEndArray();
        }
        __classPrivateFieldSet(auxData, _AuxiliaryData_originalBytes, cbor, "f");
        return auxData;
    }
    toCore() {
        const scripts = __classPrivateFieldGet(this, _AuxiliaryData_instances, "m", _AuxiliaryData_getCoreScripts).call(this);
        const auxiliaryData = {
            blob: __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f") ? __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").toCore() : undefined
        };
        if (scripts.length > 0) auxiliaryData.scripts = scripts;
        return auxiliaryData;
    }
    static fromCore(auxData) {
        const result = new AuxiliaryData();
        if (auxData.blob) {
            result.setMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"].fromCore(auxData.blob));
        }
        if (auxData.scripts) {
            const scripts = __classPrivateFieldGet(AuxiliaryData, _a, "m", _AuxiliaryData_getCddlScripts).call(AuxiliaryData, auxData.scripts);
            if (scripts.native) result.setNativeScripts(scripts.native);
            if (scripts.plutusV1) result.setPlutusV1Scripts(scripts.plutusV1);
            if (scripts.plutusV2) result.setPlutusV2Scripts(scripts.plutusV2);
            if (scripts.plutusV3) result.setPlutusV3Scripts(scripts.plutusV3);
        }
        return result;
    }
    metadata() {
        return __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f");
    }
    setMetadata(metadata) {
        __classPrivateFieldSet(this, _AuxiliaryData_metadata, metadata, "f");
        __classPrivateFieldSet(this, _AuxiliaryData_originalBytes, undefined, "f");
    }
    nativeScripts() {
        return __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f");
    }
    setNativeScripts(nativeScripts) {
        __classPrivateFieldSet(this, _AuxiliaryData_nativeScripts, nativeScripts, "f");
        __classPrivateFieldSet(this, _AuxiliaryData_originalBytes, undefined, "f");
    }
    plutusV1Scripts() {
        return __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f");
    }
    setPlutusV1Scripts(plutusV1Scripts) {
        __classPrivateFieldSet(this, _AuxiliaryData_plutusV1Scripts, plutusV1Scripts, "f");
        __classPrivateFieldSet(this, _AuxiliaryData_originalBytes, undefined, "f");
    }
    plutusV2Scripts() {
        return __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f");
    }
    setPlutusV2Scripts(plutusV2Scripts) {
        __classPrivateFieldSet(this, _AuxiliaryData_plutusV2Scripts, plutusV2Scripts, "f");
        __classPrivateFieldSet(this, _AuxiliaryData_originalBytes, undefined, "f");
    }
    plutusV3Scripts() {
        return __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f");
    }
    setPlutusV3Scripts(plutusV3Scripts) {
        __classPrivateFieldSet(this, _AuxiliaryData_plutusV3Scripts, plutusV3Scripts, "f");
        __classPrivateFieldSet(this, _AuxiliaryData_originalBytes, undefined, "f");
    }
}
_a = AuxiliaryData, _AuxiliaryData_metadata = new WeakMap(), _AuxiliaryData_nativeScripts = new WeakMap(), _AuxiliaryData_plutusV1Scripts = new WeakMap(), _AuxiliaryData_plutusV2Scripts = new WeakMap(), _AuxiliaryData_plutusV3Scripts = new WeakMap(), _AuxiliaryData_originalBytes = new WeakMap(), _AuxiliaryData_instances = new WeakSet(), _AuxiliaryData_getMapSize = function _AuxiliaryData_getMapSize() {
    let mapSize = 0;
    if (__classPrivateFieldGet(this, _AuxiliaryData_metadata, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_metadata, "f").metadata().size > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").length > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f").length > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f").length > 0) ++mapSize;
    if (__classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f") !== undefined && __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f").length > 0) ++mapSize;
    return mapSize;
}, _AuxiliaryData_getCoreScripts = function _AuxiliaryData_getCoreScripts() {
    const plutusV1 = __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f") ? __classPrivateFieldGet(this, _AuxiliaryData_plutusV1Scripts, "f").map((script)=>script.toCore()) : [];
    const plutusV2 = __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f") ? __classPrivateFieldGet(this, _AuxiliaryData_plutusV2Scripts, "f").map((script)=>script.toCore()) : [];
    const plutusV3 = __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f") ? __classPrivateFieldGet(this, _AuxiliaryData_plutusV3Scripts, "f").map((script)=>script.toCore()) : [];
    const native = __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f") ? __classPrivateFieldGet(this, _AuxiliaryData_nativeScripts, "f").map((script)=>script.toCore()) : [];
    return [
        ...plutusV1,
        ...plutusV2,
        ...plutusV3,
        ...native
    ];
}, _AuxiliaryData_getCddlScripts = function _AuxiliaryData_getCddlScripts(scripts) {
    const result = {
        native: undefined,
        plutusV1: undefined,
        plutusV2: undefined,
        plutusV3: undefined
    };
    for (const script of scripts){
        switch(script.__type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptType"].Native:
                if (!result.native) result.native = new Array();
                result.native.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$NativeScript$2f$NativeScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScript"].fromCore(script));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptType"].Plutus:
                if (script.version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1) {
                    if (!result.plutusV1) result.plutusV1 = new Array();
                    result.plutusV1.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV1Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV1Script"].fromCore(script));
                } else if (script.version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V2) {
                    if (!result.plutusV2) result.plutusV2 = new Array();
                    result.plutusV2.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV2Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV2Script"].fromCore(script));
                } else if (script.version === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V3) {
                    if (!result.plutusV3) result.plutusV3 = new Array();
                    result.plutusV3.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Scripts$2f$PlutusScript$2f$PlutusV3Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlutusV3Script"].fromCore(script));
                }
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationError"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationFailure"].InvalidScriptType, `Script '${script}' is not supported.`);
        }
    }
    return result;
}; //# sourceMappingURL=AuxiliaryData.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneralTransactionMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"],
    "MetadatumList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumList"],
    "MetadatumMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumMap"],
    "TransactionMetadatum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"],
    "TransactionMetadatumKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$MetadatumMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/MetadatumMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$TransactionMetadatumKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/TransactionMetadatumKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$GeneralTransactionMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/GeneralTransactionMetadata.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALONZO_AUX_TAG",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$AuxiliaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALONZO_AUX_TAG"],
    "AuxiliaryData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$AuxiliaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuxiliaryData"],
    "GeneralTransactionMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralTransactionMetadata"],
    "MetadatumList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumList"],
    "MetadatumMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetadatumMap"],
    "SHELLEY_ERA_FIELDS_COUNT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$AuxiliaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHELLEY_ERA_FIELDS_COUNT"],
    "TransactionMetadatum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatum"],
    "TransactionMetadatumKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionMetadatumKind"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$TransactionMetadata$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/TransactionMetadata/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$AuxiliaryData$2f$AuxiliaryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/AuxiliaryData/AuxiliaryData.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ecb53_%40cardano-sdk_core_dist_esm_Serialization_AuxiliaryData_d63595ed._.js.map