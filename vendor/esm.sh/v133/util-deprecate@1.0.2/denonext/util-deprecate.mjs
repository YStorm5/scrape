/* esm.sh - esbuild bundle(util-deprecate@1.0.2) denonext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var _=Object.create;var u=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var v=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),x=(r,e)=>{for(var t in e)u(r,t,{get:e[t],enumerable:!0})},f=(r,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of g(e))!m.call(r,n)&&n!==t&&u(r,n,{get:()=>e[n],enumerable:!(l=w(e,n))||l.enumerable});return r},a=(r,e,t)=>(f(r,e,"default"),t&&f(t,e,"default")),s=(r,e,t)=>(t=r!=null?_(h(r)):{},f(e||!r||!r.__esModule?u(t,"default",{value:r,enumerable:!0}):t,r));var i=v((E,p)=>{p.exports=D;function D(r,e){if(c("noDeprecation"))return r;var t=!1;function l(){if(!t){if(c("throwDeprecation"))throw new Error(e);c("traceDeprecation")?console.trace(e):console.warn(e),t=!0}return r.apply(this,arguments)}return l}function c(r){try{if(!__global$.localStorage)return!1}catch{return!1}var e=__global$.localStorage[r];return e==null?!1:String(e).toLowerCase()==="true"}});var o={};x(o,{default:()=>y});var S=s(i());a(o,s(i()));var{default:d,...b}=S,y=d!==void 0?d:b;export{y as default};
//# sourceMappingURL=util-deprecate.mjs.map