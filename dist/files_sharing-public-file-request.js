(()=>{"use strict";var e,t,r,o={38943:(e,t,r)=>{var o=r(85168),n=r(85471);const a=(0,r(35947).YK)().setApp("files_sharing").detectUser().build(),i=localStorage.getItem("nick"),l=localStorage.getItem("publicAuthPromptShown");i&&l?a.debug("Public auth prompt already shown. Current nickname is '".concat(i,"'")):(0,o.Ss)((0,n.$V)((()=>Promise.all([r.e(4208),r.e(5315)]).then(r.bind(r,45315)))),{},(()=>localStorage.setItem("publicAuthPromptShown","true")))}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=o,e=[],a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],n=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,n<i&&(i=n));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",5315:"16aff37ab8dbc31a4bc1",9480:"1e6347e7fc477a73d0c6"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",a.l=(e,o,n,i)=>{if(t[e])t[e].push(o);else{var l,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){l=d;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+n),l.src=e),t[e]=[o];var p=(r,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=9804,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={9804:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,i=r[0],l=r[1],c=r[2],u=0;if(i.some((t=>0!==e[t]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(c)var s=c(a)}for(t&&t(r);u<i.length;u++)n=i[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(s)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[4208],(()=>a(38943)));i=a.O(i)})();
//# sourceMappingURL=files_sharing-public-file-request.js.map?v=35392827254d9a44b6ef