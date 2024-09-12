/* esm.sh - esbuild bundle(readable-stream@2.3.8) denonext production */
import __Process$ from "node:process";
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
import * as __0$ from "/v133/core-util-is@1.0.3/denonext/core-util-is.mjs";
import * as __1$ from "/v133/inherits@2.0.4/denonext/inherits.mjs";
import * as __2$ from "/v133/core-util-is@1.0.3/denonext/core-util-is.mjs";
import * as __3$ from "/v133/inherits@2.0.4/denonext/inherits.mjs";
import * as __4$ from "/v133/process-nextick-args@2.0.1/denonext/process-nextick-args.mjs";
import * as __5$ from "/v133/core-util-is@1.0.3/denonext/core-util-is.mjs";
import * as __6$ from "/v133/inherits@2.0.4/denonext/inherits.mjs";
import * as __7$ from "/v133/process-nextick-args@2.0.1/denonext/process-nextick-args.mjs";
import * as __8$ from "/v133/core-util-is@1.0.3/denonext/core-util-is.mjs";
import * as __9$ from "/v133/inherits@2.0.4/denonext/inherits.mjs";
import * as __a$ from "/v133/util-deprecate@1.0.2/denonext/util-deprecate.mjs";
import * as __b$ from "/v133/safe-buffer@5.1.2/denonext/safe-buffer.mjs";
import * as __c$ from "/v133/process-nextick-args@2.0.1/denonext/process-nextick-args.mjs";
import * as __d$ from "node:events";
import * as __e$ from "/v133/isarray@1.0.0/denonext/isarray.mjs";
import * as __f$ from "node:events";
import * as __10$ from "/v133/process-nextick-args@2.0.1/denonext/process-nextick-args.mjs";
import * as __11$ from "/v133/safe-buffer@5.1.2/denonext/safe-buffer.mjs";
import * as __12$ from "/v133/core-util-is@1.0.3/denonext/core-util-is.mjs";
import * as __13$ from "/v133/inherits@2.0.4/denonext/inherits.mjs";
import * as __14$ from "node:util";
import * as __15$ from "node:string_decoder";
import * as __16$ from "/v133/safe-buffer@5.1.2/denonext/safe-buffer.mjs";
import * as __17$ from "node:util";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"core-util-is":return e(__0$);case"inherits":return e(__1$);case"process-nextick-args":return e(__4$);case"util-deprecate":return e(__a$);case"safe-buffer":return e(__b$);case"events":return e(__d$);case"isarray":return e(__e$);case"util":return e(__14$);case"string_decoder":return e(__15$);default:throw new Error("module \""+n+"\" not found");}};
var Ye=Object.create;var J=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var er=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty;var o=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var p=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),tr=(e,r)=>{for(var t in r)J(e,t,{get:r[t],enumerable:!0})},G=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of $e(r))!rr.call(e,n)&&n!==t&&J(e,n,{get:()=>r[n],enumerable:!(i=Ze(r,n))||i.enumerable});return e},v=(e,r,t)=>(G(e,r,"default"),t&&G(t,r,"default")),he=(e,r,t)=>(t=e!=null?Ye(er(e)):{},G(r||!e||!e.__esModule?J(t,"default",{value:e,enumerable:!0}):t,e));var Q=p((nt,ce)=>{ce.exports=o("events").EventEmitter});var be=p((at,V)=>{"use strict";function ir(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var pe=o("safe-buffer").Buffer,j=o("util");function nr(e,r,t){e.copy(r,t)}V.exports=function(){function e(){ir(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(t){var i={data:t,next:null};this.length>0?this.tail.next=i:this.head=i,this.tail=i,++this.length},e.prototype.unshift=function(t){var i={data:t,next:this.head};this.length===0&&(this.tail=i),this.head=i,++this.length},e.prototype.shift=function(){if(this.length!==0){var t=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(t){if(this.length===0)return"";for(var i=this.head,n=""+i.data;i=i.next;)n+=t+i.data;return n},e.prototype.concat=function(t){if(this.length===0)return pe.alloc(0);for(var i=pe.allocUnsafe(t>>>0),n=this.head,a=0;n;)nr(n.data,i,a),a+=n.data.length,n=n.next;return i},e}();j&&j.inspect&&j.inspect.custom&&(V.exports.prototype[j.inspect.custom]=function(){var e=j.inspect({length:this.length});return this.constructor.name+" "+e})});var Y=p((ft,ge)=>{"use strict";var O=o("process-nextick-args");function ar(e,r){var t=this,i=this._readableState&&this._readableState.destroyed,n=this._writableState&&this._writableState.destroyed;return i||n?(r?r(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,O.nextTick(L,this,e)):O.nextTick(L,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(a){!r&&a?t._writableState?t._writableState.errorEmitted||(t._writableState.errorEmitted=!0,O.nextTick(L,t,a)):O.nextTick(L,t,a):r&&r(a)}),this)}function fr(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function L(e,r){e.emit("error",r)}ge.exports={destroy:ar,undestroy:fr}});var $=p((lt,xe)=>{"use strict";var _=o("process-nextick-args");xe.exports=s;function ye(e){var r=this;this.next=null,this.entry=null,this.finish=function(){xr(r,e)}}var lr=!__Process$.browser&&["v0.10","v0.9."].indexOf(__Process$.version.slice(0,5))>-1?__setImmediate$:_.nextTick,M;s.WritableState=T;var ve=Object.create(o("core-util-is"));ve.inherits=o("inherits");var or={deprecate:o("util-deprecate")},_e=Q(),U=o("safe-buffer").Buffer,ur=(typeof __global$<"u"?__global$:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function sr(e){return U.from(e)}function dr(e){return U.isBuffer(e)||e instanceof ur}var Se=Y();ve.inherits(s,_e);function hr(){}function T(e,r){M=M||S(),e=e||{};var t=r instanceof M;this.objectMode=!!e.objectMode,t&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var i=e.highWaterMark,n=e.writableHighWaterMark,a=this.objectMode?16:16*1024;i||i===0?this.highWaterMark=i:t&&(n||n===0)?this.highWaterMark=n:this.highWaterMark=a,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var f=e.decodeStrings===!1;this.decodeStrings=!f,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(d){vr(r,d)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new ye(this)}T.prototype.getBuffer=function(){for(var r=this.bufferedRequest,t=[];r;)t.push(r),r=r.next;return t};(function(){try{Object.defineProperty(T.prototype,"buffer",{get:or.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}})();var P;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(P=Function.prototype[Symbol.hasInstance],Object.defineProperty(s,Symbol.hasInstance,{value:function(e){return P.call(this,e)?!0:this!==s?!1:e&&e._writableState instanceof T}})):P=function(e){return e instanceof this};function s(e){if(M=M||S(),!P.call(s,this)&&!(this instanceof M))return new s(e);this._writableState=new T(e,this),this.writable=!0,e&&(typeof e.write=="function"&&(this._write=e.write),typeof e.writev=="function"&&(this._writev=e.writev),typeof e.destroy=="function"&&(this._destroy=e.destroy),typeof e.final=="function"&&(this._final=e.final)),_e.call(this)}s.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))};function cr(e,r){var t=new Error("write after end");e.emit("error",t),_.nextTick(r,t)}function pr(e,r,t,i){var n=!0,a=!1;return t===null?a=new TypeError("May not write null values to stream"):typeof t!="string"&&t!==void 0&&!r.objectMode&&(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),_.nextTick(i,a),n=!1),n}s.prototype.write=function(e,r,t){var i=this._writableState,n=!1,a=!i.objectMode&&dr(e);return a&&!U.isBuffer(e)&&(e=sr(e)),typeof r=="function"&&(t=r,r=null),a?r="buffer":r||(r=i.defaultEncoding),typeof t!="function"&&(t=hr),i.ended?cr(this,t):(a||pr(this,i,e,t))&&(i.pendingcb++,n=gr(this,i,a,e,r,t)),n};s.prototype.cork=function(){var e=this._writableState;e.corked++};s.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest&&me(this,e))};s.prototype.setDefaultEncoding=function(r){if(typeof r=="string"&&(r=r.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((r+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+r);return this._writableState.defaultEncoding=r,this};function br(e,r,t){return!e.objectMode&&e.decodeStrings!==!1&&typeof r=="string"&&(r=U.from(r,t)),r}Object.defineProperty(s.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function gr(e,r,t,i,n,a){if(!t){var f=br(r,i,n);i!==f&&(t=!0,n="buffer",i=f)}var d=r.objectMode?1:i.length;r.length+=d;var c=r.length<r.highWaterMark;if(c||(r.needDrain=!0),r.writing||r.corked){var y=r.lastBufferedRequest;r.lastBufferedRequest={chunk:i,encoding:n,isBuf:t,callback:a,next:null},y?y.next=r.lastBufferedRequest:r.bufferedRequest=r.lastBufferedRequest,r.bufferedRequestCount+=1}else Z(e,r,!1,d,i,n,a);return c}function Z(e,r,t,i,n,a,f){r.writelen=i,r.writecb=f,r.writing=!0,r.sync=!0,t?e._writev(n,r.onwrite):e._write(n,a,r.onwrite),r.sync=!1}function wr(e,r,t,i,n){--r.pendingcb,t?(_.nextTick(n,i),_.nextTick(W,e,r),e._writableState.errorEmitted=!0,e.emit("error",i)):(n(i),e._writableState.errorEmitted=!0,e.emit("error",i),W(e,r))}function yr(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function vr(e,r){var t=e._writableState,i=t.sync,n=t.writecb;if(yr(t),r)wr(e,t,i,r,n);else{var a=Me(t);!a&&!t.corked&&!t.bufferProcessing&&t.bufferedRequest&&me(e,t),i?lr(we,e,t,a,n):we(e,t,a,n)}}function we(e,r,t,i){t||_r(e,r),r.pendingcb--,i(),W(e,r)}function _r(e,r){r.length===0&&r.needDrain&&(r.needDrain=!1,e.emit("drain"))}function me(e,r){r.bufferProcessing=!0;var t=r.bufferedRequest;if(e._writev&&t&&t.next){var i=r.bufferedRequestCount,n=new Array(i),a=r.corkedRequestsFree;a.entry=t;for(var f=0,d=!0;t;)n[f]=t,t.isBuf||(d=!1),t=t.next,f+=1;n.allBuffers=d,Z(e,r,!0,r.length,n,"",a.finish),r.pendingcb++,r.lastBufferedRequest=null,a.next?(r.corkedRequestsFree=a.next,a.next=null):r.corkedRequestsFree=new ye(r),r.bufferedRequestCount=0}else{for(;t;){var c=t.chunk,y=t.encoding,N=t.callback,R=r.objectMode?1:c.length;if(Z(e,r,!1,R,c,y,N),t=t.next,r.bufferedRequestCount--,r.writing)break}t===null&&(r.lastBufferedRequest=null)}r.bufferedRequest=t,r.bufferProcessing=!1}s.prototype._write=function(e,r,t){t(new Error("_write() is not implemented"))};s.prototype._writev=null;s.prototype.end=function(e,r,t){var i=this._writableState;typeof e=="function"?(t=e,e=null,r=null):typeof r=="function"&&(t=r,r=null),e!=null&&this.write(e,r),i.corked&&(i.corked=1,this.uncork()),i.ending||Mr(this,i,t)};function Me(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function Sr(e,r){e._final(function(t){r.pendingcb--,t&&e.emit("error",t),r.prefinished=!0,e.emit("prefinish"),W(e,r)})}function mr(e,r){!r.prefinished&&!r.finalCalled&&(typeof e._final=="function"?(r.pendingcb++,r.finalCalled=!0,_.nextTick(Sr,e,r)):(r.prefinished=!0,e.emit("prefinish")))}function W(e,r){var t=Me(r);return t&&(mr(e,r),r.pendingcb===0&&(r.finished=!0,e.emit("finish"))),t}function Mr(e,r,t){r.ending=!0,W(e,r),t&&(r.finished?_.nextTick(t):e.once("finish",t)),r.ended=!0,e.writable=!1}function xr(e,r,t){var i=e.entry;for(e.entry=null;i;){var n=i.callback;r.pendingcb--,n(t),i=i.next}r.corkedRequestsFree.next=e}Object.defineProperty(s.prototype,"destroyed",{get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}});s.prototype.destroy=Se.destroy;s.prototype._undestroy=Se.undestroy;s.prototype._destroy=function(e,r){this.end(),r(e)}});var S=p((ot,ke)=>{"use strict";var qe=o("process-nextick-args"),qr=Object.keys||function(e){var r=[];for(var t in e)r.push(t);return r};ke.exports=b;var Re=Object.create(o("core-util-is"));Re.inherits=o("inherits");var Ee=te(),re=$();Re.inherits(b,Ee);for(ee=qr(re.prototype),H=0;H<ee.length;H++)A=ee[H],b.prototype[A]||(b.prototype[A]=re.prototype[A]);var ee,A,H;function b(e){if(!(this instanceof b))return new b(e);Ee.call(this,e),re.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),this.once("end",Rr)}Object.defineProperty(b.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function Rr(){this.allowHalfOpen||this._writableState.ended||qe.nextTick(Er,this)}function Er(e){e.end()}Object.defineProperty(b.prototype,"destroyed",{get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(e){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=e,this._writableState.destroyed=e)}});b.prototype._destroy=function(e,r){this.push(null),this.end(),qe.nextTick(r,e)}});var te=p((st,Ae)=>{"use strict";var q=o("process-nextick-args");Ae.exports=u;var kr=o("isarray"),C;u.ReadableState=Oe;var ut=o("events").EventEmitter,Ce=function(e,r){return e.listeners(r).length},le=Q(),D=o("safe-buffer").Buffer,jr=(typeof __global$<"u"?__global$:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function Wr(e){return D.from(e)}function Tr(e){return D.isBuffer(e)||e instanceof jr}var De=Object.create(o("core-util-is"));De.inherits=o("inherits");var ie=o("util"),l=void 0;ie&&ie.debuglog?l=ie.debuglog("stream"):l=function(){};var Cr=be(),Be=Y(),x;De.inherits(u,le);var ne=["error","close","destroy","pause","resume"];function Dr(e,r,t){if(typeof e.prependListener=="function")return e.prependListener(r,t);!e._events||!e._events[r]?e.on(r,t):kr(e._events[r])?e._events[r].unshift(t):e._events[r]=[t,e._events[r]]}function Oe(e,r){C=C||S(),e=e||{};var t=r instanceof C;this.objectMode=!!e.objectMode,t&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var i=e.highWaterMark,n=e.readableHighWaterMark,a=this.objectMode?16:16*1024;i||i===0?this.highWaterMark=i:t&&(n||n===0)?this.highWaterMark=n:this.highWaterMark=a,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new Cr,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(x||(x=o("string_decoder").StringDecoder),this.decoder=new x(e.encoding),this.encoding=e.encoding)}function u(e){if(C=C||S(),!(this instanceof u))return new u(e);this._readableState=new Oe(e,this),this.readable=!0,e&&(typeof e.read=="function"&&(this._read=e.read),typeof e.destroy=="function"&&(this._destroy=e.destroy)),le.call(this)}Object.defineProperty(u.prototype,"destroyed",{get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}});u.prototype.destroy=Be.destroy;u.prototype._undestroy=Be.undestroy;u.prototype._destroy=function(e,r){this.push(null),r(e)};u.prototype.push=function(e,r){var t=this._readableState,i;return t.objectMode?i=!0:typeof e=="string"&&(r=r||t.defaultEncoding,r!==t.encoding&&(e=D.from(e,r),r=""),i=!0),Le(this,e,r,!1,i)};u.prototype.unshift=function(e){return Le(this,e,null,!0,!1)};function Le(e,r,t,i,n){var a=e._readableState;if(r===null)a.reading=!1,Pr(e,a);else{var f;n||(f=Br(a,r)),f?e.emit("error",f):a.objectMode||r&&r.length>0?(typeof r!="string"&&!a.objectMode&&Object.getPrototypeOf(r)!==D.prototype&&(r=Wr(r)),i?a.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):ae(e,a,r,!0):a.ended?e.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!t?(r=a.decoder.write(r),a.objectMode||r.length!==0?ae(e,a,r,!1):Pe(e,a)):ae(e,a,r,!1))):i||(a.reading=!1)}return Or(a)}function ae(e,r,t,i){r.flowing&&r.length===0&&!r.sync?(e.emit("data",t),e.read(0)):(r.length+=r.objectMode?1:t.length,i?r.buffer.unshift(t):r.buffer.push(t),r.needReadable&&F(e)),Pe(e,r)}function Br(e,r){var t;return!Tr(r)&&typeof r!="string"&&r!==void 0&&!e.objectMode&&(t=new TypeError("Invalid non-string/buffer chunk")),t}function Or(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||e.length===0)}u.prototype.isPaused=function(){return this._readableState.flowing===!1};u.prototype.setEncoding=function(e){return x||(x=o("string_decoder").StringDecoder),this._readableState.decoder=new x(e),this._readableState.encoding=e,this};var je=8388608;function Lr(e){return e>=je?e=je:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function We(e,r){return e<=0||r.length===0&&r.ended?0:r.objectMode?1:e!==e?r.flowing&&r.length?r.buffer.head.data.length:r.length:(e>r.highWaterMark&&(r.highWaterMark=Lr(e)),e<=r.length?e:r.ended?r.length:(r.needReadable=!0,0))}u.prototype.read=function(e){l("read",e),e=parseInt(e,10);var r=this._readableState,t=e;if(e!==0&&(r.emittedReadable=!1),e===0&&r.needReadable&&(r.length>=r.highWaterMark||r.ended))return l("read: emitReadable",r.length,r.ended),r.length===0&&r.ended?fe(this):F(this),null;if(e=We(e,r),e===0&&r.ended)return r.length===0&&fe(this),null;var i=r.needReadable;l("need readable",i),(r.length===0||r.length-e<r.highWaterMark)&&(i=!0,l("length less than watermark",i)),r.ended||r.reading?(i=!1,l("reading or ended",i)):i&&(l("do read"),r.reading=!0,r.sync=!0,r.length===0&&(r.needReadable=!0),this._read(r.highWaterMark),r.sync=!1,r.reading||(e=We(t,r)));var n;return e>0?n=Ue(e,r):n=null,n===null?(r.needReadable=!0,e=0):r.length-=e,r.length===0&&(r.ended||(r.needReadable=!0),t!==e&&r.ended&&fe(this)),n!==null&&this.emit("data",n),n};function Pr(e,r){if(!r.ended){if(r.decoder){var t=r.decoder.end();t&&t.length&&(r.buffer.push(t),r.length+=r.objectMode?1:t.length)}r.ended=!0,F(e)}}function F(e){var r=e._readableState;r.needReadable=!1,r.emittedReadable||(l("emitReadable",r.flowing),r.emittedReadable=!0,r.sync?q.nextTick(Te,e):Te(e))}function Te(e){l("emit readable"),e.emit("readable"),oe(e)}function Pe(e,r){r.readingMore||(r.readingMore=!0,q.nextTick(Ur,e,r))}function Ur(e,r){for(var t=r.length;!r.reading&&!r.flowing&&!r.ended&&r.length<r.highWaterMark&&(l("maybeReadMore read 0"),e.read(0),t!==r.length);)t=r.length;r.readingMore=!1}u.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))};u.prototype.pipe=function(e,r){var t=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e);break}i.pipesCount+=1,l("pipe count=%d opts=%j",i.pipesCount,r);var n=(!r||r.end!==!1)&&e!==__Process$.stdout&&e!==__Process$.stderr,a=n?d:E;i.endEmitted?q.nextTick(a):t.once("end",a),e.on("unpipe",f);function f(m,k){l("onunpipe"),m===t&&k&&k.hasUnpiped===!1&&(k.hasUnpiped=!0,N())}function d(){l("onend"),e.end()}var c=Hr(t);e.on("drain",c);var y=!1;function N(){l("cleanup"),e.removeListener("close",X),e.removeListener("finish",z),e.removeListener("drain",c),e.removeListener("error",K),e.removeListener("unpipe",f),t.removeListener("end",d),t.removeListener("end",E),t.removeListener("data",de),y=!0,i.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&c()}var R=!1;t.on("data",de);function de(m){l("ondata"),R=!1;var k=e.write(m);k===!1&&!R&&((i.pipesCount===1&&i.pipes===e||i.pipesCount>1&&He(i.pipes,e)!==-1)&&!y&&(l("false write response, pause",i.awaitDrain),i.awaitDrain++,R=!0),t.pause())}function K(m){l("onerror",m),E(),e.removeListener("error",K),Ce(e,"error")===0&&e.emit("error",m)}Dr(e,"error",K);function X(){e.removeListener("finish",z),E()}e.once("close",X);function z(){l("onfinish"),e.removeListener("close",X),E()}e.once("finish",z);function E(){l("unpipe"),t.unpipe(e)}return e.emit("pipe",t),i.flowing||(l("pipe resume"),t.resume()),e};function Hr(e){return function(){var r=e._readableState;l("pipeOnDrain",r.awaitDrain),r.awaitDrain&&r.awaitDrain--,r.awaitDrain===0&&Ce(e,"data")&&(r.flowing=!0,oe(e))}}u.prototype.unpipe=function(e){var r=this._readableState,t={hasUnpiped:!1};if(r.pipesCount===0)return this;if(r.pipesCount===1)return e&&e!==r.pipes?this:(e||(e=r.pipes),r.pipes=null,r.pipesCount=0,r.flowing=!1,e&&e.emit("unpipe",this,t),this);if(!e){var i=r.pipes,n=r.pipesCount;r.pipes=null,r.pipesCount=0,r.flowing=!1;for(var a=0;a<n;a++)i[a].emit("unpipe",this,{hasUnpiped:!1});return this}var f=He(r.pipes,e);return f===-1?this:(r.pipes.splice(f,1),r.pipesCount-=1,r.pipesCount===1&&(r.pipes=r.pipes[0]),e.emit("unpipe",this,t),this)};u.prototype.on=function(e,r){var t=le.prototype.on.call(this,e,r);if(e==="data")this._readableState.flowing!==!1&&this.resume();else if(e==="readable"){var i=this._readableState;!i.endEmitted&&!i.readableListening&&(i.readableListening=i.needReadable=!0,i.emittedReadable=!1,i.reading?i.length&&F(this):q.nextTick(Ar,this))}return t};u.prototype.addListener=u.prototype.on;function Ar(e){l("readable nexttick read 0"),e.read(0)}u.prototype.resume=function(){var e=this._readableState;return e.flowing||(l("resume"),e.flowing=!0,Fr(this,e)),this};function Fr(e,r){r.resumeScheduled||(r.resumeScheduled=!0,q.nextTick(Ir,e,r))}function Ir(e,r){r.reading||(l("resume read 0"),e.read(0)),r.resumeScheduled=!1,r.awaitDrain=0,e.emit("resume"),oe(e),r.flowing&&!r.reading&&e.read(0)}u.prototype.pause=function(){return l("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(l("pause"),this._readableState.flowing=!1,this.emit("pause")),this};function oe(e){var r=e._readableState;for(l("flow",r.flowing);r.flowing&&e.read()!==null;);}u.prototype.wrap=function(e){var r=this,t=this._readableState,i=!1;e.on("end",function(){if(l("wrapped end"),t.decoder&&!t.ended){var f=t.decoder.end();f&&f.length&&r.push(f)}r.push(null)}),e.on("data",function(f){if(l("wrapped data"),t.decoder&&(f=t.decoder.write(f)),!(t.objectMode&&f==null)&&!(!t.objectMode&&(!f||!f.length))){var d=r.push(f);d||(i=!0,e.pause())}});for(var n in e)this[n]===void 0&&typeof e[n]=="function"&&(this[n]=function(f){return function(){return e[f].apply(e,arguments)}}(n));for(var a=0;a<ne.length;a++)e.on(ne[a],this.emit.bind(this,ne[a]));return this._read=function(f){l("wrapped _read",f),i&&(i=!1,e.resume())},this};Object.defineProperty(u.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}});u._fromList=Ue;function Ue(e,r){if(r.length===0)return null;var t;return r.objectMode?t=r.buffer.shift():!e||e>=r.length?(r.decoder?t=r.buffer.join(""):r.buffer.length===1?t=r.buffer.head.data:t=r.buffer.concat(r.length),r.buffer.clear()):t=Nr(e,r.buffer,r.decoder),t}function Nr(e,r,t){var i;return e<r.head.data.length?(i=r.head.data.slice(0,e),r.head.data=r.head.data.slice(e)):e===r.head.data.length?i=r.shift():i=t?Kr(e,r):Xr(e,r),i}function Kr(e,r){var t=r.head,i=1,n=t.data;for(e-=n.length;t=t.next;){var a=t.data,f=e>a.length?a.length:e;if(f===a.length?n+=a:n+=a.slice(0,e),e-=f,e===0){f===a.length?(++i,t.next?r.head=t.next:r.head=r.tail=null):(r.head=t,t.data=a.slice(f));break}++i}return r.length-=i,n}function Xr(e,r){var t=D.allocUnsafe(e),i=r.head,n=1;for(i.data.copy(t),e-=i.data.length;i=i.next;){var a=i.data,f=e>a.length?a.length:e;if(a.copy(t,t.length-e,0,f),e-=f,e===0){f===a.length?(++n,i.next?r.head=i.next:r.head=r.tail=null):(r.head=i,i.data=a.slice(f));break}++n}return r.length-=n,t}function fe(e){var r=e._readableState;if(r.length>0)throw new Error('"endReadable()" called on non-empty stream');r.endEmitted||(r.ended=!0,q.nextTick(zr,r,e))}function zr(e,r){!e.endEmitted&&e.length===0&&(e.endEmitted=!0,r.readable=!1,r.emit("end"))}function He(e,r){for(var t=0,i=e.length;t<i;t++)if(e[t]===r)return t;return-1}});var ue=p((dt,Ne)=>{"use strict";Ne.exports=g;var I=S(),Ie=Object.create(o("core-util-is"));Ie.inherits=o("inherits");Ie.inherits(g,I);function Gr(e,r){var t=this._transformState;t.transforming=!1;var i=t.writecb;if(!i)return this.emit("error",new Error("write callback called multiple times"));t.writechunk=null,t.writecb=null,r!=null&&this.push(r),i(e);var n=this._readableState;n.reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}function g(e){if(!(this instanceof g))return new g(e);I.call(this,e),this._transformState={afterTransform:Gr.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&(typeof e.transform=="function"&&(this._transform=e.transform),typeof e.flush=="function"&&(this._flush=e.flush)),this.on("prefinish",Jr)}function Jr(){var e=this;typeof this._flush=="function"?this._flush(function(r,t){Fe(e,r,t)}):Fe(this,null,null)}g.prototype.push=function(e,r){return this._transformState.needTransform=!1,I.prototype.push.call(this,e,r)};g.prototype._transform=function(e,r,t){throw new Error("_transform() is not implemented")};g.prototype._write=function(e,r,t){var i=this._transformState;if(i.writecb=t,i.writechunk=e,i.writeencoding=r,!i.transforming){var n=this._readableState;(i.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}};g.prototype._read=function(e){var r=this._transformState;r.writechunk!==null&&r.writecb&&!r.transforming?(r.transforming=!0,this._transform(r.writechunk,r.writeencoding,r.afterTransform)):r.needTransform=!0};g.prototype._destroy=function(e,r){var t=this;I.prototype._destroy.call(this,e,function(i){r(i),t.emit("close")})};function Fe(e,r,t){if(r)return e.emit("error",r);if(t!=null&&e.push(t),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}});var Ge=p((ht,ze)=>{"use strict";ze.exports=B;var Ke=ue(),Xe=Object.create(o("core-util-is"));Xe.inherits=o("inherits");Xe.inherits(B,Ke);function B(e){if(!(this instanceof B))return new B(e);Ke.call(this,e)}B.prototype._transform=function(e,r,t){t(null,e)}});var se=p((h,Je)=>{h=Je.exports=te();h.Stream=h;h.Readable=h;h.Writable=$();h.Duplex=S();h.Transform=ue();h.PassThrough=Ge()});var w={};tr(w,{Duplex:()=>Zr,PassThrough:()=>et,Readable:()=>Vr,Stream:()=>Qr,Transform:()=>$r,Writable:()=>Yr,default:()=>tt});var Ve=he(se());v(w,he(se()));var{Stream:Qr,Readable:Vr,Writable:Yr,Duplex:Zr,Transform:$r,PassThrough:et}=Ve,{default:Qe,...rt}=Ve,tt=Qe!==void 0?Qe:rt;export{Zr as Duplex,et as PassThrough,Vr as Readable,Qr as Stream,$r as Transform,Yr as Writable,tt as default};
//# sourceMappingURL=readable-stream.mjs.map