/* esm.sh - esbuild bundle(immediate@3.0.6) denonext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args);
var w=Object.create;var d=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var D=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),N=(e,t)=>{for(var a in t)d(e,a,{get:t[a],enumerable:!0})},s=(e,t,a,v)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of C(t))!T.call(e,r)&&r!==a&&d(e,r,{get:()=>t[r],enumerable:!(v=y(t,r))||v.enumerable});return e},o=(e,t,a)=>(s(e,t,"default"),a&&s(a,t,"default")),b=(e,t,a)=>(a=e!=null?w(E(e)):{},s(t||!e||!e.__esModule?d(a,"default",{value:e,enumerable:!0}):a,e));var p=D((Q,_)=>{"use strict";var h=__global$.MutationObserver||__global$.WebKitMutationObserver,i;h?(c=0,M=new h(u),f=__global$.document.createTextNode(""),M.observe(f,{characterData:!0}),i=function(){f.data=c=++c%2}):!__setImmediate$&&typeof __global$.MessageChannel<"u"?(g=new __global$.MessageChannel,g.port1.onmessage=u,i=function(){g.port2.postMessage(0)}):"document"in __global$&&"onreadystatechange"in __global$.document.createElement("script")?i=function(){var e=__global$.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},__global$.document.documentElement.appendChild(e)}:i=function(){setTimeout(u,0)};var c,M,f,g,m,l=[];function u(){m=!0;for(var e,t,a=l.length;a;){for(t=l,l=[],e=-1;++e<a;)t[e]();a=l.length}m=!1}_.exports=O;function O(e){l.push(e)===1&&!m&&i()}});var n={};N(n,{default:()=>I});var k=b(p());o(n,b(p()));var{default:x,...q}=k,I=x!==void 0?x:q;export{I as default};
//# sourceMappingURL=immediate.mjs.map