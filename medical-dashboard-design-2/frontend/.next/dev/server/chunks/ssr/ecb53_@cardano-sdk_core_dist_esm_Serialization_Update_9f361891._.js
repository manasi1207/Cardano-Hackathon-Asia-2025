module.exports = [
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/CostModel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CostModel",
    ()=>CostModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Script.js [app-ssr] (ecmascript)");
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
var _CostModel_instances, _CostModel_language, _CostModel_costs, _CostModel_isOperationValid;
;
;
class CostModel {
    constructor(language, costs){
        _CostModel_instances.add(this);
        _CostModel_language.set(this, void 0);
        _CostModel_costs.set(this, void 0);
        __classPrivateFieldSet(this, _CostModel_language, language, "f");
        __classPrivateFieldSet(this, _CostModel_costs, costs, "f");
    }
    static newPlutusV1(costs) {
        return new CostModel(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1, costs);
    }
    static newPlutusV2(costs) {
        return new CostModel(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V2, costs);
    }
    static newPlutusV3(costs) {
        return new CostModel(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V3, costs);
    }
    set(operation, cost) {
        if (!__classPrivateFieldGet(this, _CostModel_instances, "m", _CostModel_isOperationValid).call(this, operation)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('operation', `The given operation ${operation} is invalid for the current Language version ${__classPrivateFieldGet(this, _CostModel_language, "f")}.`);
        __classPrivateFieldGet(this, _CostModel_costs, "f")[operation] = cost;
    }
    get(operation) {
        if (!__classPrivateFieldGet(this, _CostModel_instances, "m", _CostModel_isOperationValid).call(this, operation)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('operation', `The given operation ${operation} is invalid for the current Language version ${__classPrivateFieldGet(this, _CostModel_language, "f")}.`);
        return __classPrivateFieldGet(this, _CostModel_costs, "f")[operation];
    }
    costs() {
        return __classPrivateFieldGet(this, _CostModel_costs, "f");
    }
    language() {
        return __classPrivateFieldGet(this, _CostModel_language, "f");
    }
}
_CostModel_language = new WeakMap(), _CostModel_costs = new WeakMap(), _CostModel_instances = new WeakSet(), _CostModel_isOperationValid = function _CostModel_isOperationValid(operation) {
    return operation >= 0;
}; //# sourceMappingURL=CostModel.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/Costmdls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Costmdls",
    ()=>Costmdls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$CostModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/CostModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Script.js [app-ssr] (ecmascript)");
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
var _Costmdls_models, _Costmdls_originalBytes;
;
;
;
;
class Costmdls {
    constructor(models = new Map()){
        _Costmdls_models.set(this, void 0);
        _Costmdls_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Costmdls_models, models, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _Costmdls_originalBytes, "f")) return __classPrivateFieldGet(this, _Costmdls_originalBytes, "f");
        const sortedCanonically = new Map([
            ...__classPrivateFieldGet(this, _Costmdls_models, "f")
        ].sort((a, b)=>a > b ? 1 : -1));
        writer.writeStartMap(sortedCanonically.size);
        for (const [key, value] of sortedCanonically){
            writer.writeInt(key);
            writer.writeStartArray(value.costs().length);
            for (const cost of value.costs()){
                writer.writeInt(cost);
            }
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        reader.readStartMap();
        const models = new Map();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const language = Number(reader.readInt());
            const costs = new Array();
            reader.readStartArray();
            while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray){
                costs.push(Number(reader.readInt()));
            }
            reader.readEndArray();
            models.set(language, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$CostModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CostModel"](language, costs));
        }
        reader.readEndMap();
        const costmdl = new Costmdls(models);
        __classPrivateFieldSet(costmdl, _Costmdls_originalBytes, cbor, "f");
        return costmdl;
    }
    toCore() {
        const models = new Map();
        for (const [key, value] of __classPrivateFieldGet(this, _Costmdls_models, "f")){
            models.set(key, value.costs());
        }
        return models;
    }
    static fromCore(costModels) {
        const models = new Map();
        for (const [key, value] of costModels){
            models.set(key, new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$CostModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CostModel"](key, value));
        }
        return new Costmdls(models);
    }
    size() {
        return __classPrivateFieldGet(this, _Costmdls_models, "f").size;
    }
    insert(value) {
        __classPrivateFieldGet(this, _Costmdls_models, "f").set(value.language(), value);
        __classPrivateFieldSet(this, _Costmdls_originalBytes, undefined, "f");
    }
    get(key) {
        return __classPrivateFieldGet(this, _Costmdls_models, "f").get(key);
    }
    keys() {
        return [
            ...__classPrivateFieldGet(this, _Costmdls_models, "f").keys()
        ];
    }
    languageViewsEncoding() {
        const encodedLanguageViews = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        const sortedCanonically = new Map([
            ...__classPrivateFieldGet(this, _Costmdls_models, "f")
        ].sort((a, b)=>{
            const lhs = a[0] === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1 ? 0x41 : a[0];
            const rhs = b[0] === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1 ? 0x41 : b[0];
            return lhs > rhs ? 1 : -1;
        }));
        encodedLanguageViews.writeStartMap(sortedCanonically.size);
        for (const [key, value] of sortedCanonically){
            switch(key){
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V1:
                    {
                        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
                        writer.writeStartArray();
                        for (const cost of value.costs()){
                            writer.writeInt(cost);
                        }
                        writer.writeEndArray();
                        const innerCbor = writer.encode();
                        encodedLanguageViews.writeByteString(new Uint8Array([
                            0
                        ]));
                        encodedLanguageViews.writeByteString(innerCbor);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V2:
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlutusLanguageVersion"].V3:
                    encodedLanguageViews.writeInt(key);
                    encodedLanguageViews.writeStartArray(value.costs().length);
                    for (const cost of value.costs()){
                        encodedLanguageViews.writeInt(cost);
                    }
                    break;
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStateError"]('Invalid plutus language version.');
            }
        }
        return encodedLanguageViews.encodeAsHex();
    }
}
_Costmdls_models = new WeakMap(), _Costmdls_originalBytes = new WeakMap(); //# sourceMappingURL=Costmdls.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/DrepVotingThresholds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrepVotingThresholds",
    ()=>DrepVotingThresholds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/UnitInterval.js [app-ssr] (ecmascript)");
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
var _DrepVotingThresholds_motionNoConfidence, _DrepVotingThresholds_committeeNormal, _DrepVotingThresholds_committeeNoConfidence, _DrepVotingThresholds_updateConstitution, _DrepVotingThresholds_hardForkInitiation, _DrepVotingThresholds_ppNetworkGroup, _DrepVotingThresholds_ppEconomicGroup, _DrepVotingThresholds_ppTechnicalGroup, _DrepVotingThresholds_ppGovernanceGroup, _DrepVotingThresholds_treasuryWithdrawal, _DrepVotingThresholds_originalBytes;
;
;
;
const EX_DREP_VOTING_THRESHOLDS_SIZE = 10;
class DrepVotingThresholds {
    constructor(motionNoConfidence, committeeNormal, committeeNoConfidence, updateConstitution, hardForkInitiation, ppNetworkGroup, ppEconomicGroup, ppTechnicalGroup, ppGovernanceGroup, treasuryWithdrawal){
        _DrepVotingThresholds_motionNoConfidence.set(this, void 0);
        _DrepVotingThresholds_committeeNormal.set(this, void 0);
        _DrepVotingThresholds_committeeNoConfidence.set(this, void 0);
        _DrepVotingThresholds_updateConstitution.set(this, void 0);
        _DrepVotingThresholds_hardForkInitiation.set(this, void 0);
        _DrepVotingThresholds_ppNetworkGroup.set(this, void 0);
        _DrepVotingThresholds_ppEconomicGroup.set(this, void 0);
        _DrepVotingThresholds_ppTechnicalGroup.set(this, void 0);
        _DrepVotingThresholds_ppGovernanceGroup.set(this, void 0);
        _DrepVotingThresholds_treasuryWithdrawal.set(this, void 0);
        _DrepVotingThresholds_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _DrepVotingThresholds_motionNoConfidence, motionNoConfidence, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_committeeNormal, committeeNormal, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_committeeNoConfidence, committeeNoConfidence, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_updateConstitution, updateConstitution, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_hardForkInitiation, hardForkInitiation, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppNetworkGroup, ppNetworkGroup, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppEconomicGroup, ppEconomicGroup, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppTechnicalGroup, ppTechnicalGroup, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppGovernanceGroup, ppGovernanceGroup, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_treasuryWithdrawal, treasuryWithdrawal, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _DrepVotingThresholds_originalBytes, "f")) return __classPrivateFieldGet(this, _DrepVotingThresholds_originalBytes, "f");
        writer.writeStartArray(EX_DREP_VOTING_THRESHOLDS_SIZE);
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_motionNoConfidence, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_committeeNormal, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_committeeNoConfidence, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_updateConstitution, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_hardForkInitiation, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_ppNetworkGroup, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_ppEconomicGroup, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_ppTechnicalGroup, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_ppGovernanceGroup, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _DrepVotingThresholds_treasuryWithdrawal, "f").toCbor(), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EX_DREP_VOTING_THRESHOLDS_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EX_DREP_VOTING_THRESHOLDS_SIZE} elements, but got an array of ${length} elements`);
        const motionNoConfidence = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const committeeNormal = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const committeeNoConfidence = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const updateConstitution = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const hardForkInitiation = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const ppNetworkGroup = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const ppEconomicGroup = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const ppTechnicalGroup = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const ppGovernanceGroup = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const treasuryWithdrawal = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const thresholds = new DrepVotingThresholds(motionNoConfidence, committeeNormal, committeeNoConfidence, updateConstitution, hardForkInitiation, ppNetworkGroup, ppEconomicGroup, ppTechnicalGroup, ppGovernanceGroup, treasuryWithdrawal);
        __classPrivateFieldSet(thresholds, _DrepVotingThresholds_originalBytes, cbor, "f");
        return thresholds;
    }
    toCore() {
        return {
            committeeNoConfidence: __classPrivateFieldGet(this, _DrepVotingThresholds_committeeNoConfidence, "f").toCore(),
            committeeNormal: __classPrivateFieldGet(this, _DrepVotingThresholds_committeeNormal, "f").toCore(),
            hardForkInitiation: __classPrivateFieldGet(this, _DrepVotingThresholds_hardForkInitiation, "f").toCore(),
            motionNoConfidence: __classPrivateFieldGet(this, _DrepVotingThresholds_motionNoConfidence, "f").toCore(),
            ppEconomicGroup: __classPrivateFieldGet(this, _DrepVotingThresholds_ppEconomicGroup, "f").toCore(),
            ppGovernanceGroup: __classPrivateFieldGet(this, _DrepVotingThresholds_ppGovernanceGroup, "f").toCore(),
            ppNetworkGroup: __classPrivateFieldGet(this, _DrepVotingThresholds_ppNetworkGroup, "f").toCore(),
            ppTechnicalGroup: __classPrivateFieldGet(this, _DrepVotingThresholds_ppTechnicalGroup, "f").toCore(),
            treasuryWithdrawal: __classPrivateFieldGet(this, _DrepVotingThresholds_treasuryWithdrawal, "f").toCore(),
            updateConstitution: __classPrivateFieldGet(this, _DrepVotingThresholds_updateConstitution, "f").toCore()
        };
    }
    static fromCore(core) {
        return new DrepVotingThresholds(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.motionNoConfidence), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.committeeNormal), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.committeeNoConfidence), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.updateConstitution), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.hardForkInitiation), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.ppNetworkGroup), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.ppEconomicGroup), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.ppTechnicalGroup), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.ppGovernanceGroup), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.treasuryWithdrawal));
    }
    setMotionNoConfidence(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_motionNoConfidence, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setCommitteeNormal(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_committeeNormal, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setCommitteeNoConfidence(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_committeeNoConfidence, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setUpdateConstitution(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_updateConstitution, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setHardForkInitiation(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_hardForkInitiation, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setPpNetworkGroup(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppNetworkGroup, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setPpEconomicGroup(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppEconomicGroup, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setPpTechnicalGroup(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppTechnicalGroup, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setPpGovernanceGroup(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_ppGovernanceGroup, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    setTreasuryWithdrawal(threshold) {
        __classPrivateFieldSet(this, _DrepVotingThresholds_treasuryWithdrawal, threshold, "f");
        __classPrivateFieldSet(this, _DrepVotingThresholds_originalBytes, undefined, "f");
    }
    motionNoConfidence() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_motionNoConfidence, "f");
    }
    committeeNormal() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_committeeNormal, "f");
    }
    committeeNoConfidence() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_committeeNoConfidence, "f");
    }
    updateConstitution() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_updateConstitution, "f");
    }
    hardForkInitiation() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_hardForkInitiation, "f");
    }
    ppNetworkGroup() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_ppNetworkGroup, "f");
    }
    ppEconomicGroup() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_ppEconomicGroup, "f");
    }
    ppTechnicalGroup() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_ppTechnicalGroup, "f");
    }
    ppGovernanceGroup() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_ppGovernanceGroup, "f");
    }
    treasuryWithdrawal() {
        return __classPrivateFieldGet(this, _DrepVotingThresholds_treasuryWithdrawal, "f");
    }
}
_DrepVotingThresholds_motionNoConfidence = new WeakMap(), _DrepVotingThresholds_committeeNormal = new WeakMap(), _DrepVotingThresholds_committeeNoConfidence = new WeakMap(), _DrepVotingThresholds_updateConstitution = new WeakMap(), _DrepVotingThresholds_hardForkInitiation = new WeakMap(), _DrepVotingThresholds_ppNetworkGroup = new WeakMap(), _DrepVotingThresholds_ppEconomicGroup = new WeakMap(), _DrepVotingThresholds_ppTechnicalGroup = new WeakMap(), _DrepVotingThresholds_ppGovernanceGroup = new WeakMap(), _DrepVotingThresholds_treasuryWithdrawal = new WeakMap(), _DrepVotingThresholds_originalBytes = new WeakMap(); //# sourceMappingURL=DrepVotingThresholds.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ExUnitPrices.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExUnitPrices",
    ()=>ExUnitPrices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/UnitInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$fraction$2e$js$40$4$2e$0$2e$1$2f$node_modules$2f$fraction$2e$js$2f$fraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/fraction.js@4.0.1/node_modules/fraction.js/fraction.js [app-ssr] (ecmascript)");
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
var _ExUnitPrices_memPrice, _ExUnitPrices_stepsPrice, _ExUnitPrices_originalBytes;
;
;
;
;
const EX_UNITS_PRICES_ARRAY_SIZE = 2;
class ExUnitPrices {
    constructor(memPrices, stepsPrices){
        _ExUnitPrices_memPrice.set(this, void 0);
        _ExUnitPrices_stepsPrice.set(this, void 0);
        _ExUnitPrices_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _ExUnitPrices_memPrice, memPrices, "f");
        __classPrivateFieldSet(this, _ExUnitPrices_stepsPrice, stepsPrices, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _ExUnitPrices_originalBytes, "f")) return __classPrivateFieldGet(this, _ExUnitPrices_originalBytes, "f");
        writer.writeStartArray(EX_UNITS_PRICES_ARRAY_SIZE);
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ExUnitPrices_memPrice, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ExUnitPrices_stepsPrice, "f").toCbor(), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EX_UNITS_PRICES_ARRAY_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EX_UNITS_PRICES_ARRAY_SIZE} elements, but got an array of ${length} elements`);
        const memPrices = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const stepPrices = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const exUnit = new ExUnitPrices(memPrices, stepPrices);
        __classPrivateFieldSet(exUnit, _ExUnitPrices_originalBytes, cbor, "f");
        return exUnit;
    }
    toCore() {
        return {
            memory: Number(__classPrivateFieldGet(this, _ExUnitPrices_memPrice, "f").numerator()) / Number(__classPrivateFieldGet(this, _ExUnitPrices_memPrice, "f").denominator()),
            steps: Number(__classPrivateFieldGet(this, _ExUnitPrices_stepsPrice, "f").numerator()) / Number(__classPrivateFieldGet(this, _ExUnitPrices_stepsPrice, "f").denominator())
        };
    }
    static fromCore(prices) {
        const mem = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$fraction$2e$js$40$4$2e$0$2e$1$2f$node_modules$2f$fraction$2e$js$2f$fraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](prices.memory);
        const steps = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$fraction$2e$js$40$4$2e$0$2e$1$2f$node_modules$2f$fraction$2e$js$2f$fraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](prices.steps);
        return new ExUnitPrices(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"](BigInt(mem.n), BigInt(mem.d)), new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"](BigInt(steps.n), BigInt(steps.d)));
    }
    memPrice() {
        return __classPrivateFieldGet(this, _ExUnitPrices_memPrice, "f");
    }
    setMemPrice(memPrice) {
        __classPrivateFieldSet(this, _ExUnitPrices_memPrice, memPrice, "f");
        __classPrivateFieldSet(this, _ExUnitPrices_originalBytes, undefined, "f");
    }
    stepsPrice() {
        return __classPrivateFieldGet(this, _ExUnitPrices_stepsPrice, "f");
    }
    setStepsPrice(stepsPrice) {
        __classPrivateFieldSet(this, _ExUnitPrices_stepsPrice, stepsPrice, "f");
        __classPrivateFieldSet(this, _ExUnitPrices_originalBytes, undefined, "f");
    }
}
_ExUnitPrices_memPrice = new WeakMap(), _ExUnitPrices_stepsPrice = new WeakMap(), _ExUnitPrices_originalBytes = new WeakMap(); //# sourceMappingURL=ExUnitPrices.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/PoolVotingThresholds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoolVotingThresholds",
    ()=>PoolVotingThresholds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/UnitInterval.js [app-ssr] (ecmascript)");
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
var _PoolVotingThresholds_motionNoConfidence, _PoolVotingThresholds_committeeNormal, _PoolVotingThresholds_committeeNoConfidence, _PoolVotingThresholds_hardForkInitiation, _PoolVotingThresholds_securityRelevantParam, _PoolVotingThresholds_originalBytes;
;
;
;
const POOL_VOTING_THRESHOLDS_SIZE = 5;
class PoolVotingThresholds {
    constructor(motionNoConfidence, committeeNormal, committeeNoConfidence, hardForkInitiation, securityRelevantParam){
        _PoolVotingThresholds_motionNoConfidence.set(this, void 0);
        _PoolVotingThresholds_committeeNormal.set(this, void 0);
        _PoolVotingThresholds_committeeNoConfidence.set(this, void 0);
        _PoolVotingThresholds_hardForkInitiation.set(this, void 0);
        _PoolVotingThresholds_securityRelevantParam.set(this, void 0);
        _PoolVotingThresholds_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _PoolVotingThresholds_motionNoConfidence, motionNoConfidence, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_committeeNormal, committeeNormal, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_committeeNoConfidence, committeeNoConfidence, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_hardForkInitiation, hardForkInitiation, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_securityRelevantParam, securityRelevantParam, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _PoolVotingThresholds_originalBytes, "f")) return __classPrivateFieldGet(this, _PoolVotingThresholds_originalBytes, "f");
        writer.writeStartArray(POOL_VOTING_THRESHOLDS_SIZE);
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _PoolVotingThresholds_motionNoConfidence, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _PoolVotingThresholds_committeeNormal, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _PoolVotingThresholds_committeeNoConfidence, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _PoolVotingThresholds_hardForkInitiation, "f").toCbor(), 'hex'));
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _PoolVotingThresholds_securityRelevantParam, "f").toCbor(), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== POOL_VOTING_THRESHOLDS_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${POOL_VOTING_THRESHOLDS_SIZE} elements, but got an array of ${length} elements`);
        const motionNoConfidence = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const committeeNormal = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const committeeNoConfidence = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const hardForkInitiation = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const securityRelevantParamVotingThreshold = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const thresholds = new PoolVotingThresholds(motionNoConfidence, committeeNormal, committeeNoConfidence, hardForkInitiation, securityRelevantParamVotingThreshold);
        __classPrivateFieldSet(thresholds, _PoolVotingThresholds_originalBytes, cbor, "f");
        return thresholds;
    }
    toCore() {
        return {
            committeeNoConfidence: __classPrivateFieldGet(this, _PoolVotingThresholds_committeeNoConfidence, "f").toCore(),
            committeeNormal: __classPrivateFieldGet(this, _PoolVotingThresholds_committeeNormal, "f").toCore(),
            hardForkInitiation: __classPrivateFieldGet(this, _PoolVotingThresholds_hardForkInitiation, "f").toCore(),
            motionNoConfidence: __classPrivateFieldGet(this, _PoolVotingThresholds_motionNoConfidence, "f").toCore(),
            securityRelevantParamVotingThreshold: __classPrivateFieldGet(this, _PoolVotingThresholds_securityRelevantParam, "f").toCore()
        };
    }
    static fromCore(core) {
        return new PoolVotingThresholds(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.motionNoConfidence), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.committeeNormal), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.committeeNoConfidence), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.hardForkInitiation), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(core.securityRelevantParamVotingThreshold));
    }
    setMotionNoConfidence(threshold) {
        __classPrivateFieldSet(this, _PoolVotingThresholds_motionNoConfidence, threshold, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_originalBytes, undefined, "f");
    }
    setCommitteeNormal(threshold) {
        __classPrivateFieldSet(this, _PoolVotingThresholds_committeeNormal, threshold, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_originalBytes, undefined, "f");
    }
    setCommitteeNoConfidence(threshold) {
        __classPrivateFieldSet(this, _PoolVotingThresholds_committeeNoConfidence, threshold, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_originalBytes, undefined, "f");
    }
    setHardForkInitiation(threshold) {
        __classPrivateFieldSet(this, _PoolVotingThresholds_hardForkInitiation, threshold, "f");
        __classPrivateFieldSet(this, _PoolVotingThresholds_originalBytes, undefined, "f");
    }
    motionNoConfidence() {
        return __classPrivateFieldGet(this, _PoolVotingThresholds_motionNoConfidence, "f");
    }
    committeeNormal() {
        return __classPrivateFieldGet(this, _PoolVotingThresholds_committeeNormal, "f");
    }
    committeeNoConfidence() {
        return __classPrivateFieldGet(this, _PoolVotingThresholds_committeeNoConfidence, "f");
    }
    hardForkInitiation() {
        return __classPrivateFieldGet(this, _PoolVotingThresholds_hardForkInitiation, "f");
    }
    securityRelevantParam() {
        return __classPrivateFieldGet(this, _PoolVotingThresholds_securityRelevantParam, "f");
    }
}
_PoolVotingThresholds_motionNoConfidence = new WeakMap(), _PoolVotingThresholds_committeeNormal = new WeakMap(), _PoolVotingThresholds_committeeNoConfidence = new WeakMap(), _PoolVotingThresholds_hardForkInitiation = new WeakMap(), _PoolVotingThresholds_securityRelevantParam = new WeakMap(), _PoolVotingThresholds_originalBytes = new WeakMap(); //# sourceMappingURL=PoolVotingThresholds.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProtocolParamUpdate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtocolParamUpdate",
    ()=>ProtocolParamUpdate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$Costmdls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/Costmdls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$DrepVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/DrepVotingThresholds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ExUnitPrices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ExUnitPrices.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/ExUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ProtocolVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/ProtocolVersion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/UnitInterval.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$PoolVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/PoolVotingThresholds.js [app-ssr] (ecmascript)");
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
var _ProtocolParamUpdate_instances, _ProtocolParamUpdate_minFeeA, _ProtocolParamUpdate_minFeeB, _ProtocolParamUpdate_maxBlockBodySize, _ProtocolParamUpdate_maxTxSize, _ProtocolParamUpdate_maxBlockHeaderSize, _ProtocolParamUpdate_keyDeposit, _ProtocolParamUpdate_poolDeposit, _ProtocolParamUpdate_maxEpoch, _ProtocolParamUpdate_nOpt, _ProtocolParamUpdate_poolPledgeInfluence, _ProtocolParamUpdate_expansionRate, _ProtocolParamUpdate_treasuryGrowthRate, _ProtocolParamUpdate_d, _ProtocolParamUpdate_extraEntropy, _ProtocolParamUpdate_protocolVersion, _ProtocolParamUpdate_minPoolCost, _ProtocolParamUpdate_adaPerUtxoByte, _ProtocolParamUpdate_costModels, _ProtocolParamUpdate_executionCosts, _ProtocolParamUpdate_maxTxExUnits, _ProtocolParamUpdate_maxBlockExUnits, _ProtocolParamUpdate_maxValueSize, _ProtocolParamUpdate_collateralPercentage, _ProtocolParamUpdate_maxCollateralInputs, _ProtocolParamUpdate_poolVotingThresholds, _ProtocolParamUpdate_drepVotingThresholds, _ProtocolParamUpdate_minCommitteeSize, _ProtocolParamUpdate_committeeTermLimit, _ProtocolParamUpdate_governanceActionValidityPeriod, _ProtocolParamUpdate_governanceActionDeposit, _ProtocolParamUpdate_drepDeposit, _ProtocolParamUpdate_drepInactivityPeriod, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, _ProtocolParamUpdate_originalBytes, _ProtocolParamUpdate_getMapSize;
;
;
;
;
;
;
;
;
class ProtocolParamUpdate {
    constructor(){
        _ProtocolParamUpdate_instances.add(this);
        _ProtocolParamUpdate_minFeeA.set(this, void 0);
        _ProtocolParamUpdate_minFeeB.set(this, void 0);
        _ProtocolParamUpdate_maxBlockBodySize.set(this, void 0);
        _ProtocolParamUpdate_maxTxSize.set(this, void 0);
        _ProtocolParamUpdate_maxBlockHeaderSize.set(this, void 0);
        _ProtocolParamUpdate_keyDeposit.set(this, void 0);
        _ProtocolParamUpdate_poolDeposit.set(this, void 0);
        _ProtocolParamUpdate_maxEpoch.set(this, void 0);
        _ProtocolParamUpdate_nOpt.set(this, void 0);
        _ProtocolParamUpdate_poolPledgeInfluence.set(this, void 0);
        _ProtocolParamUpdate_expansionRate.set(this, void 0);
        _ProtocolParamUpdate_treasuryGrowthRate.set(this, void 0);
        _ProtocolParamUpdate_d.set(this, void 0);
        _ProtocolParamUpdate_extraEntropy.set(this, void 0);
        _ProtocolParamUpdate_protocolVersion.set(this, void 0);
        _ProtocolParamUpdate_minPoolCost.set(this, void 0);
        _ProtocolParamUpdate_adaPerUtxoByte.set(this, void 0);
        _ProtocolParamUpdate_costModels.set(this, void 0);
        _ProtocolParamUpdate_executionCosts.set(this, void 0);
        _ProtocolParamUpdate_maxTxExUnits.set(this, void 0);
        _ProtocolParamUpdate_maxBlockExUnits.set(this, void 0);
        _ProtocolParamUpdate_maxValueSize.set(this, void 0);
        _ProtocolParamUpdate_collateralPercentage.set(this, void 0);
        _ProtocolParamUpdate_maxCollateralInputs.set(this, void 0);
        _ProtocolParamUpdate_poolVotingThresholds.set(this, void 0);
        _ProtocolParamUpdate_drepVotingThresholds.set(this, void 0);
        _ProtocolParamUpdate_minCommitteeSize.set(this, void 0);
        _ProtocolParamUpdate_committeeTermLimit.set(this, void 0);
        _ProtocolParamUpdate_governanceActionValidityPeriod.set(this, void 0);
        _ProtocolParamUpdate_governanceActionDeposit.set(this, void 0);
        _ProtocolParamUpdate_drepDeposit.set(this, void 0);
        _ProtocolParamUpdate_drepInactivityPeriod.set(this, void 0);
        _ProtocolParamUpdate_minFeeRefScriptCostPerByte.set(this, void 0);
        _ProtocolParamUpdate_originalBytes.set(this, undefined);
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_originalBytes, "f")) return __classPrivateFieldGet(this, _ProtocolParamUpdate_originalBytes, "f");
        writer.writeStartMap(__classPrivateFieldGet(this, _ProtocolParamUpdate_instances, "m", _ProtocolParamUpdate_getMapSize).call(this));
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f") !== undefined) {
            writer.writeInt(0n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f") !== undefined) {
            writer.writeInt(1n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockBodySize, "f") !== undefined) {
            writer.writeInt(2n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockBodySize, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f") !== undefined) {
            writer.writeInt(3n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockHeaderSize, "f") !== undefined) {
            writer.writeInt(4n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockHeaderSize, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f") !== undefined) {
            writer.writeInt(5n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f") !== undefined) {
            writer.writeInt(6n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxEpoch, "f") !== undefined) {
            writer.writeInt(7n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxEpoch, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_nOpt, "f") !== undefined) {
            writer.writeInt(8n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_nOpt, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f") !== undefined) {
            writer.writeInt(9n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f") !== undefined) {
            writer.writeInt(10n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f") !== undefined) {
            writer.writeInt(11n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f") !== undefined) {
            writer.writeInt(12n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f") !== undefined) {
            if (__classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f").length === 0) {
                writer.writeInt(13n);
                writer.writeStartArray(1);
                writer.writeInt(0);
            } else {
                writer.writeInt(13n);
                writer.writeStartArray(2);
                writer.writeInt(1);
                writer.writeByteString(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f"), 'hex'));
            }
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f") !== undefined) {
            writer.writeInt(14n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f") !== undefined) {
            writer.writeInt(16n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f") !== undefined) {
            writer.writeInt(17n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_costModels, "f") !== undefined) {
            writer.writeInt(18n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_costModels, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_executionCosts, "f") !== undefined) {
            writer.writeInt(19n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_executionCosts, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxExUnits, "f") !== undefined) {
            writer.writeInt(20n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxExUnits, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockExUnits, "f") !== undefined) {
            writer.writeInt(21n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockExUnits, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxValueSize, "f") !== undefined) {
            writer.writeInt(22n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxValueSize, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_collateralPercentage, "f") !== undefined) {
            writer.writeInt(23n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_collateralPercentage, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxCollateralInputs, "f") !== undefined) {
            writer.writeInt(24n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxCollateralInputs, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolVotingThresholds, "f") !== undefined) {
            writer.writeInt(25n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_poolVotingThresholds, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepVotingThresholds, "f") !== undefined) {
            writer.writeInt(26n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_drepVotingThresholds, "f").toCbor(), 'hex'));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minCommitteeSize, "f") !== undefined) {
            writer.writeInt(27n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_minCommitteeSize, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f") !== undefined) {
            writer.writeInt(28n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f") !== undefined) {
            writer.writeInt(29n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionDeposit, "f") !== undefined) {
            writer.writeInt(30n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionDeposit, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepDeposit, "f") !== undefined) {
            writer.writeInt(31n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_drepDeposit, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f") !== undefined) {
            writer.writeInt(32n);
            writer.writeInt(__classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f"));
        }
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f") !== undefined) {
            writer.writeInt(33n);
            writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f").toCbor(), 'hex'));
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const params = new ProtocolParamUpdate();
        reader.readStartMap();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const key = reader.readInt();
            switch(key){
                case 0n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeA, reader.readInt(), "f");
                    break;
                case 1n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeB, reader.readInt(), "f");
                    break;
                case 2n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockBodySize, Number(reader.readInt()), "f");
                    break;
                case 3n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxTxSize, Number(reader.readInt()), "f");
                    break;
                case 4n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockHeaderSize, Number(reader.readInt()), "f");
                    break;
                case 5n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_keyDeposit, reader.readInt(), "f");
                    break;
                case 6n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_poolDeposit, reader.readInt(), "f");
                    break;
                case 7n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxEpoch, Number(reader.readInt()), "f");
                    break;
                case 8n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_nOpt, Number(reader.readInt()), "f");
                    break;
                case 9n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_poolPledgeInfluence, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 10n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_expansionRate, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 11n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_treasuryGrowthRate, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 12n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_d, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 13n:
                    if (reader.readStartArray() === 1) {
                        reader.readEncodedValue();
                        __classPrivateFieldSet(params, _ProtocolParamUpdate_extraEntropy, '', "f");
                        reader.readEndArray();
                    } else {
                        reader.readEncodedValue();
                        __classPrivateFieldSet(params, _ProtocolParamUpdate_extraEntropy, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()), "f");
                        reader.readEndArray();
                    }
                    break;
                case 14n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_protocolVersion, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ProtocolVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtocolVersion"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 16n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_minPoolCost, reader.readInt(), "f");
                    break;
                case 17n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_adaPerUtxoByte, reader.readInt(), "f");
                    break;
                case 18n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_costModels, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$Costmdls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Costmdls"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 19n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_executionCosts, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ExUnitPrices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnitPrices"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 20n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxTxExUnits, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnits"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 21n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockExUnits, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnits"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 22n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxValueSize, Number(reader.readInt()), "f");
                    break;
                case 23n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_collateralPercentage, Number(reader.readInt()), "f");
                    break;
                case 24n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_maxCollateralInputs, Number(reader.readInt()), "f");
                    break;
                case 25n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_poolVotingThresholds, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$PoolVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoolVotingThresholds"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 26n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_drepVotingThresholds, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$DrepVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrepVotingThresholds"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
                case 27n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_minCommitteeSize, Number(reader.readInt()), "f");
                    break;
                case 28n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_committeeTermLimit, Number(reader.readInt()), "f");
                    break;
                case 29n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_governanceActionValidityPeriod, Number(reader.readInt()), "f");
                    break;
                case 30n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_governanceActionDeposit, Number(reader.readInt()), "f");
                    break;
                case 31n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_drepDeposit, Number(reader.readInt()), "f");
                    break;
                case 32n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_drepInactivityPeriod, Number(reader.readInt()), "f");
                    break;
                case 33n:
                    __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())), "f");
                    break;
            }
        }
        reader.readEndMap();
        __classPrivateFieldSet(params, _ProtocolParamUpdate_originalBytes, cbor, "f");
        return params;
    }
    toCore() {
        const protocolParametersUpdate = {
            coinsPerUtxoByte: __classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f")) : undefined,
            collateralPercentage: __classPrivateFieldGet(this, _ProtocolParamUpdate_collateralPercentage, "f"),
            committeeTermLimit: __classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f") !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EpochNo"])(__classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f")) : undefined,
            costModels: __classPrivateFieldGet(this, _ProtocolParamUpdate_costModels, "f")?.toCore(),
            dRepDeposit: __classPrivateFieldGet(this, _ProtocolParamUpdate_drepDeposit, "f"),
            dRepInactivityPeriod: __classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f") !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EpochNo"])(__classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f")) : undefined,
            dRepVotingThresholds: __classPrivateFieldGet(this, _ProtocolParamUpdate_drepVotingThresholds, "f")?.toCore(),
            desiredNumberOfPools: __classPrivateFieldGet(this, _ProtocolParamUpdate_nOpt, "f"),
            governanceActionDeposit: __classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionDeposit, "f"),
            governanceActionValidityPeriod: __classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f") !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EpochNo"])(__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f")) : undefined,
            maxBlockBodySize: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockBodySize, "f"),
            maxBlockHeaderSize: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockHeaderSize, "f"),
            maxCollateralInputs: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxCollateralInputs, "f"),
            maxExecutionUnitsPerBlock: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockExUnits, "f")?.toCore(),
            maxExecutionUnitsPerTransaction: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxExUnits, "f")?.toCore(),
            maxTxSize: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f")) : undefined,
            maxValueSize: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxValueSize, "f"),
            minCommitteeSize: __classPrivateFieldGet(this, _ProtocolParamUpdate_minCommitteeSize, "f"),
            minFeeCoefficient: __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f")) : undefined,
            minFeeConstant: __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f")) : undefined,
            minFeeRefScriptCostPerByte: __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f") ? __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f").toFloat().toString() : undefined,
            minPoolCost: __classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f")) : undefined,
            monetaryExpansion: __classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f") ? __classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f").toFloat().toString() : undefined,
            poolDeposit: __classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f")) : undefined,
            poolInfluence: __classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f") ? __classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f").toFloat().toString() : undefined,
            poolRetirementEpochBound: __classPrivateFieldGet(this, _ProtocolParamUpdate_maxEpoch, "f"),
            poolVotingThresholds: __classPrivateFieldGet(this, _ProtocolParamUpdate_poolVotingThresholds, "f")?.toCore(),
            prices: __classPrivateFieldGet(this, _ProtocolParamUpdate_executionCosts, "f")?.toCore(),
            stakeKeyDeposit: __classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f") !== undefined ? Number(__classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f")) : undefined,
            treasuryExpansion: __classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f") ? __classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f").toFloat().toString() : undefined
        };
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f")) protocolParametersUpdate.decentralizationParameter = __classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f").toFloat().toString();
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f") !== undefined) protocolParametersUpdate.extraEntropy = __classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f");
        if (__classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f")) protocolParametersUpdate.protocolVersion = __classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f").toCore();
        return protocolParametersUpdate;
    }
    static fromCore(parametersUpdate) {
        const params = new ProtocolParamUpdate();
        __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeA, parametersUpdate.minFeeCoefficient !== undefined ? BigInt(parametersUpdate.minFeeCoefficient) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockBodySize, parametersUpdate.maxBlockBodySize, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeB, parametersUpdate.minFeeConstant !== undefined ? BigInt(parametersUpdate.minFeeConstant) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockHeaderSize, parametersUpdate.maxBlockHeaderSize, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_keyDeposit, parametersUpdate.stakeKeyDeposit !== undefined ? BigInt(parametersUpdate.stakeKeyDeposit) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_poolDeposit, parametersUpdate.poolDeposit !== undefined && parametersUpdate.poolDeposit !== null ? BigInt(parametersUpdate.poolDeposit) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxEpoch, parametersUpdate.poolRetirementEpochBound, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_nOpt, parametersUpdate.desiredNumberOfPools, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_poolPledgeInfluence, parametersUpdate.poolInfluence ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromFloat(Number(parametersUpdate.poolInfluence)) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_expansionRate, parametersUpdate.monetaryExpansion ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromFloat(Number(parametersUpdate.monetaryExpansion)) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_treasuryGrowthRate, parametersUpdate.treasuryExpansion ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromFloat(Number(parametersUpdate.treasuryExpansion)) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_minPoolCost, parametersUpdate.minPoolCost !== undefined ? BigInt(parametersUpdate.minPoolCost) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxValueSize, parametersUpdate.maxValueSize, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxTxSize, parametersUpdate.maxTxSize, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_collateralPercentage, parametersUpdate.collateralPercentage, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxCollateralInputs, parametersUpdate.maxCollateralInputs, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_costModels, parametersUpdate.costModels ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$Costmdls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Costmdls"].fromCore(parametersUpdate.costModels) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_executionCosts, parametersUpdate.prices ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ExUnitPrices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnitPrices"].fromCore(parametersUpdate.prices) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxTxExUnits, parametersUpdate.maxExecutionUnitsPerTransaction ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnits"].fromCore(parametersUpdate.maxExecutionUnitsPerTransaction) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_maxBlockExUnits, parametersUpdate.maxExecutionUnitsPerBlock ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ExUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnits"].fromCore(parametersUpdate.maxExecutionUnitsPerBlock) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_adaPerUtxoByte, parametersUpdate.coinsPerUtxoByte !== undefined ? BigInt(parametersUpdate.coinsPerUtxoByte) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_poolVotingThresholds, parametersUpdate.poolVotingThresholds ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$PoolVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoolVotingThresholds"].fromCore(parametersUpdate.poolVotingThresholds) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_drepVotingThresholds, parametersUpdate.dRepVotingThresholds ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$DrepVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrepVotingThresholds"].fromCore(parametersUpdate.dRepVotingThresholds) : undefined, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_minCommitteeSize, parametersUpdate.minCommitteeSize, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_committeeTermLimit, parametersUpdate.committeeTermLimit, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_governanceActionValidityPeriod, parametersUpdate.governanceActionValidityPeriod, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_governanceActionDeposit, parametersUpdate.governanceActionDeposit, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_drepDeposit, parametersUpdate.dRepDeposit, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_drepInactivityPeriod, parametersUpdate.dRepInactivityPeriod, "f");
        __classPrivateFieldSet(params, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, parametersUpdate.minFeeRefScriptCostPerByte ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromFloat(Number(parametersUpdate.minFeeRefScriptCostPerByte)) : undefined, "f");
        const { protocolVersion, extraEntropy, decentralizationParameter } = parametersUpdate;
        if (protocolVersion !== undefined || extraEntropy !== undefined || decentralizationParameter) {
            __classPrivateFieldSet(params, _ProtocolParamUpdate_d, decentralizationParameter ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitInterval"].fromFloat(Number(decentralizationParameter)) : undefined, "f");
            __classPrivateFieldSet(params, _ProtocolParamUpdate_protocolVersion, protocolVersion ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$ProtocolVersion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtocolVersion"].fromCore(protocolVersion) : undefined, "f");
            __classPrivateFieldSet(params, _ProtocolParamUpdate_extraEntropy, extraEntropy ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"])(extraEntropy) : undefined, "f");
        }
        return params;
    }
    setMinFeeA(minFeeA) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_minFeeA, minFeeA, "f");
    }
    minFeeA() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f");
    }
    setMinFeeB(minFeeB) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_minFeeB, minFeeB, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    minFeeB() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f");
    }
    setMaxBlockBodySize(maxBlockBodySize) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxBlockBodySize, maxBlockBodySize, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxBlockBodySize() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockBodySize, "f");
    }
    setMaxTxSize(maxTxSize) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxTxSize, maxTxSize, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxTxSize() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f");
    }
    setMaxBlockHeaderSize(maxBlockHeaderSize) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxBlockHeaderSize, maxBlockHeaderSize, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxBlockHeaderSize() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockHeaderSize, "f");
    }
    setKeyDeposit(keyDeposit) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_keyDeposit, keyDeposit, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    keyDeposit() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f");
    }
    setPoolDeposit(poolDeposit) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_poolDeposit, poolDeposit, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    poolDeposit() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f");
    }
    setMaxEpoch(maxEpoch) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxEpoch, maxEpoch, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxEpoch() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxEpoch, "f");
    }
    setNOpt(nOpt) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_nOpt, nOpt, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    nOpt() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_nOpt, "f");
    }
    setPoolPledgeInfluence(poolPledgeInfluence) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_poolPledgeInfluence, poolPledgeInfluence, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    poolPledgeInfluence() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f");
    }
    setExpansionRate(expansionRate) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_expansionRate, expansionRate, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    expansionRate() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f");
    }
    setTreasuryGrowthRate(treasuryGrowthRate) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_treasuryGrowthRate, treasuryGrowthRate, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    treasuryGrowthRate() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f");
    }
    setD(d) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_d, d, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    d() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f");
    }
    setExtraEntropy(extraEntropy) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_extraEntropy, extraEntropy, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    extraEntropy() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f");
    }
    setProtocolVersion(protocolVersion) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_protocolVersion, protocolVersion, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    protocolVersion() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f");
    }
    setMinPoolCost(minPoolCost) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_minPoolCost, minPoolCost, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    minPoolCost() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f");
    }
    setAdaPerUtxoByte(adaPerUtxoByte) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_adaPerUtxoByte, adaPerUtxoByte, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    adaPerUtxoByte() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f");
    }
    setCostModels(costModels) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_costModels, costModels, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    costModels() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_costModels, "f");
    }
    setExecutionCosts(executionCosts) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_executionCosts, executionCosts, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    executionCosts() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_executionCosts, "f");
    }
    setMaxTxExUnits(maxTxExUnits) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxTxExUnits, maxTxExUnits, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxTxExUnits() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxExUnits, "f");
    }
    setMaxBlockExUnits(maxBlockExUnits) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxBlockExUnits, maxBlockExUnits, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxBlockExUnits() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockExUnits, "f");
    }
    setMaxValueSize(maxValueSize) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxValueSize, maxValueSize, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxValueSize() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxValueSize, "f");
    }
    setCollateralPercentage(collateralPercentage) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_collateralPercentage, collateralPercentage, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    collateralPercentage() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_collateralPercentage, "f");
    }
    setMaxCollateralInputs(maxCollateralInputs) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_maxCollateralInputs, maxCollateralInputs, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    maxCollateralInputs() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_maxCollateralInputs, "f");
    }
    setPoolVotingThresholds(pooVotingThresholds) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_poolVotingThresholds, pooVotingThresholds, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    poolVotingThresholds() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_poolVotingThresholds, "f");
    }
    setDrepVotingThresholds(drepVotingThresholds) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_drepVotingThresholds, drepVotingThresholds, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    drepVotingThresholds() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_drepVotingThresholds, "f");
    }
    setMinCommitteeSize(minCommitteeSize) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_minCommitteeSize, minCommitteeSize, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    minCommitteeSize() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_minCommitteeSize, "f");
    }
    setCommitteeTermLimit(committeeTermLimit) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_committeeTermLimit, committeeTermLimit, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    committeeTermLimit() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f");
    }
    setGovernanceActionValidityPeriod(governanceActionValidityPeriod) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, governanceActionValidityPeriod, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    governanceActionValidityPeriod() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f");
    }
    setGovernanceActionDeposit(governanceActionDeposit) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_governanceActionDeposit, governanceActionDeposit, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    governanceActionDeposit() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionDeposit, "f");
    }
    setDrepDeposit(drepDeposit) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_drepDeposit, drepDeposit, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    drepDeposit() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_drepDeposit, "f");
    }
    setDrepInactivityPeriod(drepInactivityPeriod) {
        __classPrivateFieldSet(this, _ProtocolParamUpdate_drepInactivityPeriod, drepInactivityPeriod, "f");
        __classPrivateFieldSet(this, _ProtocolParamUpdate_originalBytes, undefined, "f");
    }
    drepInactivityPeriod() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f");
    }
    minFeeRefScriptCostPerByte() {
        return __classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f");
    }
}
_ProtocolParamUpdate_minFeeA = new WeakMap(), _ProtocolParamUpdate_minFeeB = new WeakMap(), _ProtocolParamUpdate_maxBlockBodySize = new WeakMap(), _ProtocolParamUpdate_maxTxSize = new WeakMap(), _ProtocolParamUpdate_maxBlockHeaderSize = new WeakMap(), _ProtocolParamUpdate_keyDeposit = new WeakMap(), _ProtocolParamUpdate_poolDeposit = new WeakMap(), _ProtocolParamUpdate_maxEpoch = new WeakMap(), _ProtocolParamUpdate_nOpt = new WeakMap(), _ProtocolParamUpdate_poolPledgeInfluence = new WeakMap(), _ProtocolParamUpdate_expansionRate = new WeakMap(), _ProtocolParamUpdate_treasuryGrowthRate = new WeakMap(), _ProtocolParamUpdate_d = new WeakMap(), _ProtocolParamUpdate_extraEntropy = new WeakMap(), _ProtocolParamUpdate_protocolVersion = new WeakMap(), _ProtocolParamUpdate_minPoolCost = new WeakMap(), _ProtocolParamUpdate_adaPerUtxoByte = new WeakMap(), _ProtocolParamUpdate_costModels = new WeakMap(), _ProtocolParamUpdate_executionCosts = new WeakMap(), _ProtocolParamUpdate_maxTxExUnits = new WeakMap(), _ProtocolParamUpdate_maxBlockExUnits = new WeakMap(), _ProtocolParamUpdate_maxValueSize = new WeakMap(), _ProtocolParamUpdate_collateralPercentage = new WeakMap(), _ProtocolParamUpdate_maxCollateralInputs = new WeakMap(), _ProtocolParamUpdate_poolVotingThresholds = new WeakMap(), _ProtocolParamUpdate_drepVotingThresholds = new WeakMap(), _ProtocolParamUpdate_minCommitteeSize = new WeakMap(), _ProtocolParamUpdate_committeeTermLimit = new WeakMap(), _ProtocolParamUpdate_governanceActionValidityPeriod = new WeakMap(), _ProtocolParamUpdate_governanceActionDeposit = new WeakMap(), _ProtocolParamUpdate_drepDeposit = new WeakMap(), _ProtocolParamUpdate_drepInactivityPeriod = new WeakMap(), _ProtocolParamUpdate_minFeeRefScriptCostPerByte = new WeakMap(), _ProtocolParamUpdate_originalBytes = new WeakMap(), _ProtocolParamUpdate_instances = new WeakSet(), _ProtocolParamUpdate_getMapSize = function _ProtocolParamUpdate_getMapSize() {
    let mapSize = 0;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeA, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeB, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockBodySize, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxSize, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockHeaderSize, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_keyDeposit, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolDeposit, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxEpoch, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_nOpt, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolPledgeInfluence, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_expansionRate, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_treasuryGrowthRate, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_d, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_extraEntropy, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_protocolVersion, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minPoolCost, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_adaPerUtxoByte, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_costModels, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_executionCosts, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxTxExUnits, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxBlockExUnits, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxValueSize, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_collateralPercentage, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_maxCollateralInputs, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_poolVotingThresholds, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepVotingThresholds, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minCommitteeSize, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_committeeTermLimit, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionValidityPeriod, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_governanceActionDeposit, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepDeposit, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_drepInactivityPeriod, "f") !== undefined) ++mapSize;
    if (__classPrivateFieldGet(this, _ProtocolParamUpdate_minFeeRefScriptCostPerByte, "f") !== undefined) ++mapSize;
    return mapSize;
}; //# sourceMappingURL=ProtocolParamUpdate.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProposedProtocolParameterUpdates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProposedProtocolParameterUpdates",
    ()=>ProposedProtocolParameterUpdates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProtocolParamUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProtocolParamUpdate.js [app-ssr] (ecmascript)");
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
var _ProposedProtocolParameterUpdates_proposedUpdates, _ProposedProtocolParameterUpdates_originalBytes;
;
;
;
;
class ProposedProtocolParameterUpdates {
    constructor(proposedUpdates){
        _ProposedProtocolParameterUpdates_proposedUpdates.set(this, new Map());
        _ProposedProtocolParameterUpdates_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _ProposedProtocolParameterUpdates_proposedUpdates, proposedUpdates, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_originalBytes, "f")) return __classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_originalBytes, "f");
        const sortedCanonically = new Map([
            ...__classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f")
        ].sort((a, b)=>a > b ? 1 : -1));
        writer.writeStartMap(sortedCanonically.size);
        for (const [key, value] of sortedCanonically){
            writer.writeByteString(Buffer.from(key, 'hex'));
            writer.writeEncodedValue(Buffer.from(value.toCbor(), 'hex'));
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const proposedUpdates = new Map();
        reader.readStartMap();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            const genesisHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
            const params = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProtocolParamUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtocolParamUpdate"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
            proposedUpdates.set(genesisHash, params);
        }
        reader.readEndMap();
        const updates = new ProposedProtocolParameterUpdates(proposedUpdates);
        __classPrivateFieldSet(updates, _ProposedProtocolParameterUpdates_originalBytes, cbor, "f");
        return updates;
    }
    toCore() {
        return new Map([
            ...__classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f")
        ].map(([key, value])=>[
                key,
                value.toCore()
            ]));
    }
    static fromCore(updates) {
        return new ProposedProtocolParameterUpdates(new Map([
            ...updates
        ].map(([key, value])=>[
                key,
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProtocolParamUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtocolParamUpdate"].fromCore(value)
            ])));
    }
    size() {
        return __classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f").size;
    }
    insert(key, value) {
        __classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f").set(key, value);
    }
    get(key) {
        return __classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f").get(key);
    }
    keys() {
        return [
            ...__classPrivateFieldGet(this, _ProposedProtocolParameterUpdates_proposedUpdates, "f").keys()
        ];
    }
}
_ProposedProtocolParameterUpdates_proposedUpdates = new WeakMap(), _ProposedProtocolParameterUpdates_originalBytes = new WeakMap(); //# sourceMappingURL=ProposedProtocolParameterUpdates.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Update.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Update",
    ()=>Update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProposedProtocolParameterUpdates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProposedProtocolParameterUpdates.js [app-ssr] (ecmascript)");
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
var _Update_epoch, _Update_updates, _Update_originalBytes;
;
;
;
;
const UPDATE_ARRAY_SIZE = 2;
class Update {
    constructor(updates, epoch){
        _Update_epoch.set(this, void 0);
        _Update_updates.set(this, void 0);
        _Update_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Update_epoch, epoch, "f");
        __classPrivateFieldSet(this, _Update_updates, updates, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _Update_originalBytes, "f")) return __classPrivateFieldGet(this, _Update_originalBytes, "f");
        writer.writeStartArray(UPDATE_ARRAY_SIZE);
        writer.writeEncodedValue(Buffer.from(__classPrivateFieldGet(this, _Update_updates, "f").toCbor(), 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _Update_epoch, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== UPDATE_ARRAY_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${UPDATE_ARRAY_SIZE} elements, but got an array of ${length} elements`);
        const updates = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProposedProtocolParameterUpdates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProposedProtocolParameterUpdates"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const epoch = reader.readInt();
        reader.readEndArray();
        const exUnit = new Update(updates, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EpochNo"])(Number(epoch)));
        __classPrivateFieldSet(exUnit, _Update_originalBytes, cbor, "f");
        return exUnit;
    }
    toCore() {
        return {
            epoch: __classPrivateFieldGet(this, _Update_epoch, "f"),
            proposedProtocolParameterUpdates: __classPrivateFieldGet(this, _Update_updates, "f").toCore()
        };
    }
    static fromCore(update) {
        const epoch = update.epoch;
        const updates = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProposedProtocolParameterUpdates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProposedProtocolParameterUpdates"].fromCore(update.proposedProtocolParameterUpdates);
        return new Update(updates, epoch);
    }
    epoch() {
        return __classPrivateFieldGet(this, _Update_epoch, "f");
    }
    setEpoch(epoch) {
        __classPrivateFieldSet(this, _Update_epoch, epoch, "f");
        __classPrivateFieldSet(this, _Update_originalBytes, undefined, "f");
    }
    proposedProtocolParameterUpdates() {
        return __classPrivateFieldGet(this, _Update_updates, "f");
    }
    setProposedProtocolParameterUpdates(updates) {
        __classPrivateFieldSet(this, _Update_updates, updates, "f");
        __classPrivateFieldSet(this, _Update_originalBytes, undefined, "f");
    }
}
_Update_epoch = new WeakMap(), _Update_updates = new WeakMap(), _Update_originalBytes = new WeakMap(); //# sourceMappingURL=Update.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CostModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$CostModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CostModel"],
    "Costmdls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$Costmdls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Costmdls"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$Costmdls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/Costmdls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$CostModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/CostModel.js [app-ssr] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CostModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CostModel"],
    "Costmdls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Costmdls"],
    "DrepVotingThresholds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$DrepVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrepVotingThresholds"],
    "ExUnitPrices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ExUnitPrices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExUnitPrices"],
    "PoolVotingThresholds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$PoolVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoolVotingThresholds"],
    "ProposedProtocolParameterUpdates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProposedProtocolParameterUpdates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProposedProtocolParameterUpdates"],
    "ProtocolParamUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProtocolParamUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtocolParamUpdate"],
    "Update",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Update$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Update"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Costmdls$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Costmdls/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProposedProtocolParameterUpdates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProposedProtocolParameterUpdates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ProtocolParamUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ProtocolParamUpdate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$Update$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/Update.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$ExUnitPrices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/ExUnitPrices.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$DrepVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/DrepVotingThresholds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Update$2f$PoolVotingThresholds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Update/PoolVotingThresholds.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=ecb53_%40cardano-sdk_core_dist_esm_Serialization_Update_9f361891._.js.map