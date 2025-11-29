(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificateKind",
    ()=>CertificateKind
]);
var CertificateKind;
(function(CertificateKind) {
    CertificateKind[CertificateKind["StakeRegistration"] = 0] = "StakeRegistration";
    CertificateKind[CertificateKind["StakeDeregistration"] = 1] = "StakeDeregistration";
    CertificateKind[CertificateKind["StakeDelegation"] = 2] = "StakeDelegation";
    CertificateKind[CertificateKind["PoolRegistration"] = 3] = "PoolRegistration";
    CertificateKind[CertificateKind["PoolRetirement"] = 4] = "PoolRetirement";
    CertificateKind[CertificateKind["GenesisKeyDelegation"] = 5] = "GenesisKeyDelegation";
    CertificateKind[CertificateKind["MoveInstantaneousRewards"] = 6] = "MoveInstantaneousRewards";
    CertificateKind[CertificateKind["Registration"] = 7] = "Registration";
    CertificateKind[CertificateKind["Unregistration"] = 8] = "Unregistration";
    CertificateKind[CertificateKind["VoteDelegation"] = 9] = "VoteDelegation";
    CertificateKind[CertificateKind["StakeVoteDelegation"] = 10] = "StakeVoteDelegation";
    CertificateKind[CertificateKind["StakeRegistrationDelegation"] = 11] = "StakeRegistrationDelegation";
    CertificateKind[CertificateKind["VoteRegistrationDelegation"] = 12] = "VoteRegistrationDelegation";
    CertificateKind[CertificateKind["StakeVoteRegistrationDelegation"] = 13] = "StakeVoteRegistrationDelegation";
    CertificateKind[CertificateKind["AuthCommitteeHot"] = 14] = "AuthCommitteeHot";
    CertificateKind[CertificateKind["ResignCommitteeCold"] = 15] = "ResignCommitteeCold";
    CertificateKind[CertificateKind["DrepRegistration"] = 16] = "DrepRegistration";
    CertificateKind[CertificateKind["DrepUnregistration"] = 17] = "DrepUnregistration";
    CertificateKind[CertificateKind["UpdateDrep"] = 18] = "UpdateDrep";
})(CertificateKind || (CertificateKind = {})); //# sourceMappingURL=CertificateKind.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/AuthCommitteeHot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthCommitteeHot",
    ()=>AuthCommitteeHot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _AuthCommitteeHot_committeeColdCred, _AuthCommitteeHot_committeeHotCred, _AuthCommitteeHot_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class AuthCommitteeHot {
    constructor(committeeColdCred, committeeHotCred){
        _AuthCommitteeHot_committeeColdCred.set(this, void 0);
        _AuthCommitteeHot_committeeHotCred.set(this, void 0);
        _AuthCommitteeHot_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _AuthCommitteeHot_committeeColdCred, committeeColdCred, "f");
        __classPrivateFieldSet(this, _AuthCommitteeHot_committeeHotCred, committeeHotCred, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _AuthCommitteeHot_originalBytes, "f")) return __classPrivateFieldGet(this, _AuthCommitteeHot_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _AuthCommitteeHot_committeeColdCred, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _AuthCommitteeHot_committeeColdCred, "f").hash, 'hex'));
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _AuthCommitteeHot_committeeHotCred, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _AuthCommitteeHot_committeeHotCred, "f").hash, 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot}, but got ${kind}`);
        const coldCredLength = reader.readStartArray();
        if (coldCredLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const coldType = Number(reader.readInt());
        const coldHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const hotCredLength = reader.readStartArray();
        if (hotCredLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const hotType = Number(reader.readInt());
        const hotHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        reader.readEndArray();
        const cert = new AuthCommitteeHot({
            hash: coldHash,
            type: coldType
        }, {
            hash: hotHash,
            type: hotType
        });
        __classPrivateFieldSet(cert, _AuthCommitteeHot_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].AuthorizeCommitteeHot,
            coldCredential: __classPrivateFieldGet(this, _AuthCommitteeHot_committeeColdCred, "f"),
            hotCredential: __classPrivateFieldGet(this, _AuthCommitteeHot_committeeHotCred, "f")
        };
    }
    static fromCore(cert) {
        return new AuthCommitteeHot(cert.coldCredential, cert.hotCredential);
    }
    coldCredential() {
        return __classPrivateFieldGet(this, _AuthCommitteeHot_committeeColdCred, "f");
    }
    hotCredential() {
        return __classPrivateFieldGet(this, _AuthCommitteeHot_committeeHotCred, "f");
    }
}
_AuthCommitteeHot_committeeColdCred = new WeakMap(), _AuthCommitteeHot_committeeHotCred = new WeakMap(), _AuthCommitteeHot_originalBytes = new WeakMap(); //# sourceMappingURL=AuthCommitteeHot.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/GenesisKeyDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenesisKeyDelegation",
    ()=>GenesisKeyDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _GenesisKeyDelegation_genesisHash, _GenesisKeyDelegation_genesisDelegateHash, _GenesisKeyDelegation_vrfKeyHash, _GenesisKeyDelegation_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 4;
class GenesisKeyDelegation {
    constructor(genesisHash, genesisDelegateHash, vrfKeyHash){
        _GenesisKeyDelegation_genesisHash.set(this, void 0);
        _GenesisKeyDelegation_genesisDelegateHash.set(this, void 0);
        _GenesisKeyDelegation_vrfKeyHash.set(this, void 0);
        _GenesisKeyDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _GenesisKeyDelegation_genesisHash, genesisHash, "f");
        __classPrivateFieldSet(this, _GenesisKeyDelegation_genesisDelegateHash, genesisDelegateHash, "f");
        __classPrivateFieldSet(this, _GenesisKeyDelegation_vrfKeyHash, vrfKeyHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _GenesisKeyDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _GenesisKeyDelegation_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _GenesisKeyDelegation_genesisHash, "f"), 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _GenesisKeyDelegation_genesisDelegateHash, "f"), 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _GenesisKeyDelegation_vrfKeyHash, "f"), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation}, but got ${kind}`);
        const genesisHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const genesisDelegateHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const vrfKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash32ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const cert = new GenesisKeyDelegation(genesisHash, genesisDelegateHash, vrfKeyHash);
        __classPrivateFieldSet(cert, _GenesisKeyDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].GenesisKeyDelegation,
            genesisDelegateHash: __classPrivateFieldGet(this, _GenesisKeyDelegation_genesisDelegateHash, "f"),
            genesisHash: __classPrivateFieldGet(this, _GenesisKeyDelegation_genesisHash, "f"),
            vrfKeyHash: __classPrivateFieldGet(this, _GenesisKeyDelegation_vrfKeyHash, "f")
        };
    }
    static fromCore(cert) {
        return new GenesisKeyDelegation(cert.genesisHash, cert.genesisDelegateHash, cert.vrfKeyHash);
    }
    genesisHash() {
        return __classPrivateFieldGet(this, _GenesisKeyDelegation_genesisHash, "f");
    }
    setGenesisHash(genesisHash) {
        __classPrivateFieldSet(this, _GenesisKeyDelegation_genesisHash, genesisHash, "f");
        __classPrivateFieldSet(this, _GenesisKeyDelegation_originalBytes, undefined, "f");
    }
    genesisDelegateHash() {
        return __classPrivateFieldGet(this, _GenesisKeyDelegation_genesisDelegateHash, "f");
    }
    setGenesisDelegateHash(genesisDelegateHash) {
        __classPrivateFieldSet(this, _GenesisKeyDelegation_genesisDelegateHash, genesisDelegateHash, "f");
        __classPrivateFieldSet(this, _GenesisKeyDelegation_originalBytes, undefined, "f");
    }
    vrfKeyHash() {
        return __classPrivateFieldGet(this, _GenesisKeyDelegation_vrfKeyHash, "f");
    }
    setVrfKeyHash(vrfKeyHash) {
        __classPrivateFieldSet(this, _GenesisKeyDelegation_vrfKeyHash, vrfKeyHash, "f");
        __classPrivateFieldSet(this, _GenesisKeyDelegation_originalBytes, undefined, "f");
    }
}
_GenesisKeyDelegation_genesisHash = new WeakMap(), _GenesisKeyDelegation_genesisDelegateHash = new WeakMap(), _GenesisKeyDelegation_vrfKeyHash = new WeakMap(), _GenesisKeyDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=GenesisKeyDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToOtherPot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveInstantaneousRewardToOtherPot",
    ()=>MoveInstantaneousRewardToOtherPot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
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
var _MoveInstantaneousRewardToOtherPot_pot, _MoveInstantaneousRewardToOtherPot_amount, _MoveInstantaneousRewardToOtherPot_originalBytes;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class MoveInstantaneousRewardToOtherPot {
    constructor(pot, amount){
        _MoveInstantaneousRewardToOtherPot_pot.set(this, void 0);
        _MoveInstantaneousRewardToOtherPot_amount.set(this, void 0);
        _MoveInstantaneousRewardToOtherPot_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_pot, pot, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_amount, amount, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_originalBytes, "f")) return __classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_pot, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Reserves ? 0 : 1);
        writer.writeInt(__classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_amount, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of two elements, but got an array of ${length} elements`);
        const pot = Number(reader.readInt());
        const amount = reader.readInt();
        if (pot < 0 || pot > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected a pot value between 0 and 1, but got ${pot}`);
        const cert = new MoveInstantaneousRewardToOtherPot(pot === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Reserves : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Treasury, amount);
        __classPrivateFieldSet(cert, _MoveInstantaneousRewardToOtherPot_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].MIR,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot,
            pot: __classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_pot, "f"),
            quantity: __classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_amount, "f")
        };
    }
    static fromCore(cert) {
        if (cert.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cert', `Expected a MIR certificate kind 'ToOtherPot', but got ${cert.kind}`);
        if (cert.quantity === undefined) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cert', 'Amount field of the given MIR certificate is undefined');
        return new MoveInstantaneousRewardToOtherPot(cert.pot, cert.quantity);
    }
    pot() {
        return __classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_pot, "f");
    }
    setPot(pot) {
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_pot, pot, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_originalBytes, undefined, "f");
    }
    getAmount() {
        return __classPrivateFieldGet(this, _MoveInstantaneousRewardToOtherPot_amount, "f");
    }
    setAmount(amount) {
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_amount, amount, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToOtherPot_originalBytes, undefined, "f");
    }
}
_MoveInstantaneousRewardToOtherPot_pot = new WeakMap(), _MoveInstantaneousRewardToOtherPot_amount = new WeakMap(), _MoveInstantaneousRewardToOtherPot_originalBytes = new WeakMap(); //# sourceMappingURL=MoveInstantaneousRewardToOtherPot.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToStakeCreds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveInstantaneousRewardToStakeCreds",
    ()=>MoveInstantaneousRewardToStakeCreds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _MoveInstantaneousRewardToStakeCreds_pot, _MoveInstantaneousRewardToStakeCreds_credentials, _MoveInstantaneousRewardToStakeCreds_originalBytes;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class MoveInstantaneousRewardToStakeCreds {
    constructor(pot, credentials){
        _MoveInstantaneousRewardToStakeCreds_pot.set(this, void 0);
        _MoveInstantaneousRewardToStakeCreds_credentials.set(this, void 0);
        _MoveInstantaneousRewardToStakeCreds_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_pot, pot, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_credentials, credentials, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_originalBytes, "f")) return __classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_pot, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Reserves ? 0 : 1);
        const sortedCanonically = new Map([
            ...__classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_credentials, "f")
        ].sort((a, b)=>a > b ? 1 : -1));
        writer.writeStartMap(sortedCanonically.size);
        for (const [key, value] of sortedCanonically){
            writer.writeStartArray(EMBEDDED_GROUP_SIZE);
            writer.writeInt(key.type);
            writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(key.hash, 'hex'));
            writer.writeInt(value);
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of two elements, but got an array of ${length} elements`);
        const pot = Number(reader.readInt());
        if (pot < 0 || pot > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected a pot value between 0 and 1, but got an array of ${pot} elements`);
        reader.readStartMap();
        const amounts = new Map();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndMap){
            reader.readStartArray();
            const credentialType = Number(reader.readInt());
            if (credentialType < 0 || credentialType > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected a credential type value between 0 and 1, but got ${credentialType}`);
            const credHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
            reader.readEndArray();
            const amount = reader.readInt();
            amounts.set({
                hash: credHash,
                type: credentialType
            }, amount);
        }
        reader.readEndMap();
        const cert = new MoveInstantaneousRewardToStakeCreds(pot === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Reserves : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificatePot"].Treasury, amounts);
        __classPrivateFieldSet(cert, _MoveInstantaneousRewardToStakeCreds_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        if (__classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_credentials, "f").size === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('The credential map is empty.');
        const [[stakeCredential, quantity]] = __classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_credentials, "f");
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].MIR,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds,
            pot: __classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_pot, "f"),
            quantity,
            stakeCredential
        };
    }
    static fromCore(cert) {
        if (cert.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cert', `Expected a MIR certificate kind 'ToStakeCreds', but got ${cert.kind}`);
        if (cert.stakeCredential === undefined) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cert', 'stakeCredential field of the given MIR certificate is undefined');
        return new MoveInstantaneousRewardToStakeCreds(cert.pot, new Map([
            [
                cert.stakeCredential,
                cert.quantity
            ]
        ]));
    }
    pot() {
        return __classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_pot, "f");
    }
    setPot(pot) {
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_pot, pot, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_originalBytes, undefined, "f");
    }
    getStakeCreds() {
        return __classPrivateFieldGet(this, _MoveInstantaneousRewardToStakeCreds_credentials, "f");
    }
    setStakeCreds(credentials) {
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_credentials, credentials, "f");
        __classPrivateFieldSet(this, _MoveInstantaneousRewardToStakeCreds_originalBytes, undefined, "f");
    }
}
_MoveInstantaneousRewardToStakeCreds_pot = new WeakMap(), _MoveInstantaneousRewardToStakeCreds_credentials = new WeakMap(), _MoveInstantaneousRewardToStakeCreds_originalBytes = new WeakMap(); //# sourceMappingURL=MoveInstantaneousRewardToStakeCreds.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousReward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveInstantaneousReward",
    ()=>MoveInstantaneousReward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToOtherPot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToOtherPot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToStakeCreds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToStakeCreds.js [app-client] (ecmascript)");
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
var _MoveInstantaneousReward_toOtherPot, _MoveInstantaneousReward_toStakeCreds, _MoveInstantaneousReward_kind, _MoveInstantaneousReward_originalBytes;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class MoveInstantaneousReward {
    constructor(){
        _MoveInstantaneousReward_toOtherPot.set(this, void 0);
        _MoveInstantaneousReward_toStakeCreds.set(this, void 0);
        _MoveInstantaneousReward_kind.set(this, void 0);
        _MoveInstantaneousReward_originalBytes.set(this, undefined);
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _MoveInstantaneousReward_originalBytes, "f")) return __classPrivateFieldGet(this, _MoveInstantaneousReward_originalBytes, "f");
        let cbor;
        switch(__classPrivateFieldGet(this, _MoveInstantaneousReward_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot:
                cbor = __classPrivateFieldGet(this, _MoveInstantaneousReward_toOtherPot, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds:
                cbor = __classPrivateFieldGet(this, _MoveInstantaneousReward_toStakeCreds, "f").toCbor();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _MoveInstantaneousReward_kind, "f")}`);
        }
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards);
        writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(cbor, 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        let elementsCount = reader.readStartArray();
        if (elementsCount !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected elements size ${EMBEDDED_GROUP_SIZE}, but got ${elementsCount}`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards}, but got ${kind}`);
        const embeddedCbor = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue());
        const embeddedCborReader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](embeddedCbor);
        elementsCount = embeddedCborReader.readStartArray();
        if (elementsCount !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected elements size ${EMBEDDED_GROUP_SIZE}, but got ${elementsCount}`);
        const cert = new MoveInstantaneousReward();
        embeddedCborReader.readInt();
        if (embeddedCborReader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].UnsignedInteger) {
            __classPrivateFieldSet(cert, _MoveInstantaneousReward_toOtherPot, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToOtherPot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToOtherPot"].fromCbor(embeddedCbor), "f");
            __classPrivateFieldSet(cert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot, "f");
        } else if (embeddedCborReader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartArray || embeddedCborReader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].StartMap) {
            __classPrivateFieldSet(cert, _MoveInstantaneousReward_toStakeCreds, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToStakeCreds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToStakeCreds"].fromCbor(embeddedCbor), "f");
            __classPrivateFieldSet(cert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds, "f");
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', 'Invalid CBOR string');
        }
        __classPrivateFieldSet(cert, _MoveInstantaneousReward_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        let core;
        switch(__classPrivateFieldGet(this, _MoveInstantaneousReward_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot:
                core = __classPrivateFieldGet(this, _MoveInstantaneousReward_toOtherPot, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds:
                core = __classPrivateFieldGet(this, _MoveInstantaneousReward_toStakeCreds, "f").toCore();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _MoveInstantaneousReward_kind, "f")}`);
        }
        return core;
    }
    static fromCore(cert) {
        const mirCert = new MoveInstantaneousReward();
        switch(cert.kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot:
                __classPrivateFieldSet(mirCert, _MoveInstantaneousReward_toOtherPot, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToOtherPot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToOtherPot"].fromCore(cert), "f");
                __classPrivateFieldSet(mirCert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot, "f");
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds:
                __classPrivateFieldSet(mirCert, _MoveInstantaneousReward_toStakeCreds, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToStakeCreds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToStakeCreds"].fromCore(cert), "f");
                __classPrivateFieldSet(mirCert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds, "f");
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${cert.kind}`);
        }
        return mirCert;
    }
    static newToOtherPot(mirCert) {
        const cert = new MoveInstantaneousReward();
        __classPrivateFieldSet(cert, _MoveInstantaneousReward_toOtherPot, mirCert, "f");
        __classPrivateFieldSet(cert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToOtherPot, "f");
        return cert;
    }
    static newToStakeCreds(mirCert) {
        const cert = new MoveInstantaneousReward();
        __classPrivateFieldSet(cert, _MoveInstantaneousReward_toStakeCreds, mirCert, "f");
        __classPrivateFieldSet(cert, _MoveInstantaneousReward_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirCertificateKind"].ToStakeCreds, "f");
        return cert;
    }
    kind() {
        return __classPrivateFieldGet(this, _MoveInstantaneousReward_kind, "f");
    }
    asToOtherPot() {
        return __classPrivateFieldGet(this, _MoveInstantaneousReward_toOtherPot, "f");
    }
    asToStakeCreds() {
        return __classPrivateFieldGet(this, _MoveInstantaneousReward_toStakeCreds, "f");
    }
}
_MoveInstantaneousReward_toOtherPot = new WeakMap(), _MoveInstantaneousReward_toStakeCreds = new WeakMap(), _MoveInstantaneousReward_kind = new WeakMap(), _MoveInstantaneousReward_originalBytes = new WeakMap(); //# sourceMappingURL=MoveInstantaneousReward.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolMetadata.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoolMetadata",
    ()=>PoolMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _PoolMetadata_url, _PoolMetadata_hash, _PoolMetadata_originalBytes;
;
;
;
const MAX_URL_SIZE_STR_LENGTH = 64;
const EMBEDDED_GROUP_SIZE = 2;
class PoolMetadata {
    constructor(url, poolMetadataHash){
        _PoolMetadata_url.set(this, void 0);
        _PoolMetadata_hash.set(this, void 0);
        _PoolMetadata_originalBytes.set(this, undefined);
        if (url.length > MAX_URL_SIZE_STR_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('url', `url must be less or equal to 64 characters long, actual size ${url.length}`);
        __classPrivateFieldSet(this, _PoolMetadata_url, url, "f");
        __classPrivateFieldSet(this, _PoolMetadata_hash, poolMetadataHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _PoolMetadata_originalBytes, "f")) return __classPrivateFieldGet(this, _PoolMetadata_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeTextString(__classPrivateFieldGet(this, _PoolMetadata_url, "f"));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolMetadata_hash, "f"), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const url = reader.readTextString();
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash32ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const metadata = new PoolMetadata(url, hash);
        __classPrivateFieldSet(metadata, _PoolMetadata_originalBytes, cbor, "f");
        return metadata;
    }
    toCore() {
        return {
            hash: __classPrivateFieldGet(this, _PoolMetadata_hash, "f"),
            url: __classPrivateFieldGet(this, _PoolMetadata_url, "f")
        };
    }
    static fromCore(metadata) {
        return new PoolMetadata(metadata.url, metadata.hash);
    }
    url() {
        return __classPrivateFieldGet(this, _PoolMetadata_url, "f");
    }
    setUrl(url) {
        __classPrivateFieldSet(this, _PoolMetadata_url, url, "f");
        __classPrivateFieldSet(this, _PoolMetadata_originalBytes, undefined, "f");
    }
    poolMetadataHash() {
        return __classPrivateFieldGet(this, _PoolMetadata_hash, "f");
    }
    setPoolMetadataHash(poolMetadataHash) {
        __classPrivateFieldSet(this, _PoolMetadata_hash, poolMetadataHash, "f");
        __classPrivateFieldSet(this, _PoolMetadata_originalBytes, undefined, "f");
    }
}
_PoolMetadata_url = new WeakMap(), _PoolMetadata_hash = new WeakMap(), _PoolMetadata_originalBytes = new WeakMap(); //# sourceMappingURL=PoolMetadata.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/MultiHostName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiHostName",
    ()=>MultiHostName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
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
var _MultiHostName_dnsName, _MultiHostName_originalBytes;
;
;
const EMBEDDED_GROUP_SIZE = 2;
const MULTI_HOST_NAME_RELAY_ID = 2;
const MAX_DNS_SIZE_STR_LENGTH = 64;
class MultiHostName {
    constructor(dnsName){
        _MultiHostName_dnsName.set(this, void 0);
        _MultiHostName_originalBytes.set(this, undefined);
        if (dnsName.length > MAX_DNS_SIZE_STR_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('dnsName', `dnsName must be less or equal to 64 characters long, actual size ${dnsName.length}`);
        __classPrivateFieldSet(this, _MultiHostName_dnsName, dnsName, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _MultiHostName_originalBytes, "f")) return __classPrivateFieldGet(this, _MultiHostName_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(MULTI_HOST_NAME_RELAY_ID);
        writer.writeTextString(__classPrivateFieldGet(this, _MultiHostName_dnsName, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const id = Number(reader.readInt());
        if (id !== MULTI_HOST_NAME_RELAY_ID) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected MultiHostName id ${MULTI_HOST_NAME_RELAY_ID}, but got ${id}`);
        const dnsName = reader.readTextString();
        const relay = new MultiHostName(dnsName);
        __classPrivateFieldSet(relay, _MultiHostName_originalBytes, cbor, "f");
        return relay;
    }
    toCore() {
        return {
            __typename: 'RelayByNameMultihost',
            dnsName: __classPrivateFieldGet(this, _MultiHostName_dnsName, "f")
        };
    }
    static fromCore(relay) {
        return new MultiHostName(relay.dnsName);
    }
    dnsName() {
        return __classPrivateFieldGet(this, _MultiHostName_dnsName, "f");
    }
    setDnsName(dnsName) {
        if (dnsName.length > MAX_DNS_SIZE_STR_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('dnsName', `dnsName must be less or equal to 64 characters long, actual size ${dnsName.length}`);
        __classPrivateFieldSet(this, _MultiHostName_dnsName, dnsName, "f");
        __classPrivateFieldSet(this, _MultiHostName_originalBytes, undefined, "f");
    }
}
_MultiHostName_dnsName = new WeakMap(), _MultiHostName_originalBytes = new WeakMap(); //# sourceMappingURL=MultiHostName.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/ipUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "byteArrayToIPv6String",
    ()=>byteArrayToIPv6String,
    "byteArrayToIpV4String",
    ()=>byteArrayToIpV4String,
    "ipV4StringToByteArray",
    ()=>ipV4StringToByteArray,
    "ipV6StringToByteArray",
    ()=>ipV6StringToByteArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ip$2d$address$40$9$2e$0$2e$5$2f$node_modules$2f$ip$2d$address$2f$dist$2f$ip$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/ip-address@9.0.5/node_modules/ip-address/dist/ip-address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
;
;
const ipV4StringToByteArray = (address)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ip$2d$address$40$9$2e$0$2e$5$2f$node_modules$2f$ip$2d$address$2f$dist$2f$ip$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address4"].isValid(address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('address', `Invalid IP V4 string: ${address}`);
    return new Uint8Array(address.split('.').map((segment)=>Number.parseInt(segment)));
};
const byteArrayToIpV4String = (byteArray)=>{
    if (byteArray.length !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('byteArray', `Invalid IP V4 byte array, expected 4 bytes, but got ${byteArray.length}`);
    return [
        ...byteArray
    ].map((octect)=>octect.toString()).join('.');
};
const ipV6StringToByteArray = (address)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ip$2d$address$40$9$2e$0$2e$5$2f$node_modules$2f$ip$2d$address$2f$dist$2f$ip$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address6"].isValid(address)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('address', `Invalid IP V6 string: ${address}`);
    const addressV6 = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ip$2d$address$40$9$2e$0$2e$5$2f$node_modules$2f$ip$2d$address$2f$dist$2f$ip$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address6"](address).toUnsignedByteArray();
    const filler = Array.from({
        length: 16
    }).fill(0, 0, 16).slice(0, 16 - addressV6.length);
    return new Uint8Array([
        ...filler,
        ...addressV6
    ]);
};
const byteArrayToIPv6String = (byteArray)=>{
    const addressV6 = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$ip$2d$address$40$9$2e$0$2e$5$2f$node_modules$2f$ip$2d$address$2f$dist$2f$ip$2d$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address6"].fromUnsignedByteArray([
        ...byteArray
    ]);
    return addressV6.canonicalForm();
}; //# sourceMappingURL=ipUtils.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostAddr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SingleHostAddr",
    ()=>SingleHostAddr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$ipUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/ipUtils.js [app-client] (ecmascript)");
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
var _SingleHostAddr_port, _SingleHostAddr_ipV4, _SingleHostAddr_ipV6, _SingleHostAddr_originalBytes;
;
;
;
const EMBEDDED_GROUP_SIZE = 4;
const SINGLE_HOST_ADDR_RELAY_ID = 0;
class SingleHostAddr {
    constructor(port, ipv4, ipv6){
        _SingleHostAddr_port.set(this, void 0);
        _SingleHostAddr_ipV4.set(this, void 0);
        _SingleHostAddr_ipV6.set(this, void 0);
        _SingleHostAddr_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _SingleHostAddr_port, port, "f");
        __classPrivateFieldSet(this, _SingleHostAddr_ipV4, ipv4, "f");
        __classPrivateFieldSet(this, _SingleHostAddr_ipV6, ipv6, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _SingleHostAddr_originalBytes, "f")) return __classPrivateFieldGet(this, _SingleHostAddr_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(SINGLE_HOST_ADDR_RELAY_ID);
        __classPrivateFieldGet(this, _SingleHostAddr_port, "f") ? writer.writeInt(__classPrivateFieldGet(this, _SingleHostAddr_port, "f")) : writer.writeNull();
        __classPrivateFieldGet(this, _SingleHostAddr_ipV4, "f") ? writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$ipUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipV4StringToByteArray"])(__classPrivateFieldGet(this, _SingleHostAddr_ipV4, "f"))) : writer.writeNull();
        __classPrivateFieldGet(this, _SingleHostAddr_ipV6, "f") ? writer.writeByteString((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$ipUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ipV6StringToByteArray"])(__classPrivateFieldGet(this, _SingleHostAddr_ipV6, "f"))) : writer.writeNull();
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const id = Number(reader.readInt());
        if (id !== SINGLE_HOST_ADDR_RELAY_ID) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected SingleHostAddr id ${SINGLE_HOST_ADDR_RELAY_ID}, but got ${id}`);
        let port;
        let ipV4;
        let ipV6;
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
            port = undefined;
        } else {
            port = reader.readInt();
        }
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
            ipV4 = undefined;
        } else {
            ipV4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$ipUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteArrayToIpV4String"])(reader.readByteString());
        }
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
            ipV6 = undefined;
        } else {
            ipV6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$ipUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteArrayToIPv6String"])(reader.readByteString());
        }
        const relay = new SingleHostAddr(port ? Number(port) : undefined, ipV4, ipV6);
        __classPrivateFieldSet(relay, _SingleHostAddr_originalBytes, cbor, "f");
        return relay;
    }
    toCore() {
        return {
            __typename: 'RelayByAddress',
            ipv4: __classPrivateFieldGet(this, _SingleHostAddr_ipV4, "f"),
            ipv6: __classPrivateFieldGet(this, _SingleHostAddr_ipV6, "f"),
            port: __classPrivateFieldGet(this, _SingleHostAddr_port, "f")
        };
    }
    static fromCore(relay) {
        return new SingleHostAddr(relay.port, relay.ipv4, relay.ipv6);
    }
    port() {
        return __classPrivateFieldGet(this, _SingleHostAddr_port, "f");
    }
    setPort(port) {
        __classPrivateFieldSet(this, _SingleHostAddr_port, port, "f");
        __classPrivateFieldSet(this, _SingleHostAddr_originalBytes, undefined, "f");
    }
    ipv4() {
        return __classPrivateFieldGet(this, _SingleHostAddr_ipV4, "f");
    }
    setIpv4(ipV4) {
        __classPrivateFieldSet(this, _SingleHostAddr_ipV4, ipV4, "f");
        __classPrivateFieldSet(this, _SingleHostAddr_originalBytes, undefined, "f");
    }
    ipv6() {
        return __classPrivateFieldGet(this, _SingleHostAddr_ipV6, "f");
    }
    setIpv6(ipV6) {
        __classPrivateFieldSet(this, _SingleHostAddr_ipV6, ipV6, "f");
        __classPrivateFieldSet(this, _SingleHostAddr_originalBytes, undefined, "f");
    }
}
_SingleHostAddr_port = new WeakMap(), _SingleHostAddr_ipV4 = new WeakMap(), _SingleHostAddr_ipV6 = new WeakMap(), _SingleHostAddr_originalBytes = new WeakMap(); //# sourceMappingURL=SingleHostAddr.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SingleHostName",
    ()=>SingleHostName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
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
var _SingleHostName_port, _SingleHostName_dnsName, _SingleHostName_originalBytes;
;
;
const EMBEDDED_GROUP_SIZE = 3;
const SINGLE_HOST_NAME_RELAY_ID = 1;
const MAX_DNS_SIZE_STR_LENGTH = 64;
class SingleHostName {
    constructor(dnsName, port){
        _SingleHostName_port.set(this, void 0);
        _SingleHostName_dnsName.set(this, void 0);
        _SingleHostName_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _SingleHostName_port, port, "f");
        if (dnsName.length > MAX_DNS_SIZE_STR_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('dnsName', `dnsName must be less or equal to 64 characters long, actual size ${dnsName.length}`);
        __classPrivateFieldSet(this, _SingleHostName_dnsName, dnsName, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _SingleHostName_originalBytes, "f")) return __classPrivateFieldGet(this, _SingleHostName_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(SINGLE_HOST_NAME_RELAY_ID);
        __classPrivateFieldGet(this, _SingleHostName_port, "f") ? writer.writeInt(__classPrivateFieldGet(this, _SingleHostName_port, "f")) : writer.writeNull();
        writer.writeTextString(__classPrivateFieldGet(this, _SingleHostName_dnsName, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const id = Number(reader.readInt());
        if (id !== SINGLE_HOST_NAME_RELAY_ID) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected SingleHostName id ${SINGLE_HOST_NAME_RELAY_ID}, but got ${id}`);
        let port;
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
            port = undefined;
        } else {
            port = reader.readInt();
        }
        const dnsName = reader.readTextString();
        const relay = new SingleHostName(dnsName, port ? Number(port) : undefined);
        __classPrivateFieldSet(relay, _SingleHostName_originalBytes, cbor, "f");
        return relay;
    }
    toCore() {
        return {
            __typename: 'RelayByName',
            hostname: __classPrivateFieldGet(this, _SingleHostName_dnsName, "f"),
            port: __classPrivateFieldGet(this, _SingleHostName_port, "f")
        };
    }
    static fromCore(relay) {
        return new SingleHostName(relay.hostname, relay.port);
    }
    port() {
        return __classPrivateFieldGet(this, _SingleHostName_port, "f");
    }
    setPort(port) {
        __classPrivateFieldSet(this, _SingleHostName_port, port, "f");
        __classPrivateFieldSet(this, _SingleHostName_originalBytes, undefined, "f");
    }
    dnsName() {
        return __classPrivateFieldGet(this, _SingleHostName_dnsName, "f");
    }
    setDnsName(dnsName) {
        if (dnsName.length > MAX_DNS_SIZE_STR_LENGTH) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('dnsName', `dnsName must be less or equal to 64 characters long, actual size ${dnsName.length}`);
        __classPrivateFieldSet(this, _SingleHostName_dnsName, dnsName, "f");
        __classPrivateFieldSet(this, _SingleHostName_originalBytes, undefined, "f");
    }
}
_SingleHostName_port = new WeakMap(), _SingleHostName_dnsName = new WeakMap(), _SingleHostName_originalBytes = new WeakMap(); //# sourceMappingURL=SingleHostName.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/Relay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Relay",
    ()=>Relay,
    "RelayKind",
    ()=>RelayKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$MultiHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/MultiHostName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostAddr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostAddr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostName.js [app-client] (ecmascript)");
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
var _Relay_singleHostAddr, _Relay_singleHostName, _Relay_multiHostName, _Relay_kind, _Relay_originalBytes;
;
;
;
;
;
var RelayKind;
(function(RelayKind) {
    RelayKind[RelayKind["SingleHostAddress"] = 0] = "SingleHostAddress";
    RelayKind[RelayKind["SingleHostDnsName"] = 1] = "SingleHostDnsName";
    RelayKind[RelayKind["MultiHostDnsName"] = 2] = "MultiHostDnsName";
})(RelayKind || (RelayKind = {}));
class Relay {
    constructor(){
        _Relay_singleHostAddr.set(this, void 0);
        _Relay_singleHostName.set(this, void 0);
        _Relay_multiHostName.set(this, void 0);
        _Relay_kind.set(this, void 0);
        _Relay_originalBytes.set(this, undefined);
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _Relay_originalBytes, "f")) return __classPrivateFieldGet(this, _Relay_originalBytes, "f");
        let cbor;
        switch(__classPrivateFieldGet(this, _Relay_kind, "f")){
            case RelayKind.SingleHostAddress:
                cbor = __classPrivateFieldGet(this, _Relay_singleHostAddr, "f").toCbor();
                break;
            case RelayKind.SingleHostDnsName:
                cbor = __classPrivateFieldGet(this, _Relay_singleHostName, "f").toCbor();
                break;
            case RelayKind.MultiHostDnsName:
                cbor = __classPrivateFieldGet(this, _Relay_multiHostName, "f").toCbor();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _Relay_kind, "f")}`);
        }
        return cbor;
    }
    static fromCbor(cbor) {
        let relay;
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        reader.readStartArray();
        const kind = Number(reader.readInt());
        switch(kind){
            case RelayKind.SingleHostAddress:
                relay = Relay.newSingleHostAddr(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostAddr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostAddr"].fromCbor(cbor));
                break;
            case RelayKind.SingleHostDnsName:
                relay = Relay.newSingleHostName(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostName"].fromCbor(cbor));
                break;
            case RelayKind.MultiHostDnsName:
                relay = Relay.newMultiHostName(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$MultiHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiHostName"].fromCbor(cbor));
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${kind}`);
        }
        __classPrivateFieldSet(relay, _Relay_originalBytes, cbor, "f");
        return relay;
    }
    toCore() {
        let core;
        switch(__classPrivateFieldGet(this, _Relay_kind, "f")){
            case RelayKind.SingleHostAddress:
                core = __classPrivateFieldGet(this, _Relay_singleHostAddr, "f").toCore();
                break;
            case RelayKind.SingleHostDnsName:
                core = __classPrivateFieldGet(this, _Relay_singleHostName, "f").toCore();
                break;
            case RelayKind.MultiHostDnsName:
                core = __classPrivateFieldGet(this, _Relay_multiHostName, "f").toCore();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _Relay_kind, "f")}`);
        }
        return core;
    }
    static fromCore(coreRelay) {
        let relay;
        switch(coreRelay.__typename){
            case 'RelayByAddress':
                relay = Relay.newSingleHostAddr(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostAddr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostAddr"].fromCore(coreRelay));
                break;
            case 'RelayByName':
                relay = Relay.newSingleHostName(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostName"].fromCore(coreRelay));
                break;
            case 'RelayByNameMultihost':
                relay = Relay.newMultiHostName(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$MultiHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiHostName"].fromCore(coreRelay));
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('Unexpected kind value');
        }
        return relay;
    }
    static newSingleHostAddr(singleHostaddr) {
        const relay = new Relay();
        __classPrivateFieldSet(relay, _Relay_singleHostAddr, singleHostaddr, "f");
        __classPrivateFieldSet(relay, _Relay_kind, RelayKind.SingleHostAddress, "f");
        return relay;
    }
    static newSingleHostName(singleHostName) {
        const relay = new Relay();
        __classPrivateFieldSet(relay, _Relay_singleHostName, singleHostName, "f");
        __classPrivateFieldSet(relay, _Relay_kind, RelayKind.SingleHostDnsName, "f");
        return relay;
    }
    static newMultiHostName(multiHostName) {
        const relay = new Relay();
        __classPrivateFieldSet(relay, _Relay_multiHostName, multiHostName, "f");
        __classPrivateFieldSet(relay, _Relay_kind, RelayKind.MultiHostDnsName, "f");
        return relay;
    }
    kind() {
        return __classPrivateFieldGet(this, _Relay_kind, "f");
    }
    asSingleHostAddr() {
        return __classPrivateFieldGet(this, _Relay_singleHostAddr, "f");
    }
    asSingleHostName() {
        return __classPrivateFieldGet(this, _Relay_singleHostName, "f");
    }
    asMultiHostName() {
        return __classPrivateFieldGet(this, _Relay_multiHostName, "f");
    }
}
_Relay_singleHostAddr = new WeakMap(), _Relay_singleHostName = new WeakMap(), _Relay_multiHostName = new WeakMap(), _Relay_kind = new WeakMap(), _Relay_originalBytes = new WeakMap(); //# sourceMappingURL=Relay.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoolParams",
    ()=>PoolParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/Address/Address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/CborSet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/Relay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/UnitInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$RewardAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/Address/RewardAccount.js [app-client] (ecmascript)");
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
var _PoolParams_operator, _PoolParams_vrfKeyHash, _PoolParams_pledge, _PoolParams_cost, _PoolParams_margin, _PoolParams_rewardAccount, _PoolParams_poolOwners, _PoolParams_relays, _PoolParams_poolMetadata, _PoolParams_originalBytes;
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
class PoolParams {
    constructor(operator, vrfKeyHash, pledge, cost, margin, rewardAccount, poolOwners, relays, poolMetadata){
        _PoolParams_operator.set(this, void 0);
        _PoolParams_vrfKeyHash.set(this, void 0);
        _PoolParams_pledge.set(this, void 0);
        _PoolParams_cost.set(this, void 0);
        _PoolParams_margin.set(this, void 0);
        _PoolParams_rewardAccount.set(this, void 0);
        _PoolParams_poolOwners.set(this, void 0);
        _PoolParams_relays.set(this, void 0);
        _PoolParams_poolMetadata.set(this, void 0);
        _PoolParams_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _PoolParams_operator, operator, "f");
        __classPrivateFieldSet(this, _PoolParams_vrfKeyHash, vrfKeyHash, "f");
        __classPrivateFieldSet(this, _PoolParams_pledge, pledge, "f");
        __classPrivateFieldSet(this, _PoolParams_cost, cost, "f");
        __classPrivateFieldSet(this, _PoolParams_margin, margin, "f");
        __classPrivateFieldSet(this, _PoolParams_rewardAccount, rewardAccount, "f");
        __classPrivateFieldSet(this, _PoolParams_poolOwners, poolOwners, "f");
        __classPrivateFieldSet(this, _PoolParams_relays, relays, "f");
        __classPrivateFieldSet(this, _PoolParams_poolMetadata, poolMetadata, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _PoolParams_originalBytes, "f")) return __classPrivateFieldGet(this, _PoolParams_originalBytes, "f");
        writer.writeStartArray(PoolParams.subgroupCount);
        return this.toFlattenedCbor(writer);
    }
    toFlattenedCbor(writer) {
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_operator, "f"), 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_vrfKeyHash, "f"), 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _PoolParams_pledge, "f"));
        writer.writeInt(__classPrivateFieldGet(this, _PoolParams_cost, "f"));
        writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_margin, "f").toCbor(), 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_rewardAccount, "f").toAddress().toBytes(), 'hex'));
        writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_poolOwners, "f").toCbor(), 'hex'));
        writer.writeStartArray(__classPrivateFieldGet(this, _PoolParams_relays, "f").length);
        for (const relay of __classPrivateFieldGet(this, _PoolParams_relays, "f"))writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(relay.toCbor(), 'hex'));
        if (__classPrivateFieldGet(this, _PoolParams_poolMetadata, "f")) {
            writer.writeEncodedValue(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolParams_poolMetadata, "f").toCbor(), 'hex'));
        } else {
            writer.writeNull();
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== PoolParams.subgroupCount) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${PoolParams.subgroupCount} elements, but got an array of ${length} elements`);
        const params = PoolParams.fromFlattenedCbor(reader);
        __classPrivateFieldSet(params, _PoolParams_originalBytes, cbor, "f");
        return params;
    }
    static fromFlattenedCbor(reader) {
        const operator = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const vrfKeyHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VrfVkHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const pledge = reader.readInt();
        const cost = reader.readInt();
        const margin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnitInterval"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const rewardAccount = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"].fromBytes(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString())).asReward();
        const relays = new Array();
        let poolMetadata;
        const poolOwner = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"].fromCbor);
        reader.readStartArray();
        while(reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].EndArray)relays.push(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Relay"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue())));
        reader.readEndArray();
        if (reader.peekState() !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            poolMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolMetadata"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        } else {
            reader.readNull();
        }
        return new PoolParams(operator, vrfKeyHash, pledge, cost, margin, rewardAccount, poolOwner, relays, poolMetadata);
    }
    toCore() {
        const rewardAccountAddress = __classPrivateFieldGet(this, _PoolParams_rewardAccount, "f").toAddress();
        const poolParams = {
            cost: __classPrivateFieldGet(this, _PoolParams_cost, "f"),
            id: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _PoolParams_operator, "f")),
            margin: __classPrivateFieldGet(this, _PoolParams_margin, "f").toCore(),
            owners: __classPrivateFieldGet(this, _PoolParams_poolOwners, "f").toCore().map((keyHash)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$RewardAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRewardAccount"])(keyHash, rewardAccountAddress.getNetworkId())),
            pledge: __classPrivateFieldGet(this, _PoolParams_pledge, "f"),
            relays: __classPrivateFieldGet(this, _PoolParams_relays, "f").map((relay)=>relay.toCore()),
            rewardAccount: __classPrivateFieldGet(this, _PoolParams_rewardAccount, "f").toAddress().toBech32(),
            vrf: __classPrivateFieldGet(this, _PoolParams_vrfKeyHash, "f")
        };
        if (__classPrivateFieldGet(this, _PoolParams_poolMetadata, "f")) poolParams.metadataJson = __classPrivateFieldGet(this, _PoolParams_poolMetadata, "f").toCore();
        return poolParams;
    }
    static fromCore(params) {
        return new PoolParams(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(params.id), params.vrf, params.pledge, params.cost, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$UnitInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnitInterval"].fromCore(params.margin), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"].fromBech32(params.rewardAccount).asReward(), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$CborSet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborSet"].fromCore(params.owners.map((owner)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"].fromBech32(owner).asReward().getPaymentCredential().hash)), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"].fromCore), params.relays.map((relay)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Relay"].fromCore(relay)), params.metadataJson ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolMetadata"].fromCore(params.metadataJson) : undefined);
    }
    operator() {
        return __classPrivateFieldGet(this, _PoolParams_operator, "f");
    }
    setOperator(operator) {
        __classPrivateFieldSet(this, _PoolParams_operator, operator, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    vrfKeyHash() {
        return __classPrivateFieldGet(this, _PoolParams_vrfKeyHash, "f");
    }
    setVrfKeyHash(vrfKeyHash) {
        __classPrivateFieldSet(this, _PoolParams_vrfKeyHash, vrfKeyHash, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    pledge() {
        return __classPrivateFieldGet(this, _PoolParams_pledge, "f");
    }
    setPledge(pledge) {
        __classPrivateFieldSet(this, _PoolParams_pledge, pledge, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    cost() {
        return __classPrivateFieldGet(this, _PoolParams_cost, "f");
    }
    setCost(cost) {
        __classPrivateFieldSet(this, _PoolParams_cost, cost, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    margin() {
        return __classPrivateFieldGet(this, _PoolParams_margin, "f");
    }
    setMargin(margin) {
        __classPrivateFieldSet(this, _PoolParams_margin, margin, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    rewardAccount() {
        return __classPrivateFieldGet(this, _PoolParams_rewardAccount, "f");
    }
    setRewardAccount(rewardAccount) {
        __classPrivateFieldSet(this, _PoolParams_rewardAccount, rewardAccount, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    poolOwners() {
        return __classPrivateFieldGet(this, _PoolParams_poolOwners, "f");
    }
    setPoolOwners(poolOwners) {
        __classPrivateFieldSet(this, _PoolParams_poolOwners, poolOwners, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    relays() {
        return __classPrivateFieldGet(this, _PoolParams_relays, "f");
    }
    setRelays(relays) {
        __classPrivateFieldSet(this, _PoolParams_relays, [
            ...relays
        ], "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
    poolMetadata() {
        return __classPrivateFieldGet(this, _PoolParams_poolMetadata, "f");
    }
    setPoolMetadata(poolMetadata) {
        __classPrivateFieldSet(this, _PoolParams_poolMetadata, poolMetadata, "f");
        __classPrivateFieldSet(this, _PoolParams_originalBytes, undefined, "f");
    }
}
_PoolParams_operator = new WeakMap(), _PoolParams_vrfKeyHash = new WeakMap(), _PoolParams_pledge = new WeakMap(), _PoolParams_cost = new WeakMap(), _PoolParams_margin = new WeakMap(), _PoolParams_rewardAccount = new WeakMap(), _PoolParams_poolOwners = new WeakMap(), _PoolParams_relays = new WeakMap(), _PoolParams_poolMetadata = new WeakMap(), _PoolParams_originalBytes = new WeakMap();
PoolParams.subgroupCount = 9; //# sourceMappingURL=PoolParams.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRegistration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoolRegistration",
    ()=>PoolRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolParams.js [app-client] (ecmascript)");
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
var _PoolRegistration_params, _PoolRegistration_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolParams"].subgroupCount + 1;
class PoolRegistration {
    constructor(params){
        _PoolRegistration_params.set(this, void 0);
        _PoolRegistration_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _PoolRegistration_params, params, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _PoolRegistration_originalBytes, "f")) return __classPrivateFieldGet(this, _PoolRegistration_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration);
        return __classPrivateFieldGet(this, _PoolRegistration_params, "f").toFlattenedCbor(writer);
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration}, but got ${kind}`);
        const params = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolParams"].fromFlattenedCbor(reader);
        reader.readEndArray();
        const cert = new PoolRegistration(params);
        __classPrivateFieldSet(cert, _PoolRegistration_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].PoolRegistration,
            poolParameters: __classPrivateFieldGet(this, _PoolRegistration_params, "f").toCore()
        };
    }
    static fromCore(cert) {
        return new PoolRegistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolParams"].fromCore(cert.poolParameters));
    }
    poolParameters() {
        return __classPrivateFieldGet(this, _PoolRegistration_params, "f");
    }
    setPoolParameters(parameters) {
        __classPrivateFieldSet(this, _PoolRegistration_params, parameters, "f");
        __classPrivateFieldSet(this, _PoolRegistration_originalBytes, undefined, "f");
    }
}
_PoolRegistration_params = new WeakMap(), _PoolRegistration_originalBytes = new WeakMap(); //# sourceMappingURL=PoolRegistration.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRetirement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PoolRetirement",
    ()=>PoolRetirement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
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
var _PoolRetirement_poolKeyHash, _PoolRetirement_epoch, _PoolRetirement_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 3;
class PoolRetirement {
    constructor(poolKeyHash, epoch){
        _PoolRetirement_poolKeyHash.set(this, void 0);
        _PoolRetirement_epoch.set(this, void 0);
        _PoolRetirement_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _PoolRetirement_poolKeyHash, poolKeyHash, "f");
        __classPrivateFieldSet(this, _PoolRetirement_epoch, epoch, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _PoolRetirement_originalBytes, "f")) return __classPrivateFieldGet(this, _PoolRetirement_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _PoolRetirement_poolKeyHash, "f"), 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _PoolRetirement_epoch, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement}, but got ${kind}`);
        const poolKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const epoch = reader.readInt();
        reader.readEndArray();
        const cert = new PoolRetirement(poolKeyHash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EpochNo"])(Number(epoch)));
        __classPrivateFieldSet(cert, _PoolRetirement_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].PoolRetirement,
            epoch: __classPrivateFieldGet(this, _PoolRetirement_epoch, "f"),
            poolId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _PoolRetirement_poolKeyHash, "f"))
        };
    }
    static fromCore(cert) {
        return new PoolRetirement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(cert.poolId), cert.epoch);
    }
    poolKeyHash() {
        return __classPrivateFieldGet(this, _PoolRetirement_poolKeyHash, "f");
    }
    setPoolKeyHash(poolKeyHash) {
        __classPrivateFieldSet(this, _PoolRetirement_poolKeyHash, poolKeyHash, "f");
        __classPrivateFieldSet(this, _PoolRetirement_originalBytes, undefined, "f");
    }
    epoch() {
        return __classPrivateFieldGet(this, _PoolRetirement_epoch, "f");
    }
    setEpoch(epoch) {
        __classPrivateFieldSet(this, _PoolRetirement_epoch, epoch, "f");
        __classPrivateFieldSet(this, _PoolRetirement_originalBytes, undefined, "f");
    }
}
_PoolRetirement_poolKeyHash = new WeakMap(), _PoolRetirement_epoch = new WeakMap(), _PoolRetirement_originalBytes = new WeakMap(); //# sourceMappingURL=PoolRetirement.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/RegisterDelegateRepresentative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegisterDelegateRepresentative",
    ()=>RegisterDelegateRepresentative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/Anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
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
var _RegisterDelegateRepresentative_drepCredential, _RegisterDelegateRepresentative_deposit, _RegisterDelegateRepresentative_anchor, _RegisterDelegateRepresentative_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class RegisterDelegateRepresentative {
    constructor(drepCredential, deposit, anchor){
        _RegisterDelegateRepresentative_drepCredential.set(this, void 0);
        _RegisterDelegateRepresentative_deposit.set(this, void 0);
        _RegisterDelegateRepresentative_anchor.set(this, void 0);
        _RegisterDelegateRepresentative_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _RegisterDelegateRepresentative_drepCredential, drepCredential, "f");
        __classPrivateFieldSet(this, _RegisterDelegateRepresentative_deposit, deposit, "f");
        __classPrivateFieldSet(this, _RegisterDelegateRepresentative_anchor, anchor, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _RegisterDelegateRepresentative_originalBytes, "f")) return __classPrivateFieldGet(this, _RegisterDelegateRepresentative_originalBytes, "f");
        writer.writeStartArray(4);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _RegisterDelegateRepresentative_drepCredential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _RegisterDelegateRepresentative_drepCredential, "f").hash, 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _RegisterDelegateRepresentative_deposit, "f"));
        if (__classPrivateFieldGet(this, _RegisterDelegateRepresentative_anchor, "f")) {
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _RegisterDelegateRepresentative_anchor, "f").toCbor()));
        } else {
            writer.writeNull();
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 4 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const deposit = reader.readInt();
        let anchor;
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
        } else {
            anchor = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        }
        reader.readEndArray();
        const cert = new RegisterDelegateRepresentative({
            hash,
            type
        }, deposit, anchor);
        __classPrivateFieldSet(cert, _RegisterDelegateRepresentative_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].RegisterDelegateRepresentative,
            anchor: __classPrivateFieldGet(this, _RegisterDelegateRepresentative_anchor, "f") ? __classPrivateFieldGet(this, _RegisterDelegateRepresentative_anchor, "f").toCore() : null,
            dRepCredential: __classPrivateFieldGet(this, _RegisterDelegateRepresentative_drepCredential, "f"),
            deposit: __classPrivateFieldGet(this, _RegisterDelegateRepresentative_deposit, "f")
        };
    }
    static fromCore(cert) {
        return new RegisterDelegateRepresentative(cert.dRepCredential, cert.deposit, cert.anchor ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCore(cert.anchor) : undefined);
    }
    credential() {
        return __classPrivateFieldGet(this, _RegisterDelegateRepresentative_drepCredential, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _RegisterDelegateRepresentative_deposit, "f");
    }
    anchor() {
        return __classPrivateFieldGet(this, _RegisterDelegateRepresentative_anchor, "f");
    }
}
_RegisterDelegateRepresentative_drepCredential = new WeakMap(), _RegisterDelegateRepresentative_deposit = new WeakMap(), _RegisterDelegateRepresentative_anchor = new WeakMap(), _RegisterDelegateRepresentative_originalBytes = new WeakMap(); //# sourceMappingURL=RegisterDelegateRepresentative.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Registration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Registration",
    ()=>Registration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _Registration_credential, _Registration_deposit, _Registration_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class Registration {
    constructor(credential, deposit){
        _Registration_credential.set(this, void 0);
        _Registration_deposit.set(this, void 0);
        _Registration_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Registration_credential, credential, "f");
        __classPrivateFieldSet(this, _Registration_deposit, deposit, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _Registration_originalBytes, "f")) return __classPrivateFieldGet(this, _Registration_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _Registration_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Registration_credential, "f").hash, 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _Registration_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new Registration({
            hash,
            type
        }, deposit);
        __classPrivateFieldSet(cert, _Registration_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].Registration,
            deposit: __classPrivateFieldGet(this, _Registration_deposit, "f"),
            stakeCredential: __classPrivateFieldGet(this, _Registration_credential, "f")
        };
    }
    static fromCore(cert) {
        return new Registration(cert.stakeCredential, cert.deposit);
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _Registration_credential, "f");
    }
    setStakeCredential(credential) {
        __classPrivateFieldSet(this, _Registration_credential, credential, "f");
        __classPrivateFieldSet(this, _Registration_originalBytes, undefined, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _Registration_deposit, "f");
    }
    setDeposit(deposit) {
        __classPrivateFieldSet(this, _Registration_deposit, deposit, "f");
        __classPrivateFieldSet(this, _Registration_originalBytes, undefined, "f");
    }
}
_Registration_credential = new WeakMap(), _Registration_deposit = new WeakMap(), _Registration_originalBytes = new WeakMap(); //# sourceMappingURL=Registration.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/ResignCommitteeCold.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResignCommitteeCold",
    ()=>ResignCommitteeCold
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/Anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
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
var _ResignCommitteeCold_committeeColdCred, _ResignCommitteeCold_anchor, _ResignCommitteeCold_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class ResignCommitteeCold {
    constructor(committeeColdCred, anchor){
        _ResignCommitteeCold_committeeColdCred.set(this, void 0);
        _ResignCommitteeCold_anchor.set(this, void 0);
        _ResignCommitteeCold_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _ResignCommitteeCold_committeeColdCred, committeeColdCred, "f");
        __classPrivateFieldSet(this, _ResignCommitteeCold_anchor, anchor, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _ResignCommitteeCold_originalBytes, "f")) return __classPrivateFieldGet(this, _ResignCommitteeCold_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _ResignCommitteeCold_committeeColdCred, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _ResignCommitteeCold_committeeColdCred, "f").hash, 'hex'));
        if (__classPrivateFieldGet(this, _ResignCommitteeCold_anchor, "f")) {
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _ResignCommitteeCold_anchor, "f").toCbor()));
        } else {
            writer.writeNull();
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold}, but got ${kind}`);
        const coldCredLength = reader.readStartArray();
        if (coldCredLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const coldType = Number(reader.readInt());
        const coldHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        let anchor;
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
        } else {
            anchor = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        }
        reader.readEndArray();
        const cert = new ResignCommitteeCold({
            hash: coldHash,
            type: coldType
        }, anchor);
        __classPrivateFieldSet(cert, _ResignCommitteeCold_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].ResignCommitteeCold,
            anchor: __classPrivateFieldGet(this, _ResignCommitteeCold_anchor, "f") ? __classPrivateFieldGet(this, _ResignCommitteeCold_anchor, "f").toCore() : null,
            coldCredential: __classPrivateFieldGet(this, _ResignCommitteeCold_committeeColdCred, "f")
        };
    }
    static fromCore(cert) {
        return new ResignCommitteeCold(cert.coldCredential, cert.anchor ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCore(cert.anchor) : undefined);
    }
    coldCredential() {
        return __classPrivateFieldGet(this, _ResignCommitteeCold_committeeColdCred, "f");
    }
    anchor() {
        return __classPrivateFieldGet(this, _ResignCommitteeCold_anchor, "f");
    }
}
_ResignCommitteeCold_committeeColdCred = new WeakMap(), _ResignCommitteeCold_anchor = new WeakMap(), _ResignCommitteeCold_originalBytes = new WeakMap(); //# sourceMappingURL=ResignCommitteeCold.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeDelegation",
    ()=>StakeDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
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
var _StakeDelegation_credential, _StakeDelegation_poolKeyHash, _StakeDelegation_originalBytes;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 3;
const CREDENTIAL_SIZE = 2;
class StakeDelegation {
    constructor(credential, poolKeyHash){
        _StakeDelegation_credential.set(this, void 0);
        _StakeDelegation_poolKeyHash.set(this, void 0);
        _StakeDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeDelegation_credential, credential, "f");
        __classPrivateFieldSet(this, _StakeDelegation_poolKeyHash, poolKeyHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeDelegation_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation);
        writer.writeStartArray(CREDENTIAL_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeDelegation_credential, "f").hash, 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeDelegation_poolKeyHash, "f"), 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== CREDENTIAL_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${CREDENTIAL_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const poolKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const cert = new StakeDelegation({
            hash,
            type
        }, poolKeyHash);
        __classPrivateFieldSet(cert, _StakeDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeDelegation,
            poolId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _StakeDelegation_poolKeyHash, "f")),
            stakeCredential: __classPrivateFieldGet(this, _StakeDelegation_credential, "f")
        };
    }
    static fromCore(cert) {
        return new StakeDelegation(cert.stakeCredential, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(cert.poolId));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeDelegation_credential, "f");
    }
    setStakeCredential(credential) {
        __classPrivateFieldSet(this, _StakeDelegation_credential, credential, "f");
        __classPrivateFieldSet(this, _StakeDelegation_originalBytes, undefined, "f");
    }
    poolKeyHash() {
        return __classPrivateFieldGet(this, _StakeDelegation_poolKeyHash, "f");
    }
    setPoolKeyHash(poolKeyHash) {
        __classPrivateFieldSet(this, _StakeDelegation_poolKeyHash, poolKeyHash, "f");
        __classPrivateFieldSet(this, _StakeDelegation_originalBytes, undefined, "f");
    }
}
_StakeDelegation_credential = new WeakMap(), _StakeDelegation_poolKeyHash = new WeakMap(), _StakeDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=StakeDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDeregistration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeDeregistration",
    ()=>StakeDeregistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _StakeDeregistration_credential, _StakeDeregistration_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class StakeDeregistration {
    constructor(credential){
        _StakeDeregistration_credential.set(this, void 0);
        _StakeDeregistration_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeDeregistration_credential, credential, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeDeregistration_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeDeregistration_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeDeregistration_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeDeregistration_credential, "f").hash, 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        reader.readEndArray();
        const cert = new StakeDeregistration({
            hash,
            type
        });
        __classPrivateFieldSet(cert, _StakeDeregistration_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeDeregistration,
            stakeCredential: __classPrivateFieldGet(this, _StakeDeregistration_credential, "f")
        };
    }
    static fromCore(cert) {
        return new StakeDeregistration(cert.stakeCredential);
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeDeregistration_credential, "f");
    }
    setStakeCredential(credential) {
        __classPrivateFieldSet(this, _StakeDeregistration_credential, credential, "f");
        __classPrivateFieldSet(this, _StakeDeregistration_originalBytes, undefined, "f");
    }
}
_StakeDeregistration_credential = new WeakMap(), _StakeDeregistration_originalBytes = new WeakMap(); //# sourceMappingURL=StakeDeregistration.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeRegistration",
    ()=>StakeRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _StakeRegistration_credential, _StakeRegistration_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class StakeRegistration {
    constructor(credential){
        _StakeRegistration_credential.set(this, void 0);
        _StakeRegistration_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeRegistration_credential, credential, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeRegistration_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeRegistration_originalBytes, "f");
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeRegistration_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeRegistration_credential, "f").hash, 'hex'));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        reader.readEndArray();
        const cert = new StakeRegistration({
            hash,
            type
        });
        __classPrivateFieldSet(cert, _StakeRegistration_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeRegistration,
            stakeCredential: __classPrivateFieldGet(this, _StakeRegistration_credential, "f")
        };
    }
    static fromCore(cert) {
        return new StakeRegistration(cert.stakeCredential);
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeRegistration_credential, "f");
    }
    setStakeCredential(credential) {
        __classPrivateFieldSet(this, _StakeRegistration_credential, credential, "f");
        __classPrivateFieldSet(this, _StakeRegistration_originalBytes, undefined, "f");
    }
}
_StakeRegistration_credential = new WeakMap(), _StakeRegistration_originalBytes = new WeakMap(); //# sourceMappingURL=StakeRegistration.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistrationDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeRegistrationDelegation",
    ()=>StakeRegistrationDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
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
var _StakeRegistrationDelegation_credential, _StakeRegistrationDelegation_poolKeyHash, _StakeRegistrationDelegation_deposit, _StakeRegistrationDelegation_originalBytes;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class StakeRegistrationDelegation {
    constructor(stakeCredential, deposit, poolKeyHash){
        _StakeRegistrationDelegation_credential.set(this, void 0);
        _StakeRegistrationDelegation_poolKeyHash.set(this, void 0);
        _StakeRegistrationDelegation_deposit.set(this, void 0);
        _StakeRegistrationDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeRegistrationDelegation_credential, stakeCredential, "f");
        __classPrivateFieldSet(this, _StakeRegistrationDelegation_deposit, deposit, "f");
        __classPrivateFieldSet(this, _StakeRegistrationDelegation_poolKeyHash, poolKeyHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeRegistrationDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeRegistrationDelegation_originalBytes, "f");
        writer.writeStartArray(4);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeRegistrationDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeRegistrationDelegation_credential, "f").hash, 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeRegistrationDelegation_poolKeyHash, "f"), 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _StakeRegistrationDelegation_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 4 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const poolKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new StakeRegistrationDelegation({
            hash,
            type
        }, deposit, poolKeyHash);
        __classPrivateFieldSet(cert, _StakeRegistrationDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeRegistrationDelegation,
            deposit: __classPrivateFieldGet(this, _StakeRegistrationDelegation_deposit, "f"),
            poolId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _StakeRegistrationDelegation_poolKeyHash, "f")),
            stakeCredential: __classPrivateFieldGet(this, _StakeRegistrationDelegation_credential, "f")
        };
    }
    static fromCore(deleg) {
        return new StakeRegistrationDelegation(deleg.stakeCredential, deleg.deposit, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(deleg.poolId));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeRegistrationDelegation_credential, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _StakeRegistrationDelegation_deposit, "f");
    }
    poolKeyHash() {
        return __classPrivateFieldGet(this, _StakeRegistrationDelegation_poolKeyHash, "f");
    }
}
_StakeRegistrationDelegation_credential = new WeakMap(), _StakeRegistrationDelegation_poolKeyHash = new WeakMap(), _StakeRegistrationDelegation_deposit = new WeakMap(), _StakeRegistrationDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=StakeRegistrationDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRepKind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRepKind",
    ()=>DRepKind
]);
var DRepKind;
(function(DRepKind) {
    DRepKind[DRepKind["KeyHash"] = 0] = "KeyHash";
    DRepKind[DRepKind["ScriptHash"] = 1] = "ScriptHash";
    DRepKind[DRepKind["Abstain"] = 2] = "Abstain";
    DRepKind[DRepKind["NoConfidence"] = 3] = "NoConfidence";
})(DRepKind || (DRepKind = {})); //# sourceMappingURL=DRepKind.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRep",
    ()=>DRep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/Address/Address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRepKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Governance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Governance.js [app-client] (ecmascript)");
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
var _DRep_credential, _DRep_kind, _DRep_originalBytes;
;
;
;
;
;
;
class DRep {
    constructor(kind, credential){
        _DRep_credential.set(this, void 0);
        _DRep_kind.set(this, void 0);
        _DRep_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _DRep_credential, credential, "f");
        __classPrivateFieldSet(this, _DRep_kind, kind, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _DRep_originalBytes, "f")) return __classPrivateFieldGet(this, _DRep_originalBytes, "f");
        if (__classPrivateFieldGet(this, _DRep_kind, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash || __classPrivateFieldGet(this, _DRep_kind, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].ScriptHash) {
            writer.writeStartArray(2);
            writer.writeInt(__classPrivateFieldGet(this, _DRep_credential, "f").type);
            writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _DRep_credential, "f").hash, 'hex'));
            return writer.encodeAsHex();
        }
        writer.writeStartArray(1);
        writer.writeInt(__classPrivateFieldGet(this, _DRep_kind, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        reader.readStartArray();
        const kind = Number(reader.readInt());
        if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash || kind === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].ScriptHash) {
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
            if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash) {
                return DRep.newKeyHash(hash);
            }
            return DRep.newScriptHash(hash);
        }
        reader.readEndArray();
        if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].Abstain) return DRep.newAlwaysAbstain();
        return DRep.newAlwaysNoConfidence();
    }
    toCore() {
        if (__classPrivateFieldGet(this, _DRep_kind, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash || __classPrivateFieldGet(this, _DRep_kind, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].ScriptHash) return __classPrivateFieldGet(this, _DRep_credential, "f");
        if (__classPrivateFieldGet(this, _DRep_kind, "f") === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].Abstain) return {
            __typename: 'AlwaysAbstain'
        };
        return {
            __typename: 'AlwaysNoConfidence'
        };
    }
    static fromCore(deleg) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Governance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDRepAlwaysAbstain"])(deleg)) return DRep.newAlwaysAbstain();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Governance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDRepAlwaysNoConfidence"])(deleg)) return DRep.newAlwaysNoConfidence();
        if (deleg.type === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CredentialType"].KeyHash) return DRep.newKeyHash(deleg.hash);
        return DRep.newScriptHash(deleg.hash);
    }
    static newKeyHash(keyHash) {
        return new DRep(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash, {
            hash: keyHash,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CredentialType"].KeyHash
        });
    }
    static newScriptHash(scriptHash) {
        return new DRep(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].ScriptHash, {
            hash: scriptHash,
            type: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$Address$2f$Address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CredentialType"].ScriptHash
        });
    }
    static newAlwaysAbstain() {
        return new DRep(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].Abstain, undefined);
    }
    static newAlwaysNoConfidence() {
        return new DRep(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].NoConfidence, undefined);
    }
    kind() {
        return __classPrivateFieldGet(this, _DRep_kind, "f");
    }
    toKeyHash() {
        if (__classPrivateFieldGet(this, _DRep_kind, "f") !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].KeyHash) return undefined;
        return __classPrivateFieldGet(this, _DRep_credential, "f")?.hash;
    }
    toScriptHash() {
        if (__classPrivateFieldGet(this, _DRep_kind, "f") !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"].ScriptHash) return undefined;
        return __classPrivateFieldGet(this, _DRep_credential, "f")?.hash;
    }
}
_DRep_credential = new WeakMap(), _DRep_kind = new WeakMap(), _DRep_originalBytes = new WeakMap(); //# sourceMappingURL=DRep.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeVoteDelegation",
    ()=>StakeVoteDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
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
var _StakeVoteDelegation_credential, _StakeVoteDelegation_poolKeyHash, _StakeVoteDelegation_dRep, _StakeVoteDelegation_originalBytes;
;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class StakeVoteDelegation {
    constructor(stakeCredential, drep, poolKeyHash){
        _StakeVoteDelegation_credential.set(this, void 0);
        _StakeVoteDelegation_poolKeyHash.set(this, void 0);
        _StakeVoteDelegation_dRep.set(this, void 0);
        _StakeVoteDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeVoteDelegation_credential, stakeCredential, "f");
        __classPrivateFieldSet(this, _StakeVoteDelegation_dRep, drep, "f");
        __classPrivateFieldSet(this, _StakeVoteDelegation_poolKeyHash, poolKeyHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeVoteDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeVoteDelegation_originalBytes, "f");
        writer.writeStartArray(4);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeVoteDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeVoteDelegation_credential, "f").hash, 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeVoteDelegation_poolKeyHash, "f"), 'hex'));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _StakeVoteDelegation_dRep, "f").toCbor()));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 4 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const poolKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const dRep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const cert = new StakeVoteDelegation({
            hash,
            type
        }, dRep, poolKeyHash);
        __classPrivateFieldSet(cert, _StakeVoteDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeVoteDelegation,
            dRep: __classPrivateFieldGet(this, _StakeVoteDelegation_dRep, "f").toCore(),
            poolId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _StakeVoteDelegation_poolKeyHash, "f")),
            stakeCredential: __classPrivateFieldGet(this, _StakeVoteDelegation_credential, "f")
        };
    }
    static fromCore(deleg) {
        return new StakeVoteDelegation(deleg.stakeCredential, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCore(deleg.dRep), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(deleg.poolId));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeVoteDelegation_credential, "f");
    }
    drep() {
        return __classPrivateFieldGet(this, _StakeVoteDelegation_dRep, "f");
    }
    poolKeyHash() {
        return __classPrivateFieldGet(this, _StakeVoteDelegation_poolKeyHash, "f");
    }
}
_StakeVoteDelegation_credential = new WeakMap(), _StakeVoteDelegation_poolKeyHash = new WeakMap(), _StakeVoteDelegation_dRep = new WeakMap(), _StakeVoteDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=StakeVoteDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteRegistrationDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StakeVoteRegistrationDelegation",
    ()=>StakeVoteRegistrationDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/StakePool/primitives.js [app-client] (ecmascript)");
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
var _StakeVoteRegistrationDelegation_credential, _StakeVoteRegistrationDelegation_dRep, _StakeVoteRegistrationDelegation_poolKeyHash, _StakeVoteRegistrationDelegation_deposit, _StakeVoteRegistrationDelegation_originalBytes;
;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class StakeVoteRegistrationDelegation {
    constructor(stakeCredential, deposit, dRep, poolKeyHash){
        _StakeVoteRegistrationDelegation_credential.set(this, void 0);
        _StakeVoteRegistrationDelegation_dRep.set(this, void 0);
        _StakeVoteRegistrationDelegation_poolKeyHash.set(this, void 0);
        _StakeVoteRegistrationDelegation_deposit.set(this, void 0);
        _StakeVoteRegistrationDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _StakeVoteRegistrationDelegation_credential, stakeCredential, "f");
        __classPrivateFieldSet(this, _StakeVoteRegistrationDelegation_deposit, deposit, "f");
        __classPrivateFieldSet(this, _StakeVoteRegistrationDelegation_dRep, dRep, "f");
        __classPrivateFieldSet(this, _StakeVoteRegistrationDelegation_poolKeyHash, poolKeyHash, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_originalBytes, "f");
        writer.writeStartArray(5);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_credential, "f").hash, 'hex'));
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_poolKeyHash, "f"), 'hex'));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_dRep, "f").toCbor()));
        writer.writeInt(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 5) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 5 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const poolKeyHash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ed25519KeyHashHex"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        const dRep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new StakeVoteRegistrationDelegation({
            hash,
            type
        }, deposit, dRep, poolKeyHash);
        __classPrivateFieldSet(cert, _StakeVoteRegistrationDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeVoteRegistrationDelegation,
            dRep: __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_dRep, "f").toCore(),
            deposit: __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_deposit, "f"),
            poolId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].fromKeyHash(__classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_poolKeyHash, "f")),
            stakeCredential: __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_credential, "f")
        };
    }
    static fromCore(deleg) {
        return new StakeVoteRegistrationDelegation(deleg.stakeCredential, deleg.deposit, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCore(deleg.dRep), __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$StakePool$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolId"].toKeyHash(deleg.poolId));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_credential, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_deposit, "f");
    }
    dRep() {
        return __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_dRep, "f");
    }
    poolKeyHash() {
        return __classPrivateFieldGet(this, _StakeVoteRegistrationDelegation_poolKeyHash, "f");
    }
}
_StakeVoteRegistrationDelegation_credential = new WeakMap(), _StakeVoteRegistrationDelegation_dRep = new WeakMap(), _StakeVoteRegistrationDelegation_poolKeyHash = new WeakMap(), _StakeVoteRegistrationDelegation_deposit = new WeakMap(), _StakeVoteRegistrationDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=StakeVoteRegistrationDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UnregisterDelegateRepresentative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnregisterDelegateRepresentative",
    ()=>UnregisterDelegateRepresentative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _UnregisterDelegateRepresentative_drepCredential, _UnregisterDelegateRepresentative_deposit, _UnregisterDelegateRepresentative_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class UnregisterDelegateRepresentative {
    constructor(drepCredential, deposit){
        _UnregisterDelegateRepresentative_drepCredential.set(this, void 0);
        _UnregisterDelegateRepresentative_deposit.set(this, void 0);
        _UnregisterDelegateRepresentative_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _UnregisterDelegateRepresentative_drepCredential, drepCredential, "f");
        __classPrivateFieldSet(this, _UnregisterDelegateRepresentative_deposit, deposit, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _UnregisterDelegateRepresentative_originalBytes, "f")) return __classPrivateFieldGet(this, _UnregisterDelegateRepresentative_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _UnregisterDelegateRepresentative_drepCredential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _UnregisterDelegateRepresentative_drepCredential, "f").hash, 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _UnregisterDelegateRepresentative_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new UnregisterDelegateRepresentative({
            hash,
            type
        }, deposit);
        __classPrivateFieldSet(cert, _UnregisterDelegateRepresentative_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].UnregisterDelegateRepresentative,
            dRepCredential: __classPrivateFieldGet(this, _UnregisterDelegateRepresentative_drepCredential, "f"),
            deposit: __classPrivateFieldGet(this, _UnregisterDelegateRepresentative_deposit, "f")
        };
    }
    static fromCore(cert) {
        return new UnregisterDelegateRepresentative(cert.dRepCredential, cert.deposit);
    }
    credential() {
        return __classPrivateFieldGet(this, _UnregisterDelegateRepresentative_drepCredential, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _UnregisterDelegateRepresentative_deposit, "f");
    }
}
_UnregisterDelegateRepresentative_drepCredential = new WeakMap(), _UnregisterDelegateRepresentative_deposit = new WeakMap(), _UnregisterDelegateRepresentative_originalBytes = new WeakMap(); //# sourceMappingURL=UnregisterDelegateRepresentative.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Unregistration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Unregistration",
    ()=>Unregistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/primitives.js [app-client] (ecmascript)");
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
var _Unregistration_credential, _Unregistration_deposit, _Unregistration_originalBytes;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class Unregistration {
    constructor(credential, deposit){
        _Unregistration_credential.set(this, void 0);
        _Unregistration_deposit.set(this, void 0);
        _Unregistration_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _Unregistration_credential, credential, "f");
        __classPrivateFieldSet(this, _Unregistration_deposit, deposit, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _Unregistration_originalBytes, "f")) return __classPrivateFieldGet(this, _Unregistration_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _Unregistration_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _Unregistration_credential, "f").hash, 'hex'));
        writer.writeInt(__classPrivateFieldGet(this, _Unregistration_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new Unregistration({
            hash,
            type
        }, deposit);
        __classPrivateFieldSet(cert, _Unregistration_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].Unregistration,
            deposit: __classPrivateFieldGet(this, _Unregistration_deposit, "f"),
            stakeCredential: __classPrivateFieldGet(this, _Unregistration_credential, "f")
        };
    }
    static fromCore(cert) {
        return new Unregistration(cert.stakeCredential, cert.deposit);
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _Unregistration_credential, "f");
    }
    setStakeCredential(credential) {
        __classPrivateFieldSet(this, _Unregistration_credential, credential, "f");
        __classPrivateFieldSet(this, _Unregistration_originalBytes, undefined, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _Unregistration_deposit, "f");
    }
    setDeposit(deposit) {
        __classPrivateFieldSet(this, _Unregistration_deposit, deposit, "f");
        __classPrivateFieldSet(this, _Unregistration_originalBytes, undefined, "f");
    }
}
_Unregistration_credential = new WeakMap(), _Unregistration_deposit = new WeakMap(), _Unregistration_originalBytes = new WeakMap(); //# sourceMappingURL=Unregistration.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UpdateDelegateRepresentative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpdateDelegateRepresentative",
    ()=>UpdateDelegateRepresentative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Common/Anchor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReaderState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
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
var _UpdateDelegateRepresentative_drepCredential, _UpdateDelegateRepresentative_anchor, _UpdateDelegateRepresentative_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class UpdateDelegateRepresentative {
    constructor(drepCredential, anchor){
        _UpdateDelegateRepresentative_drepCredential.set(this, void 0);
        _UpdateDelegateRepresentative_anchor.set(this, void 0);
        _UpdateDelegateRepresentative_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _UpdateDelegateRepresentative_drepCredential, drepCredential, "f");
        __classPrivateFieldSet(this, _UpdateDelegateRepresentative_anchor, anchor, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _UpdateDelegateRepresentative_originalBytes, "f")) return __classPrivateFieldGet(this, _UpdateDelegateRepresentative_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _UpdateDelegateRepresentative_drepCredential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _UpdateDelegateRepresentative_drepCredential, "f").hash, 'hex'));
        if (__classPrivateFieldGet(this, _UpdateDelegateRepresentative_anchor, "f")) {
            writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _UpdateDelegateRepresentative_anchor, "f").toCbor()));
        } else {
            writer.writeNull();
        }
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        let anchor;
        if (reader.peekState() === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReaderState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReaderState"].Null) {
            reader.readNull();
        } else {
            anchor = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        }
        reader.readEndArray();
        const cert = new UpdateDelegateRepresentative({
            hash,
            type
        }, anchor);
        __classPrivateFieldSet(cert, _UpdateDelegateRepresentative_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].UpdateDelegateRepresentative,
            anchor: __classPrivateFieldGet(this, _UpdateDelegateRepresentative_anchor, "f") ? __classPrivateFieldGet(this, _UpdateDelegateRepresentative_anchor, "f").toCore() : null,
            dRepCredential: __classPrivateFieldGet(this, _UpdateDelegateRepresentative_drepCredential, "f")
        };
    }
    static fromCore(cert) {
        return new UpdateDelegateRepresentative(cert.dRepCredential, cert.anchor ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Common$2f$Anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"].fromCore(cert.anchor) : undefined);
    }
    credential() {
        return __classPrivateFieldGet(this, _UpdateDelegateRepresentative_drepCredential, "f");
    }
    anchor() {
        return __classPrivateFieldGet(this, _UpdateDelegateRepresentative_anchor, "f");
    }
}
_UpdateDelegateRepresentative_drepCredential = new WeakMap(), _UpdateDelegateRepresentative_anchor = new WeakMap(), _UpdateDelegateRepresentative_originalBytes = new WeakMap(); //# sourceMappingURL=UpdateDelegateRepresentative.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoteDelegation",
    ()=>VoteDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)");
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
var _VoteDelegation_credential, _VoteDelegation_dRep, _VoteDelegation_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class VoteDelegation {
    constructor(stakeCredential, dRep){
        _VoteDelegation_credential.set(this, void 0);
        _VoteDelegation_dRep.set(this, void 0);
        _VoteDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _VoteDelegation_credential, stakeCredential, "f");
        __classPrivateFieldSet(this, _VoteDelegation_dRep, dRep, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _VoteDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _VoteDelegation_originalBytes, "f");
        writer.writeStartArray(3);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _VoteDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _VoteDelegation_credential, "f").hash, 'hex'));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _VoteDelegation_dRep, "f").toCbor()));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 3 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const dRep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        reader.readEndArray();
        const cert = new VoteDelegation({
            hash,
            type
        }, dRep);
        __classPrivateFieldSet(cert, _VoteDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].VoteDelegation,
            dRep: __classPrivateFieldGet(this, _VoteDelegation_dRep, "f").toCore(),
            stakeCredential: __classPrivateFieldGet(this, _VoteDelegation_credential, "f")
        };
    }
    static fromCore(deleg) {
        return new VoteDelegation(deleg.stakeCredential, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCore(deleg.dRep));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _VoteDelegation_credential, "f");
    }
    dRep() {
        return __classPrivateFieldGet(this, _VoteDelegation_dRep, "f");
    }
}
_VoteDelegation_credential = new WeakMap(), _VoteDelegation_dRep = new WeakMap(), _VoteDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=VoteDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteRegistrationDelegation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoteRegistrationDelegation",
    ()=>VoteRegistrationDelegation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+crypto@0.2.3/node_modules/@cardano-sdk/crypto/dist/esm/hexTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborWriter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)");
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
var _VoteRegistrationDelegation_credential, _VoteRegistrationDelegation_dRep, _VoteRegistrationDelegation_deposit, _VoteRegistrationDelegation_originalBytes;
;
;
;
;
;
;
;
const EMBEDDED_GROUP_SIZE = 2;
class VoteRegistrationDelegation {
    constructor(stakeCredential, deposit, dRep){
        _VoteRegistrationDelegation_credential.set(this, void 0);
        _VoteRegistrationDelegation_dRep.set(this, void 0);
        _VoteRegistrationDelegation_deposit.set(this, void 0);
        _VoteRegistrationDelegation_originalBytes.set(this, undefined);
        __classPrivateFieldSet(this, _VoteRegistrationDelegation_credential, stakeCredential, "f");
        __classPrivateFieldSet(this, _VoteRegistrationDelegation_deposit, deposit, "f");
        __classPrivateFieldSet(this, _VoteRegistrationDelegation_dRep, dRep, "f");
    }
    toCbor() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborWriter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborWriter"]();
        if (__classPrivateFieldGet(this, _VoteRegistrationDelegation_originalBytes, "f")) return __classPrivateFieldGet(this, _VoteRegistrationDelegation_originalBytes, "f");
        writer.writeStartArray(4);
        writer.writeInt(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation);
        writer.writeStartArray(EMBEDDED_GROUP_SIZE);
        writer.writeInt(__classPrivateFieldGet(this, _VoteRegistrationDelegation_credential, "f").type);
        writer.writeByteString(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(__classPrivateFieldGet(this, _VoteRegistrationDelegation_credential, "f").hash, 'hex'));
        writer.writeEncodedValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$util$2f$misc$2f$encoding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(__classPrivateFieldGet(this, _VoteRegistrationDelegation_dRep, "f").toCbor()));
        writer.writeInt(__classPrivateFieldGet(this, _VoteRegistrationDelegation_deposit, "f"));
        return writer.encodeAsHex();
    }
    static fromCbor(cbor) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        const length = reader.readStartArray();
        if (length !== 4) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of 4 elements, but got an array of ${length} elements`);
        const kind = Number(reader.readInt());
        if (kind !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected certificate kind ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation}, but got ${kind}`);
        const credLength = reader.readStartArray();
        if (credLength !== EMBEDDED_GROUP_SIZE) throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidArgumentError"]('cbor', `Expected an array of ${EMBEDDED_GROUP_SIZE} elements, but got an array of ${length} elements`);
        const type = Number(reader.readInt());
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$crypto$40$0$2e$2$2e$3$2f$node_modules$2f40$cardano$2d$sdk$2f$crypto$2f$dist$2f$esm$2f$hexTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash28ByteBase16"](__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readByteString()));
        reader.readEndArray();
        const dRep = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCbor(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$primitives$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexBlob"].fromBytes(reader.readEncodedValue()));
        const deposit = reader.readInt();
        reader.readEndArray();
        const cert = new VoteRegistrationDelegation({
            hash,
            type
        }, deposit, dRep);
        __classPrivateFieldSet(cert, _VoteRegistrationDelegation_originalBytes, cbor, "f");
        return cert;
    }
    toCore() {
        return {
            __typename: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].VoteRegistrationDelegation,
            dRep: __classPrivateFieldGet(this, _VoteRegistrationDelegation_dRep, "f").toCore(),
            deposit: __classPrivateFieldGet(this, _VoteRegistrationDelegation_deposit, "f"),
            stakeCredential: __classPrivateFieldGet(this, _VoteRegistrationDelegation_credential, "f")
        };
    }
    static fromCore(deleg) {
        return new VoteRegistrationDelegation(deleg.stakeCredential, deleg.deposit, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"].fromCore(deleg.dRep));
    }
    stakeCredential() {
        return __classPrivateFieldGet(this, _VoteRegistrationDelegation_credential, "f");
    }
    deposit() {
        return __classPrivateFieldGet(this, _VoteRegistrationDelegation_deposit, "f");
    }
    dRep() {
        return __classPrivateFieldGet(this, _VoteRegistrationDelegation_dRep, "f");
    }
}
_VoteRegistrationDelegation_credential = new WeakMap(), _VoteRegistrationDelegation_dRep = new WeakMap(), _VoteRegistrationDelegation_deposit = new WeakMap(), _VoteRegistrationDelegation_originalBytes = new WeakMap(); //# sourceMappingURL=VoteRegistrationDelegation.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Certificate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certificate",
    ()=>Certificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$AuthCommitteeHot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/AuthCommitteeHot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/CBOR/CborReader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/CertificateKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Cardano/types/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$GenesisKeyDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/GenesisKeyDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+util@0.16.0/node_modules/@cardano-sdk/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousReward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousReward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRetirement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRetirement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$RegisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/RegisterDelegateRepresentative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$ResignCommitteeCold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/ResignCommitteeCold.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDeregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDeregistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistrationDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteRegistrationDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UnregisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UnregisterDelegateRepresentative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Unregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Unregistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UpdateDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UpdateDelegateRepresentative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteRegistrationDelegation.js [app-client] (ecmascript)");
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
var _Certificate_kind, _Certificate_genesisKeyDelegation, _Certificate_moveInstantaneousReward, _Certificate_poolRegistration, _Certificate_poolRetirement, _Certificate_stakeDelegation, _Certificate_stakeDeregistration, _Certificate_stakeRegistration, _Certificate_registration, _Certificate_unregistration, _Certificate_voteDelegation, _Certificate_stakeVoteDelegation, _Certificate_stakeRegistrationDelegation, _Certificate_voteRegistrationDelegation, _Certificate_stakeVoteRegistrationDelegation, _Certificate_authCommitteeHot, _Certificate_resignCommitteeCold, _Certificate_drepRegistration, _Certificate_drepUnregistration, _Certificate_updateDrep, _Certificate_originalBytes;
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
class Certificate {
    constructor(){
        _Certificate_kind.set(this, void 0);
        _Certificate_genesisKeyDelegation.set(this, void 0);
        _Certificate_moveInstantaneousReward.set(this, void 0);
        _Certificate_poolRegistration.set(this, void 0);
        _Certificate_poolRetirement.set(this, void 0);
        _Certificate_stakeDelegation.set(this, void 0);
        _Certificate_stakeDeregistration.set(this, void 0);
        _Certificate_stakeRegistration.set(this, void 0);
        _Certificate_registration.set(this, void 0);
        _Certificate_unregistration.set(this, void 0);
        _Certificate_voteDelegation.set(this, void 0);
        _Certificate_stakeVoteDelegation.set(this, void 0);
        _Certificate_stakeRegistrationDelegation.set(this, void 0);
        _Certificate_voteRegistrationDelegation.set(this, void 0);
        _Certificate_stakeVoteRegistrationDelegation.set(this, void 0);
        _Certificate_authCommitteeHot.set(this, void 0);
        _Certificate_resignCommitteeCold.set(this, void 0);
        _Certificate_drepRegistration.set(this, void 0);
        _Certificate_drepUnregistration.set(this, void 0);
        _Certificate_updateDrep.set(this, void 0);
        _Certificate_originalBytes.set(this, undefined);
    }
    toCbor() {
        if (__classPrivateFieldGet(this, _Certificate_originalBytes, "f")) return __classPrivateFieldGet(this, _Certificate_originalBytes, "f");
        let cbor;
        switch(__classPrivateFieldGet(this, _Certificate_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeRegistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeDeregistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement:
                cbor = __classPrivateFieldGet(this, _Certificate_poolRetirement, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration:
                cbor = __classPrivateFieldGet(this, _Certificate_poolRegistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards:
                cbor = __classPrivateFieldGet(this, _Certificate_moveInstantaneousReward, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_genesisKeyDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration:
                cbor = __classPrivateFieldGet(this, _Certificate_registration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration:
                cbor = __classPrivateFieldGet(this, _Certificate_unregistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_voteDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeVoteDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeRegistrationDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_voteRegistrationDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation:
                cbor = __classPrivateFieldGet(this, _Certificate_stakeVoteRegistrationDelegation, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot:
                cbor = __classPrivateFieldGet(this, _Certificate_authCommitteeHot, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold:
                cbor = __classPrivateFieldGet(this, _Certificate_resignCommitteeCold, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration:
                cbor = __classPrivateFieldGet(this, _Certificate_drepRegistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration:
                cbor = __classPrivateFieldGet(this, _Certificate_drepUnregistration, "f").toCbor();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep:
                cbor = __classPrivateFieldGet(this, _Certificate_updateDrep, "f").toCbor();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _Certificate_kind, "f")}`);
        }
        return cbor;
    }
    static fromCbor(cbor) {
        let certificate;
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$CBOR$2f$CborReader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CborReader"](cbor);
        reader.readStartArray();
        const kind = Number(reader.readInt());
        switch(kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration:
                certificate = Certificate.newStakeRegistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistration"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration:
                certificate = Certificate.newStakeDeregistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDeregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDeregistration"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation:
                certificate = Certificate.newStakeDelegation(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement:
                certificate = Certificate.newPoolRetirement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRetirement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRetirement"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration:
                certificate = Certificate.newPoolRegistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRegistration"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards:
                certificate = Certificate.newMoveInstantaneousRewardsCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousReward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousReward"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation:
                certificate = Certificate.newGenesisKeyDelegation(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$GenesisKeyDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenesisKeyDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration:
                certificate = Certificate.newRegistrationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registration"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration:
                certificate = Certificate.newUnregistrationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Unregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Unregistration"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation:
                certificate = Certificate.newVoteDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation:
                certificate = Certificate.newStakeVoteDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation:
                certificate = Certificate.newStakeRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistrationDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation:
                certificate = Certificate.newVoteRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteRegistrationDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation:
                certificate = Certificate.newStakeVoteRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteRegistrationDelegation"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot:
                certificate = Certificate.newAuthCommitteeHotCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$AuthCommitteeHot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthCommitteeHot"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold:
                certificate = Certificate.newResignCommitteeColdCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$ResignCommitteeCold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResignCommitteeCold"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration:
                certificate = Certificate.newRegisterDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$RegisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterDelegateRepresentative"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration:
                certificate = Certificate.newUnregisterDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UnregisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnregisterDelegateRepresentative"].fromCbor(cbor));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep:
                certificate = Certificate.newUpdateDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UpdateDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateDelegateRepresentative"].fromCbor(cbor));
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${kind}`);
        }
        __classPrivateFieldSet(certificate, _Certificate_originalBytes, cbor, "f");
        return certificate;
    }
    toCore() {
        let core;
        switch(__classPrivateFieldGet(this, _Certificate_kind, "f")){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration:
                core = __classPrivateFieldGet(this, _Certificate_stakeRegistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration:
                core = __classPrivateFieldGet(this, _Certificate_stakeDeregistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation:
                core = __classPrivateFieldGet(this, _Certificate_stakeDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement:
                core = __classPrivateFieldGet(this, _Certificate_poolRetirement, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration:
                core = __classPrivateFieldGet(this, _Certificate_poolRegistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards:
                core = __classPrivateFieldGet(this, _Certificate_moveInstantaneousReward, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation:
                core = __classPrivateFieldGet(this, _Certificate_genesisKeyDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration:
                core = __classPrivateFieldGet(this, _Certificate_registration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration:
                core = __classPrivateFieldGet(this, _Certificate_unregistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation:
                core = __classPrivateFieldGet(this, _Certificate_voteDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation:
                core = __classPrivateFieldGet(this, _Certificate_stakeVoteDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation:
                core = __classPrivateFieldGet(this, _Certificate_stakeRegistrationDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation:
                core = __classPrivateFieldGet(this, _Certificate_voteRegistrationDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation:
                core = __classPrivateFieldGet(this, _Certificate_stakeVoteRegistrationDelegation, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot:
                core = __classPrivateFieldGet(this, _Certificate_authCommitteeHot, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold:
                core = __classPrivateFieldGet(this, _Certificate_resignCommitteeCold, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration:
                core = __classPrivateFieldGet(this, _Certificate_drepRegistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration:
                core = __classPrivateFieldGet(this, _Certificate_drepUnregistration, "f").toCore();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep:
                core = __classPrivateFieldGet(this, _Certificate_updateDrep, "f").toCore();
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"](`Unexpected kind value: ${__classPrivateFieldGet(this, _Certificate_kind, "f")}`);
        }
        return core;
    }
    static fromCore(certificate) {
        let cert;
        switch(certificate.__typename){
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeRegistration:
                cert = Certificate.newStakeRegistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistration"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeDeregistration:
                cert = Certificate.newStakeDeregistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDeregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDeregistration"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeDelegation:
                cert = Certificate.newStakeDelegation(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].PoolRetirement:
                cert = Certificate.newPoolRetirement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRetirement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRetirement"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].PoolRegistration:
                cert = Certificate.newPoolRegistration(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRegistration"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].MIR:
                cert = Certificate.newMoveInstantaneousRewardsCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousReward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousReward"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].GenesisKeyDelegation:
                cert = Certificate.newGenesisKeyDelegation(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$GenesisKeyDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenesisKeyDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].Registration:
                cert = Certificate.newRegistrationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registration"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].Unregistration:
                cert = Certificate.newUnregistrationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Unregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Unregistration"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].VoteDelegation:
                cert = Certificate.newVoteDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeVoteDelegation:
                cert = Certificate.newStakeVoteDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeRegistrationDelegation:
                cert = Certificate.newStakeRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistrationDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].VoteRegistrationDelegation:
                cert = Certificate.newVoteRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteRegistrationDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].StakeVoteRegistrationDelegation:
                cert = Certificate.newStakeVoteRegistrationDelegationCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteRegistrationDelegation"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].AuthorizeCommitteeHot:
                cert = Certificate.newAuthCommitteeHotCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$AuthCommitteeHot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthCommitteeHot"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].ResignCommitteeCold:
                cert = Certificate.newResignCommitteeColdCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$ResignCommitteeCold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResignCommitteeCold"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].RegisterDelegateRepresentative:
                cert = Certificate.newRegisterDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$RegisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterDelegateRepresentative"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].UnregisterDelegateRepresentative:
                cert = Certificate.newUnregisterDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UnregisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnregisterDelegateRepresentative"].fromCore(certificate));
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Cardano$2f$types$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateType"].UpdateDelegateRepresentative:
                cert = Certificate.newUpdateDelegateRepresentativeCert(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UpdateDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateDelegateRepresentative"].fromCore(certificate));
                break;
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$util$40$0$2e$16$2e$0$2f$node_modules$2f40$cardano$2d$sdk$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('Unexpected certificate type');
        }
        return cert;
    }
    static newStakeRegistration(stakeRegistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeRegistration, stakeRegistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistration, "f");
        return cert;
    }
    static newStakeDeregistration(stakeDeregistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeDeregistration, stakeDeregistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDeregistration, "f");
        return cert;
    }
    static newStakeDelegation(stakeDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeDelegation, stakeDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeDelegation, "f");
        return cert;
    }
    static newPoolRegistration(poolRegistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_poolRegistration, poolRegistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRegistration, "f");
        return cert;
    }
    static newPoolRetirement(poolRetirement) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_poolRetirement, poolRetirement, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].PoolRetirement, "f");
        return cert;
    }
    static newGenesisKeyDelegation(genesisKeyDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_genesisKeyDelegation, genesisKeyDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].GenesisKeyDelegation, "f");
        return cert;
    }
    static newMoveInstantaneousRewardsCert(moveInstantaneousRewards) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_moveInstantaneousReward, moveInstantaneousRewards, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].MoveInstantaneousRewards, "f");
        return cert;
    }
    static newRegistrationCert(registration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_registration, registration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Registration, "f");
        return cert;
    }
    static newUnregistrationCert(unregistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_unregistration, unregistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].Unregistration, "f");
        return cert;
    }
    static newVoteDelegationCert(voteDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_voteDelegation, voteDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteDelegation, "f");
        return cert;
    }
    static newStakeVoteDelegationCert(stakeVoteDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeVoteDelegation, stakeVoteDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteDelegation, "f");
        return cert;
    }
    static newStakeRegistrationDelegationCert(stakeRegistrationDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeRegistrationDelegation, stakeRegistrationDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeRegistrationDelegation, "f");
        return cert;
    }
    static newVoteRegistrationDelegationCert(voteRegistrationDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_voteRegistrationDelegation, voteRegistrationDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].VoteRegistrationDelegation, "f");
        return cert;
    }
    static newStakeVoteRegistrationDelegationCert(stakeVoteRegistrationDelegation) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_stakeVoteRegistrationDelegation, stakeVoteRegistrationDelegation, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].StakeVoteRegistrationDelegation, "f");
        return cert;
    }
    static newAuthCommitteeHotCert(authCommitteeHot) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_authCommitteeHot, authCommitteeHot, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].AuthCommitteeHot, "f");
        return cert;
    }
    static newResignCommitteeColdCert(resignCommitteeCold) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_resignCommitteeCold, resignCommitteeCold, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].ResignCommitteeCold, "f");
        return cert;
    }
    static newRegisterDelegateRepresentativeCert(drepRegistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_drepRegistration, drepRegistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepRegistration, "f");
        return cert;
    }
    static newUnregisterDelegateRepresentativeCert(drepUnregistration) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_drepUnregistration, drepUnregistration, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].DrepUnregistration, "f");
        return cert;
    }
    static newUpdateDelegateRepresentativeCert(updateDrep) {
        const cert = new Certificate();
        __classPrivateFieldSet(cert, _Certificate_updateDrep, updateDrep, "f");
        __classPrivateFieldSet(cert, _Certificate_kind, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$CertificateKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateKind"].UpdateDrep, "f");
        return cert;
    }
    kind() {
        return __classPrivateFieldGet(this, _Certificate_kind, "f");
    }
    asStakeRegistration() {
        return __classPrivateFieldGet(this, _Certificate_stakeRegistration, "f");
    }
    asStakeDeregistration() {
        return __classPrivateFieldGet(this, _Certificate_stakeDeregistration, "f");
    }
    asStakeDelegation() {
        return __classPrivateFieldGet(this, _Certificate_stakeDelegation, "f");
    }
    asPoolRegistration() {
        return __classPrivateFieldGet(this, _Certificate_poolRegistration, "f");
    }
    asPoolRetirement() {
        return __classPrivateFieldGet(this, _Certificate_poolRetirement, "f");
    }
    asGenesisKeyDelegation() {
        return __classPrivateFieldGet(this, _Certificate_genesisKeyDelegation, "f");
    }
    asMoveInstantaneousRewardsCert() {
        return __classPrivateFieldGet(this, _Certificate_moveInstantaneousReward, "f");
    }
    asRegistrationCert() {
        return __classPrivateFieldGet(this, _Certificate_registration, "f");
    }
    asUnregistrationCert() {
        return __classPrivateFieldGet(this, _Certificate_unregistration, "f");
    }
    asVoteDelegationCert() {
        return __classPrivateFieldGet(this, _Certificate_voteDelegation, "f");
    }
    asStakeVoteDelegationCert() {
        return __classPrivateFieldGet(this, _Certificate_stakeVoteDelegation, "f");
    }
    asStakeRegistrationDelegationCert() {
        return __classPrivateFieldGet(this, _Certificate_stakeRegistrationDelegation, "f");
    }
    asVoteRegistrationDelegationCert() {
        return __classPrivateFieldGet(this, _Certificate_voteRegistrationDelegation, "f");
    }
    asStakeVoteRegistrationDelegationCert() {
        return __classPrivateFieldGet(this, _Certificate_stakeVoteRegistrationDelegation, "f");
    }
    asAuthCommitteeHotCert() {
        return __classPrivateFieldGet(this, _Certificate_authCommitteeHot, "f");
    }
    asResignCommitteeColdCert() {
        return __classPrivateFieldGet(this, _Certificate_resignCommitteeCold, "f");
    }
    asRegisterDelegateRepresentativeCert() {
        return __classPrivateFieldGet(this, _Certificate_drepRegistration, "f");
    }
    asUnregisterDelegateRepresentativeCert() {
        return __classPrivateFieldGet(this, _Certificate_drepUnregistration, "f");
    }
    asUpdateDelegateRepresentativeCert() {
        return __classPrivateFieldGet(this, _Certificate_updateDrep, "f");
    }
}
_Certificate_kind = new WeakMap(), _Certificate_genesisKeyDelegation = new WeakMap(), _Certificate_moveInstantaneousReward = new WeakMap(), _Certificate_poolRegistration = new WeakMap(), _Certificate_poolRetirement = new WeakMap(), _Certificate_stakeDelegation = new WeakMap(), _Certificate_stakeDeregistration = new WeakMap(), _Certificate_stakeRegistration = new WeakMap(), _Certificate_registration = new WeakMap(), _Certificate_unregistration = new WeakMap(), _Certificate_voteDelegation = new WeakMap(), _Certificate_stakeVoteDelegation = new WeakMap(), _Certificate_stakeRegistrationDelegation = new WeakMap(), _Certificate_voteRegistrationDelegation = new WeakMap(), _Certificate_stakeVoteRegistrationDelegation = new WeakMap(), _Certificate_authCommitteeHot = new WeakMap(), _Certificate_resignCommitteeCold = new WeakMap(), _Certificate_drepRegistration = new WeakMap(), _Certificate_drepUnregistration = new WeakMap(), _Certificate_updateDrep = new WeakMap(), _Certificate_originalBytes = new WeakMap(); //# sourceMappingURL=Certificate.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$MultiHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiHostName"],
    "Relay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Relay"],
    "RelayKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayKind"],
    "SingleHostAddr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostAddr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostAddr"],
    "SingleHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostName"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$MultiHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/MultiHostName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$Relay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/Relay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$SingleHostAddr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/SingleHostAddr.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiHostName"],
    "PoolMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolMetadata"],
    "PoolParams",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolParams"],
    "Relay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Relay"],
    "RelayKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayKind"],
    "SingleHostAddr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostAddr"],
    "SingleHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostName"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolMetadata$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolMetadata.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$PoolParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/PoolParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$Relay$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/Relay/index.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveInstantaneousReward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousReward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousReward"],
    "MoveInstantaneousRewardToOtherPot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToOtherPot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToOtherPot"],
    "MoveInstantaneousRewardToStakeCreds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToStakeCreds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToStakeCreds"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousReward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousReward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToStakeCreds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToStakeCreds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$MoveInstantaneousRewardToOtherPot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/MoveInstantaneousRewardToOtherPot.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"],
    "DRepKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRepKind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRepKind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$DRep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/DRep.js [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthCommitteeHot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$AuthCommitteeHot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthCommitteeHot"],
    "Certificate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Certificate"],
    "DRep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRep"],
    "DRepKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRepKind"],
    "GenesisKeyDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$GenesisKeyDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenesisKeyDelegation"],
    "MoveInstantaneousReward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousReward"],
    "MoveInstantaneousRewardToOtherPot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToOtherPot"],
    "MoveInstantaneousRewardToStakeCreds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveInstantaneousRewardToStakeCreds"],
    "MultiHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiHostName"],
    "PoolMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolMetadata"],
    "PoolParams",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolParams"],
    "PoolRegistration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRegistration"],
    "PoolRetirement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRetirement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PoolRetirement"],
    "RegisterDelegateRepresentative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$RegisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterDelegateRepresentative"],
    "Registration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registration"],
    "Relay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Relay"],
    "RelayKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayKind"],
    "ResignCommitteeCold",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$ResignCommitteeCold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResignCommitteeCold"],
    "SingleHostAddr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostAddr"],
    "SingleHostName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleHostName"],
    "StakeDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDelegation"],
    "StakeDeregistration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDeregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeDeregistration"],
    "StakeRegistration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistration"],
    "StakeRegistrationDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeRegistrationDelegation"],
    "StakeVoteDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteDelegation"],
    "StakeVoteRegistrationDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StakeVoteRegistrationDelegation"],
    "UnregisterDelegateRepresentative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UnregisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnregisterDelegateRepresentative"],
    "Unregistration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Unregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Unregistration"],
    "UpdateDelegateRepresentative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UpdateDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpdateDelegateRepresentative"],
    "VoteDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteDelegation"],
    "VoteRegistrationDelegation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoteRegistrationDelegation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Certificate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Certificate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$GenesisKeyDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/GenesisKeyDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolRetirement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolRetirement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeDeregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeDeregistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$PoolParams$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/PoolParams/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$MoveInstantaneousReward$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/MoveInstantaneousReward/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$DRep$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/DRep/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$Unregistration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/Unregistration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeRegistrationDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$VoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/VoteRegistrationDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$StakeVoteRegistrationDelegation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/StakeVoteRegistrationDelegation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$AuthCommitteeHot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/AuthCommitteeHot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$ResignCommitteeCold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/ResignCommitteeCold.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$RegisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/RegisterDelegateRepresentative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UnregisterDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UnregisterDelegateRepresentative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$cardano$2d$sdk$2b$core$40$0$2e$45$2e$10_bufferutil$40$4$2e$0$2e$9_rxjs$40$7$2e$8$2e$2_utf$2d$8$2d$validate$40$6$2e$0$2e$5$2f$node_modules$2f40$cardano$2d$sdk$2f$core$2f$dist$2f$esm$2f$Serialization$2f$Certificates$2f$UpdateDelegateRepresentative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@cardano-sdk+core@0.45.10_bufferutil@4.0.9_rxjs@7.8.2_utf-8-validate@6.0.5/node_modules/@cardano-sdk/core/dist/esm/Serialization/Certificates/UpdateDelegateRepresentative.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ecb53_%40cardano-sdk_core_dist_esm_Serialization_Certificates_cc81500d._.js.map