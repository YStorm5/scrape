/* esm.sh - esbuild bundle(lie@3.3.0) denonext production */
import * as __0$ from "/v133/immediate@3.0.6/denonext/immediate.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"immediate":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var A=Object.create;var d=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var G=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var J=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),O=(e,t)=>{for(var r in t)d(e,r,{get:t[r],enumerable:!0})},m=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of P(t))!U.call(e,o)&&o!==r&&d(e,o,{get:()=>t[o],enumerable:!(n=x(t,o))||n.enumerable});return e},f=(e,t,r)=>(m(e,t,"default"),r&&m(r,t,"default")),T=(e,t,r)=>(r=e!=null?A(S(e)):{},m(t||!e||!e.__esModule?d(r,"default",{value:e,enumerable:!0}):r,e));var E=J((k,q)=>{"use strict";var Q=G("immediate");function h(){}var i={},F=["REJECTED"],w=["FULFILLED"],R=["PENDING"];q.exports=a;function a(e){if(typeof e!="function")throw new TypeError("resolver must be a function");this.state=R,this.queue=[],this.outcome=void 0,e!==h&&g(this,e)}a.prototype.finally=function(e){if(typeof e!="function")return this;var t=this.constructor;return this.then(r,n);function r(o){function u(){return o}return t.resolve(e()).then(u)}function n(o){function u(){throw o}return t.resolve(e()).then(u)}};a.prototype.catch=function(e){return this.then(null,e)};a.prototype.then=function(e,t){if(typeof e!="function"&&this.state===w||typeof t!="function"&&this.state===F)return this;var r=new this.constructor(h);if(this.state!==R){var n=this.state===w?e:t;j(r,n,this.outcome)}else this.queue.push(new p(r,e,t));return r};function p(e,t,r){this.promise=e,typeof t=="function"&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof r=="function"&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}p.prototype.callFulfilled=function(e){i.resolve(this.promise,e)};p.prototype.otherCallFulfilled=function(e){j(this.promise,this.onFulfilled,e)};p.prototype.callRejected=function(e){i.reject(this.promise,e)};p.prototype.otherCallRejected=function(e){j(this.promise,this.onRejected,e)};function j(e,t,r){Q(function(){var n;try{n=t(r)}catch(o){return i.reject(e,o)}n===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,n)})}i.resolve=function(e,t){var r=C(V,t);if(r.status==="error")return i.reject(e,r.value);var n=r.value;if(n)g(e,n);else{e.state=w,e.outcome=t;for(var o=-1,u=e.queue.length;++o<u;)e.queue[o].callFulfilled(t)}return e};i.reject=function(e,t){e.state=F,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e};function V(e){var t=e&&e.then;if(e&&(typeof e=="object"||typeof e=="function")&&typeof t=="function")return function(){t.apply(e,arguments)}}function g(e,t){var r=!1;function n(s){r||(r=!0,i.reject(e,s))}function o(s){r||(r=!0,i.resolve(e,s))}function u(){t(o,n)}var c=C(u);c.status==="error"&&n(c.value)}function C(e,t){var r={};try{r.value=e(t),r.status="success"}catch(n){r.status="error",r.value=n}return r}a.resolve=z;function z(e){return e instanceof this?e:i.resolve(new this(h),e)}a.reject=B;function B(e){var t=new this(h);return i.reject(t,e)}a.all=H;function H(e){var t=this;if(Object.prototype.toString.call(e)!=="[object Array]")return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var o=new Array(r),u=0,c=-1,s=new this(h);++c<r;)v(e[c],c);return s;function v(I,N){t.resolve(I).then(_,function(y){n||(n=!0,i.reject(s,y))});function _(y){o[N]=y,++u===r&&!n&&(n=!0,i.resolve(s,o))}}}a.race=K;function K(e){var t=this;if(Object.prototype.toString.call(e)!=="[object Array]")return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);for(var o=-1,u=new this(h);++o<r;)c(e[o]);return u;function c(s){t.resolve(s).then(function(v){n||(n=!0,i.resolve(u,v))},function(v){n||(n=!0,i.reject(u,v))})}}});var l={};O(l,{all:()=>X,default:()=>$,race:()=>Y,reject:()=>W,resolve:()=>M});var D=T(E());f(l,T(E()));var{resolve:M,reject:W,all:X,race:Y}=D,{default:L,...Z}=D,$=L!==void 0?L:Z;export{X as all,$ as default,Y as race,W as reject,M as resolve};
//# sourceMappingURL=lie.mjs.map