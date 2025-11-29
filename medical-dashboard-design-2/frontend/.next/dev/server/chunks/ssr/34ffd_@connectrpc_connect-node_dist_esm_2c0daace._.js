module.exports = [
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$undici$40$5$2e$29$2e$0$2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/undici@5.29.0/node_modules/undici/index.js [app-ssr] (ecmascript)");
;
// The global Headers class was introduced in Node v16.15.0, behind the
// --experimental-fetch flag. It became available by default with Node
// v18.0.0.
// If this code runs in Node < 18, it installs an alternative
// implementation if one has not already been polyfilled.
const [major] = process.versions.node.split(".").map((value)=>parseInt(value, 10));
if (major < 18) {
    if (typeof globalThis.Headers === "undefined") {
        globalThis.Headers = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f$undici$40$5$2e$29$2e$0$2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headers"];
    }
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "H2Code",
    ()=>H2Code,
    "connectErrorFromH2ResetCode",
    ()=>connectErrorFromH2ResetCode,
    "connectErrorFromNodeReason",
    ()=>connectErrorFromNodeReason,
    "getNodeErrorProps",
    ()=>getNodeErrorProps,
    "unwrapNodeErrorChain",
    ()=>unwrapNodeErrorChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
;
function connectErrorFromNodeReason(reason) {
    let code = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal;
    const chain = unwrapNodeErrorChain(reason).map(getNodeErrorProps);
    if (chain.some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
        // We do not want intentional errors from the server to be shadowed
        // by client-side errors.
        // This can occur if the server has written a response with an error
        // and has ended the connection. This response may already sit in a
        // buffer on the client, while it is still writing to the request
        // body.
        // To avoid this problem, we wrap ERR_STREAM_WRITE_AFTER_END as a
        // ConnectError with Code.Aborted. The special meaning of this code
        // in this situation is documented in StreamingConn.send() and in
        // createServerStreamingFn().
        code = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ERR_STREAM_DESTROYED" || p.code == "ERR_HTTP2_INVALID_STREAM" || p.code == "ECONNRESET")) {
        // A handler whose stream is suddenly destroyed usually means the client
        // hung up. This behavior is triggered by the conformance test "cancel_after_begin".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ETIMEDOUT" || p.code == "ENOTFOUND" || p.code == "EAI_AGAIN" || p.code == "ECONNREFUSED")) {
        // Calling an unresolvable host should raise a ConnectError with
        // Code.Aborted.
        // This behavior is covered by the conformance test "unresolvable_host".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Unavailable;
    }
    const ce = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"].from(reason, code);
    if (ce !== reason) {
        ce.cause = reason;
    }
    return ce;
}
function unwrapNodeErrorChain(reason) {
    const chain = [];
    for(;;){
        if (!(reason instanceof Error)) {
            break;
        }
        if (chain.includes(reason)) {
            break;
        }
        chain.push(reason);
        if (!("cause" in reason)) {
            break;
        }
        reason = reason.cause;
    }
    return chain;
}
function getNodeErrorProps(reason) {
    const props = {};
    if (reason instanceof Error) {
        if ("code" in reason && typeof reason.code == "string") {
            props.code = reason.code;
        }
        if ("syscall" in reason && typeof reason.syscall == "string") {
            props.syscall = reason.syscall;
        }
    }
    return props;
}
function connectErrorFromH2ResetCode(rstCode) {
    switch(rstCode){
        case H2Code.PROTOCOL_ERROR:
        case H2Code.INTERNAL_ERROR:
        case H2Code.FLOW_CONTROL_ERROR:
        case H2Code.SETTINGS_TIMEOUT:
        case H2Code.FRAME_SIZE_ERROR:
        case H2Code.COMPRESSION_ERROR:
        case H2Code.CONNECT_ERROR:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
        case H2Code.REFUSED_STREAM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Unavailable);
        case H2Code.CANCEL:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Canceled);
        case H2Code.ENHANCE_YOUR_CALM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
        case H2Code.INADEQUATE_SECURITY:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.HTTP_1_1_REQUIRED:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.STREAM_CLOSED:
        default:
            break;
    }
    return undefined;
}
var H2Code;
(function(H2Code) {
    H2Code[H2Code["PROTOCOL_ERROR"] = 1] = "PROTOCOL_ERROR";
    H2Code[H2Code["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    H2Code[H2Code["FLOW_CONTROL_ERROR"] = 3] = "FLOW_CONTROL_ERROR";
    H2Code[H2Code["SETTINGS_TIMEOUT"] = 4] = "SETTINGS_TIMEOUT";
    H2Code[H2Code["STREAM_CLOSED"] = 5] = "STREAM_CLOSED";
    H2Code[H2Code["FRAME_SIZE_ERROR"] = 6] = "FRAME_SIZE_ERROR";
    H2Code[H2Code["REFUSED_STREAM"] = 7] = "REFUSED_STREAM";
    H2Code[H2Code["CANCEL"] = 8] = "CANCEL";
    H2Code[H2Code["COMPRESSION_ERROR"] = 9] = "COMPRESSION_ERROR";
    H2Code[H2Code["CONNECT_ERROR"] = 10] = "CONNECT_ERROR";
    H2Code[H2Code["ENHANCE_YOUR_CALM"] = 11] = "ENHANCE_YOUR_CALM";
    H2Code[H2Code["INADEQUATE_SECURITY"] = 12] = "INADEQUATE_SECURITY";
    H2Code[H2Code["HTTP_1_1_REQUIRED"] = 13] = "HTTP_1_1_REQUIRED";
})(H2Code || (H2Code = {}));
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "compressionBrotli",
    ()=>compressionBrotli,
    "compressionGzip",
    ()=>compressionGzip
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/zlib [external] (zlib, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-ssr] (ecmascript)");
;
;
;
;
const gzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["gzip"]);
const gunzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["gunzip"]);
const brotliCompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["brotliCompress"]);
const brotliDecompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["brotliDecompress"]);
const compressionGzip = {
    name: "gzip",
    compress (bytes) {
        return gzip(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(gunzip(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
const compressionBrotli = {
    name: "br",
    compress (bytes) {
        return brotliCompress(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(brotliDecompress(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
function wrapZLibErrors(promise, readMaxBytes) {
    return promise.catch((e)=>{
        const { code } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeErrorProps"])(e);
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch(code){
            case "ERR_BUFFER_TOO_LARGE":
                e = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`message is larger than configured readMaxBytes ${readMaxBytes} after decompression`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                e = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("decompression failed", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].InvalidArgument, undefined, undefined, e);
                break;
            default:
                e = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("decompression failed", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal, undefined, undefined, e);
                break;
        }
        return Promise.reject(e);
    });
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Convert a Node.js header object to a fetch API Headers object.
 *
 * This function works for Node.js incoming and outgoing headers, and for the
 * http and the http2 package.
 *
 * HTTP/2 pseudo-headers (:method, :path, etc.) are stripped.
 */ __turbopack_context__.s([
    "nodeHeaderToWebHeader",
    ()=>nodeHeaderToWebHeader,
    "webHeaderToNodeHeaders",
    ()=>webHeaderToNodeHeaders
]);
function nodeHeaderToWebHeader(nodeHeaders) {
    const header = new Headers();
    for (const [k, v] of Object.entries(nodeHeaders)){
        if (k.startsWith(":")) {
            continue;
        }
        if (v === undefined) {
            continue;
        }
        if (typeof v == "string") {
            header.append(k, v);
        } else if (typeof v == "number") {
            header.append(k, String(v));
        } else {
            for (const e of v){
                header.append(k, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders(headersInit) {
    if (headersInit === undefined) {
        return undefined;
    }
    const o = Object.create(null);
    const append = (key, value)=>{
        key = key.toLowerCase();
        const existing = o[key];
        if (typeof existing == "string") {
            o[key] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            o[key] = value;
        }
    };
    if (Array.isArray(headersInit)) {
        for (const [key, value] of headersInit){
            append(key, value);
        }
    } else if ("forEach" in headersInit) {
        if (typeof headersInit.forEach == "function") {
            headersInit.forEach((value, key)=>{
                append(key, value);
            });
        }
    } else {
        for (const [key, value] of Object.entries(headersInit)){
            append(key, value);
        }
    }
    return o;
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "Http2SessionManager",
    ()=>Http2SessionManager
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-ssr] (ecmascript)");
;
;
;
class Http2SessionManager {
    /**
     * The current state of the connection:
     *
     * - "closed"
     *   The connection is closed, or no connection has been opened yet.
     * - connecting
     *   Currently establishing a connection.
     *
     * - "open"
     *   A connection is open and has open streams. PING frames are sent every
     *   pingIntervalMs, unless a stream received data.
     *   If a PING frame is not responded to within pingTimeoutMs, the connection
     *   and all open streams close.
     *
     * - "idle"
     *   A connection is open, but it does not have any open streams.
     *   If pingIdleConnection is enabled, PING frames are used to keep the
     *   connection alive, similar to an "open" connection.
     *   If a connection is idle for longer than idleConnectionTimeoutMs, it closes.
     *   If a request is made on an idle connection that has not been used for
     *   longer than pingIntervalMs, the connection is verified.
     *
     * - "verifying"
     *   Verifying a connection after a long period of inactivity before issuing a
     *   request. A PING frame is sent, and if it times out within pingTimeoutMs, a
     *   new connection is opened.
     *
     * - "error"
     *   The connection is closed because of a transient error. A connection
     *   may have failed to reach the host, or the connection may have died,
     *   or it may have been aborted.
     */ state() {
        if (this.s.t == "ready") {
            if (this.verifying !== undefined) {
                return "verifying";
            }
            return this.s.streamCount() > 0 ? "open" : "idle";
        }
        return this.s.t;
    }
    /**
     * Returns the error object if the connection is in the "error" state,
     * `undefined` otherwise.
     */ error() {
        if (this.s.t == "error") {
            return this.s.reason;
        }
        return undefined;
    }
    constructor(authority, pingOptions, http2SessionOptions){
        var _a, _b, _c, _d;
        this.s = closed();
        this.shuttingDown = [];
        this.authority = new URL(authority).origin;
        this.http2SessionOptions = http2SessionOptions;
        this.options = {
            pingIntervalMs: (_a = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIntervalMs) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY,
            pingTimeoutMs: (_b = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingTimeoutMs) !== null && _b !== void 0 ? _b : 1000 * 15,
            pingIdleConnection: (_c = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIdleConnection) !== null && _c !== void 0 ? _c : false,
            idleConnectionTimeoutMs: (_d = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.idleConnectionTimeoutMs) !== null && _d !== void 0 ? _d : 1000 * 60 * 15
        };
    }
    /**
     * Open a connection if none exists, verify an existing connection if
     * necessary.
     */ async connect() {
        try {
            const ready = await this.gotoReady();
            return ready.streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    /**
     * Issue a request.
     *
     * This method automatically opens a connection if none exists, and verifies
     * an existing connection if necessary. It calls http2.ClientHttp2Session.request(),
     * and keeps track of all open http2.ClientHttp2Stream.
     *
     * Clients must call notifyResponseByteRead() whenever they successfully read
     * data from the http2.ClientHttp2Stream.
     */ async request(method, path, headers, options) {
        // Request sometimes fails with goaway/destroyed
        // errors, we use a loop to retry.
        //
        // This is not expected to happen often, but it is possible that a
        // connection is closed while we are trying to open a stream.
        //
        // Ref: https://github.com/nodejs/help/issues/2105
        for(;;){
            const ready = await this.gotoReady();
            try {
                const stream = ready.conn.request(Object.assign(Object.assign({}, headers), {
                    ":method": method,
                    ":path": path
                }), options);
                ready.registerRequest(stream);
                return stream;
            } catch (e) {
                // Check to see if the connection is closed or destroyed
                // and if so, we try again.
                if (ready.conn.closed || ready.conn.destroyed) {
                    continue;
                }
                throw e;
            }
        }
    }
    /**
     * Notify the manager of a successful read from a http2.ClientHttp2Stream.
     *
     * Clients must call this function whenever they successfully read data from
     * a http2.ClientHttp2Stream obtained from request(). This informs the
     * keep-alive logic that the connection is alive, and prevents it from sending
     * unnecessary PING frames.
     */ notifyResponseByteRead(stream) {
        if (this.s.t == "ready") {
            this.s.responseByteRead(stream);
        }
        for (const s of this.shuttingDown){
            s.responseByteRead(stream);
        }
    }
    /**
     * If there is an open connection, close it. This also closes any open streams.
     */ abort(reason) {
        var _a, _b, _c;
        const err = reason !== null && reason !== void 0 ? reason : new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("connection aborted", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Canceled);
        (_b = (_a = this.s).abort) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        for (const s of this.shuttingDown){
            (_c = s.abort) === null || _c === void 0 ? void 0 : _c.call(s, err);
        }
        this.setState(closedOrError(err));
    }
    async gotoReady() {
        if (this.s.t == "ready") {
            if (this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed) {
                this.setState(connect(this.authority, this.http2SessionOptions));
            } else if (this.s.requiresVerify()) {
                await this.verify(this.s);
            }
        } else if (this.s.t == "closed" || this.s.t == "error") {
            this.setState(connect(this.authority, this.http2SessionOptions));
        }
        while(this.s.t !== "ready"){
            if (this.s.t === "error") {
                throw this.s.reason;
            }
            if (this.s.t === "connecting") {
                await this.s.conn;
            }
        }
        return this.s;
    }
    setState(state) {
        var _a, _b;
        (_b = (_a = this.s).onExitState) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.s.t == "ready" && this.s.isShuttingDown()) {
            // Maintain connections that have been asked to shut down.
            const sd = this.s;
            this.shuttingDown.push(sd);
            sd.onClose = sd.onError = ()=>{
                const i = this.shuttingDown.indexOf(sd);
                if (i !== -1) {
                    this.shuttingDown.splice(i, 1);
                }
            };
        }
        switch(state.t){
            case "connecting":
                state.conn.then((value)=>{
                    this.setState(ready(value, this.options));
                }, (reason)=>{
                    this.setState(closedOrError(reason));
                });
                break;
            case "ready":
                state.onClose = ()=>this.setState(closed());
                state.onError = (err)=>this.setState(closedOrError(err));
                break;
            case "closed":
                break;
            case "error":
                break;
        }
        this.s = state;
    }
    verify(stateReady) {
        if (this.verifying !== undefined) {
            return this.verifying;
        }
        this.verifying = stateReady.verify().then((success)=>{
            if (success) {
                return;
            }
            // verify() has destroyed the old connection
            this.setState(connect(this.authority, this.http2SessionOptions));
        }, (reason)=>{
            this.setState(closedOrError(reason));
        }).finally(()=>{
            this.verifying = undefined;
        });
        return this.verifying;
    }
}
function closed() {
    return {
        t: "closed"
    };
}
function error(reason) {
    return {
        t: "error",
        reason
    };
}
function closedOrError(reason) {
    const isCancel = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"] && __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Canceled;
    return isCancel ? closed() : error(reason);
}
function connect(authority, http2SessionOptions) {
    let resolve;
    let reject;
    const conn = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    const newConn = __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["connect"](authority, http2SessionOptions);
    newConn.on("connect", onConnect);
    newConn.on("error", onError);
    function onConnect() {
        resolve === null || resolve === void 0 ? void 0 : resolve(newConn);
        cleanup();
    }
    function onError(err) {
        reject === null || reject === void 0 ? void 0 : reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        cleanup();
    }
    function cleanup() {
        newConn.off("connect", onConnect);
        newConn.off("error", onError);
    }
    return {
        t: "connecting",
        conn,
        abort (reason) {
            if (!newConn.destroyed) {
                newConn.destroy(undefined, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
            }
            // According to the documentation, destroy() should immediately terminate
            // the session and the socket, but we still receive a "connect" event.
            // We must not resolve a broken connection, so we reject it manually here.
            reject === null || reject === void 0 ? void 0 : reject(reason);
        },
        onExitState () {
            cleanup();
        }
    };
}
function ready(conn, options) {
    // Users have reported an error "The session has been destroyed" raised
    // from H2SessionManager.request(), see https://github.com/connectrpc/connect-es/issues/683
    // This assertion will show whether the session already died in the
    // "connecting" state.
    assertSessionOpen(conn);
    // Do not block Node.js from exiting on an idle connection.
    // Note that we ref() again for the first stream to open, and unref() again
    // for the last stream to close.
    conn.unref();
    // the last time we were sure that the connection is alive, via a PING
    // response, or via received response bytes
    let lastAliveAt = Date.now();
    // how many streams are currently open on this session
    let streamCount = 0;
    // timer for the keep-alive interval
    let pingIntervalId;
    // timer for waiting for a PING response
    let pingTimeoutId;
    // keep track of GOAWAY - gracefully shut down open streams / wait for connection to error
    let receivedGoAway = false;
    // keep track of GOAWAY with ENHANCE_YOUR_CALM and with debug data too_many_pings
    let receivedGoAwayEnhanceYourCalmTooManyPings = false;
    // timer for closing connections without open streams, must be initialized
    let idleTimeoutId;
    resetIdleTimeout();
    const state = {
        t: "ready",
        conn,
        streamCount () {
            return streamCount;
        },
        requiresVerify () {
            const elapsedMs = Date.now() - lastAliveAt;
            return elapsedMs > options.pingIntervalMs;
        },
        isShuttingDown () {
            return receivedGoAway;
        },
        onClose: undefined,
        onError: undefined,
        registerRequest (stream) {
            streamCount++;
            if (streamCount == 1) {
                conn.ref();
                resetPingInterval(); // reset to ping with the appropriate interval for "open"
                stopIdleTimeout();
            }
            stream.once("response", ()=>{
                lastAliveAt = Date.now();
                resetPingInterval();
            });
            stream.once("close", ()=>{
                streamCount--;
                if (streamCount == 0) {
                    conn.unref();
                    resetPingInterval(); // reset to ping with the appropriate interval for "idle"
                    resetIdleTimeout();
                }
            });
        },
        responseByteRead (stream) {
            if (stream.session !== conn) {
                return;
            }
            if (conn.closed || conn.destroyed) {
                return;
            }
            if (streamCount <= 0) {
                return;
            }
            lastAliveAt = Date.now();
            resetPingInterval();
        },
        verify () {
            conn.ref();
            return new Promise((resolve)=>{
                commonPing(()=>{
                    if (streamCount == 0) conn.unref();
                    resolve(true);
                });
                conn.once("error", ()=>resolve(false));
            });
        },
        abort (reason) {
            if (!conn.destroyed) {
                conn.once("error", ()=>{
                // conn.destroy() may raise an error after onExitState() was called
                // and our error listeners are removed.
                // We attach this one to swallow uncaught exceptions.
                });
                conn.destroy(reason, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
            }
        },
        onExitState () {
            if (state.isShuttingDown()) {
                // Per the interface, this method is called when the manager is leaving
                // the state. We maintain this connection in the session manager until
                // all streams have finished, so we do not detach event listeners here.
                return;
            }
            cleanup();
            this.onError = undefined;
            this.onClose = undefined;
        }
    };
    // start or restart the ping interval
    function resetPingInterval() {
        stopPingInterval();
        if (streamCount > 0 || options.pingIdleConnection) {
            pingIntervalId = safeSetTimeout(onPingInterval, options.pingIntervalMs);
        }
    }
    function stopPingInterval() {
        clearTimeout(pingIntervalId);
        clearTimeout(pingTimeoutId);
    }
    function onPingInterval() {
        commonPing(resetPingInterval);
    }
    function commonPing(onSuccess) {
        clearTimeout(pingTimeoutId);
        pingTimeoutId = safeSetTimeout(()=>{
            conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
        }, options.pingTimeoutMs);
        conn.ping((err, duration)=>{
            clearTimeout(pingTimeoutId);
            if (err !== null) {
                // We will receive an ERR_HTTP2_PING_CANCEL here if we destroy the
                // connection with a pending ping.
                // We might also see other errors, but they should be picked up by the
                // "error" event listener.
                return;
            }
            if (duration > options.pingTimeoutMs) {
                // setTimeout is not precise, and HTTP/2 pings take less than 1ms in
                // tests.
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_CANCEL);
                return;
            }
            lastAliveAt = Date.now();
            onSuccess();
        });
    }
    function stopIdleTimeout() {
        clearTimeout(idleTimeoutId);
    }
    function resetIdleTimeout() {
        idleTimeoutId = safeSetTimeout(onIdleTimeout, options.idleConnectionTimeoutMs);
    }
    function onIdleTimeout() {
        conn.close();
        onClose(); // trigger a state change right away, so we are not open to races
    }
    function onGoaway(errorCode, lastStreamID, opaqueData) {
        receivedGoAway = true;
        const tooManyPingsAscii = Buffer.from("too_many_pings", "ascii");
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_ENHANCE_YOUR_CALM && opaqueData != null && opaqueData.equals(tooManyPingsAscii)) {
            // double pingIntervalMs, following the last paragraph of https://github.com/grpc/proposal/blob/0ba0c1905050525f9b0aee46f3f23c8e1e515489/A8-client-side-keepalive.md#basic-keepalive
            options.pingIntervalMs = options.pingIntervalMs * 2;
            receivedGoAwayEnhanceYourCalmTooManyPings = true;
        }
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_NO_ERROR) {
            const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
            // Node.js v16 closes a connection on its own when it receives a GOAWAY
            // frame and there are no open streams (emitting a "close" event and
            // destroying the session), but more recent versions do not.
            // Calling close() ourselves is ineffective here - it appears that the
            // method is already being called, see https://github.com/nodejs/node/blob/198affc63973805ce5102d246f6b7822be57f5fc/lib/internal/http2/core.js#L681
            if (streamCount == 0 && nodeMajor >= 18) {
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("received GOAWAY without any open streams", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Canceled), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_NO_ERROR);
            }
        }
    }
    function onClose() {
        var _a;
        cleanup();
        (_a = state.onClose) === null || _a === void 0 ? void 0 : _a.call(state);
    }
    function onError(err) {
        var _a, _b;
        cleanup();
        if (receivedGoAwayEnhanceYourCalmTooManyPings) {
            // We cannot prevent node from destroying session and streams with its own
            // error that does not carry debug data, but at least we can wrap the error
            // we surface on the manager.
            const ce = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${__TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__["constants"].NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
            (_a = state.onError) === null || _a === void 0 ? void 0 : _a.call(state, ce);
        } else {
            (_b = state.onError) === null || _b === void 0 ? void 0 : _b.call(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        }
    }
    function cleanup() {
        stopPingInterval();
        stopIdleTimeout();
        conn.off("error", onError);
        conn.off("close", onClose);
        conn.off("goaway", onGoaway);
    }
    conn.on("error", onError);
    conn.on("close", onClose);
    conn.on("goaway", onGoaway);
    return state;
}
/**
 * setTimeout(), but simply ignores values larger than the maximum supported
 * value (signed 32-bit integer) instead of calling the callback right away,
 * and does not block Node.js from exiting.
 */ function safeSetTimeout(callback, ms) {
    if (ms > 0x7fffffff) {
        return;
    }
    return setTimeout(callback, ms).unref();
}
function assertSessionOpen(conn) {
    if (conn.connecting) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is connecting", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.destroyed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is destroyed", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.closed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is closed", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "createNodeHttpClient",
    ()=>createNodeHttpClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol/signals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function createNodeHttpClient(options) {
    var _a;
    if (options.httpVersion == "1.1") {
        return createNodeHttp1Client(options.nodeOptions);
    }
    const sessionProvider = (_a = options.sessionProvider) !== null && _a !== void 0 ? _a : (authority)=>new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http2SessionManager"](authority);
    return createNodeHttp2Client(sessionProvider);
}
/**
 * Create an HTTP client using the Node.js `http` or `https` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp1Client(httpOptions) {
    return async function request(req) {
        const sentinel = createSentinel(req.signal);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h1Request(sentinel, req.url, Object.assign(Object.assign({}, httpOptions), {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header),
                method: req.method
            }), (request)=>{
                void sinkRequest(req, request, sentinel);
                request.on("response", (response)=>{
                    var _a;
                    response.on("error", sentinel.reject);
                    sentinel.catch((reason)=>response.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
                    const trailer = new Headers();
                    resolve({
                        status: (_a = response.statusCode) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.headers),
                        body: h1ResponseIterable(sentinel, response, trailer),
                        trailer
                    });
                });
            });
        });
    };
}
/**
 * Create an HTTP client using the Node.js `http2` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp2Client(sessionProvider) {
    return function request(req) {
        const sentinel = createSentinel(req.signal);
        const sessionManager = sessionProvider(req.url);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h2Request(sentinel, sessionManager, req.url, req.method, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header), {}, (stream)=>{
                void sinkRequest(req, stream, sentinel);
                stream.on("response", (headers)=>{
                    var _a;
                    const response = {
                        status: (_a = headers[":status"]) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(headers),
                        body: h2ResponseIterable(sentinel, stream, sessionManager),
                        trailer: h2ResponseTrailer(stream)
                    };
                    resolve(response);
                });
            });
        });
    };
}
function h1Request(sentinel, url, options, onRequest) {
    let request;
    if (new URL(url).protocol.startsWith("https")) {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["request"](url, options);
    } else {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["request"](url, options);
    }
    sentinel.catch((reason)=>request.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
    // Node.js will only send headers with the first request body byte by default.
    // We force it to send headers right away for consistent behavior between
    // HTTP/1.1 and HTTP/2.2 clients.
    request.flushHeaders();
    request.on("error", sentinel.reject);
    request.on("socket", function onRequestSocket(socket) {
        function onSocketConnect() {
            socket.off("connect", onSocketConnect);
            onRequest(request);
        }
        // If readyState is open, then socket is already open due to keepAlive, so
        // the 'connect' event will never fire so call onRequest explicitly
        if (socket.readyState === "open") {
            onRequest(request);
        } else {
            socket.on("connect", onSocketConnect);
        }
    });
}
function h1ResponseIterable(sentinel, response, trailer) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.trailers).forEach((value, key)=>{
                            trailer.set(key, value);
                        });
                        sentinel.resolve();
                        await sentinel;
                    }
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
function h2Request(sentinel, sm, url, method, headers, options, onStream) {
    const requestUrl = new URL(url, sm.authority);
    if (requestUrl.origin !== sm.authority) {
        const message = `cannot make a request to ${requestUrl.origin}: the http2 session is connected to ${sm.authority}`;
        sentinel.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"](message, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal));
        return;
    }
    sm.request(method, requestUrl.pathname + requestUrl.search, headers, {}).then((stream)=>{
        sentinel.catch((reason)=>{
            if (stream.closed) {
                return;
            }
            // Node.js http2 streams that are aborted via an AbortSignal close with
            // an RST_STREAM with code INTERNAL_ERROR.
            // To comply with the mapping between gRPC and HTTP/2 codes, we need to
            // close with code CANCEL.
            // See https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#errors
            // See https://www.rfc-editor.org/rfc/rfc7540#section-7
            const rstCode = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"] && reason.code == __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Canceled ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H2Code"].CANCEL : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H2Code"].INTERNAL_ERROR;
            return new Promise((resolve)=>stream.close(rstCode, resolve));
        });
        stream.on("error", function h2StreamError(e) {
            if (stream.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                return;
            }
            sentinel.reject(e);
        });
        stream.on("close", function h2StreamClose() {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(stream.rstCode);
            if (err) {
                sentinel.reject(err);
            }
        });
        onStream(stream);
    }, (reason)=>{
        sentinel.reject(reason);
    });
}
function h2ResponseTrailer(response) {
    const trailer = new Headers();
    response.on("trailers", (args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(args).forEach((value, key)=>{
            trailer.set(key, value);
        });
    });
    return trailer;
}
function h2ResponseIterable(sentinel, response, sm) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        sentinel.resolve();
                        await sentinel;
                    }
                    sm === null || sm === void 0 ? void 0 : sm.notifyResponseByteRead(response);
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
async function sinkRequest(request, nodeRequest, sentinel) {
    if (request.body === undefined) {
        await new Promise((resolve)=>nodeRequest.end(resolve));
        return;
    }
    const it = request.body[Symbol.asyncIterator]();
    return new Promise((resolve)=>{
        writeNext();
        function writeNext() {
            if (sentinel.isRejected()) {
                return;
            }
            it.next().then((r)=>{
                if (r.done === true) {
                    nodeRequest.end(resolve);
                    return;
                }
                nodeRequest.write(r.value, "binary", function(e) {
                    if (e === null || e === undefined) {
                        writeNext();
                        return;
                    }
                    if (it.throw !== undefined) {
                        it.throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e)).catch(()=>{
                        //
                        });
                    }
                    // If the server responds and closes the connection before the client has written the entire response
                    // body, we get an ERR_STREAM_WRITE_AFTER_END error code from Node.js here.
                    // We do want to notify the iterable of the error condition, but we do not want to reject our sentinel,
                    // because that would also affect the reading side.
                    if (nodeRequest.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                        return;
                    }
                    sentinel.reject(e);
                });
            }, (e)=>{
                sentinel.reject(e);
            });
        }
    });
}
function createSentinel(signal) {
    let res;
    let rej;
    let resolved = false;
    let rejected = false;
    const p = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    const c = {
        resolve () {
            if (!resolved && !rejected) {
                resolved = true;
                res === null || res === void 0 ? void 0 : res();
            }
        },
        isResolved () {
            return resolved;
        },
        reject (reason) {
            if (!resolved && !rejected) {
                rejected = true;
                rej === null || rej === void 0 ? void 0 : rej((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason));
            }
        },
        isRejected () {
            return rejected;
        },
        async race (promise) {
            const r = await Promise.race([
                promise,
                p
            ]);
            if (r === undefined && resolved) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("sentinel completed early", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
            return r;
        }
    };
    const s = Object.assign(p, c);
    function onSignalAbort() {
        c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(this));
    }
    if (signal) {
        if (signal.aborted) {
            c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(signal));
        } else {
            signal.addEventListener("abort", onSignalAbort);
        }
        p.finally(()=>signal.removeEventListener("abort", onSignalAbort)).catch(()=>{
        // We intentionally swallow sentinel rejection - errors must
        // propagate through the request or response iterables.
        });
    }
    return s;
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "validateNodeTransportOptions",
    ()=>validateNodeTransportOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
;
;
;
;
;
;
;
function validateNodeTransportOptions(options) {
    var _a, _b, _c, _d;
    let httpClient;
    if (options.httpVersion == "2") {
        let sessionManager;
        if (options.sessionManager) {
            sessionManager = options.sessionManager;
        } else {
            sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Http2SessionManager"](options.baseUrl, {
                pingIntervalMs: options.pingIntervalMs,
                pingIdleConnection: options.pingIdleConnection,
                pingTimeoutMs: options.pingTimeoutMs,
                idleConnectionTimeoutMs: options.idleConnectionTimeoutMs
            }, options.nodeOptions);
        }
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "2",
            sessionProvider: ()=>sessionManager
        });
    } else {
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "1.1",
            nodeOptions: options.nodeOptions
        });
    }
    return Object.assign(Object.assign(Object.assign({}, options), {
        httpClient,
        useBinaryFormat: (_a = options.useBinaryFormat) !== null && _a !== void 0 ? _a : true,
        interceptors: (_b = options.interceptors) !== null && _b !== void 0 ? _b : [],
        sendCompression: (_c = options.sendCompression) !== null && _c !== void 0 ? _c : null,
        acceptCompression: (_d = options.acceptCompression) !== null && _d !== void 0 ? _d : [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ]
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateReadWriteMaxBytes"])(options.readMaxBytes, options.writeMaxBytes, options.compressMinBytes));
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "createGrpcWebTransport",
    ()=>createGrpcWebTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-ssr] (ecmascript)");
;
;
function createGrpcWebTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "createGrpcTransport",
    ()=>createGrpcTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-ssr] (ecmascript)");
;
;
function createGrpcTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "createConnectTransport",
    ()=>createConnectTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol-connect/transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-ssr] (ecmascript)");
;
;
function createConnectTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "universalRequestFromNodeRequest",
    ()=>universalRequestFromNodeRequest,
    "universalResponseToNodeResponse",
    ()=>universalResponseToNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-ssr] (ecmascript)");
var __asyncValues = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __await = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
;
;
;
function universalRequestFromNodeRequest(nodeRequest, parsedJsonBody, contextValues) {
    var _a, _b;
    const encrypted = "encrypted" in nodeRequest.socket && nodeRequest.socket.encrypted;
    const protocol = encrypted ? "https" : "http";
    const authority = "authority" in nodeRequest ? nodeRequest.authority : nodeRequest.headers.host;
    const pathname = (_a = nodeRequest.url) !== null && _a !== void 0 ? _a : "";
    if (authority === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"]("unable to determine request authority from Node.js server request", __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    const body = parsedJsonBody !== undefined ? parsedJsonBody : asyncIterableFromNodeServerRequest(nodeRequest);
    const abortController = new AbortController();
    if ("stream" in nodeRequest) {
        // HTTP/2 has error codes we want to honor
        nodeRequest.once("close", ()=>{
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(nodeRequest.stream.rstCode);
            if (err !== undefined) {
                abortController.abort(err);
            } else {
                abortController.abort();
            }
        });
    } else {
        // HTTP/1.1 does not have error codes, but Node.js has ECONNRESET
        const onH1Error = (e)=>{
            nodeRequest.off("error", onH1Error);
            nodeRequest.off("close", onH1Close);
            abortController.abort((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e));
        };
        const onH1Close = ()=>{
            nodeRequest.off("error", onH1Error);
            nodeRequest.off("close", onH1Close);
            abortController.abort();
        };
        nodeRequest.once("error", onH1Error);
        nodeRequest.once("close", onH1Close);
    }
    return {
        httpVersion: nodeRequest.httpVersion,
        method: (_b = nodeRequest.method) !== null && _b !== void 0 ? _b : "",
        url: new URL(pathname, `${protocol}://${authority}`).toString(),
        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(nodeRequest.headers),
        body,
        signal: abortController.signal,
        contextValues: contextValues
    };
}
async function universalResponseToNodeResponse(universalResponse, nodeResponse) {
    var _a, _b, _c;
    const it = (_a = universalResponse.body) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]();
    let isWriteError = false;
    try {
        if (it !== undefined) {
            let chunk = await it.next();
            isWriteError = true;
            // we deliberately send headers after first read, not before,
            // because we have to give the implementation a chance to
            // set response headers
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
            isWriteError = false;
            for(; chunk.done !== true; chunk = await it.next()){
                isWriteError = true;
                await write(nodeResponse, chunk.value);
                if ("flush" in nodeResponse && typeof nodeResponse.flush == "function") {
                    // The npm package "compression" is an express middleware that is widely used,
                    // for example in next.js. It uses the npm package "compressible" to determine
                    // whether to apply compression to a response. Unfortunately, "compressible"
                    // matches every mime type that ends with "+json", causing our server-streaming
                    // RPCs to be buffered.
                    // The package modifies the response object, and adds a flush() method, which
                    // flushes the underlying gzip or deflate stream from the Node.js zlib module.
                    // The method is added here:
                    // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L70
                    nodeResponse.flush();
                }
                isWriteError = false;
            }
        }
        if (!nodeResponse.headersSent) {
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
        }
        if (universalResponse.trailer) {
            nodeResponse.addTrailers((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.trailer));
        }
        await new Promise((resolve)=>{
            // The npm package "compression" crashes when a callback is passed to end()
            // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L115
            nodeResponse.once("end", resolve);
            nodeResponse.end();
        });
    } catch (e) {
        // Report write errors to the handler.
        if (isWriteError) {
            (_b = it === null || it === void 0 ? void 0 : it.throw) === null || _b === void 0 ? void 0 : _b.call(it, e).catch(()=>{});
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e);
    } finally{
        (_c = it === null || it === void 0 ? void 0 : it.return) === null || _c === void 0 ? void 0 : _c.call(it).catch(()=>{});
    }
}
function asyncIterableFromNodeServerRequest(request) {
    return __asyncGenerator(this, arguments, function* asyncIterableFromNodeServerRequest_1() {
        var _a, e_1, _b, _c;
        try {
            for(var _d = true, request_1 = __asyncValues(request), request_1_1; request_1_1 = yield __await(request_1.next()), _a = request_1_1.done, !_a; _d = true){
                _c = request_1_1.value;
                _d = false;
                const chunk = _c;
                yield yield __await(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a && (_b = request_1.return)) yield __await(_b.call(request_1));
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    });
}
function write(stream, data) {
    return new Promise((resolve, reject)=>{
        if (stream.errored) {
            return error(stream.errored);
        }
        stream.once("error", error);
        stream.once("drain", drain);
        // flushed == false: the stream wishes for the calling code to wait for
        // the 'drain' event to be emitted before continuing to write additional
        // data.
        const flushed = stream.write(data, "binary", function(err) {
            if (err && !flushed) {
                // We are never getting a "drain" nor an "error" event if the stream
                // has already ended (ERR_STREAM_WRITE_AFTER_END), so we have to
                // resolve our promise in this callback.
                error(err);
                // However, once we do that (and remove our event listeners), we _do_
                // get an "error" event, which ends up as an uncaught exception.
                // We silence this error specifically with the following listener.
                // All of this seems very fragile.
                stream.once("error", ()=>{
                //
                });
            }
        });
        if (flushed) {
            drain();
        }
        function error(err) {
            stream.off("error", error);
            stream.off("drain", drain);
            reject(err);
        }
        function drain() {
            stream.off("error", error);
            stream.off("drain", drain);
            resolve();
        }
    });
}
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_context__.s([
    "connectNodeAdapter",
    ()=>connectNodeAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/router.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1/node_modules/@connectrpc/connect/dist/esm/protocol/universal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-ssr] (ecmascript)");
;
;
;
;
function connectNodeAdapter(options) {
    var _a;
    if (options.acceptCompression === undefined) {
        options.acceptCompression = [
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ];
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConnectRouter"])(options);
    options.routes(router);
    const prefix = (_a = options.requestPathPrefix) !== null && _a !== void 0 ? _a : "";
    const paths = new Map();
    for (const uHandler of router.handlers){
        paths.set(prefix + uHandler.requestPath, uHandler);
    }
    return function nodeRequestHandler(req, res) {
        var _a, _b, _c, _d;
        // Strip the query parameter when matching paths.
        const uHandler = paths.get((_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?", 2)[0]) !== null && _b !== void 0 ? _b : "");
        if (!uHandler) {
            ((_c = options.fallback) !== null && _c !== void 0 ? _c : fallback)(req, res);
            return;
        }
        const uReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["universalRequestFromNodeRequest"])(req, undefined, (_d = options.contextValues) === null || _d === void 0 ? void 0 : _d.call(options, req));
        uHandler(uReq).then((uRes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["universalResponseToNodeResponse"])(uRes, res)).catch((reason)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Code"].Aborted) {
                return;
            }
            // eslint-disable-next-line no-console
            console.error(`handler for rpc ${uHandler.method.name} of ${uHandler.service.typeName} failed`, reason);
        });
    };
}
const fallback = (request, response)=>{
    response.writeHead(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1$2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uResponseNotFound"].status);
    response.end();
};
}),
"[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Polyfill the Headers API for Node versions < 18
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$headers$2d$polyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$web$2d$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$node$2d$adapter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f2e$pnpm$2f40$connectrpc$2b$connect$2d$node$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$40$connectrpc$2b$connect$40$1$2e$4$2e$0_$40$bufbuild$2b$protobuf$40$1$2e$10$2e$1_$2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/.pnpm/@connectrpc+connect-node@1.4.0_@bufbuild+protobuf@1.10.1_@connectrpc+connect@1.4.0_@bufbuild+protobuf@1.10.1_/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
];

//# sourceMappingURL=34ffd_%40connectrpc_connect-node_dist_esm_2c0daace._.js.map