(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborAdditionalInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborAdditionalInfo",
    ()=>CborAdditionalInfo
]);
var CborAdditionalInfo;
(function(CborAdditionalInfo) {
    CborAdditionalInfo[CborAdditionalInfo["AdditionalFalse"] = 20] = "AdditionalFalse";
    CborAdditionalInfo[CborAdditionalInfo["AdditionalTrue"] = 21] = "AdditionalTrue";
    CborAdditionalInfo[CborAdditionalInfo["AdditionalNull"] = 22] = "AdditionalNull";
    CborAdditionalInfo[CborAdditionalInfo["Additional8BitData"] = 24] = "Additional8BitData";
    CborAdditionalInfo[CborAdditionalInfo["Additional16BitData"] = 25] = "Additional16BitData";
    CborAdditionalInfo[CborAdditionalInfo["Additional32BitData"] = 26] = "Additional32BitData";
    CborAdditionalInfo[CborAdditionalInfo["Additional64BitData"] = 27] = "Additional64BitData";
    CborAdditionalInfo[CborAdditionalInfo["IndefiniteLength"] = 31] = "IndefiniteLength";
})(CborAdditionalInfo || (CborAdditionalInfo = {})); //# sourceMappingURL=CborAdditionalInfo.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborContentException",
    ()=>CborContentException,
    "CborInvalidOperationException",
    ()=>CborInvalidOperationException,
    "LossOfPrecisionException",
    ()=>LossOfPrecisionException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ts$2d$custom$2d$error$40$3$2e$3$2e$1$2f$node_modules$2f$ts$2d$custom$2d$error$2f$dist$2f$custom$2d$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/ts-custom-error@3.3.1/node_modules/ts-custom-error/dist/custom-error.mjs [app-client] (ecmascript)");
;
class CborInvalidOperationException extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ts$2d$custom$2d$error$40$3$2e$3$2e$1$2f$node_modules$2f$ts$2d$custom$2d$error$2f$dist$2f$custom$2d$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(reason){
        super(reason);
    }
}
class CborContentException extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ts$2d$custom$2d$error$40$3$2e$3$2e$1$2f$node_modules$2f$ts$2d$custom$2d$error$2f$dist$2f$custom$2d$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(reason){
        super(reason);
    }
}
class LossOfPrecisionException extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ts$2d$custom$2d$error$40$3$2e$3$2e$1$2f$node_modules$2f$ts$2d$custom$2d$error$2f$dist$2f$custom$2d$error$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomError"] {
    constructor(reason){
        super(reason);
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborInitialByte.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborInitialByte",
    ()=>CborInitialByte
]);
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
var _CborInitialByte_initialByte;
class CborInitialByte {
    constructor(){
        _CborInitialByte_initialByte.set(this, void 0);
    }
    CborInitialByte(majorType, additionalInfo) {
        __classPrivateFieldSet(this, _CborInitialByte_initialByte, majorType << 5 | additionalInfo, "f");
    }
    static from(initialByte) {
        const init = new CborInitialByte();
        __classPrivateFieldSet(init, _CborInitialByte_initialByte, initialByte, "f");
        return init;
    }
    getInitialByte() {
        return __classPrivateFieldGet(this, _CborInitialByte_initialByte, "f");
    }
    getMajorType() {
        return __classPrivateFieldGet(this, _CborInitialByte_initialByte, "f") >> 5;
    }
    getAdditionalInfo() {
        return __classPrivateFieldGet(this, _CborInitialByte_initialByte, "f") & CborInitialByte.AdditionalInformationMask;
    }
}
_CborInitialByte_initialByte = new WeakMap();
CborInitialByte.IndefiniteLengthBreakByte = 0xff;
CborInitialByte.AdditionalInformationMask = 31; //# sourceMappingURL=CborInitialByte.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborMajorType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborMajorType",
    ()=>CborMajorType
]);
var CborMajorType;
(function(CborMajorType) {
    CborMajorType[CborMajorType["UnsignedInteger"] = 0] = "UnsignedInteger";
    CborMajorType[CborMajorType["NegativeInteger"] = 1] = "NegativeInteger";
    CborMajorType[CborMajorType["ByteString"] = 2] = "ByteString";
    CborMajorType[CborMajorType["Utf8String"] = 3] = "Utf8String";
    CborMajorType[CborMajorType["Array"] = 4] = "Array";
    CborMajorType[CborMajorType["Map"] = 5] = "Map";
    CborMajorType[CborMajorType["Tag"] = 6] = "Tag";
    CborMajorType[CborMajorType["Simple"] = 7] = "Simple";
})(CborMajorType || (CborMajorType = {})); //# sourceMappingURL=CborMajorType.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborReaderState",
    ()=>CborReaderState
]);
var CborReaderState;
(function(CborReaderState) {
    CborReaderState[CborReaderState["Undefined"] = 0] = "Undefined";
    CborReaderState[CborReaderState["UnsignedInteger"] = 1] = "UnsignedInteger";
    CborReaderState[CborReaderState["NegativeInteger"] = 2] = "NegativeInteger";
    CborReaderState[CborReaderState["ByteString"] = 3] = "ByteString";
    CborReaderState[CborReaderState["StartIndefiniteLengthByteString"] = 4] = "StartIndefiniteLengthByteString";
    CborReaderState[CborReaderState["EndIndefiniteLengthByteString"] = 5] = "EndIndefiniteLengthByteString";
    CborReaderState[CborReaderState["TextString"] = 6] = "TextString";
    CborReaderState[CborReaderState["StartIndefiniteLengthTextString"] = 7] = "StartIndefiniteLengthTextString";
    CborReaderState[CborReaderState["EndIndefiniteLengthTextString"] = 8] = "EndIndefiniteLengthTextString";
    CborReaderState[CborReaderState["StartArray"] = 9] = "StartArray";
    CborReaderState[CborReaderState["EndArray"] = 10] = "EndArray";
    CborReaderState[CborReaderState["StartMap"] = 11] = "StartMap";
    CborReaderState[CborReaderState["EndMap"] = 12] = "EndMap";
    CborReaderState[CborReaderState["Tag"] = 13] = "Tag";
    CborReaderState[CborReaderState["SimpleValue"] = 14] = "SimpleValue";
    CborReaderState[CborReaderState["HalfPrecisionFloat"] = 15] = "HalfPrecisionFloat";
    CborReaderState[CborReaderState["SinglePrecisionFloat"] = 16] = "SinglePrecisionFloat";
    CborReaderState[CborReaderState["DoublePrecisionFloat"] = 17] = "DoublePrecisionFloat";
    CborReaderState[CborReaderState["Null"] = 18] = "Null";
    CborReaderState[CborReaderState["Boolean"] = 19] = "Boolean";
    CborReaderState[CborReaderState["Finished"] = 20] = "Finished";
})(CborReaderState || (CborReaderState = {})); //# sourceMappingURL=CborReaderState.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/Half.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeHalf",
    ()=>decodeHalf,
    "encodeHalf",
    ()=>encodeHalf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/errors.js [app-client] (ecmascript)");
;
const LOSS_OF_PRECISION_MSG = 'Invalid conversion. Loss of precision';
const ldexp = (mantissa, exponent)=>{
    const steps = Math.min(3, Math.ceil(Math.abs(exponent) / 1023));
    let result = mantissa;
    for(let i = 0; i < steps; i++)result *= Math.pow(2, Math.floor((exponent + i) / steps));
    return result;
};
const decodeHalf = (data)=>{
    const half = (data[0] << 8) + data[1];
    const exp = half >> 10 & 0x1f;
    const mant = half & 1023;
    let val;
    if (exp === 0) {
        val = ldexp(mant, -24);
    } else if (exp !== 31) {
        val = ldexp(mant + 1024, exp - 25);
    } else {
        val = mant === 0 ? Number.POSITIVE_INFINITY : Number.NaN;
    }
    return half & 32768 ? -val : val;
};
const encodeHalf = (value)=>{
    const u32 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(4);
    u32.writeFloatBE(value, 0);
    const u = u32.readUInt32BE(0);
    if ((u & 8191) !== 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LossOfPrecisionException"](LOSS_OF_PRECISION_MSG);
    }
    let s16 = u >> 16 & 32768;
    const exp = u >> 23 & 0xff;
    const mant = u & 8388607;
    if (exp >= 113 && exp <= 142) {
        s16 += (exp - 112 << 10) + (mant >> 13);
    } else if (exp >= 103 && exp < 113) {
        if (mant & (1 << 126 - exp) - 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LossOfPrecisionException"](LOSS_OF_PRECISION_MSG);
        }
        s16 += mant + 8388608 >> 126 - exp;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LossOfPrecisionException"](LOSS_OF_PRECISION_MSG);
    }
    const result = new Uint8Array(2);
    result[0] = s16 >>> 8 & 0xff;
    result[1] = s16 & 0xff;
    return result;
}; //# sourceMappingURL=Half.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborReader",
    ()=>CborReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborAdditionalInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborInitialByte.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborMajorType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$Half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/Half.js [app-client] (ecmascript)");
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
var _CborReader_instances, _a, _CborReader_data, _CborReader_offset, _CborReader_nestedItems, _CborReader_isTagContext, _CborReader_currentFrame, _CborReader_cachedState, _CborReader_peekInitialByte, _CborReader_peekNextInitialByte, _CborReader_validateNextByteIsBreakByte, _CborReader_pushDataItem, _CborReader_popDataItem, _CborReader_restoreStackFrame, _CborReader_getRemainingBytes, _CborReader_advanceDataItemCounters, _CborReader_advanceBuffer, _CborReader_ensureReadCapacity, _CborReader_peekStateCore, _CborReader_peekDefiniteLength, _CborReader_peekUnsignedInteger, _CborReader_peekSignedInteger, _CborReader_readIndefiniteLengthByteStringConcatenated, _CborReader_peekTagCore, _CborReader_decodeUnsignedInteger, _CborReader_skipNextNode;
;
;
;
;
;
;
const UNEXPECTED_END_OF_BUFFER_MSG = 'Unexpected end of buffer';
class CborReader {
    constructor(data){
        _CborReader_instances.add(this);
        _CborReader_data.set(this, void 0);
        _CborReader_offset.set(this, 0);
        _CborReader_nestedItems.set(this, new Array());
        _CborReader_isTagContext.set(this, false);
        _CborReader_currentFrame.set(this, void 0);
        _CborReader_cachedState.set(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Undefined);
        __classPrivateFieldSet(this, _CborReader_data, new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data, 'hex')), "f");
        __classPrivateFieldSet(this, _CborReader_currentFrame, {
            currentKeyOffset: null,
            frameOffset: 0,
            itemsRead: 0,
            type: null
        }, "f");
    }
    peekState() {
        if (__classPrivateFieldGet(this, _CborReader_cachedState, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Undefined) __classPrivateFieldSet(this, _CborReader_cachedState, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekStateCore).call(this), "f");
        return __classPrivateFieldGet(this, _CborReader_cachedState, "f");
    }
    getBytesRemaining() {
        return __classPrivateFieldGet(this, _CborReader_data, "f").length - __classPrivateFieldGet(this, _CborReader_offset, "f");
    }
    skipValue() {
        this.readEncodedValue();
    }
    readEncodedValue() {
        const initialOffset = __classPrivateFieldGet(this, _CborReader_offset, "f");
        let depth = 0;
        do {
            depth = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_skipNextNode).call(this, depth);
        }while (depth > 0)
        return __classPrivateFieldGet(this, _CborReader_data, "f").slice(initialOffset, __classPrivateFieldGet(this, _CborReader_offset, "f"));
    }
    readStartArray() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array);
            return null;
        }
        const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        const { length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array, length);
        return length;
    }
    readEndArray() {
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength === undefined) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_validateNextByteIsBreakByte).call(this);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        } else {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        }
    }
    readInt() {
        const value = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekSignedInteger).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, value.bytesRead);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return value.signedInt;
    }
    readUInt() {
        const value = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekUnsignedInteger).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, value.bytesRead);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return value.unsignedInt;
    }
    readDouble() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Simple);
        let result;
        const remainingBytes = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        switch(header.getAdditionalInfo()){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional16BitData:
                {
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, 3);
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$Half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeHalf"])(remainingBytes.slice(1));
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 3);
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
                    return result;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional32BitData:
                {
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, 5);
                    result = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(remainingBytes).readFloatBE(1);
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 5);
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
                    return result;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional64BitData:
                {
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, 9);
                    result = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(remainingBytes).readDoubleBE(1);
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 9);
                    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
                    return result;
                }
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not a float encoding');
        }
    }
    readSimpleValue() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Simple);
        if ((header.getInitialByte() & __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].AdditionalInformationMask) < __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional8BitData) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            return header.getAdditionalInfo().valueOf();
        }
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional8BitData) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, 2);
            const value = __classPrivateFieldGet(this, _CborReader_data, "f")[__classPrivateFieldGet(this, _CborReader_offset, "f") + 1];
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 2);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            return value;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not a simple value encoding');
    }
    readCborNegativeIntegerRepresentation() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger);
        const value = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this));
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, value.bytesRead);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return value.unsignedInt;
    }
    readStartMap() {
        let length = null;
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map);
            length = null;
        } else {
            const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
            const result = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
            if (2 * result.length > buffer.length - result.bytesRead) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Definite length exceeds buffer size');
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, result.bytesRead);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map, 2 * result.length);
            length = result.length;
        }
        __classPrivateFieldGet(this, _CborReader_currentFrame, "f").currentKeyOffset = __classPrivateFieldGet(this, _CborReader_offset, "f");
        return length;
    }
    readEndMap() {
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength === undefined) {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_validateNextByteIsBreakByte).call(this);
            if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead % 2 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Key missing value');
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        } else {
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        }
    }
    readBoolean() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Simple);
        const val = header.getAdditionalInfo();
        if (val !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalTrue && val !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalFalse) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Not a boolean encoding');
        const result = val === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalTrue;
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return result;
    }
    readNull() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Simple);
        const val = header.getAdditionalInfo();
        if (val !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalNull) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Not a null encoding');
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
    }
    readStartIndefiniteLengthByteString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
        if (header.getAdditionalInfo() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not indefinite length string');
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
    }
    readEndIndefiniteLengthByteString() {
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_validateNextByteIsBreakByte).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
    }
    readByteString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            const { val, encodingLength } = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_readIndefiniteLengthByteStringConcatenated).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, encodingLength);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            return val;
        }
        const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        const { length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return buffer.slice(bytesRead, bytesRead + length);
    }
    readDefiniteLengthByteString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Expected definite length array and got indefinite length');
        }
        const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        const { length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return buffer.slice(bytesRead, bytesRead + length);
    }
    readStartIndefiniteLengthTextString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
        if (header.getAdditionalInfo() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not indefinite length string');
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_pushDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
    }
    readEndIndefiniteLengthTextString() {
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_validateNextByteIsBreakByte).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_popDataItem).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, 1);
    }
    readTextString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            const { val, encodingLength } = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_readIndefiniteLengthByteStringConcatenated).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, encodingLength);
            __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(val).toString('utf8');
        }
        const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        const { length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buffer.slice(bytesRead, bytesRead + length)).toString('utf8');
    }
    readDefiniteLengthTextString() {
        const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String);
        if (header.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Expected definite length string and got indefinite length');
        }
        const buffer = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
        const { length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, header, buffer);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_ensureReadCapacity).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead + length);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceDataItemCounters).call(this);
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buffer.slice(bytesRead, bytesRead + length)).toString('utf8');
    }
    readTag() {
        const { tag, bytesRead } = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekTagCore).call(this);
        __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_advanceBuffer).call(this, bytesRead);
        __classPrivateFieldSet(this, _CborReader_isTagContext, true, "f");
        return tag;
    }
    peekTag() {
        const { tag } = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekTagCore).call(this);
        return tag;
    }
    static ensureReadCapacityInArray(data, bytesToRead) {
        if (data.length < bytesToRead) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"](UNEXPECTED_END_OF_BUFFER_MSG);
        }
    }
    static mapSimpleValueDataToReaderState(value) {
        switch(value){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalNull:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalFalse:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].AdditionalTrue:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Boolean;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional16BitData:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].HalfPrecisionFloat;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional32BitData:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].SinglePrecisionFloat;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional64BitData:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].DoublePrecisionFloat;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].SimpleValue;
        }
    }
}
_a = CborReader, _CborReader_data = new WeakMap(), _CborReader_offset = new WeakMap(), _CborReader_nestedItems = new WeakMap(), _CborReader_isTagContext = new WeakMap(), _CborReader_currentFrame = new WeakMap(), _CborReader_cachedState = new WeakMap(), _CborReader_instances = new WeakSet(), _CborReader_peekInitialByte = function _CborReader_peekInitialByte(expectedType) {
    if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength !== undefined && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength - __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('No more data items to read');
    if (__classPrivateFieldGet(this, _CborReader_offset, "f") === __classPrivateFieldGet(this, _CborReader_data, "f").length) {
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type === null && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength === undefined && __classPrivateFieldGet(this, _CborReader_offset, "f") > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('End of root-level. No more data items to read');
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"](UNEXPECTED_END_OF_BUFFER_MSG);
    }
    const nextByte = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].from(__classPrivateFieldGet(this, _CborReader_data, "f")[__classPrivateFieldGet(this, _CborReader_offset, "f")]);
    switch(__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String:
            if (nextByte.getInitialByte() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte || nextByte.getMajorType() === __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type && nextByte.getAdditionalInfo() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength) {
                break;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"](`Indefinite length string contains invalid data item, ${nextByte.getMajorType()}`);
    }
    if (expectedType && expectedType !== nextByte.getMajorType()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Major type mismatch, expected type ${expectedType} but got ${nextByte.getMajorType()}`);
    return nextByte;
}, _CborReader_peekNextInitialByte = function _CborReader_peekNextInitialByte(buffer, expectedType) {
    CborReader.ensureReadCapacityInArray(buffer, 1);
    const header = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].from(buffer[0]);
    if (header.getInitialByte() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte && header.getMajorType() !== expectedType) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Indefinite length string contains invalid data item');
    return header;
}, _CborReader_validateNextByteIsBreakByte = function _CborReader_validateNextByteIsBreakByte() {
    const result = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this);
    if (result.getInitialByte() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not at end of indefinite length data item');
}, _CborReader_pushDataItem = function _CborReader_pushDataItem(majorType, definiteLength) {
    const frame = {
        currentKeyOffset: __classPrivateFieldGet(this, _CborReader_currentFrame, "f").currentKeyOffset,
        definiteLength: __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength,
        frameOffset: __classPrivateFieldGet(this, _CborReader_currentFrame, "f").frameOffset,
        itemsRead: __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead,
        type: __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type
    };
    __classPrivateFieldGet(this, _CborReader_nestedItems, "f").push(frame);
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type = majorType;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength = definiteLength;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead = 0;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").frameOffset = __classPrivateFieldGet(this, _CborReader_offset, "f");
    __classPrivateFieldSet(this, _CborReader_isTagContext, false, "f");
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").currentKeyOffset = null;
}, _CborReader_popDataItem = function _CborReader_popDataItem(expectedType) {
    if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type === null || __classPrivateFieldGet(this, _CborReader_nestedItems, "f").length <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Is at root context');
    if (expectedType !== __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Pop major type mismatch, expected ${expectedType} but got ${__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type}`);
    if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength !== undefined && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength - __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Not at end of definite length data item');
    if (__classPrivateFieldGet(this, _CborReader_isTagContext, "f")) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Tag not followed by value');
    const frame = __classPrivateFieldGet(this, _CborReader_nestedItems, "f").pop();
    __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_restoreStackFrame).call(this, frame);
}, _CborReader_restoreStackFrame = function _CborReader_restoreStackFrame(frame) {
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type = frame.type;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").frameOffset = frame.frameOffset;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength = frame.definiteLength;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead = frame.itemsRead;
    __classPrivateFieldGet(this, _CborReader_currentFrame, "f").currentKeyOffset = frame.currentKeyOffset;
    __classPrivateFieldSet(this, _CborReader_cachedState, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Undefined, "f");
}, _CborReader_getRemainingBytes = function _CborReader_getRemainingBytes() {
    return __classPrivateFieldGet(this, _CborReader_data, "f").slice(__classPrivateFieldGet(this, _CborReader_offset, "f"));
}, _CborReader_advanceDataItemCounters = function _CborReader_advanceDataItemCounters() {
    ++__classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead;
    __classPrivateFieldSet(this, _CborReader_isTagContext, false, "f");
}, _CborReader_advanceBuffer = function _CborReader_advanceBuffer(length) {
    if (__classPrivateFieldGet(this, _CborReader_offset, "f") + length > __classPrivateFieldGet(this, _CborReader_data, "f").length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Buffer offset out of bounds');
    __classPrivateFieldSet(this, _CborReader_offset, __classPrivateFieldGet(this, _CborReader_offset, "f") + length, "f");
    __classPrivateFieldSet(this, _CborReader_cachedState, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Undefined, "f");
}, _CborReader_ensureReadCapacity = function _CborReader_ensureReadCapacity(bytesToRead) {
    if (__classPrivateFieldGet(this, _CborReader_data, "f").length - __classPrivateFieldGet(this, _CborReader_offset, "f") < bytesToRead) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"](UNEXPECTED_END_OF_BUFFER_MSG);
    }
}, _CborReader_peekStateCore = function _CborReader_peekStateCore() {
    if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength !== undefined && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength - __classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead === 0) {
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type === null) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Finished;
        switch(__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map:
                return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Invalid CBOR major type pushed to stack.');
        }
    }
    if (__classPrivateFieldGet(this, _CborReader_offset, "f") === __classPrivateFieldGet(this, _CborReader_data, "f").length) {
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type === null && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Finished;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](UNEXPECTED_END_OF_BUFFER_MSG);
    }
    const initialByte = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].from(__classPrivateFieldGet(this, _CborReader_data, "f")[__classPrivateFieldGet(this, _CborReader_offset, "f")]);
    if (initialByte.getInitialByte() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte) {
        if (__classPrivateFieldGet(this, _CborReader_isTagContext, "f")) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Tag not followed by value');
        }
        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength === undefined) {
            switch(__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type){
                case null:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Unexpected break byte');
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndIndefiniteLengthByteString;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndIndefiniteLengthTextString;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray;
                case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map:
                    {
                        if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").itemsRead % 2 === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap;
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Key missing value');
                    }
                default:
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"]('Invalid CBOR major type pushed to stack.');
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Unexpected break byte');
        }
    }
    if (__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type !== null && __classPrivateFieldGet(this, _CborReader_currentFrame, "f").definiteLength !== null) {
        switch(__classPrivateFieldGet(this, _CborReader_currentFrame, "f").type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString:
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String:
                if (initialByte.getMajorType() !== __classPrivateFieldGet(this, _CborReader_currentFrame, "f").type) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Indefinite length string contains invalid data item');
                }
                break;
        }
    }
    switch(initialByte.getMajorType()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger:
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].UnsignedInteger;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger:
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].NegativeInteger;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString:
            return initialByte.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthByteString : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].ByteString;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String:
            return initialByte.getAdditionalInfo() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].IndefiniteLength ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthTextString : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].TextString;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array:
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartArray;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map:
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Tag:
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Tag;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Simple:
            return CborReader.mapSimpleValueDataToReaderState(initialByte.getAdditionalInfo());
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Invalid CBOR major type.');
    }
}, _CborReader_peekDefiniteLength = function _CborReader_peekDefiniteLength(header, data) {
    const { unsignedInt: length, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, data);
    return {
        bytesRead,
        length: Number(length)
    };
}, _CborReader_peekUnsignedInteger = function _CborReader_peekUnsignedInteger() {
    const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this);
    switch(header.getMajorType()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger:
            {
                return __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this));
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger:
            {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Integer overflow');
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Reader type mismatch, expected ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger} but got ${header.getMajorType()}`);
    }
}, _CborReader_peekSignedInteger = function _CborReader_peekSignedInteger() {
    const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this);
    switch(header.getMajorType()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger:
            {
                const { unsignedInt: signedInt, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this));
                return {
                    bytesRead,
                    signedInt: BigInt(signedInt)
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger:
            {
                const { unsignedInt, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this));
                return {
                    bytesRead,
                    signedInt: BigInt(-1) - unsignedInt
                };
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Reader type mismatch, expected ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger} or ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger} but got ${header.getMajorType()}`);
    }
}, _CborReader_readIndefiniteLengthByteStringConcatenated = function _CborReader_readIndefiniteLengthByteStringConcatenated(type) {
    const data = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this);
    let concat = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([]);
    let encodingLength = 0;
    let i = 1;
    let nextInitialByte = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekNextInitialByte).call(CborReader, data.slice(i), type);
    while(nextInitialByte.getInitialByte() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte){
        const { length: chunkLength, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekDefiniteLength).call(CborReader, nextInitialByte, data.slice(i));
        const payloadSize = bytesRead + Number(chunkLength);
        concat = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            concat,
            data.slice(i + (payloadSize - chunkLength), i + payloadSize)
        ]);
        i += payloadSize;
        nextInitialByte = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_peekNextInitialByte).call(CborReader, data.slice(i), type);
    }
    encodingLength = i + 1;
    return {
        encodingLength,
        val: new Uint8Array(concat)
    };
}, _CborReader_peekTagCore = function _CborReader_peekTagCore() {
    const header = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekInitialByte).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Tag);
    const { unsignedInt: result, bytesRead } = __classPrivateFieldGet(CborReader, _a, "m", _CborReader_decodeUnsignedInteger).call(CborReader, header, __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_getRemainingBytes).call(this));
    return {
        bytesRead,
        tag: Number(result)
    };
}, _CborReader_decodeUnsignedInteger = function _CborReader_decodeUnsignedInteger(header, data) {
    if ((header.getInitialByte() & __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].AdditionalInformationMask) < __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional8BitData) return {
        bytesRead: 1,
        unsignedInt: BigInt(header.getAdditionalInfo())
    };
    switch(header.getAdditionalInfo()){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional8BitData:
            {
                CborReader.ensureReadCapacityInArray(data, 2);
                return {
                    bytesRead: 2,
                    unsignedInt: BigInt(data[1])
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional16BitData:
            {
                CborReader.ensureReadCapacityInArray(data, 3);
                const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data.slice(1));
                const val = buffer.readUInt16BE();
                return {
                    bytesRead: 3,
                    unsignedInt: BigInt(val)
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional32BitData:
            {
                CborReader.ensureReadCapacityInArray(data, 5);
                const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data.slice(1));
                const val = buffer.readUInt32BE();
                return {
                    bytesRead: 5,
                    unsignedInt: BigInt(val)
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"].Additional64BitData:
            {
                CborReader.ensureReadCapacityInArray(data, 9);
                const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data.slice(1, 9));
                let result = BigInt(0);
                for (const element of buffer){
                    result = (result << BigInt(8)) + BigInt(element);
                }
                return {
                    bytesRead: 9,
                    unsignedInt: result
                };
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"]('Invalid integer encoding');
    }
}, _CborReader_skipNextNode = function _CborReader_skipNextNode(initialDepth) {
    let state;
    let depth = initialDepth;
    while((state = __classPrivateFieldGet(this, _CborReader_instances, "m", _CborReader_peekStateCore).call(this)) === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Tag)this.readTag();
    switch(state){
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].UnsignedInteger:
            this.readUInt();
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].NegativeInteger:
            this.readCborNegativeIntegerRepresentation();
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].ByteString:
            this.readByteString();
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].TextString:
            this.readTextString();
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthByteString:
            this.readStartIndefiniteLengthByteString();
            depth++;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndIndefiniteLengthByteString:
            this.readEndIndefiniteLengthByteString();
            depth--;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartIndefiniteLengthTextString:
            this.readStartIndefiniteLengthTextString();
            depth++;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndIndefiniteLengthTextString:
            if (depth === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Skip invalid state: ${state}`);
            this.readEndIndefiniteLengthTextString();
            depth--;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartArray:
            this.readStartArray();
            depth++;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray:
            if (depth === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Skip invalid state: ${state}`);
            this.readEndArray();
            depth--;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap:
            this.readStartMap();
            depth++;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap:
            if (depth === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Skip invalid state: ${state}`);
            this.readEndMap();
            depth--;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].HalfPrecisionFloat:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].SinglePrecisionFloat:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].DoublePrecisionFloat:
            this.readDouble();
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Boolean:
        case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].SimpleValue:
            this.readSimpleValue();
            break;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"](`Skip invalid state: ${state}`);
    }
    return depth;
}; //# sourceMappingURL=CborReader.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborTag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborTag",
    ()=>CborTag
]);
var CborTag;
(function(CborTag) {
    CborTag[CborTag["DateTimeString"] = 0] = "DateTimeString";
    CborTag[CborTag["UnixTimeSeconds"] = 1] = "UnixTimeSeconds";
    CborTag[CborTag["UnsignedBigNum"] = 2] = "UnsignedBigNum";
    CborTag[CborTag["NegativeBigNum"] = 3] = "NegativeBigNum";
    CborTag[CborTag["DecimalFraction"] = 4] = "DecimalFraction";
    CborTag[CborTag["BigFloat"] = 5] = "BigFloat";
    CborTag[CborTag["Base64UrlLaterEncoding"] = 21] = "Base64UrlLaterEncoding";
    CborTag[CborTag["Base64StringLaterEncoding"] = 22] = "Base64StringLaterEncoding";
    CborTag[CborTag["Base16StringLaterEncoding"] = 23] = "Base16StringLaterEncoding";
    CborTag[CborTag["EncodedCborDataItem"] = 24] = "EncodedCborDataItem";
    CborTag[CborTag["RationalNumber"] = 30] = "RationalNumber";
    CborTag[CborTag["Uri"] = 32] = "Uri";
    CborTag[CborTag["Base64Url"] = 33] = "Base64Url";
    CborTag[CborTag["Base64"] = 34] = "Base64";
    CborTag[CborTag["Regex"] = 35] = "Regex";
    CborTag[CborTag["MimeMessage"] = 36] = "MimeMessage";
    CborTag[CborTag["Set"] = 258] = "Set";
    CborTag[CborTag["SelfDescribeCbor"] = 55799] = "SelfDescribeCbor";
})(CborTag || (CborTag = {})); //# sourceMappingURL=CborTag.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborWriter",
    ()=>CborWriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborInitialByte.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborMajorType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$Half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/Half.js [app-client] (ecmascript)");
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
var _CborWriter_instances, _CborWriter_buffer, _CborWriter_writeTypeValue, _CborWriter_pushUInt8, _CborWriter_pushUInt16, _CborWriter_pushUInt32;
;
;
;
;
const MINUS_ONE = BigInt(-1);
const SHIFT32 = BigInt('0x100000000');
const ONE = 24;
const TWO = 25;
const FOUR = 26;
const EIGHT = 27;
const FALSE = 0xf4;
const TRUE = 0xf5;
const NULL = 0xf6;
const UNDEFINED = 0xf7;
const INDEFINITE_LENGTH_ARRAY = 0x9f;
const INDEFINITE_LENGTH_MAP = 0xbf;
const HALF = 7 << 5 | 25;
const FLOAT = 7 << 5 | 26;
const DOUBLE = 7 << 5 | 27;
const BUF_NAN = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('ffc00000', 'hex');
const BUF_INF_NEG = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('fff0000000000000', 'hex');
const BUF_INF_POS = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('7ff0000000000000', 'hex');
class CborWriter {
    constructor(){
        _CborWriter_instances.add(this);
        _CborWriter_buffer.set(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([]));
    }
    writeBigInteger(value) {
        let tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborTag"].UnsignedBigNum;
        if (value < 0) {
            value = -value + MINUS_ONE;
            tag = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborTag"].NegativeBigNum;
        }
        let str = value.toString(16);
        if (str.length % 2) {
            str = `0${str}`;
        }
        const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(str, 'hex');
        this.writeTag(tag);
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString, buffer.length);
        __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
            buffer
        ]), "f");
        return this;
    }
    writeBoolean(value) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, value ? TRUE : FALSE);
        return this;
    }
    writeByteString(value) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].ByteString, value.length);
        __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
            value
        ]), "f");
        return this;
    }
    writeTextString(value) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Utf8String, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value, 'utf8').length);
        __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value, 'utf8')
        ]), "f");
        return this;
    }
    writeEncodedValue(value) {
        __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
            __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
            value
        ]), "f");
        return this;
    }
    writeStartArray(length) {
        if (length !== undefined) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Array, length);
        } else {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, INDEFINITE_LENGTH_ARRAY);
        }
        return this;
    }
    writeEndArray() {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte);
        return this;
    }
    writeStartMap(length) {
        if (length !== undefined) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Map, length);
        } else {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, INDEFINITE_LENGTH_MAP);
        }
        return this;
    }
    writeEndMap() {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"].IndefiniteLengthBreakByte);
        return this;
    }
    writeInt(value) {
        if (value < 0) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].NegativeInteger, -(BigInt(value) + 1n));
        } else {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].UnsignedInteger, value);
        }
        return this;
    }
    writeFloat(value) {
        let val;
        if (value === Number.NEGATIVE_INFINITY) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, DOUBLE);
            this.writeEncodedValue(BUF_INF_NEG);
            return this;
        }
        if (value === Number.POSITIVE_INFINITY) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, DOUBLE);
            this.writeEncodedValue(BUF_INF_POS);
            return this;
        }
        if (Number.isNaN(value)) {
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, FLOAT);
            this.writeEncodedValue(BUF_NAN);
            return this;
        }
        try {
            val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$Half$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHalf"])(value);
            __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, HALF);
            this.writeEncodedValue(val);
        } catch  {
            const b4 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(4);
            b4.writeFloatBE(value, 0);
            if (b4.readFloatBE(0) === value) {
                __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, FLOAT);
                this.writeEncodedValue(b4.valueOf());
            } else {
                const b8 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(8);
                b8.writeFloatBE(value, 0);
                __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, DOUBLE);
                this.writeEncodedValue(b8.valueOf());
            }
        }
        return this;
    }
    writeNull() {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, NULL);
        return this;
    }
    writeUndefined() {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, UNDEFINED);
        return this;
    }
    writeTag(tag) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_writeTypeValue).call(this, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"].Tag, tag);
        return this;
    }
    encodeAsHex() {
        return __classPrivateFieldGet(this, _CborWriter_buffer, "f").toString('hex');
    }
    encode() {
        return new Uint8Array(__classPrivateFieldGet(this, _CborWriter_buffer, "f"));
    }
    reset() {
        __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([]), "f");
    }
}
_CborWriter_buffer = new WeakMap(), _CborWriter_instances = new WeakSet(), _CborWriter_writeTypeValue = function _CborWriter_writeTypeValue(majorType, value) {
    const m = majorType << 5;
    if (value < 24) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, m | Number(value));
    } else if (value < 256) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, m | ONE);
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, Number(value));
    } else if (value < 65536) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, m | TWO);
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt16).call(this, Number(value));
    } else if (value < 4294967296) {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, m | FOUR);
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt32).call(this, Number(value));
    } else {
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt8).call(this, m | EIGHT);
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt32).call(this, Number(BigInt(value) / SHIFT32));
        __classPrivateFieldGet(this, _CborWriter_instances, "m", _CborWriter_pushUInt32).call(this, Number(BigInt(value) % SHIFT32));
    }
}, _CborWriter_pushUInt8 = function _CborWriter_pushUInt8(value) {
    const b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(1);
    b.writeUInt8(value, 0);
    __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
        b
    ]), "f");
}, _CborWriter_pushUInt16 = function _CborWriter_pushUInt16(value) {
    const b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(2);
    b.writeUInt16BE(value, 0);
    __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
        b
    ]), "f");
}, _CborWriter_pushUInt32 = function _CborWriter_pushUInt32(value) {
    const b = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].allocUnsafe(4);
    b.writeUInt32BE(value, 0);
    __classPrivateFieldSet(this, _CborWriter_buffer, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat([
        __classPrivateFieldGet(this, _CborWriter_buffer, "f"),
        b
    ]), "f");
}; //# sourceMappingURL=CborWriter.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborSimpleValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborSimpleValue",
    ()=>CborSimpleValue
]);
var CborSimpleValue;
(function(CborSimpleValue) {
    CborSimpleValue[CborSimpleValue["False"] = 20] = "False";
    CborSimpleValue[CborSimpleValue["True"] = 21] = "True";
    CborSimpleValue[CborSimpleValue["Null"] = 22] = "Null";
    CborSimpleValue[CborSimpleValue["Undefined"] = 23] = "Undefined";
})(CborSimpleValue || (CborSimpleValue = {})); //# sourceMappingURL=CborSimpleValue.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CborAdditionalInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborAdditionalInfo"],
    "CborContentException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborContentException"],
    "CborInitialByte",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInitialByte"],
    "CborInvalidOperationException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborInvalidOperationException"],
    "CborMajorType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborMajorType"],
    "CborReader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"],
    "CborReaderState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"],
    "CborSimpleValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborSimpleValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSimpleValue"],
    "CborTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborTag"],
    "CborWriter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"],
    "LossOfPrecisionException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LossOfPrecisionException"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborAdditionalInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborAdditionalInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborInitialByte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborInitialByte.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborMajorType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborMajorType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborSimpleValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborSimpleValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborTag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborTag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/errors.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ecb53_%40cardano-sdk_core_dist_esm_Serialization_CBOR_ebf10ce5._.js.map