module.exports = [
"[project]/frontend/node_modules/.pnpm/@utxorpc+spec@0.16.0/node_modules/@utxorpc/spec/lib/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardano",
    ()=>cardano_pb_exports,
    "query",
    ()=>query_pb_exports,
    "queryConnect",
    ()=>query_connect_exports,
    "submit",
    ()=>submit_pb_exports,
    "submitConnect",
    ()=>submit_connect_exports,
    "sync",
    ()=>sync_pb_exports,
    "syncConnect",
    ()=>sync_connect_exports,
    "watch",
    ()=>watch_pb_exports,
    "watchConnect",
    ()=>watch_connect_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bufbuild+protobuf@1.10.1/node_modules/@bufbuild/protobuf/dist/esm/message.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bufbuild+protobuf@1.10.1/node_modules/@bufbuild/protobuf/dist/esm/proto3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bufbuild+protobuf@1.10.1/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bufbuild+protobuf@1.10.1/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/field_mask_pb.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@bufbuild+protobuf@1.10.1/node_modules/@bufbuild/protobuf/dist/esm/service-type.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// src/utxorpc/v1alpha/cardano/cardano_pb.ts
var cardano_pb_exports = {};
__export(cardano_pb_exports, {
    AddressPattern: ()=>AddressPattern,
    Anchor: ()=>Anchor,
    Asset: ()=>Asset,
    AssetPattern: ()=>AssetPattern,
    AuthCommitteeHotCert: ()=>AuthCommitteeHotCert,
    AuxData: ()=>AuxData,
    BigInt: ()=>BigInt,
    Block: ()=>Block,
    BlockBody: ()=>BlockBody,
    BlockHeader: ()=>BlockHeader,
    Certificate: ()=>Certificate,
    Collateral: ()=>Collateral,
    Constitution: ()=>Constitution,
    Constr: ()=>Constr,
    CostModel: ()=>CostModel,
    CostModels: ()=>CostModels,
    DRep: ()=>DRep,
    Datum: ()=>Datum,
    EvalError: ()=>EvalError,
    EvalTrace: ()=>EvalTrace,
    ExPrices: ()=>ExPrices,
    ExUnits: ()=>ExUnits,
    GenesisKeyDelegationCert: ()=>GenesisKeyDelegationCert,
    GovernanceAction: ()=>GovernanceAction,
    GovernanceActionId: ()=>GovernanceActionId,
    GovernanceActionProposal: ()=>GovernanceActionProposal,
    HardForkInitiationAction: ()=>HardForkInitiationAction,
    Metadata: ()=>Metadata,
    Metadatum: ()=>Metadatum,
    MetadatumArray: ()=>MetadatumArray,
    MetadatumMap: ()=>MetadatumMap,
    MetadatumPair: ()=>MetadatumPair,
    MirCert: ()=>MirCert,
    MirSource: ()=>MirSource,
    MirTarget: ()=>MirTarget,
    Multiasset: ()=>Multiasset,
    NativeScript: ()=>NativeScript,
    NativeScriptList: ()=>NativeScriptList,
    NewCommitteeCredentials: ()=>NewCommitteeCredentials,
    NewConstitutionAction: ()=>NewConstitutionAction,
    NoConfidenceAction: ()=>NoConfidenceAction,
    PParams: ()=>PParams,
    ParameterChangeAction: ()=>ParameterChangeAction,
    PlutusData: ()=>PlutusData,
    PlutusDataArray: ()=>PlutusDataArray,
    PlutusDataMap: ()=>PlutusDataMap,
    PlutusDataPair: ()=>PlutusDataPair,
    PoolMetadata: ()=>PoolMetadata,
    PoolRegistrationCert: ()=>PoolRegistrationCert,
    PoolRetirementCert: ()=>PoolRetirementCert,
    ProtocolVersion: ()=>ProtocolVersion,
    RationalNumber: ()=>RationalNumber,
    Redeemer: ()=>Redeemer,
    RedeemerPurpose: ()=>RedeemerPurpose,
    RegCert: ()=>RegCert,
    RegDRepCert: ()=>RegDRepCert,
    Relay: ()=>Relay,
    ResignCommitteeColdCert: ()=>ResignCommitteeColdCert,
    Script: ()=>Script,
    ScriptNOfK: ()=>ScriptNOfK,
    StakeCredential: ()=>StakeCredential,
    StakeDelegationCert: ()=>StakeDelegationCert,
    StakeRegDelegCert: ()=>StakeRegDelegCert,
    StakeVoteDelegCert: ()=>StakeVoteDelegCert,
    StakeVoteRegDelegCert: ()=>StakeVoteRegDelegCert,
    TreasuryWithdrawalsAction: ()=>TreasuryWithdrawalsAction,
    Tx: ()=>Tx,
    TxEval: ()=>TxEval,
    TxInput: ()=>TxInput,
    TxOutput: ()=>TxOutput,
    TxOutputPattern: ()=>TxOutputPattern,
    TxPattern: ()=>TxPattern,
    TxValidity: ()=>TxValidity,
    UnRegCert: ()=>UnRegCert,
    UnRegDRepCert: ()=>UnRegDRepCert,
    UpdateCommitteeAction: ()=>UpdateCommitteeAction,
    UpdateDRepCert: ()=>UpdateDRepCert,
    VKeyWitness: ()=>VKeyWitness,
    VoteDelegCert: ()=>VoteDelegCert,
    VoteRegDelegCert: ()=>VoteRegDelegCert,
    VotingThresholds: ()=>VotingThresholds,
    Withdrawal: ()=>Withdrawal,
    WithdrawalAmount: ()=>WithdrawalAmount,
    WitnessSet: ()=>WitnessSet
});
;
var RedeemerPurpose = /* @__PURE__ */ ((RedeemerPurpose2)=>{
    RedeemerPurpose2[RedeemerPurpose2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    RedeemerPurpose2[RedeemerPurpose2["SPEND"] = 1] = "SPEND";
    RedeemerPurpose2[RedeemerPurpose2["MINT"] = 2] = "MINT";
    RedeemerPurpose2[RedeemerPurpose2["CERT"] = 3] = "CERT";
    RedeemerPurpose2[RedeemerPurpose2["REWARD"] = 4] = "REWARD";
    RedeemerPurpose2[RedeemerPurpose2["VOTE"] = 5] = "VOTE";
    RedeemerPurpose2[RedeemerPurpose2["PROPOSE"] = 6] = "PROPOSE";
    return RedeemerPurpose2;
})(RedeemerPurpose || {});
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.setEnumType(RedeemerPurpose, "utxorpc.v1alpha.cardano.RedeemerPurpose", [
    {
        no: 0,
        name: "REDEEMER_PURPOSE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "REDEEMER_PURPOSE_SPEND"
    },
    {
        no: 2,
        name: "REDEEMER_PURPOSE_MINT"
    },
    {
        no: 3,
        name: "REDEEMER_PURPOSE_CERT"
    },
    {
        no: 4,
        name: "REDEEMER_PURPOSE_REWARD"
    },
    {
        no: 5,
        name: "REDEEMER_PURPOSE_VOTE"
    },
    {
        no: 6,
        name: "REDEEMER_PURPOSE_PROPOSE"
    }
]);
var MirSource = /* @__PURE__ */ ((MirSource2)=>{
    MirSource2[MirSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MirSource2[MirSource2["RESERVES"] = 1] = "RESERVES";
    MirSource2[MirSource2["TREASURY"] = 2] = "TREASURY";
    return MirSource2;
})(MirSource || {});
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.setEnumType(MirSource, "utxorpc.v1alpha.cardano.MirSource", [
    {
        no: 0,
        name: "MIR_SOURCE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "MIR_SOURCE_RESERVES"
    },
    {
        no: 2,
        name: "MIR_SOURCE_TREASURY"
    }
]);
var _Redeemer = class _Redeemer extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Purpose of the redeemer.
     *
     * @generated from field: utxorpc.v1alpha.cardano.RedeemerPurpose purpose = 1;
     */ this.purpose = 0 /* UNSPECIFIED */ ;
        /**
     * Index of the redee mer.
     *
     * @generated from field: uint32 index = 3;
     */ this.index = 0;
        /**
     * Original cbor-encoded data as seen on-chain
     *
     * @generated from field: bytes original_cbor = 5;
     */ this.originalCbor = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Redeemer().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Redeemer().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Redeemer().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Redeemer, a, b);
    }
};
_Redeemer.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Redeemer.typeName = "utxorpc.v1alpha.cardano.Redeemer";
_Redeemer.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].getEnumType(RedeemerPurpose)
        },
        {
            no: 2,
            name: "payload",
            kind: "message",
            T: PlutusData
        },
        {
            no: 3,
            name: "index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "ex_units",
            kind: "message",
            T: ExUnits
        },
        {
            no: 5,
            name: "original_cbor",
            kind: "scalar",
            T: 12
        }
    ]);
var Redeemer = _Redeemer;
var _TxInput = class _TxInput extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Hash of the previous transaction.
     *
     * @generated from field: bytes tx_hash = 1;
     */ this.txHash = new Uint8Array(0);
        /**
     * Index of the output in the previous transaction.
     *
     * @generated from field: uint32 output_index = 2;
     */ this.outputIndex = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxInput().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxInput().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxInput().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxInput, a, b);
    }
};
_TxInput.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxInput.typeName = "utxorpc.v1alpha.cardano.TxInput";
_TxInput.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tx_hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "output_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "as_output",
            kind: "message",
            T: TxOutput
        },
        {
            no: 4,
            name: "redeemer",
            kind: "message",
            T: Redeemer
        }
    ]);
var TxInput = _TxInput;
var _TxOutput = class _TxOutput extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Address receiving the output.
     *
     * @generated from field: bytes address = 1;
     */ this.address = new Uint8Array(0);
        /**
     * Amount of ADA in the output.
     *
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Additional native (non-ADA) assets in the output.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Multiasset assets = 3;
     */ this.assets = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxOutput().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxOutput().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxOutput().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxOutput, a, b);
    }
};
_TxOutput.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxOutput.typeName = "utxorpc.v1alpha.cardano.TxOutput";
_TxOutput.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "address",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "assets",
            kind: "message",
            T: Multiasset,
            repeated: true
        },
        {
            no: 4,
            name: "datum",
            kind: "message",
            T: Datum
        },
        {
            no: 5,
            name: "script",
            kind: "message",
            T: Script
        }
    ]);
var TxOutput = _TxOutput;
var _Datum = class _Datum extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Hash of this datum as seen on-chain
     *
     * @generated from field: bytes hash = 1;
     */ this.hash = new Uint8Array(0);
        /**
     * Original cbor-encoded data as seen on-chain
     *
     * @generated from field: bytes original_cbor = 3;
     */ this.originalCbor = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Datum().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Datum().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Datum().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Datum, a, b);
    }
};
_Datum.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Datum.typeName = "utxorpc.v1alpha.cardano.Datum";
_Datum.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "payload",
            kind: "message",
            T: PlutusData
        },
        {
            no: 3,
            name: "original_cbor",
            kind: "scalar",
            T: 12
        }
    ]);
var Datum = _Datum;
var _Asset = class _Asset extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Name of the custom asset.
     *
     * @generated from field: bytes name = 1;
     */ this.name = new Uint8Array(0);
        /**
     * Quantity of the custom asset in case of an output.
     *
     * @generated from field: uint64 output_coin = 2;
     */ this.outputCoin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Quantity of the custom asset in case of a mint.
     *
     * @generated from field: int64 mint_coin = 3;
     */ this.mintCoin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Asset().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Asset().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Asset().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Asset, a, b);
    }
};
_Asset.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Asset.typeName = "utxorpc.v1alpha.cardano.Asset";
_Asset.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "output_coin",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "mint_coin",
            kind: "scalar",
            T: 3
        }
    ]);
var Asset = _Asset;
var _Multiasset = class _Multiasset extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Policy ID governing the custom assets.
     *
     * @generated from field: bytes policy_id = 1;
     */ this.policyId = new Uint8Array(0);
        /**
     * List of custom assets.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Asset assets = 2;
     */ this.assets = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Multiasset().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Multiasset().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Multiasset().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Multiasset, a, b);
    }
};
_Multiasset.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Multiasset.typeName = "utxorpc.v1alpha.cardano.Multiasset";
_Multiasset.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "policy_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "assets",
            kind: "message",
            T: Asset,
            repeated: true
        },
        {
            no: 3,
            name: "redeemer",
            kind: "message",
            T: Redeemer
        }
    ]);
var Multiasset = _Multiasset;
var _TxValidity = class _TxValidity extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Start of the validity interval.
     *
     * @generated from field: uint64 start = 1;
     */ this.start = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * End of the validity interval (TTL: Time to Live).
     *
     * @generated from field: uint64 ttl = 2;
     */ this.ttl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxValidity().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxValidity().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxValidity().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxValidity, a, b);
    }
};
_TxValidity.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxValidity.typeName = "utxorpc.v1alpha.cardano.TxValidity";
_TxValidity.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "start",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "ttl",
            kind: "scalar",
            T: 4
        }
    ]);
var TxValidity = _TxValidity;
var _Collateral = class _Collateral extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Collateral inputs for the transaction.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.TxInput collateral = 1;
     */ this.collateral = [];
        /**
     * Total amount of collateral.
     *
     * @generated from field: uint64 total_collateral = 3;
     */ this.totalCollateral = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Collateral().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Collateral().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Collateral().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Collateral, a, b);
    }
};
_Collateral.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Collateral.typeName = "utxorpc.v1alpha.cardano.Collateral";
_Collateral.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "collateral",
            kind: "message",
            T: TxInput,
            repeated: true
        },
        {
            no: 2,
            name: "collateral_return",
            kind: "message",
            T: TxOutput
        },
        {
            no: 3,
            name: "total_collateral",
            kind: "scalar",
            T: 4
        }
    ]);
var Collateral = _Collateral;
var _Withdrawal = class _Withdrawal extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Address of the reward account.
     *
     * @generated from field: bytes reward_account = 1;
     */ this.rewardAccount = new Uint8Array(0);
        /**
     * Amount of ADA withdrawn.
     *
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Withdrawal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Withdrawal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Withdrawal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Withdrawal, a, b);
    }
};
_Withdrawal.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Withdrawal.typeName = "utxorpc.v1alpha.cardano.Withdrawal";
_Withdrawal.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "reward_account",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "redeemer",
            kind: "message",
            T: Redeemer
        }
    ]);
var Withdrawal = _Withdrawal;
var _WitnessSet = class _WitnessSet extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of VKey witnesses.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.VKeyWitness vkeywitness = 1;
     */ this.vkeywitness = [];
        /**
     * List of scripts.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Script script = 2;
     */ this.script = [];
        /**
     * List of Plutus data elements associated with the transaction.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.PlutusData plutus_datums = 3;
     */ this.plutusDatums = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WitnessSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WitnessSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WitnessSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WitnessSet, a, b);
    }
};
_WitnessSet.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WitnessSet.typeName = "utxorpc.v1alpha.cardano.WitnessSet";
_WitnessSet.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "vkeywitness",
            kind: "message",
            T: VKeyWitness,
            repeated: true
        },
        {
            no: 2,
            name: "script",
            kind: "message",
            T: Script,
            repeated: true
        },
        {
            no: 3,
            name: "plutus_datums",
            kind: "message",
            T: PlutusData,
            repeated: true
        }
    ]);
var WitnessSet = _WitnessSet;
var _AuxData = class _AuxData extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of auxiliary metadata elements.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Metadata metadata = 1;
     */ this.metadata = [];
        /**
     * List of auxiliary scripts.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Script scripts = 2;
     */ this.scripts = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AuxData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AuxData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AuxData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AuxData, a, b);
    }
};
_AuxData.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AuxData.typeName = "utxorpc.v1alpha.cardano.AuxData";
_AuxData.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "metadata",
            kind: "message",
            T: Metadata,
            repeated: true
        },
        {
            no: 2,
            name: "scripts",
            kind: "message",
            T: Script,
            repeated: true
        }
    ]);
var AuxData = _AuxData;
var _Tx = class _Tx extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transaction inputs
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.TxInput inputs = 1;
     */ this.inputs = [];
        /**
     * List of transaction outputs
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.TxOutput outputs = 2;
     */ this.outputs = [];
        /**
     * List of certificates
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Certificate certificates = 3;
     */ this.certificates = [];
        /**
     * List of withdrawals
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Withdrawal withdrawals = 4;
     */ this.withdrawals = [];
        /**
     * List of minted custom assets
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Multiasset mint = 5;
     */ this.mint = [];
        /**
     * List of reference inputs
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.TxInput reference_inputs = 6;
     */ this.referenceInputs = [];
        /**
     * Transaction fee in ADA
     *
     * @generated from field: uint64 fee = 9;
     */ this.fee = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Flag indicating whether the transaction was successful
     *
     * @generated from field: bool successful = 11;
     */ this.successful = false;
        /**
     * Hash of the transaction that serves as main identifier
     *
     * @generated from field: bytes hash = 13;
     */ this.hash = new Uint8Array(0);
        /**
     * List of governance actions proposed
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.GovernanceActionProposal proposals = 14;
     */ this.proposals = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Tx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Tx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Tx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Tx, a, b);
    }
};
_Tx.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Tx.typeName = "utxorpc.v1alpha.cardano.Tx";
_Tx.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "inputs",
            kind: "message",
            T: TxInput,
            repeated: true
        },
        {
            no: 2,
            name: "outputs",
            kind: "message",
            T: TxOutput,
            repeated: true
        },
        {
            no: 3,
            name: "certificates",
            kind: "message",
            T: Certificate,
            repeated: true
        },
        {
            no: 4,
            name: "withdrawals",
            kind: "message",
            T: Withdrawal,
            repeated: true
        },
        {
            no: 5,
            name: "mint",
            kind: "message",
            T: Multiasset,
            repeated: true
        },
        {
            no: 6,
            name: "reference_inputs",
            kind: "message",
            T: TxInput,
            repeated: true
        },
        {
            no: 7,
            name: "witnesses",
            kind: "message",
            T: WitnessSet
        },
        {
            no: 8,
            name: "collateral",
            kind: "message",
            T: Collateral
        },
        {
            no: 9,
            name: "fee",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "validity",
            kind: "message",
            T: TxValidity
        },
        {
            no: 11,
            name: "successful",
            kind: "scalar",
            T: 8
        },
        {
            no: 12,
            name: "auxiliary",
            kind: "message",
            T: AuxData
        },
        {
            no: 13,
            name: "hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 14,
            name: "proposals",
            kind: "message",
            T: GovernanceActionProposal,
            repeated: true
        }
    ]);
var Tx = _Tx;
var _GovernanceActionProposal = class _GovernanceActionProposal extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The amount deposited for the governance action
     *
     * @generated from field: uint64 deposit = 1;
     */ this.deposit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The reward account the deposit should be returned to
     *
     * @generated from field: bytes reward_account = 2;
     */ this.rewardAccount = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GovernanceActionProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GovernanceActionProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GovernanceActionProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_GovernanceActionProposal, a, b);
    }
};
_GovernanceActionProposal.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_GovernanceActionProposal.typeName = "utxorpc.v1alpha.cardano.GovernanceActionProposal";
_GovernanceActionProposal.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "deposit",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "reward_account",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "gov_action",
            kind: "message",
            T: GovernanceAction
        },
        {
            no: 4,
            name: "anchor",
            kind: "message",
            T: Anchor
        }
    ]);
var GovernanceActionProposal = _GovernanceActionProposal;
var _GovernanceAction = class _GovernanceAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.GovernanceAction.governance_action
     */ this.governanceAction = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GovernanceAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GovernanceAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GovernanceAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_GovernanceAction, a, b);
    }
};
_GovernanceAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_GovernanceAction.typeName = "utxorpc.v1alpha.cardano.GovernanceAction";
_GovernanceAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "parameter_change_action",
            kind: "message",
            T: ParameterChangeAction,
            oneof: "governance_action"
        },
        {
            no: 2,
            name: "hard_fork_initiation_action",
            kind: "message",
            T: HardForkInitiationAction,
            oneof: "governance_action"
        },
        {
            no: 3,
            name: "treasury_withdrawals_action",
            kind: "message",
            T: TreasuryWithdrawalsAction,
            oneof: "governance_action"
        },
        {
            no: 4,
            name: "no_confidence_action",
            kind: "message",
            T: NoConfidenceAction,
            oneof: "governance_action"
        },
        {
            no: 5,
            name: "update_committee_action",
            kind: "message",
            T: UpdateCommitteeAction,
            oneof: "governance_action"
        },
        {
            no: 6,
            name: "new_constitution_action",
            kind: "message",
            T: NewConstitutionAction,
            oneof: "governance_action"
        },
        {
            no: 7,
            name: "info_action",
            kind: "scalar",
            T: 13,
            oneof: "governance_action"
        }
    ]);
var GovernanceAction = _GovernanceAction;
var _GovernanceActionId = class _GovernanceActionId extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes transaction_id = 1;
     */ this.transactionId = new Uint8Array(0);
        /**
     * @generated from field: uint32 governance_action_index = 2;
     */ this.governanceActionIndex = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GovernanceActionId().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GovernanceActionId().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GovernanceActionId().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_GovernanceActionId, a, b);
    }
};
_GovernanceActionId.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_GovernanceActionId.typeName = "utxorpc.v1alpha.cardano.GovernanceActionId";
_GovernanceActionId.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "transaction_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "governance_action_index",
            kind: "scalar",
            T: 13
        }
    ]);
var GovernanceActionId = _GovernanceActionId;
var _ParameterChangeAction = class _ParameterChangeAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes policy_hash = 3;
     */ this.policyHash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ParameterChangeAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ParameterChangeAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ParameterChangeAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ParameterChangeAction, a, b);
    }
};
_ParameterChangeAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ParameterChangeAction.typeName = "utxorpc.v1alpha.cardano.ParameterChangeAction";
_ParameterChangeAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "gov_action_id",
            kind: "message",
            T: GovernanceActionId
        },
        {
            no: 2,
            name: "protocol_param_update",
            kind: "message",
            T: PParams
        },
        {
            no: 3,
            name: "policy_hash",
            kind: "scalar",
            T: 12
        }
    ]);
var ParameterChangeAction = _ParameterChangeAction;
var _HardForkInitiationAction = class _HardForkInitiationAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _HardForkInitiationAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _HardForkInitiationAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _HardForkInitiationAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_HardForkInitiationAction, a, b);
    }
};
_HardForkInitiationAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_HardForkInitiationAction.typeName = "utxorpc.v1alpha.cardano.HardForkInitiationAction";
_HardForkInitiationAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "gov_action_id",
            kind: "message",
            T: GovernanceActionId
        },
        {
            no: 2,
            name: "protocol_version",
            kind: "message",
            T: ProtocolVersion
        }
    ]);
var HardForkInitiationAction = _HardForkInitiationAction;
var _TreasuryWithdrawalsAction = class _TreasuryWithdrawalsAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * A map of the withdrawals to make
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.WithdrawalAmount withdrawals = 1;
     */ this.withdrawals = [];
        /**
     * @generated from field: bytes policy_hash = 2;
     */ this.policyHash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TreasuryWithdrawalsAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TreasuryWithdrawalsAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TreasuryWithdrawalsAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TreasuryWithdrawalsAction, a, b);
    }
};
_TreasuryWithdrawalsAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TreasuryWithdrawalsAction.typeName = "utxorpc.v1alpha.cardano.TreasuryWithdrawalsAction";
_TreasuryWithdrawalsAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "withdrawals",
            kind: "message",
            T: WithdrawalAmount,
            repeated: true
        },
        {
            no: 2,
            name: "policy_hash",
            kind: "scalar",
            T: 12
        }
    ]);
var TreasuryWithdrawalsAction = _TreasuryWithdrawalsAction;
var _WithdrawalAmount = class _WithdrawalAmount extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes reward_account = 1;
     */ this.rewardAccount = new Uint8Array(0);
        /**
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WithdrawalAmount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WithdrawalAmount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WithdrawalAmount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WithdrawalAmount, a, b);
    }
};
_WithdrawalAmount.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WithdrawalAmount.typeName = "utxorpc.v1alpha.cardano.WithdrawalAmount";
_WithdrawalAmount.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "reward_account",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var WithdrawalAmount = _WithdrawalAmount;
var _NoConfidenceAction = class _NoConfidenceAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _NoConfidenceAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _NoConfidenceAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _NoConfidenceAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_NoConfidenceAction, a, b);
    }
};
_NoConfidenceAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_NoConfidenceAction.typeName = "utxorpc.v1alpha.cardano.NoConfidenceAction";
_NoConfidenceAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "gov_action_id",
            kind: "message",
            T: GovernanceActionId
        }
    ]);
var NoConfidenceAction = _NoConfidenceAction;
var _UpdateCommitteeAction = class _UpdateCommitteeAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Committee members to remove (if any)
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.StakeCredential remove_committee_credentials = 2;
     */ this.removeCommitteeCredentials = [];
        /**
     * The new committee members
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.NewCommitteeCredentials new_committee_credentials = 3;
     */ this.newCommitteeCredentials = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UpdateCommitteeAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UpdateCommitteeAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UpdateCommitteeAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_UpdateCommitteeAction, a, b);
    }
};
_UpdateCommitteeAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_UpdateCommitteeAction.typeName = "utxorpc.v1alpha.cardano.UpdateCommitteeAction";
_UpdateCommitteeAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "gov_action_id",
            kind: "message",
            T: GovernanceActionId
        },
        {
            no: 2,
            name: "remove_committee_credentials",
            kind: "message",
            T: StakeCredential,
            repeated: true
        },
        {
            no: 3,
            name: "new_committee_credentials",
            kind: "message",
            T: NewCommitteeCredentials,
            repeated: true
        },
        {
            no: 4,
            name: "new_committee_threshold",
            kind: "message",
            T: RationalNumber
        }
    ]);
var UpdateCommitteeAction = _UpdateCommitteeAction;
var _NewConstitutionAction = class _NewConstitutionAction extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _NewConstitutionAction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _NewConstitutionAction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _NewConstitutionAction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_NewConstitutionAction, a, b);
    }
};
_NewConstitutionAction.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_NewConstitutionAction.typeName = "utxorpc.v1alpha.cardano.NewConstitutionAction";
_NewConstitutionAction.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "gov_action_id",
            kind: "message",
            T: GovernanceActionId
        },
        {
            no: 2,
            name: "constitution",
            kind: "message",
            T: Constitution
        }
    ]);
var NewConstitutionAction = _NewConstitutionAction;
var _Constitution = class _Constitution extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Hash of the document
     *
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Constitution().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Constitution().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Constitution().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Constitution, a, b);
    }
};
_Constitution.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Constitution.typeName = "utxorpc.v1alpha.cardano.Constitution";
_Constitution.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "anchor",
            kind: "message",
            T: Anchor
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        }
    ]);
var Constitution = _Constitution;
var _NewCommitteeCredentials = class _NewCommitteeCredentials extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint32 expires_epoch = 2;
     */ this.expiresEpoch = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _NewCommitteeCredentials().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _NewCommitteeCredentials().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _NewCommitteeCredentials().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_NewCommitteeCredentials, a, b);
    }
};
_NewCommitteeCredentials.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_NewCommitteeCredentials.typeName = "utxorpc.v1alpha.cardano.NewCommitteeCredentials";
_NewCommitteeCredentials.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "committee_cold_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "expires_epoch",
            kind: "scalar",
            T: 13
        }
    ]);
var NewCommitteeCredentials = _NewCommitteeCredentials;
var _BlockHeader = class _BlockHeader extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Slot number.
     *
     * @generated from field: uint64 slot = 1;
     */ this.slot = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Block hash.
     *
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        /**
     * Block height.
     *
     * @generated from field: uint64 height = 3;
     */ this.height = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _BlockHeader().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BlockHeader().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BlockHeader().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_BlockHeader, a, b);
    }
};
_BlockHeader.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_BlockHeader.typeName = "utxorpc.v1alpha.cardano.BlockHeader";
_BlockHeader.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "slot",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "height",
            kind: "scalar",
            T: 4
        }
    ]);
var BlockHeader = _BlockHeader;
var _BlockBody = class _BlockBody extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transactions.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Tx tx = 1;
     */ this.tx = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _BlockBody().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BlockBody().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BlockBody().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_BlockBody, a, b);
    }
};
_BlockBody.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_BlockBody.typeName = "utxorpc.v1alpha.cardano.BlockBody";
_BlockBody.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tx",
            kind: "message",
            T: Tx,
            repeated: true
        }
    ]);
var BlockBody = _BlockBody;
var _Block = class _Block extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Block().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Block().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Block().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Block, a, b);
    }
};
_Block.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Block.typeName = "utxorpc.v1alpha.cardano.Block";
_Block.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "header",
            kind: "message",
            T: BlockHeader
        },
        {
            no: 2,
            name: "body",
            kind: "message",
            T: BlockBody
        }
    ]);
var Block = _Block;
var _VKeyWitness = class _VKeyWitness extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Verification key.
     *
     * @generated from field: bytes vkey = 1;
     */ this.vkey = new Uint8Array(0);
        /**
     * Signature generated using the associated private key.
     *
     * @generated from field: bytes signature = 2;
     */ this.signature = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _VKeyWitness().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _VKeyWitness().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _VKeyWitness().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_VKeyWitness, a, b);
    }
};
_VKeyWitness.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_VKeyWitness.typeName = "utxorpc.v1alpha.cardano.VKeyWitness";
_VKeyWitness.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "vkey",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "signature",
            kind: "scalar",
            T: 12
        }
    ]);
var VKeyWitness = _VKeyWitness;
var _NativeScript = class _NativeScript extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.NativeScript.native_script
     */ this.nativeScript = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _NativeScript().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _NativeScript().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _NativeScript().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_NativeScript, a, b);
    }
};
_NativeScript.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_NativeScript.typeName = "utxorpc.v1alpha.cardano.NativeScript";
_NativeScript.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "script_pubkey",
            kind: "scalar",
            T: 12,
            oneof: "native_script"
        },
        {
            no: 2,
            name: "script_all",
            kind: "message",
            T: NativeScriptList,
            oneof: "native_script"
        },
        {
            no: 3,
            name: "script_any",
            kind: "message",
            T: NativeScriptList,
            oneof: "native_script"
        },
        {
            no: 4,
            name: "script_n_of_k",
            kind: "message",
            T: ScriptNOfK,
            oneof: "native_script"
        },
        {
            no: 5,
            name: "invalid_before",
            kind: "scalar",
            T: 4,
            oneof: "native_script"
        },
        {
            no: 6,
            name: "invalid_hereafter",
            kind: "scalar",
            T: 4,
            oneof: "native_script"
        }
    ]);
var NativeScript = _NativeScript;
var _NativeScriptList = class _NativeScriptList extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of native scripts.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.NativeScript items = 1;
     */ this.items = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _NativeScriptList().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _NativeScriptList().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _NativeScriptList().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_NativeScriptList, a, b);
    }
};
_NativeScriptList.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_NativeScriptList.typeName = "utxorpc.v1alpha.cardano.NativeScriptList";
_NativeScriptList.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: NativeScript,
            repeated: true
        }
    ]);
var NativeScriptList = _NativeScriptList;
var _ScriptNOfK = class _ScriptNOfK extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The number of required satisfied scripts.
     *
     * @generated from field: uint32 k = 1;
     */ this.k = 0;
        /**
     * List of native scripts.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.NativeScript scripts = 2;
     */ this.scripts = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ScriptNOfK().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ScriptNOfK().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ScriptNOfK().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ScriptNOfK, a, b);
    }
};
_ScriptNOfK.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ScriptNOfK.typeName = "utxorpc.v1alpha.cardano.ScriptNOfK";
_ScriptNOfK.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "k",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "scripts",
            kind: "message",
            T: NativeScript,
            repeated: true
        }
    ]);
var ScriptNOfK = _ScriptNOfK;
var _Constr = class _Constr extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint32 tag = 1;
     */ this.tag = 0;
        /**
     * @generated from field: uint64 any_constructor = 2;
     */ this.anyConstructor = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.PlutusData fields = 3;
     */ this.fields = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Constr().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Constr().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Constr().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Constr, a, b);
    }
};
_Constr.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Constr.typeName = "utxorpc.v1alpha.cardano.Constr";
_Constr.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tag",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "any_constructor",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "fields",
            kind: "message",
            T: PlutusData,
            repeated: true
        }
    ]);
var Constr = _Constr;
var _BigInt = class _BigInt extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.BigInt.big_int
     */ this.bigInt = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _BigInt().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BigInt().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BigInt().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_BigInt, a, b);
    }
};
_BigInt.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_BigInt.typeName = "utxorpc.v1alpha.cardano.BigInt";
_BigInt.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "int",
            kind: "scalar",
            T: 3,
            oneof: "big_int"
        },
        {
            no: 2,
            name: "big_u_int",
            kind: "scalar",
            T: 12,
            oneof: "big_int"
        },
        {
            no: 3,
            name: "big_n_int",
            kind: "scalar",
            T: 12,
            oneof: "big_int"
        }
    ]);
var BigInt = _BigInt;
var _PlutusDataPair = class _PlutusDataPair extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PlutusDataPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PlutusDataPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PlutusDataPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PlutusDataPair, a, b);
    }
};
_PlutusDataPair.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PlutusDataPair.typeName = "utxorpc.v1alpha.cardano.PlutusDataPair";
_PlutusDataPair.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "message",
            T: PlutusData
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: PlutusData
        }
    ]);
var PlutusDataPair = _PlutusDataPair;
var _PlutusData = class _PlutusData extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.PlutusData.plutus_data
     */ this.plutusData = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PlutusData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PlutusData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PlutusData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PlutusData, a, b);
    }
};
_PlutusData.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PlutusData.typeName = "utxorpc.v1alpha.cardano.PlutusData";
_PlutusData.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 2,
            name: "constr",
            kind: "message",
            T: Constr,
            oneof: "plutus_data"
        },
        {
            no: 3,
            name: "map",
            kind: "message",
            T: PlutusDataMap,
            oneof: "plutus_data"
        },
        {
            no: 4,
            name: "big_int",
            kind: "message",
            T: BigInt,
            oneof: "plutus_data"
        },
        {
            no: 5,
            name: "bounded_bytes",
            kind: "scalar",
            T: 12,
            oneof: "plutus_data"
        },
        {
            no: 6,
            name: "array",
            kind: "message",
            T: PlutusDataArray,
            oneof: "plutus_data"
        }
    ]);
var PlutusData = _PlutusData;
var _PlutusDataMap = class _PlutusDataMap extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of key-value pairs.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.PlutusDataPair pairs = 1;
     */ this.pairs = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PlutusDataMap().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PlutusDataMap().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PlutusDataMap().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PlutusDataMap, a, b);
    }
};
_PlutusDataMap.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PlutusDataMap.typeName = "utxorpc.v1alpha.cardano.PlutusDataMap";
_PlutusDataMap.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "pairs",
            kind: "message",
            T: PlutusDataPair,
            repeated: true
        }
    ]);
var PlutusDataMap = _PlutusDataMap;
var _PlutusDataArray = class _PlutusDataArray extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of Plutus data items.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.PlutusData items = 1;
     */ this.items = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PlutusDataArray().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PlutusDataArray().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PlutusDataArray().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PlutusDataArray, a, b);
    }
};
_PlutusDataArray.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PlutusDataArray.typeName = "utxorpc.v1alpha.cardano.PlutusDataArray";
_PlutusDataArray.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: PlutusData,
            repeated: true
        }
    ]);
var PlutusDataArray = _PlutusDataArray;
var _Script = class _Script extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.Script.script
     */ this.script = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Script().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Script().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Script().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Script, a, b);
    }
};
_Script.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Script.typeName = "utxorpc.v1alpha.cardano.Script";
_Script.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "native",
            kind: "message",
            T: NativeScript,
            oneof: "script"
        },
        {
            no: 2,
            name: "plutus_v1",
            kind: "scalar",
            T: 12,
            oneof: "script"
        },
        {
            no: 3,
            name: "plutus_v2",
            kind: "scalar",
            T: 12,
            oneof: "script"
        },
        {
            no: 4,
            name: "plutus_v3",
            kind: "scalar",
            T: 12,
            oneof: "script"
        }
    ]);
var Script = _Script;
var _Metadatum = class _Metadatum extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.Metadatum.metadatum
     */ this.metadatum = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Metadatum().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Metadatum().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Metadatum().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Metadatum, a, b);
    }
};
_Metadatum.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Metadatum.typeName = "utxorpc.v1alpha.cardano.Metadatum";
_Metadatum.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "int",
            kind: "scalar",
            T: 3,
            oneof: "metadatum"
        },
        {
            no: 2,
            name: "bytes",
            kind: "scalar",
            T: 12,
            oneof: "metadatum"
        },
        {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "metadatum"
        },
        {
            no: 4,
            name: "array",
            kind: "message",
            T: MetadatumArray,
            oneof: "metadatum"
        },
        {
            no: 5,
            name: "map",
            kind: "message",
            T: MetadatumMap,
            oneof: "metadatum"
        }
    ]);
var Metadatum = _Metadatum;
var _MetadatumArray = class _MetadatumArray extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.Metadatum items = 1;
     */ this.items = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MetadatumArray().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MetadatumArray().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MetadatumArray().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_MetadatumArray, a, b);
    }
};
_MetadatumArray.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_MetadatumArray.typeName = "utxorpc.v1alpha.cardano.MetadatumArray";
_MetadatumArray.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: Metadatum,
            repeated: true
        }
    ]);
var MetadatumArray = _MetadatumArray;
var _MetadatumMap = class _MetadatumMap extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.MetadatumPair pairs = 1;
     */ this.pairs = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MetadatumMap().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MetadatumMap().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MetadatumMap().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_MetadatumMap, a, b);
    }
};
_MetadatumMap.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_MetadatumMap.typeName = "utxorpc.v1alpha.cardano.MetadatumMap";
_MetadatumMap.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "pairs",
            kind: "message",
            T: MetadatumPair,
            repeated: true
        }
    ]);
var MetadatumMap = _MetadatumMap;
var _MetadatumPair = class _MetadatumPair extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MetadatumPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MetadatumPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MetadatumPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_MetadatumPair, a, b);
    }
};
_MetadatumPair.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_MetadatumPair.typeName = "utxorpc.v1alpha.cardano.MetadatumPair";
_MetadatumPair.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "key",
            kind: "message",
            T: Metadatum
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: Metadatum
        }
    ]);
var MetadatumPair = _MetadatumPair;
var _Metadata = class _Metadata extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 label = 1;
     */ this.label = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Metadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Metadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Metadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Metadata, a, b);
    }
};
_Metadata.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Metadata.typeName = "utxorpc.v1alpha.cardano.Metadata";
_Metadata.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "value",
            kind: "message",
            T: Metadatum
        }
    ]);
var Metadata = _Metadata;
var _StakeCredential = class _StakeCredential extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.StakeCredential.stake_credential
     */ this.stakeCredential = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _StakeCredential().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StakeCredential().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StakeCredential().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_StakeCredential, a, b);
    }
};
_StakeCredential.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_StakeCredential.typeName = "utxorpc.v1alpha.cardano.StakeCredential";
_StakeCredential.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "addr_key_hash",
            kind: "scalar",
            T: 12,
            oneof: "stake_credential"
        },
        {
            no: 2,
            name: "script_hash",
            kind: "scalar",
            T: 12,
            oneof: "stake_credential"
        }
    ]);
var StakeCredential = _StakeCredential;
var _RationalNumber = class _RationalNumber extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: int32 numerator = 1;
     */ this.numerator = 0;
        /**
     * @generated from field: uint32 denominator = 2;
     */ this.denominator = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _RationalNumber().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _RationalNumber().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _RationalNumber().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_RationalNumber, a, b);
    }
};
_RationalNumber.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_RationalNumber.typeName = "utxorpc.v1alpha.cardano.RationalNumber";
_RationalNumber.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "numerator",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "denominator",
            kind: "scalar",
            T: 13
        }
    ]);
var RationalNumber = _RationalNumber;
var _Relay = class _Relay extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes ip_v4 = 1;
     */ this.ipV4 = new Uint8Array(0);
        /**
     * @generated from field: bytes ip_v6 = 2;
     */ this.ipV6 = new Uint8Array(0);
        /**
     * @generated from field: string dns_name = 3;
     */ this.dnsName = "";
        /**
     * @generated from field: uint32 port = 4;
     */ this.port = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Relay().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Relay().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Relay().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Relay, a, b);
    }
};
_Relay.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Relay.typeName = "utxorpc.v1alpha.cardano.Relay";
_Relay.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ip_v4",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "ip_v6",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "dns_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "port",
            kind: "scalar",
            T: 13
        }
    ]);
var Relay = _Relay;
var _PoolMetadata = class _PoolMetadata extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: string url = 1;
     */ this.url = "";
        /**
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PoolMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PoolMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PoolMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PoolMetadata, a, b);
    }
};
_PoolMetadata.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PoolMetadata.typeName = "utxorpc.v1alpha.cardano.PoolMetadata";
_PoolMetadata.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        }
    ]);
var PoolMetadata = _PoolMetadata;
var _Certificate = class _Certificate extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.Certificate.certificate
     */ this.certificate = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Certificate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Certificate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Certificate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Certificate, a, b);
    }
};
_Certificate.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Certificate.typeName = "utxorpc.v1alpha.cardano.Certificate";
_Certificate.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_registration",
            kind: "message",
            T: StakeCredential,
            oneof: "certificate"
        },
        {
            no: 2,
            name: "stake_deregistration",
            kind: "message",
            T: StakeCredential,
            oneof: "certificate"
        },
        {
            no: 3,
            name: "stake_delegation",
            kind: "message",
            T: StakeDelegationCert,
            oneof: "certificate"
        },
        {
            no: 4,
            name: "pool_registration",
            kind: "message",
            T: PoolRegistrationCert,
            oneof: "certificate"
        },
        {
            no: 5,
            name: "pool_retirement",
            kind: "message",
            T: PoolRetirementCert,
            oneof: "certificate"
        },
        {
            no: 6,
            name: "genesis_key_delegation",
            kind: "message",
            T: GenesisKeyDelegationCert,
            oneof: "certificate"
        },
        {
            no: 7,
            name: "mir_cert",
            kind: "message",
            T: MirCert,
            oneof: "certificate"
        },
        {
            no: 8,
            name: "reg_cert",
            kind: "message",
            T: RegCert,
            oneof: "certificate"
        },
        {
            no: 9,
            name: "unreg_cert",
            kind: "message",
            T: UnRegCert,
            oneof: "certificate"
        },
        {
            no: 10,
            name: "vote_deleg_cert",
            kind: "message",
            T: VoteDelegCert,
            oneof: "certificate"
        },
        {
            no: 11,
            name: "stake_vote_deleg_cert",
            kind: "message",
            T: StakeVoteDelegCert,
            oneof: "certificate"
        },
        {
            no: 12,
            name: "stake_reg_deleg_cert",
            kind: "message",
            T: StakeRegDelegCert,
            oneof: "certificate"
        },
        {
            no: 13,
            name: "vote_reg_deleg_cert",
            kind: "message",
            T: VoteRegDelegCert,
            oneof: "certificate"
        },
        {
            no: 14,
            name: "stake_vote_reg_deleg_cert",
            kind: "message",
            T: StakeVoteRegDelegCert,
            oneof: "certificate"
        },
        {
            no: 15,
            name: "auth_committee_hot_cert",
            kind: "message",
            T: AuthCommitteeHotCert,
            oneof: "certificate"
        },
        {
            no: 16,
            name: "resign_committee_cold_cert",
            kind: "message",
            T: ResignCommitteeColdCert,
            oneof: "certificate"
        },
        {
            no: 17,
            name: "reg_drep_cert",
            kind: "message",
            T: RegDRepCert,
            oneof: "certificate"
        },
        {
            no: 18,
            name: "unreg_drep_cert",
            kind: "message",
            T: UnRegDRepCert,
            oneof: "certificate"
        },
        {
            no: 19,
            name: "update_drep_cert",
            kind: "message",
            T: UpdateDRepCert,
            oneof: "certificate"
        },
        {
            no: 100,
            name: "redeemer",
            kind: "message",
            T: Redeemer
        }
    ]);
var Certificate = _Certificate;
var _StakeDelegationCert = class _StakeDelegationCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Pool key hash.
     *
     * @generated from field: bytes pool_keyhash = 2;
     */ this.poolKeyhash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _StakeDelegationCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StakeDelegationCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StakeDelegationCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_StakeDelegationCert, a, b);
    }
};
_StakeDelegationCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_StakeDelegationCert.typeName = "utxorpc.v1alpha.cardano.StakeDelegationCert";
_StakeDelegationCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "pool_keyhash",
            kind: "scalar",
            T: 12
        }
    ]);
var StakeDelegationCert = _StakeDelegationCert;
var _PoolRegistrationCert = class _PoolRegistrationCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Operator key hash.
     *
     * @generated from field: bytes operator = 1;
     */ this.operator = new Uint8Array(0);
        /**
     * VRF key hash.
     *
     * @generated from field: bytes vrf_keyhash = 2;
     */ this.vrfKeyhash = new Uint8Array(0);
        /**
     * Pledge amount.
     *
     * @generated from field: uint64 pledge = 3;
     */ this.pledge = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Pool cost.
     *
     * @generated from field: uint64 cost = 4;
     */ this.cost = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Reward account.
     *
     * @generated from field: bytes reward_account = 6;
     */ this.rewardAccount = new Uint8Array(0);
        /**
     * List of pool owner key hashes.
     *
     * @generated from field: repeated bytes pool_owners = 7;
     */ this.poolOwners = [];
        /**
     * List of relays.
     *
     * @generated from field: repeated utxorpc.v1alpha.cardano.Relay relays = 8;
     */ this.relays = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PoolRegistrationCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PoolRegistrationCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PoolRegistrationCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PoolRegistrationCert, a, b);
    }
};
_PoolRegistrationCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PoolRegistrationCert.typeName = "utxorpc.v1alpha.cardano.PoolRegistrationCert";
_PoolRegistrationCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "operator",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "vrf_keyhash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "pledge",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "cost",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "margin",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 6,
            name: "reward_account",
            kind: "scalar",
            T: 12
        },
        {
            no: 7,
            name: "pool_owners",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 8,
            name: "relays",
            kind: "message",
            T: Relay,
            repeated: true
        },
        {
            no: 9,
            name: "pool_metadata",
            kind: "message",
            T: PoolMetadata
        }
    ]);
var PoolRegistrationCert = _PoolRegistrationCert;
var _PoolRetirementCert = class _PoolRetirementCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Pool key hash.
     *
     * @generated from field: bytes pool_keyhash = 1;
     */ this.poolKeyhash = new Uint8Array(0);
        /**
     * Retirement epoch.
     *
     * @generated from field: uint64 epoch = 2;
     */ this.epoch = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PoolRetirementCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PoolRetirementCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PoolRetirementCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PoolRetirementCert, a, b);
    }
};
_PoolRetirementCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PoolRetirementCert.typeName = "utxorpc.v1alpha.cardano.PoolRetirementCert";
_PoolRetirementCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "pool_keyhash",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "epoch",
            kind: "scalar",
            T: 4
        }
    ]);
var PoolRetirementCert = _PoolRetirementCert;
var _GenesisKeyDelegationCert = class _GenesisKeyDelegationCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Genesis hash.
     *
     * @generated from field: bytes genesis_hash = 1;
     */ this.genesisHash = new Uint8Array(0);
        /**
     * Genesis delegate hash.
     *
     * @generated from field: bytes genesis_delegate_hash = 2;
     */ this.genesisDelegateHash = new Uint8Array(0);
        /**
     * VRF key hash.
     *
     * @generated from field: bytes vrf_keyhash = 3;
     */ this.vrfKeyhash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _GenesisKeyDelegationCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _GenesisKeyDelegationCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _GenesisKeyDelegationCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_GenesisKeyDelegationCert, a, b);
    }
};
_GenesisKeyDelegationCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_GenesisKeyDelegationCert.typeName = "utxorpc.v1alpha.cardano.GenesisKeyDelegationCert";
_GenesisKeyDelegationCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "genesis_hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "genesis_delegate_hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "vrf_keyhash",
            kind: "scalar",
            T: 12
        }
    ]);
var GenesisKeyDelegationCert = _GenesisKeyDelegationCert;
var _MirTarget = class _MirTarget extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: int64 delta_coin = 2;
     */ this.deltaCoin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MirTarget().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MirTarget().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MirTarget().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_MirTarget, a, b);
    }
};
_MirTarget.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_MirTarget.typeName = "utxorpc.v1alpha.cardano.MirTarget";
_MirTarget.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "delta_coin",
            kind: "scalar",
            T: 3
        }
    ]);
var MirTarget = _MirTarget;
var _MirCert = class _MirCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: utxorpc.v1alpha.cardano.MirSource from = 1;
     */ this.from = 0 /* UNSPECIFIED */ ;
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.MirTarget to = 2;
     */ this.to = [];
        /**
     * @generated from field: uint64 other_pot = 3;
     */ this.otherPot = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _MirCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _MirCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _MirCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_MirCert, a, b);
    }
};
_MirCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_MirCert.typeName = "utxorpc.v1alpha.cardano.MirCert";
_MirCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "from",
            kind: "enum",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].getEnumType(MirSource)
        },
        {
            no: 2,
            name: "to",
            kind: "message",
            T: MirTarget,
            repeated: true
        },
        {
            no: 3,
            name: "other_pot",
            kind: "scalar",
            T: 4
        }
    ]);
var MirCert = _MirCert;
var _RegCert = class _RegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _RegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _RegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _RegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_RegCert, a, b);
    }
};
_RegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_RegCert.typeName = "utxorpc.v1alpha.cardano.RegCert";
_RegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var RegCert = _RegCert;
var _UnRegCert = class _UnRegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UnRegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UnRegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UnRegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_UnRegCert, a, b);
    }
};
_UnRegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_UnRegCert.typeName = "utxorpc.v1alpha.cardano.UnRegCert";
_UnRegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var UnRegCert = _UnRegCert;
var _DRep = class _DRep extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.cardano.DRep.drep
     */ this.drep = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DRep().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DRep().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DRep().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_DRep, a, b);
    }
};
_DRep.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_DRep.typeName = "utxorpc.v1alpha.cardano.DRep";
_DRep.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "addr_key_hash",
            kind: "scalar",
            T: 12,
            oneof: "drep"
        },
        {
            no: 2,
            name: "script_hash",
            kind: "scalar",
            T: 12,
            oneof: "drep"
        },
        {
            no: 3,
            name: "abstain",
            kind: "scalar",
            T: 8,
            oneof: "drep"
        },
        {
            no: 4,
            name: "no_confidence",
            kind: "scalar",
            T: 8,
            oneof: "drep"
        }
    ]);
var DRep = _DRep;
var _VoteDelegCert = class _VoteDelegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _VoteDelegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _VoteDelegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _VoteDelegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_VoteDelegCert, a, b);
    }
};
_VoteDelegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_VoteDelegCert.typeName = "utxorpc.v1alpha.cardano.VoteDelegCert";
_VoteDelegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "drep",
            kind: "message",
            T: DRep
        }
    ]);
var VoteDelegCert = _VoteDelegCert;
var _StakeVoteDelegCert = class _StakeVoteDelegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes pool_keyhash = 2;
     */ this.poolKeyhash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _StakeVoteDelegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StakeVoteDelegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StakeVoteDelegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_StakeVoteDelegCert, a, b);
    }
};
_StakeVoteDelegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_StakeVoteDelegCert.typeName = "utxorpc.v1alpha.cardano.StakeVoteDelegCert";
_StakeVoteDelegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "pool_keyhash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "drep",
            kind: "message",
            T: DRep
        }
    ]);
var StakeVoteDelegCert = _StakeVoteDelegCert;
var _StakeRegDelegCert = class _StakeRegDelegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes pool_keyhash = 2;
     */ this.poolKeyhash = new Uint8Array(0);
        /**
     * @generated from field: uint64 coin = 3;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _StakeRegDelegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StakeRegDelegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StakeRegDelegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_StakeRegDelegCert, a, b);
    }
};
_StakeRegDelegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_StakeRegDelegCert.typeName = "utxorpc.v1alpha.cardano.StakeRegDelegCert";
_StakeRegDelegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "pool_keyhash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var StakeRegDelegCert = _StakeRegDelegCert;
var _VoteRegDelegCert = class _VoteRegDelegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 coin = 3;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _VoteRegDelegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _VoteRegDelegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _VoteRegDelegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_VoteRegDelegCert, a, b);
    }
};
_VoteRegDelegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_VoteRegDelegCert.typeName = "utxorpc.v1alpha.cardano.VoteRegDelegCert";
_VoteRegDelegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "drep",
            kind: "message",
            T: DRep
        },
        {
            no: 3,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var VoteRegDelegCert = _VoteRegDelegCert;
var _StakeVoteRegDelegCert = class _StakeVoteRegDelegCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: bytes pool_keyhash = 2;
     */ this.poolKeyhash = new Uint8Array(0);
        /**
     * @generated from field: uint64 coin = 4;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _StakeVoteRegDelegCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _StakeVoteRegDelegCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _StakeVoteRegDelegCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_StakeVoteRegDelegCert, a, b);
    }
};
_StakeVoteRegDelegCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_StakeVoteRegDelegCert.typeName = "utxorpc.v1alpha.cardano.StakeVoteRegDelegCert";
_StakeVoteRegDelegCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "stake_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "pool_keyhash",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "drep",
            kind: "message",
            T: DRep
        },
        {
            no: 4,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var StakeVoteRegDelegCert = _StakeVoteRegDelegCert;
var _AuthCommitteeHotCert = class _AuthCommitteeHotCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AuthCommitteeHotCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AuthCommitteeHotCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AuthCommitteeHotCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AuthCommitteeHotCert, a, b);
    }
};
_AuthCommitteeHotCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AuthCommitteeHotCert.typeName = "utxorpc.v1alpha.cardano.AuthCommitteeHotCert";
_AuthCommitteeHotCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "committee_cold_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "committee_hot_credential",
            kind: "message",
            T: StakeCredential
        }
    ]);
var AuthCommitteeHotCert = _AuthCommitteeHotCert;
var _Anchor = class _Anchor extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: string url = 1;
     */ this.url = "";
        /**
     * @generated from field: bytes content_hash = 2;
     */ this.contentHash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _Anchor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _Anchor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _Anchor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_Anchor, a, b);
    }
};
_Anchor.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_Anchor.typeName = "utxorpc.v1alpha.cardano.Anchor";
_Anchor.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content_hash",
            kind: "scalar",
            T: 12
        }
    ]);
var Anchor = _Anchor;
var _ResignCommitteeColdCert = class _ResignCommitteeColdCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ResignCommitteeColdCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ResignCommitteeColdCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ResignCommitteeColdCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ResignCommitteeColdCert, a, b);
    }
};
_ResignCommitteeColdCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ResignCommitteeColdCert.typeName = "utxorpc.v1alpha.cardano.ResignCommitteeColdCert";
_ResignCommitteeColdCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "committee_cold_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "anchor",
            kind: "message",
            T: Anchor
        }
    ]);
var ResignCommitteeColdCert = _ResignCommitteeColdCert;
var _RegDRepCert = class _RegDRepCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _RegDRepCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _RegDRepCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _RegDRepCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_RegDRepCert, a, b);
    }
};
_RegDRepCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_RegDRepCert.typeName = "utxorpc.v1alpha.cardano.RegDRepCert";
_RegDRepCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "drep_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "anchor",
            kind: "message",
            T: Anchor
        }
    ]);
var RegDRepCert = _RegDRepCert;
var _UnRegDRepCert = class _UnRegDRepCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 coin = 2;
     */ this.coin = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UnRegDRepCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UnRegDRepCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UnRegDRepCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_UnRegDRepCert, a, b);
    }
};
_UnRegDRepCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_UnRegDRepCert.typeName = "utxorpc.v1alpha.cardano.UnRegDRepCert";
_UnRegDRepCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "drep_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "coin",
            kind: "scalar",
            T: 4
        }
    ]);
var UnRegDRepCert = _UnRegDRepCert;
var _UpdateDRepCert = class _UpdateDRepCert extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UpdateDRepCert().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UpdateDRepCert().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UpdateDRepCert().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_UpdateDRepCert, a, b);
    }
};
_UpdateDRepCert.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_UpdateDRepCert.typeName = "utxorpc.v1alpha.cardano.UpdateDRepCert";
_UpdateDRepCert.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "drep_credential",
            kind: "message",
            T: StakeCredential
        },
        {
            no: 2,
            name: "anchor",
            kind: "message",
            T: Anchor
        }
    ]);
var UpdateDRepCert = _UpdateDRepCert;
var _AddressPattern = class _AddressPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The address should match this exact address value.
     *
     * @generated from field: bytes exact_address = 1;
     */ this.exactAddress = new Uint8Array(0);
        /**
     * The payment part of the address should match this value.
     *
     * @generated from field: bytes payment_part = 2;
     */ this.paymentPart = new Uint8Array(0);
        /**
     * The delegation part of the address should match this value.
     *
     * @generated from field: bytes delegation_part = 3;
     */ this.delegationPart = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AddressPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AddressPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AddressPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AddressPattern, a, b);
    }
};
_AddressPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AddressPattern.typeName = "utxorpc.v1alpha.cardano.AddressPattern";
_AddressPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "exact_address",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "payment_part",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "delegation_part",
            kind: "scalar",
            T: 12
        }
    ]);
var AddressPattern = _AddressPattern;
var _AssetPattern = class _AssetPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The asset should belong to this policy id
     *
     * @generated from field: bytes policy_id = 1;
     */ this.policyId = new Uint8Array(0);
        /**
     * The asset should present this name
     *
     * @generated from field: bytes asset_name = 2;
     */ this.assetName = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AssetPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AssetPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AssetPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AssetPattern, a, b);
    }
};
_AssetPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AssetPattern.typeName = "utxorpc.v1alpha.cardano.AssetPattern";
_AssetPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "policy_id",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "asset_name",
            kind: "scalar",
            T: 12
        }
    ]);
var AssetPattern = _AssetPattern;
var _TxOutputPattern = class _TxOutputPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxOutputPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxOutputPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxOutputPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxOutputPattern, a, b);
    }
};
_TxOutputPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxOutputPattern.typeName = "utxorpc.v1alpha.cardano.TxOutputPattern";
_TxOutputPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "address",
            kind: "message",
            T: AddressPattern
        },
        {
            no: 2,
            name: "asset",
            kind: "message",
            T: AssetPattern
        }
    ]);
var TxOutputPattern = _TxOutputPattern;
var _TxPattern = class _TxPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxPattern, a, b);
    }
};
_TxPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxPattern.typeName = "utxorpc.v1alpha.cardano.TxPattern";
_TxPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "consumes",
            kind: "message",
            T: TxOutputPattern
        },
        {
            no: 2,
            name: "produces",
            kind: "message",
            T: TxOutputPattern
        },
        {
            no: 3,
            name: "has_address",
            kind: "message",
            T: AddressPattern
        },
        {
            no: 4,
            name: "moves_asset",
            kind: "message",
            T: AssetPattern
        },
        {
            no: 5,
            name: "mints_asset",
            kind: "message",
            T: AssetPattern
        }
    ]);
var TxPattern = _TxPattern;
var _ExUnits = class _ExUnits extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 steps = 1;
     */ this.steps = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * @generated from field: uint64 memory = 2;
     */ this.memory = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ExUnits().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ExUnits().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ExUnits().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ExUnits, a, b);
    }
};
_ExUnits.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ExUnits.typeName = "utxorpc.v1alpha.cardano.ExUnits";
_ExUnits.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "steps",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "memory",
            kind: "scalar",
            T: 4
        }
    ]);
var ExUnits = _ExUnits;
var _ExPrices = class _ExPrices extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ExPrices().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ExPrices().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ExPrices().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ExPrices, a, b);
    }
};
_ExPrices.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ExPrices.typeName = "utxorpc.v1alpha.cardano.ExPrices";
_ExPrices.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "steps",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 2,
            name: "memory",
            kind: "message",
            T: RationalNumber
        }
    ]);
var ExPrices = _ExPrices;
var _ProtocolVersion = class _ProtocolVersion extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint32 major = 1;
     */ this.major = 0;
        /**
     * @generated from field: uint32 minor = 2;
     */ this.minor = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ProtocolVersion().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ProtocolVersion().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ProtocolVersion().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ProtocolVersion, a, b);
    }
};
_ProtocolVersion.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ProtocolVersion.typeName = "utxorpc.v1alpha.cardano.ProtocolVersion";
_ProtocolVersion.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "major",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "minor",
            kind: "scalar",
            T: 13
        }
    ]);
var ProtocolVersion = _ProtocolVersion;
var _CostModel = class _CostModel extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated int64 values = 1;
     */ this.values = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _CostModel().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _CostModel().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _CostModel().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_CostModel, a, b);
    }
};
_CostModel.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_CostModel.typeName = "utxorpc.v1alpha.cardano.CostModel";
_CostModel.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 3,
            repeated: true
        }
    ]);
var CostModel = _CostModel;
var _CostModels = class _CostModels extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _CostModels().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _CostModels().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _CostModels().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_CostModels, a, b);
    }
};
_CostModels.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_CostModels.typeName = "utxorpc.v1alpha.cardano.CostModels";
_CostModels.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "plutus_v1",
            kind: "message",
            T: CostModel
        },
        {
            no: 2,
            name: "plutus_v2",
            kind: "message",
            T: CostModel
        },
        {
            no: 3,
            name: "plutus_v3",
            kind: "message",
            T: CostModel
        }
    ]);
var CostModels = _CostModels;
var _VotingThresholds = class _VotingThresholds extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.RationalNumber thresholds = 1;
     */ this.thresholds = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _VotingThresholds().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _VotingThresholds().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _VotingThresholds().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_VotingThresholds, a, b);
    }
};
_VotingThresholds.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_VotingThresholds.typeName = "utxorpc.v1alpha.cardano.VotingThresholds";
_VotingThresholds.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "thresholds",
            kind: "message",
            T: RationalNumber,
            repeated: true
        }
    ]);
var VotingThresholds = _VotingThresholds;
var _PParams = class _PParams extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The number of coins per UTXO byte.
     *
     * @generated from field: uint64 coins_per_utxo_byte = 1;
     */ this.coinsPerUtxoByte = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The maximum transaction size.
     *
     * @generated from field: uint64 max_tx_size = 2;
     */ this.maxTxSize = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The minimum fee coefficient.
     *
     * @generated from field: uint64 min_fee_coefficient = 3;
     */ this.minFeeCoefficient = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The minimum fee constant.
     *
     * @generated from field: uint64 min_fee_constant = 4;
     */ this.minFeeConstant = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The maximum block body size.
     *
     * @generated from field: uint64 max_block_body_size = 5;
     */ this.maxBlockBodySize = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The maximum block header size.
     *
     * @generated from field: uint64 max_block_header_size = 6;
     */ this.maxBlockHeaderSize = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The stake key deposit.
     *
     * @generated from field: uint64 stake_key_deposit = 7;
     */ this.stakeKeyDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The pool deposit.
     *
     * @generated from field: uint64 pool_deposit = 8;
     */ this.poolDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The pool retirement epoch bound.
     *
     * @generated from field: uint64 pool_retirement_epoch_bound = 9;
     */ this.poolRetirementEpochBound = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The desired number of pools.
     *
     * @generated from field: uint64 desired_number_of_pools = 10;
     */ this.desiredNumberOfPools = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The minimum pool cost.
     *
     * @generated from field: uint64 min_pool_cost = 14;
     */ this.minPoolCost = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The maximum value size.
     *
     * @generated from field: uint64 max_value_size = 16;
     */ this.maxValueSize = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The collateral percentage.
     *
     * @generated from field: uint64 collateral_percentage = 17;
     */ this.collateralPercentage = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The maximum collateral inputs.
     *
     * @generated from field: uint64 max_collateral_inputs = 18;
     */ this.maxCollateralInputs = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The minimum committee size.
     *
     * @generated from field: uint32 min_committee_size = 26;
     */ this.minCommitteeSize = 0;
        /**
     * The committee term limit.
     *
     * @generated from field: uint64 committee_term_limit = 27;
     */ this.committeeTermLimit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The governance action validity period.
     *
     * @generated from field: uint64 governance_action_validity_period = 28;
     */ this.governanceActionValidityPeriod = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The governance action deposit.
     *
     * @generated from field: uint64 governance_action_deposit = 29;
     */ this.governanceActionDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The drep deposit.
     *
     * @generated from field: uint64 drep_deposit = 30;
     */ this.drepDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * The drep inactivity period.
     *
     * @generated from field: uint64 drep_inactivity_period = 31;
     */ this.drepInactivityPeriod = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _PParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _PParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _PParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_PParams, a, b);
    }
};
_PParams.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_PParams.typeName = "utxorpc.v1alpha.cardano.PParams";
_PParams.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "coins_per_utxo_byte",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "max_tx_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "min_fee_coefficient",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "min_fee_constant",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "max_block_body_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "max_block_header_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "stake_key_deposit",
            kind: "scalar",
            T: 4
        },
        {
            no: 8,
            name: "pool_deposit",
            kind: "scalar",
            T: 4
        },
        {
            no: 9,
            name: "pool_retirement_epoch_bound",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "desired_number_of_pools",
            kind: "scalar",
            T: 4
        },
        {
            no: 11,
            name: "pool_influence",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 12,
            name: "monetary_expansion",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 13,
            name: "treasury_expansion",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 14,
            name: "min_pool_cost",
            kind: "scalar",
            T: 4
        },
        {
            no: 15,
            name: "protocol_version",
            kind: "message",
            T: ProtocolVersion
        },
        {
            no: 16,
            name: "max_value_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 17,
            name: "collateral_percentage",
            kind: "scalar",
            T: 4
        },
        {
            no: 18,
            name: "max_collateral_inputs",
            kind: "scalar",
            T: 4
        },
        {
            no: 19,
            name: "cost_models",
            kind: "message",
            T: CostModels
        },
        {
            no: 20,
            name: "prices",
            kind: "message",
            T: ExPrices
        },
        {
            no: 21,
            name: "max_execution_units_per_transaction",
            kind: "message",
            T: ExUnits
        },
        {
            no: 22,
            name: "max_execution_units_per_block",
            kind: "message",
            T: ExUnits
        },
        {
            no: 23,
            name: "min_fee_script_ref_cost_per_byte",
            kind: "message",
            T: RationalNumber
        },
        {
            no: 24,
            name: "pool_voting_thresholds",
            kind: "message",
            T: VotingThresholds
        },
        {
            no: 25,
            name: "drep_voting_thresholds",
            kind: "message",
            T: VotingThresholds
        },
        {
            no: 26,
            name: "min_committee_size",
            kind: "scalar",
            T: 13
        },
        {
            no: 27,
            name: "committee_term_limit",
            kind: "scalar",
            T: 4
        },
        {
            no: 28,
            name: "governance_action_validity_period",
            kind: "scalar",
            T: 4
        },
        {
            no: 29,
            name: "governance_action_deposit",
            kind: "scalar",
            T: 4
        },
        {
            no: 30,
            name: "drep_deposit",
            kind: "scalar",
            T: 4
        },
        {
            no: 31,
            name: "drep_inactivity_period",
            kind: "scalar",
            T: 4
        }
    ]);
var PParams = _PParams;
var _EvalError = class _EvalError extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: string msg = 1;
     */ this.msg = "";
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EvalError().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EvalError().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EvalError().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_EvalError, a, b);
    }
};
_EvalError.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_EvalError.typeName = "utxorpc.v1alpha.cardano.EvalError";
_EvalError.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "msg",
            kind: "scalar",
            T: 9
        }
    ]);
var EvalError = _EvalError;
var _EvalTrace = class _EvalTrace extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: string msg = 1;
     */ this.msg = "";
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EvalTrace().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EvalTrace().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EvalTrace().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_EvalTrace, a, b);
    }
};
_EvalTrace.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_EvalTrace.typeName = "utxorpc.v1alpha.cardano.EvalTrace";
_EvalTrace.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "msg",
            kind: "scalar",
            T: 9
        }
    ]);
var EvalTrace = _EvalTrace;
var _TxEval = class _TxEval extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: uint64 fee = 1;
     */ this.fee = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.EvalError errors = 3;
     */ this.errors = [];
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.EvalTrace traces = 4;
     */ this.traces = [];
        /**
     * @generated from field: repeated utxorpc.v1alpha.cardano.Redeemer redeemers = 5;
     */ this.redeemers = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxEval().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxEval().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxEval().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxEval, a, b);
    }
};
_TxEval.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxEval.typeName = "utxorpc.v1alpha.cardano.TxEval";
_TxEval.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "fee",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "ex_units",
            kind: "message",
            T: ExUnits
        },
        {
            no: 3,
            name: "errors",
            kind: "message",
            T: EvalError,
            repeated: true
        },
        {
            no: 4,
            name: "traces",
            kind: "message",
            T: EvalTrace,
            repeated: true
        },
        {
            no: 5,
            name: "redeemers",
            kind: "message",
            T: Redeemer,
            repeated: true
        }
    ]);
var TxEval = _TxEval;
// src/utxorpc/v1alpha/query/query_pb.ts
var query_pb_exports = {};
__export(query_pb_exports, {
    AnyChainDatum: ()=>AnyChainDatum,
    AnyChainParams: ()=>AnyChainParams,
    AnyUtxoData: ()=>AnyUtxoData,
    AnyUtxoPattern: ()=>AnyUtxoPattern,
    ChainPoint: ()=>ChainPoint,
    ReadDataRequest: ()=>ReadDataRequest,
    ReadDataResponse: ()=>ReadDataResponse,
    ReadParamsRequest: ()=>ReadParamsRequest,
    ReadParamsResponse: ()=>ReadParamsResponse,
    ReadUtxosRequest: ()=>ReadUtxosRequest,
    ReadUtxosResponse: ()=>ReadUtxosResponse,
    SearchUtxosRequest: ()=>SearchUtxosRequest,
    SearchUtxosResponse: ()=>SearchUtxosResponse,
    TxoRef: ()=>TxoRef,
    UtxoPredicate: ()=>UtxoPredicate
});
;
var _ChainPoint = class _ChainPoint extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Slot number.
     *
     * @generated from field: uint64 slot = 1;
     */ this.slot = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Block hash.
     *
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ChainPoint().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ChainPoint().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ChainPoint().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ChainPoint, a, b);
    }
};
_ChainPoint.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ChainPoint.typeName = "utxorpc.v1alpha.query.ChainPoint";
_ChainPoint.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "slot",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        }
    ]);
var ChainPoint = _ChainPoint;
var _TxoRef = class _TxoRef extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Tx hash.
     *
     * @generated from field: bytes hash = 1;
     */ this.hash = new Uint8Array(0);
        /**
     * Output index.
     *
     * @generated from field: uint32 index = 2;
     */ this.index = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxoRef().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxoRef().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxoRef().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxoRef, a, b);
    }
};
_TxoRef.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxoRef.typeName = "utxorpc.v1alpha.query.TxoRef";
_TxoRef.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "index",
            kind: "scalar",
            T: 13
        }
    ]);
var TxoRef = _TxoRef;
var _ReadParamsRequest = class _ReadParamsRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadParamsRequest, a, b);
    }
};
_ReadParamsRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadParamsRequest.typeName = "utxorpc.v1alpha.query.ReadParamsRequest";
_ReadParamsRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var ReadParamsRequest = _ReadParamsRequest;
var _AnyChainParams = class _AnyChainParams extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.query.AnyChainParams.params
     */ this.params = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainParams, a, b);
    }
};
_AnyChainParams.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainParams.typeName = "utxorpc.v1alpha.query.AnyChainParams";
_AnyChainParams.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: PParams,
            oneof: "params"
        }
    ]);
var AnyChainParams = _AnyChainParams;
var _ReadParamsResponse = class _ReadParamsResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadParamsResponse, a, b);
    }
};
_ReadParamsResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadParamsResponse.typeName = "utxorpc.v1alpha.query.ReadParamsResponse";
_ReadParamsResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: AnyChainParams
        },
        {
            no: 2,
            name: "ledger_tip",
            kind: "message",
            T: ChainPoint
        }
    ]);
var ReadParamsResponse = _ReadParamsResponse;
var _AnyUtxoPattern = class _AnyUtxoPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.query.AnyUtxoPattern.utxo_pattern
     */ this.utxoPattern = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyUtxoPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyUtxoPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyUtxoPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyUtxoPattern, a, b);
    }
};
_AnyUtxoPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyUtxoPattern.typeName = "utxorpc.v1alpha.query.AnyUtxoPattern";
_AnyUtxoPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: TxOutputPattern,
            oneof: "utxo_pattern"
        }
    ]);
var AnyUtxoPattern = _AnyUtxoPattern;
var _UtxoPredicate = class _UtxoPredicate extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Predicate is true if tx doesn't exhibit pattern.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.UtxoPredicate not = 2;
     */ this.not = [];
        /**
     * Predicate is true if utxo exhibits all of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.UtxoPredicate all_of = 3;
     */ this.allOf = [];
        /**
     * Predicate is true if utxo exhibits any of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.UtxoPredicate any_of = 4;
     */ this.anyOf = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _UtxoPredicate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _UtxoPredicate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _UtxoPredicate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_UtxoPredicate, a, b);
    }
};
_UtxoPredicate.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_UtxoPredicate.typeName = "utxorpc.v1alpha.query.UtxoPredicate";
_UtxoPredicate.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: AnyUtxoPattern
        },
        {
            no: 2,
            name: "not",
            kind: "message",
            T: _UtxoPredicate,
            repeated: true
        },
        {
            no: 3,
            name: "all_of",
            kind: "message",
            T: _UtxoPredicate,
            repeated: true
        },
        {
            no: 4,
            name: "any_of",
            kind: "message",
            T: _UtxoPredicate,
            repeated: true
        }
    ]);
var UtxoPredicate = _UtxoPredicate;
var _AnyUtxoData = class _AnyUtxoData extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Original bytes as defined by the chain
     *
     * @generated from field: bytes native_bytes = 1;
     */ this.nativeBytes = new Uint8Array(0);
        /**
     * @generated from oneof utxorpc.v1alpha.query.AnyUtxoData.parsed_state
     */ this.parsedState = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyUtxoData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyUtxoData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyUtxoData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyUtxoData, a, b);
    }
};
_AnyUtxoData.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyUtxoData.typeName = "utxorpc.v1alpha.query.AnyUtxoData";
_AnyUtxoData.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "native_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "txo_ref",
            kind: "message",
            T: TxoRef
        },
        {
            no: 3,
            name: "cardano",
            kind: "message",
            T: TxOutput,
            oneof: "parsed_state"
        }
    ]);
var AnyUtxoData = _AnyUtxoData;
var _ReadUtxosRequest = class _ReadUtxosRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of keys UTxOs.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.TxoRef keys = 1;
     */ this.keys = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadUtxosRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadUtxosRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadUtxosRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadUtxosRequest, a, b);
    }
};
_ReadUtxosRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadUtxosRequest.typeName = "utxorpc.v1alpha.query.ReadUtxosRequest";
_ReadUtxosRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "keys",
            kind: "message",
            T: TxoRef,
            repeated: true
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var ReadUtxosRequest = _ReadUtxosRequest;
var _ReadUtxosResponse = class _ReadUtxosResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of UTxOs.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.AnyUtxoData items = 1;
     */ this.items = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadUtxosResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadUtxosResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadUtxosResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadUtxosResponse, a, b);
    }
};
_ReadUtxosResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadUtxosResponse.typeName = "utxorpc.v1alpha.query.ReadUtxosResponse";
_ReadUtxosResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: AnyUtxoData,
            repeated: true
        },
        {
            no: 2,
            name: "ledger_tip",
            kind: "message",
            T: ChainPoint
        }
    ]);
var ReadUtxosResponse = _ReadUtxosResponse;
var _SearchUtxosRequest = class _SearchUtxosRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The maximum number of items to return.
     *
     * @generated from field: int32 max_items = 3;
     */ this.maxItems = 0;
        /**
     * The next_page_token value returned from a previous request, if any.
     *
     * @generated from field: string start_token = 4;
     */ this.startToken = "";
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SearchUtxosRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SearchUtxosRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SearchUtxosRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_SearchUtxosRequest, a, b);
    }
};
_SearchUtxosRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_SearchUtxosRequest.typeName = "utxorpc.v1alpha.query.SearchUtxosRequest";
_SearchUtxosRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "predicate",
            kind: "message",
            T: UtxoPredicate
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        },
        {
            no: 3,
            name: "max_items",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "start_token",
            kind: "scalar",
            T: 9
        }
    ]);
var SearchUtxosRequest = _SearchUtxosRequest;
var _SearchUtxosResponse = class _SearchUtxosResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of UTxOs.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.AnyUtxoData items = 1;
     */ this.items = [];
        /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     *
     * @generated from field: string next_token = 3;
     */ this.nextToken = "";
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SearchUtxosResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SearchUtxosResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SearchUtxosResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_SearchUtxosResponse, a, b);
    }
};
_SearchUtxosResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_SearchUtxosResponse.typeName = "utxorpc.v1alpha.query.SearchUtxosResponse";
_SearchUtxosResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: AnyUtxoData,
            repeated: true
        },
        {
            no: 2,
            name: "ledger_tip",
            kind: "message",
            T: ChainPoint
        },
        {
            no: 3,
            name: "next_token",
            kind: "scalar",
            T: 9
        }
    ]);
var SearchUtxosResponse = _SearchUtxosResponse;
var _ReadDataRequest = class _ReadDataRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated bytes keys = 1;
     */ this.keys = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadDataRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadDataRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadDataRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadDataRequest, a, b);
    }
};
_ReadDataRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadDataRequest.typeName = "utxorpc.v1alpha.query.ReadDataRequest";
_ReadDataRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "keys",
            kind: "scalar",
            T: 12,
            repeated: true
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var ReadDataRequest = _ReadDataRequest;
var _AnyChainDatum = class _AnyChainDatum extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Original bytes as defined by the chain
     *
     * @generated from field: bytes native_bytes = 1;
     */ this.nativeBytes = new Uint8Array(0);
        /**
     * @generated from field: bytes key = 2;
     */ this.key = new Uint8Array(0);
        /**
     * @generated from oneof utxorpc.v1alpha.query.AnyChainDatum.parsed_state
     */ this.parsedState = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainDatum().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainDatum().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainDatum().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainDatum, a, b);
    }
};
_AnyChainDatum.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainDatum.typeName = "utxorpc.v1alpha.query.AnyChainDatum";
_AnyChainDatum.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "native_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "key",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "cardano",
            kind: "message",
            T: PlutusData,
            oneof: "parsed_state"
        }
    ]);
var AnyChainDatum = _AnyChainDatum;
var _ReadDataResponse = class _ReadDataResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The value of each datum.
     *
     * @generated from field: repeated utxorpc.v1alpha.query.AnyChainDatum values = 1;
     */ this.values = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadDataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadDataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadDataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadDataResponse, a, b);
    }
};
_ReadDataResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadDataResponse.typeName = "utxorpc.v1alpha.query.ReadDataResponse";
_ReadDataResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "values",
            kind: "message",
            T: AnyChainDatum,
            repeated: true
        },
        {
            no: 2,
            name: "ledger_tip",
            kind: "message",
            T: ChainPoint
        }
    ]);
var ReadDataResponse = _ReadDataResponse;
// src/utxorpc/v1alpha/query/query_connect.ts
var query_connect_exports = {};
__export(query_connect_exports, {
    QueryService: ()=>QueryService
});
;
var QueryService = {
    typeName: "utxorpc.v1alpha.query.QueryService",
    methods: {
        /**
     * Get overall chain state.
     *
     * @generated from rpc utxorpc.v1alpha.query.QueryService.ReadParams
     */ readParams: {
            name: "ReadParams",
            I: ReadParamsRequest,
            O: ReadParamsResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Read specific UTxOs by reference.
     *
     * @generated from rpc utxorpc.v1alpha.query.QueryService.ReadUtxos
     */ readUtxos: {
            name: "ReadUtxos",
            I: ReadUtxosRequest,
            O: ReadUtxosResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Search for UTxO based on a pattern.
     *
     * @generated from rpc utxorpc.v1alpha.query.QueryService.SearchUtxos
     */ searchUtxos: {
            name: "SearchUtxos",
            I: SearchUtxosRequest,
            O: SearchUtxosResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Read specific datum by hash
     *
     * @generated from rpc utxorpc.v1alpha.query.QueryService.ReadData
     */ readData: {
            name: "ReadData",
            I: ReadDataRequest,
            O: ReadDataResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        }
    }
};
// src/utxorpc/v1alpha/submit/submit_pb.ts
var submit_pb_exports = {};
__export(submit_pb_exports, {
    AnyChainEval: ()=>AnyChainEval,
    AnyChainTx: ()=>AnyChainTx,
    AnyChainTxPattern: ()=>AnyChainTxPattern,
    EvalTxRequest: ()=>EvalTxRequest,
    EvalTxResponse: ()=>EvalTxResponse,
    ReadMempoolRequest: ()=>ReadMempoolRequest,
    ReadMempoolResponse: ()=>ReadMempoolResponse,
    Stage: ()=>Stage,
    SubmitTxRequest: ()=>SubmitTxRequest,
    SubmitTxResponse: ()=>SubmitTxResponse,
    TxInMempool: ()=>TxInMempool,
    TxPredicate: ()=>TxPredicate,
    WaitForTxRequest: ()=>WaitForTxRequest,
    WaitForTxResponse: ()=>WaitForTxResponse,
    WatchMempoolRequest: ()=>WatchMempoolRequest,
    WatchMempoolResponse: ()=>WatchMempoolResponse
});
;
var Stage = /* @__PURE__ */ ((Stage2)=>{
    Stage2[Stage2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Stage2[Stage2["ACKNOWLEDGED"] = 1] = "ACKNOWLEDGED";
    Stage2[Stage2["MEMPOOL"] = 2] = "MEMPOOL";
    Stage2[Stage2["NETWORK"] = 3] = "NETWORK";
    Stage2[Stage2["CONFIRMED"] = 4] = "CONFIRMED";
    return Stage2;
})(Stage || {});
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.setEnumType(Stage, "utxorpc.v1alpha.submit.Stage", [
    {
        no: 0,
        name: "STAGE_UNSPECIFIED"
    },
    {
        no: 1,
        name: "STAGE_ACKNOWLEDGED"
    },
    {
        no: 2,
        name: "STAGE_MEMPOOL"
    },
    {
        no: 3,
        name: "STAGE_NETWORK"
    },
    {
        no: 4,
        name: "STAGE_CONFIRMED"
    }
]);
var _AnyChainTx = class _AnyChainTx extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.submit.AnyChainTx.type
     */ this.type = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainTx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainTx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainTx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainTx, a, b);
    }
};
_AnyChainTx.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainTx.typeName = "utxorpc.v1alpha.submit.AnyChainTx";
_AnyChainTx.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "raw",
            kind: "scalar",
            T: 12,
            oneof: "type"
        }
    ]);
var AnyChainTx = _AnyChainTx;
var _EvalTxRequest = class _EvalTxRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transactions to evaluate.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.AnyChainTx tx = 1;
     */ this.tx = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EvalTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EvalTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EvalTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_EvalTxRequest, a, b);
    }
};
_EvalTxRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_EvalTxRequest.typeName = "utxorpc.v1alpha.submit.EvalTxRequest";
_EvalTxRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tx",
            kind: "message",
            T: AnyChainTx,
            repeated: true
        }
    ]);
var EvalTxRequest = _EvalTxRequest;
var _AnyChainEval = class _AnyChainEval extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.submit.AnyChainEval.chain
     */ this.chain = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainEval().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainEval().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainEval().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainEval, a, b);
    }
};
_AnyChainEval.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainEval.typeName = "utxorpc.v1alpha.submit.AnyChainEval";
_AnyChainEval.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: TxEval,
            oneof: "chain"
        }
    ]);
var AnyChainEval = _AnyChainEval;
var _EvalTxResponse = class _EvalTxResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from field: repeated utxorpc.v1alpha.submit.AnyChainEval report = 1;
     */ this.report = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _EvalTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _EvalTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _EvalTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_EvalTxResponse, a, b);
    }
};
_EvalTxResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_EvalTxResponse.typeName = "utxorpc.v1alpha.submit.EvalTxResponse";
_EvalTxResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "report",
            kind: "message",
            T: AnyChainEval,
            repeated: true
        }
    ]);
var EvalTxResponse = _EvalTxResponse;
var _SubmitTxRequest = class _SubmitTxRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transactions to submit.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.AnyChainTx tx = 1;
     */ this.tx = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SubmitTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SubmitTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SubmitTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_SubmitTxRequest, a, b);
    }
};
_SubmitTxRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_SubmitTxRequest.typeName = "utxorpc.v1alpha.submit.SubmitTxRequest";
_SubmitTxRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tx",
            kind: "message",
            T: AnyChainTx,
            repeated: true
        }
    ]);
var SubmitTxRequest = _SubmitTxRequest;
var _SubmitTxResponse = class _SubmitTxResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transaction references.
     *
     * @generated from field: repeated bytes ref = 1;
     */ this.ref = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _SubmitTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _SubmitTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _SubmitTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_SubmitTxResponse, a, b);
    }
};
_SubmitTxResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_SubmitTxResponse.typeName = "utxorpc.v1alpha.submit.SubmitTxResponse";
_SubmitTxResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ref",
            kind: "scalar",
            T: 12,
            repeated: true
        }
    ]);
var SubmitTxResponse = _SubmitTxResponse;
var _TxInMempool = class _TxInMempool extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * The transaction reference.
     *
     * @generated from field: bytes ref = 1;
     */ this.ref = new Uint8Array(0);
        /**
     * Original bytes as defined by the chain
     *
     * @generated from field: bytes native_bytes = 2;
     */ this.nativeBytes = new Uint8Array(0);
        /**
     * The current stage of the tx
     *
     * @generated from field: utxorpc.v1alpha.submit.Stage stage = 3;
     */ this.stage = 0 /* UNSPECIFIED */ ;
        /**
     * @generated from oneof utxorpc.v1alpha.submit.TxInMempool.parsed_state
     */ this.parsedState = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxInMempool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxInMempool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxInMempool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxInMempool, a, b);
    }
};
_TxInMempool.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxInMempool.typeName = "utxorpc.v1alpha.submit.TxInMempool";
_TxInMempool.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ref",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "native_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 3,
            name: "stage",
            kind: "enum",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].getEnumType(Stage)
        },
        {
            no: 4,
            name: "cardano",
            kind: "message",
            T: Tx,
            oneof: "parsed_state"
        }
    ]);
var TxInMempool = _TxInMempool;
var _ReadMempoolRequest = class _ReadMempoolRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadMempoolRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadMempoolRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadMempoolRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadMempoolRequest, a, b);
    }
};
_ReadMempoolRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadMempoolRequest.typeName = "utxorpc.v1alpha.submit.ReadMempoolRequest";
_ReadMempoolRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[]);
var ReadMempoolRequest = _ReadMempoolRequest;
var _ReadMempoolResponse = class _ReadMempoolResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transaction currently on the mempool.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.TxInMempool items = 1;
     */ this.items = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadMempoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadMempoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadMempoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadMempoolResponse, a, b);
    }
};
_ReadMempoolResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadMempoolResponse.typeName = "utxorpc.v1alpha.submit.ReadMempoolResponse";
_ReadMempoolResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: TxInMempool,
            repeated: true
        }
    ]);
var ReadMempoolResponse = _ReadMempoolResponse;
var _WaitForTxRequest = class _WaitForTxRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of transaction references to wait for.
     *
     * @generated from field: repeated bytes ref = 1;
     */ this.ref = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WaitForTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WaitForTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WaitForTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WaitForTxRequest, a, b);
    }
};
_WaitForTxRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WaitForTxRequest.typeName = "utxorpc.v1alpha.submit.WaitForTxRequest";
_WaitForTxRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ref",
            kind: "scalar",
            T: 12,
            repeated: true
        }
    ]);
var WaitForTxRequest = _WaitForTxRequest;
var _WaitForTxResponse = class _WaitForTxResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Transaction reference.
     *
     * @generated from field: bytes ref = 1;
     */ this.ref = new Uint8Array(0);
        /**
     * Stage reached by the transaction.
     *
     * @generated from field: utxorpc.v1alpha.submit.Stage stage = 2;
     */ this.stage = 0 /* UNSPECIFIED */ ;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WaitForTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WaitForTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WaitForTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WaitForTxResponse, a, b);
    }
};
_WaitForTxResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WaitForTxResponse.typeName = "utxorpc.v1alpha.submit.WaitForTxResponse";
_WaitForTxResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ref",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "stage",
            kind: "enum",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].getEnumType(Stage)
        }
    ]);
var WaitForTxResponse = _WaitForTxResponse;
var _AnyChainTxPattern = class _AnyChainTxPattern extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.submit.AnyChainTxPattern.chain
     */ this.chain = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainTxPattern().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainTxPattern().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainTxPattern().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainTxPattern, a, b);
    }
};
_AnyChainTxPattern.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainTxPattern.typeName = "utxorpc.v1alpha.submit.AnyChainTxPattern";
_AnyChainTxPattern.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: TxPattern,
            oneof: "chain"
        }
    ]);
var AnyChainTxPattern = _AnyChainTxPattern;
var _TxPredicate = class _TxPredicate extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Predicate is true if tx doesn't exhibit pattern.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.TxPredicate not = 2;
     */ this.not = [];
        /**
     * Predicate is true if tx exhibits all of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.TxPredicate all_of = 3;
     */ this.allOf = [];
        /**
     * Predicate is true if tx exhibits any of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.submit.TxPredicate any_of = 4;
     */ this.anyOf = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxPredicate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxPredicate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxPredicate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxPredicate, a, b);
    }
};
_TxPredicate.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxPredicate.typeName = "utxorpc.v1alpha.submit.TxPredicate";
_TxPredicate.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: AnyChainTxPattern
        },
        {
            no: 2,
            name: "not",
            kind: "message",
            T: _TxPredicate,
            repeated: true
        },
        {
            no: 3,
            name: "all_of",
            kind: "message",
            T: _TxPredicate,
            repeated: true
        },
        {
            no: 4,
            name: "any_of",
            kind: "message",
            T: _TxPredicate,
            repeated: true
        }
    ]);
var TxPredicate = _TxPredicate;
var _WatchMempoolRequest = class _WatchMempoolRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WatchMempoolRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WatchMempoolRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WatchMempoolRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WatchMempoolRequest, a, b);
    }
};
_WatchMempoolRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WatchMempoolRequest.typeName = "utxorpc.v1alpha.submit.WatchMempoolRequest";
_WatchMempoolRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "predicate",
            kind: "message",
            T: TxPredicate
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var WatchMempoolRequest = _WatchMempoolRequest;
var _WatchMempoolResponse = class _WatchMempoolResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WatchMempoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WatchMempoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WatchMempoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WatchMempoolResponse, a, b);
    }
};
_WatchMempoolResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WatchMempoolResponse.typeName = "utxorpc.v1alpha.submit.WatchMempoolResponse";
_WatchMempoolResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tx",
            kind: "message",
            T: TxInMempool
        }
    ]);
var WatchMempoolResponse = _WatchMempoolResponse;
// src/utxorpc/v1alpha/submit/submit_connect.ts
var submit_connect_exports = {};
__export(submit_connect_exports, {
    SubmitService: ()=>SubmitService
});
;
var SubmitService = {
    typeName: "utxorpc.v1alpha.submit.SubmitService",
    methods: {
        /**
     * Evaluates a transaction without submitting it.
     *
     * @generated from rpc utxorpc.v1alpha.submit.SubmitService.EvalTx
     */ evalTx: {
            name: "EvalTx",
            I: EvalTxRequest,
            O: EvalTxResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Submit transactions to the blockchain.
     *
     * @generated from rpc utxorpc.v1alpha.submit.SubmitService.SubmitTx
     */ submitTx: {
            name: "SubmitTx",
            I: SubmitTxRequest,
            O: SubmitTxResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Wait for transactions to reach a certain stage and stream the updates.
     *
     * @generated from rpc utxorpc.v1alpha.submit.SubmitService.WaitForTx
     */ waitForTx: {
            name: "WaitForTx",
            I: WaitForTxRequest,
            O: WaitForTxResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming
        },
        /**
     * Returns a point-in-time snapshot of the mempool.
     *
     * @generated from rpc utxorpc.v1alpha.submit.SubmitService.ReadMempool
     */ readMempool: {
            name: "ReadMempool",
            I: ReadMempoolRequest,
            O: ReadMempoolResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Stream transactions from the mempool matching the specified predicates.
     *
     * @generated from rpc utxorpc.v1alpha.submit.SubmitService.WatchMempool
     */ watchMempool: {
            name: "WatchMempool",
            I: WatchMempoolRequest,
            O: WatchMempoolResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming
        }
    }
};
// src/utxorpc/v1alpha/sync/sync_pb.ts
var sync_pb_exports = {};
__export(sync_pb_exports, {
    AnyChainBlock: ()=>AnyChainBlock,
    BlockRef: ()=>BlockRef,
    DumpHistoryRequest: ()=>DumpHistoryRequest,
    DumpHistoryResponse: ()=>DumpHistoryResponse,
    FetchBlockRequest: ()=>FetchBlockRequest,
    FetchBlockResponse: ()=>FetchBlockResponse,
    FollowTipRequest: ()=>FollowTipRequest,
    FollowTipResponse: ()=>FollowTipResponse,
    ReadTipRequest: ()=>ReadTipRequest,
    ReadTipResponse: ()=>ReadTipResponse
});
;
var _BlockRef = class _BlockRef extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Height or slot number (depending on the blockchain)
     *
     * @generated from field: uint64 index = 1;
     */ this.index = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Hash of the content of the block
     *
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _BlockRef().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BlockRef().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BlockRef().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_BlockRef, a, b);
    }
};
_BlockRef.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_BlockRef.typeName = "utxorpc.v1alpha.sync.BlockRef";
_BlockRef.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "index",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        }
    ]);
var BlockRef = _BlockRef;
var _AnyChainBlock = class _AnyChainBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Original bytes as defined by the chain
     *
     * @generated from field: bytes native_bytes = 1;
     */ this.nativeBytes = new Uint8Array(0);
        /**
     * @generated from oneof utxorpc.v1alpha.sync.AnyChainBlock.chain
     */ this.chain = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainBlock().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainBlock().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainBlock().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainBlock, a, b);
    }
};
_AnyChainBlock.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainBlock.typeName = "utxorpc.v1alpha.sync.AnyChainBlock";
_AnyChainBlock.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "native_bytes",
            kind: "scalar",
            T: 12
        },
        {
            no: 2,
            name: "cardano",
            kind: "message",
            T: Block,
            oneof: "chain"
        }
    ]);
var AnyChainBlock = _AnyChainBlock;
var _FetchBlockRequest = class _FetchBlockRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of block references.
     *
     * @generated from field: repeated utxorpc.v1alpha.sync.BlockRef ref = 1;
     */ this.ref = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FetchBlockRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FetchBlockRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FetchBlockRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_FetchBlockRequest, a, b);
    }
};
_FetchBlockRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_FetchBlockRequest.typeName = "utxorpc.v1alpha.sync.FetchBlockRequest";
_FetchBlockRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "ref",
            kind: "message",
            T: BlockRef,
            repeated: true
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var FetchBlockRequest = _FetchBlockRequest;
var _FetchBlockResponse = class _FetchBlockResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of fetched blocks.
     *
     * @generated from field: repeated utxorpc.v1alpha.sync.AnyChainBlock block = 1;
     */ this.block = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FetchBlockResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FetchBlockResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FetchBlockResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_FetchBlockResponse, a, b);
    }
};
_FetchBlockResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_FetchBlockResponse.typeName = "utxorpc.v1alpha.sync.FetchBlockResponse";
_FetchBlockResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "block",
            kind: "message",
            T: AnyChainBlock,
            repeated: true
        }
    ]);
var FetchBlockResponse = _FetchBlockResponse;
var _DumpHistoryRequest = class _DumpHistoryRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Maximum number of items to return.
     *
     * @generated from field: uint32 max_items = 3;
     */ this.maxItems = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DumpHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DumpHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DumpHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_DumpHistoryRequest, a, b);
    }
};
_DumpHistoryRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_DumpHistoryRequest.typeName = "utxorpc.v1alpha.sync.DumpHistoryRequest";
_DumpHistoryRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 2,
            name: "start_token",
            kind: "message",
            T: BlockRef
        },
        {
            no: 3,
            name: "max_items",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var DumpHistoryRequest = _DumpHistoryRequest;
var _DumpHistoryResponse = class _DumpHistoryResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of blocks in the history.
     *
     * @generated from field: repeated utxorpc.v1alpha.sync.AnyChainBlock block = 1;
     */ this.block = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _DumpHistoryResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _DumpHistoryResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _DumpHistoryResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_DumpHistoryResponse, a, b);
    }
};
_DumpHistoryResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_DumpHistoryResponse.typeName = "utxorpc.v1alpha.sync.DumpHistoryResponse";
_DumpHistoryResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "block",
            kind: "message",
            T: AnyChainBlock,
            repeated: true
        },
        {
            no: 2,
            name: "next_token",
            kind: "message",
            T: BlockRef
        }
    ]);
var DumpHistoryResponse = _DumpHistoryResponse;
var _FollowTipRequest = class _FollowTipRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of block references to find the intersection.
     *
     * @generated from field: repeated utxorpc.v1alpha.sync.BlockRef intersect = 1;
     */ this.intersect = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FollowTipRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FollowTipRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FollowTipRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_FollowTipRequest, a, b);
    }
};
_FollowTipRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_FollowTipRequest.typeName = "utxorpc.v1alpha.sync.FollowTipRequest";
_FollowTipRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "intersect",
            kind: "message",
            T: BlockRef,
            repeated: true
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        }
    ]);
var FollowTipRequest = _FollowTipRequest;
var _FollowTipResponse = class _FollowTipResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.sync.FollowTipResponse.action
     */ this.action = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _FollowTipResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _FollowTipResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _FollowTipResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_FollowTipResponse, a, b);
    }
};
_FollowTipResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_FollowTipResponse.typeName = "utxorpc.v1alpha.sync.FollowTipResponse";
_FollowTipResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "apply",
            kind: "message",
            T: AnyChainBlock,
            oneof: "action"
        },
        {
            no: 2,
            name: "undo",
            kind: "message",
            T: AnyChainBlock,
            oneof: "action"
        },
        {
            no: 3,
            name: "reset",
            kind: "message",
            T: BlockRef,
            oneof: "action"
        }
    ]);
var FollowTipResponse = _FollowTipResponse;
var _ReadTipRequest = class _ReadTipRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadTipRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadTipRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadTipRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadTipRequest, a, b);
    }
};
_ReadTipRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadTipRequest.typeName = "utxorpc.v1alpha.sync.ReadTipRequest";
_ReadTipRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[]);
var ReadTipRequest = _ReadTipRequest;
var _ReadTipResponse = class _ReadTipResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _ReadTipResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _ReadTipResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _ReadTipResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_ReadTipResponse, a, b);
    }
};
_ReadTipResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_ReadTipResponse.typeName = "utxorpc.v1alpha.sync.ReadTipResponse";
_ReadTipResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "tip",
            kind: "message",
            T: BlockRef
        }
    ]);
var ReadTipResponse = _ReadTipResponse;
// src/utxorpc/v1alpha/sync/sync_connect.ts
var sync_connect_exports = {};
__export(sync_connect_exports, {
    SyncService: ()=>SyncService
});
;
var SyncService = {
    typeName: "utxorpc.v1alpha.sync.SyncService",
    methods: {
        /**
     * Fetch a block by its reference.
     *
     * @generated from rpc utxorpc.v1alpha.sync.SyncService.FetchBlock
     */ fetchBlock: {
            name: "FetchBlock",
            I: FetchBlockRequest,
            O: FetchBlockResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Dump the block history.
     *
     * @generated from rpc utxorpc.v1alpha.sync.SyncService.DumpHistory
     */ dumpHistory: {
            name: "DumpHistory",
            I: DumpHistoryRequest,
            O: DumpHistoryResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        },
        /**
     * Follow the tip of the blockchain.
     *
     * @generated from rpc utxorpc.v1alpha.sync.SyncService.FollowTip
     */ followTip: {
            name: "FollowTip",
            I: FollowTipRequest,
            O: FollowTipResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming
        },
        /**
     * Read the current tip of the blockchain.
     *
     * @generated from rpc utxorpc.v1alpha.sync.SyncService.ReadTip
     */ readTip: {
            name: "ReadTip",
            I: ReadTipRequest,
            O: ReadTipResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].Unary
        }
    }
};
// src/utxorpc/v1alpha/watch/watch_pb.ts
var watch_pb_exports = {};
__export(watch_pb_exports, {
    AnyChainTx: ()=>AnyChainTx2,
    AnyChainTxPattern: ()=>AnyChainTxPattern2,
    BlockRef: ()=>BlockRef2,
    TxPredicate: ()=>TxPredicate2,
    WatchTxRequest: ()=>WatchTxRequest,
    WatchTxResponse: ()=>WatchTxResponse
});
;
var _BlockRef2 = class _BlockRef2 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Height or slot number (depending on the blockchain)
     *
     * @generated from field: uint64 index = 1;
     */ this.index = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["protoInt64"].zero;
        /**
     * Hash of the content of the block
     *
     * @generated from field: bytes hash = 2;
     */ this.hash = new Uint8Array(0);
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _BlockRef2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _BlockRef2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _BlockRef2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_BlockRef2, a, b);
    }
};
_BlockRef2.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_BlockRef2.typeName = "utxorpc.v1alpha.watch.BlockRef";
_BlockRef2.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "index",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12
        }
    ]);
var BlockRef2 = _BlockRef2;
var _AnyChainTxPattern2 = class _AnyChainTxPattern2 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.watch.AnyChainTxPattern.chain
     */ this.chain = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainTxPattern2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainTxPattern2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainTxPattern2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainTxPattern2, a, b);
    }
};
_AnyChainTxPattern2.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainTxPattern2.typeName = "utxorpc.v1alpha.watch.AnyChainTxPattern";
_AnyChainTxPattern2.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: TxPattern,
            oneof: "chain"
        }
    ]);
var AnyChainTxPattern2 = _AnyChainTxPattern2;
var _TxPredicate2 = class _TxPredicate2 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * Predicate is true if tx doesn't exhibit pattern.
     *
     * @generated from field: repeated utxorpc.v1alpha.watch.TxPredicate not = 2;
     */ this.not = [];
        /**
     * Predicate is true if tx exhibits all of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.watch.TxPredicate all_of = 3;
     */ this.allOf = [];
        /**
     * Predicate is true if tx exhibits any of the patterns.
     *
     * @generated from field: repeated utxorpc.v1alpha.watch.TxPredicate any_of = 4;
     */ this.anyOf = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _TxPredicate2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _TxPredicate2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _TxPredicate2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_TxPredicate2, a, b);
    }
};
_TxPredicate2.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_TxPredicate2.typeName = "utxorpc.v1alpha.watch.TxPredicate";
_TxPredicate2.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "match",
            kind: "message",
            T: AnyChainTxPattern2
        },
        {
            no: 2,
            name: "not",
            kind: "message",
            T: _TxPredicate2,
            repeated: true
        },
        {
            no: 3,
            name: "all_of",
            kind: "message",
            T: _TxPredicate2,
            repeated: true
        },
        {
            no: 4,
            name: "any_of",
            kind: "message",
            T: _TxPredicate2,
            repeated: true
        }
    ]);
var TxPredicate2 = _TxPredicate2;
var _WatchTxRequest = class _WatchTxRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * List of block references to find the intersection.
     *
     * @generated from field: repeated utxorpc.v1alpha.watch.BlockRef intersect = 3;
     */ this.intersect = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WatchTxRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WatchTxRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WatchTxRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WatchTxRequest, a, b);
    }
};
_WatchTxRequest.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WatchTxRequest.typeName = "utxorpc.v1alpha.watch.WatchTxRequest";
_WatchTxRequest.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "predicate",
            kind: "message",
            T: TxPredicate2
        },
        {
            no: 2,
            name: "field_mask",
            kind: "message",
            T: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$google$2f$protobuf$2f$field_mask_pb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldMask"]
        },
        {
            no: 3,
            name: "intersect",
            kind: "message",
            T: BlockRef2,
            repeated: true
        }
    ]);
var WatchTxRequest = _WatchTxRequest;
var _AnyChainTx2 = class _AnyChainTx2 extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.watch.AnyChainTx.chain
     */ this.chain = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _AnyChainTx2().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _AnyChainTx2().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _AnyChainTx2().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_AnyChainTx2, a, b);
    }
};
_AnyChainTx2.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_AnyChainTx2.typeName = "utxorpc.v1alpha.watch.AnyChainTx";
_AnyChainTx2.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "cardano",
            kind: "message",
            T: Tx,
            oneof: "chain"
        }
    ]);
var AnyChainTx2 = _AnyChainTx2;
var _WatchTxResponse = class _WatchTxResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Message"] {
    constructor(data){
        super();
        /**
     * @generated from oneof utxorpc.v1alpha.watch.WatchTxResponse.action
     */ this.action = {
            case: void 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new _WatchTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new _WatchTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new _WatchTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.equals(_WatchTxResponse, a, b);
    }
};
_WatchTxResponse.runtime = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"];
_WatchTxResponse.typeName = "utxorpc.v1alpha.watch.WatchTxResponse";
_WatchTxResponse.fields = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proto3"].util.newFieldList(()=>[
        {
            no: 1,
            name: "apply",
            kind: "message",
            T: AnyChainTx2,
            oneof: "action"
        },
        {
            no: 2,
            name: "undo",
            kind: "message",
            T: AnyChainTx2,
            oneof: "action"
        }
    ]);
var WatchTxResponse = _WatchTxResponse;
// src/utxorpc/v1alpha/watch/watch_connect.ts
var watch_connect_exports = {};
__export(watch_connect_exports, {
    WatchService: ()=>WatchService
});
;
var WatchService = {
    typeName: "utxorpc.v1alpha.watch.WatchService",
    methods: {
        /**
     * Stream transactions from the chain matching the specified predicates.
     *
     * @generated from rpc utxorpc.v1alpha.watch.WatchService.WatchTx
     */ watchTx: {
            name: "WatchTx",
            I: WatchTxRequest,
            O: WatchTxResponse,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$service$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MethodKind"].ServerStreaming
        }
    }
};
;
}),
];

//# sourceMappingURL=e15ed_%40utxorpc_spec_lib_index_mjs_24fe1c3d._.js.map