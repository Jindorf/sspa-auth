!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue"),require("vue-router"),require("vuex"),require("single-spa-vue"),require("bootstrap-vue")):"function"==typeof define&&define.amd?define(["vue","vue-router","vuex","single-spa-vue","bootstrap-vue"],n):"object"==typeof exports?exports["single-spa-auth-app"]=n(require("vue"),require("vue-router"),require("vuex"),require("single-spa-vue"),require("bootstrap-vue")):t["single-spa-auth-app"]=n(t.vue,t["vue-router"],t.vuex,t["single-spa-vue"],t["bootstrap-vue"])}(this,(function(t,n,e,r,o){return function(t){function n(n){for(var e,o,i=n[0],u=n[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);for(a&&a(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var i=this.webpackJsonpsingle_spa_auth_app=this.webpackJsonpsingle_spa_auth_app||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var a=u;return o(o.s=97)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(59))},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n,e){var r=e(34),o=Function.prototype,i=o.bind,u=o.call,c=r&&i.bind(u,u);t.exports=r?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},function(t,n,e){var r=e(2),o=e(35),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(33),i=e(3),u=e(36),c=e(37),a=e(38),s=o("wks"),f=r.Symbol,p=f&&f.for,l=a?f:f&&f.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var n="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=a&&p?p(n):l(n)}return s[t]}},function(t,n,e){var r=e(4);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(n,e){n.exports=t},function(t,n,e){var r=e(0),o=e(6),i=e(39),u=e(40),c=e(12),a=e(41),s=r.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;n.f=o?u?function(t,n,e){if(c(t),n=a(n),c(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=p(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(c(t),n=a(n),c(e),i)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){"use strict";function r(t,n,e,r,o,i,u,c){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):o&&(a=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,n){return a.call(n),f(t,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:s}}e.d(n,"a",(function(){return r}))},function(t,n,e){var r=e(6),o=e(8),i=e(23);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},function(t,n,e){var r=e(0),o=e(11),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},function(t,n,e){var r=e(74),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(1),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},function(t,n,e){var r=e(0),o=e(1),i=e(3),u=e(10),c=e(20),a=e(43),s=e(24),f=e(44).CONFIGURABLE,p=s.get,l=s.enforce,v=String(String).split("String");(t.exports=function(t,n,e,a){var s,p=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:n;o(e)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==d)&&u(e,"name",d),(s=l(e)).source||(s.source=v.join("string"==typeof d?d:""))),t!==r?(p?!h&&t[n]&&(y=!0):delete t[n],y?t[n]=e:u(t,n,e)):y?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},function(t,n,e){var r=e(34),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},function(t,n,e){var r={};r[e(5)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(0),o=e(20),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(11),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r,o,i,u=e(68),c=e(0),a=e(2),s=e(11),f=e(10),p=e(3),l=e(19),v=e(25),y=e(26),h=c.TypeError,d=c.WeakMap;if(u||l.state){var b=l.state||(l.state=new d),g=a(b.get),m=a(b.has),x=a(b.set);r=function(t,n){if(m(b,t))throw new h("Object already initialized");return n.facade=t,x(b,t,n),n},o=function(t){return g(b,t)||{}},i=function(t){return m(b,t)}}else{var S=v("state");y[S]=!0,r=function(t,n){if(p(t,S))throw new h("Object already initialized");return n.facade=t,f(t,S,n),n},o=function(t){return p(t,S)?t[S]:{}},i=function(t){return p(t,S)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw h("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(33),o=e(36),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r,o=e(12),i=e(85),u=e(28),c=e(26),a=e(87),s=e(22),f=e(25),p=f("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},h=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,n;h="undefined"!=typeof document?document.domain&&r?y(r):((n=s("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):y(r);for(var e=u.length;e--;)delete h.prototype[u[e]];return h()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(l.prototype=o(t),e=new l,l.prototype=null,e[p]=t):e=h(),void 0===n?e:i.f(e,n)}},function(t,n){t.exports={}},function(t,e){t.exports=n},function(t,n){t.exports=e},function(t,n,e){var r=e(14),o=e(19);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,n,e){var r=e(4);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,n,e){var r=e(0),o=e(21),i=r.Object;t.exports=function(t){return i(o(t))}},function(t,n,e){var r=e(2),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},function(t,n,e){var r=e(60),o=e(4);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r=e(37);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(6),o=e(4),i=e(22);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(6),o=e(4);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,n,e){var r=e(62),o=e(42);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},function(t,n,e){var r=e(0),o=e(15),i=e(1),u=e(63),c=e(38),a=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,a(t))}},function(t,n,e){var r=e(2),o=e(1),i=e(19),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},function(t,n,e){var r=e(6),o=e(3),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,s=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:s}},function(t,n,e){var r=e(0),o=e(18),i=e(1),u=e(46),c=e(5)("toStringTag"),a=r.Object,s="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=a(t),c))?e:s?u(n):"Object"==(r=u(n))&&i(n.callee)?"Arguments":r}},function(t,n,e){var r=e(2),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,n,e){var r=e(0),o=e(45),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,n,e){"use strict";var r=e(72),o=e(17),i=e(14),u=e(44),c=e(1),a=e(84),s=e(52),f=e(89),p=e(53),l=e(10),v=e(16),y=e(5),h=e(30),d=e(51),b=u.PROPER,g=u.CONFIGURABLE,m=d.IteratorPrototype,x=d.BUGGY_SAFARI_ITERATORS,S=y("iterator"),O=function(){return this};t.exports=function(t,n,e,u,y,d,w){a(e,n,u);var _,j,T,L=function(t){if(t===y&&I)return I;if(!x&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},P=n+" Iterator",E=!1,A=t.prototype,C=A[S]||A["@@iterator"]||y&&A[y],I=!x&&C||L(y),k="Array"==n&&A.entries||C;if(k&&(_=s(k.call(new t)))!==Object.prototype&&_.next&&(i||s(_)===m||(f?f(_,m):c(_[S])||v(_,S,O)),p(_,P,!0,!0),i&&(h[P]=O)),b&&"values"==y&&C&&"values"!==C.name&&(!i&&g?l(A,"name","values"):(E=!0,I=function(){return o(C,this)})),y)if(j={values:L("values"),keys:d?I:L("keys"),entries:L("entries")},w)for(T in j)(x||E||!(T in A))&&v(A,T,j[T]);else r({target:n,proto:!0,forced:x||E},j);return i&&!w||A[S]===I||v(A,S,I,{name:y}),h[n]=I,j}},function(t,n,e){var r=e(6),o=e(17),i=e(73),u=e(23),c=e(13),a=e(41),s=e(3),f=e(39),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=c(t),n=a(n),f)try{return p(t,n)}catch(t){}if(s(t,n))return u(!o(i.f,t,n),t[n])}},function(t,n,e){var r=e(2),o=e(3),i=e(13),u=e(78).indexOf,c=e(26),a=r([].push);t.exports=function(t,n){var e,r=i(t),s=0,f=[];for(e in r)!o(c,e)&&o(r,e)&&a(f,e);for(;n.length>s;)o(r,e=n[s++])&&(~u(f,e)||a(f,e));return f}},function(t,n,e){"use strict";var r,o,i,u=e(4),c=e(1),a=e(29),s=e(52),f=e(16),p=e(5),l=e(14),v=p("iterator"),y=!1;[].keys&&("next"in(i=[].keys())?(o=s(s(i)))!==Object.prototype&&(r=o):y=!0),null==r||u((function(){var t={};return r[v].call(t)!==t}))?r={}:l&&(r=a(r)),c(r[v])||f(r,v,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:y}},function(t,n,e){var r=e(0),o=e(3),i=e(1),u=e(35),c=e(25),a=e(88),s=c("IE_PROTO"),f=r.Object,p=f.prototype;t.exports=a?f.getPrototypeOf:function(t){var n=u(t);if(o(n,s))return n[s];var e=n.constructor;return i(e)&&n instanceof e?e.prototype:n instanceof f?p:null}},function(t,n,e){var r=e(8).f,o=e(3),i=e(5)("toStringTag");t.exports=function(t,n,e){t&&!e&&(t=t.prototype),t&&!o(t,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports=r},function(t,n){t.exports=o},function(t,n,e){"use strict";(function(t){e(58),e(70),e(91);var r=e(7),o=e.n(r),i=e(31),u=e.n(i);o.a.use(u.a);var c=[{path:"/",name:"Login",component:function(){return Promise.resolve().then(e.bind(null,96))}}],a=new u.a({mode:"history",base:t.env.BASE_URL,routes:c});n.a=a}).call(this,e(57))},function(t,n){var e,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?s=a.concat(s):p=-1,s.length&&v())}function v(){if(!f){var t=c(l);f=!0;for(var n=s.length;n;){for(a=s,s=[];++p<n;)a&&a[p].run();p=-1,n=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function y(t,n){this.fun=t,this.array=n}function h(){}o.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];s.push(new y(t,n)),1!==s.length||f||c(v)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,n,e){var r=e(18),o=e(16),i=e(69);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r,o,i=e(0),u=e(61),c=i.process,a=i.Deno,s=c&&c.versions||a&&a.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},function(t,n,e){var r=e(15);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(0),o=e(17),i=e(11),u=e(42),c=e(64),a=e(67),s=e(5),f=r.TypeError,p=s("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var e,r=c(t,p);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||u(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},function(t,n,e){var r=e(2);t.exports=r({}.isPrototypeOf)},function(t,n,e){var r=e(65);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},function(t,n,e){var r=e(0),o=e(1),i=e(66),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},function(t,n,e){var r=e(0).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},function(t,n,e){var r=e(0),o=e(17),i=e(1),u=e(11),c=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!u(r=o(e,t)))return r;if(i(e=t.valueOf)&&!u(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!u(r=o(e,t)))return r;throw c("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(1),i=e(43),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},function(t,n,e){"use strict";var r=e(18),o=e(45);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r=e(71).charAt,o=e(47),i=e(24),u=e(48),c=i.set,a=i.getterFor("String Iterator");u(String,"String",(function(t){c(this,{type:"String Iterator",string:o(t),index:0})}),(function(){var t,n=a(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(2),o=e(27),i=e(47),u=e(21),c=r("".charAt),a=r("".charCodeAt),s=r("".slice),f=function(t){return function(n,e){var r,f,p=i(u(n)),l=o(e),v=p.length;return l<0||l>=v?t?"":void 0:(r=a(p,l))<55296||r>56319||l+1===v||(f=a(p,l+1))<56320||f>57343?t?c(p,l):r:t?s(p,l,l+2):f-56320+(r-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},function(t,n,e){var r=e(0),o=e(49).f,i=e(10),u=e(16),c=e(20),a=e(75),s=e(83);t.exports=function(t,n){var e,f,p,l,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(f in n){if(l=n[f],p=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(h?f:y+(d?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,f,l,t)}}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(2),i=e(4),u=e(46),c=r.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?a(t,""):c(t)}:c},function(t,n,e){var r=e(3),o=e(76),i=e(49),u=e(8);t.exports=function(t,n,e){for(var c=o(n),a=u.f,s=i.f,f=0;f<c.length;f++){var p=c[f];r(t,p)||e&&r(e,p)||a(t,p,s(n,p))}}},function(t,n,e){var r=e(15),o=e(2),i=e(77),u=e(82),c=e(12),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=u.f;return e?a(n,e(t)):n}},function(t,n,e){var r=e(50),o=e(28).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(13),o=e(79),i=e(80),u=function(t){return function(n,e,u){var c,a=r(n),s=i(a),f=o(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(81);t.exports=function(t){return r(t.length)}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(4),o=e(1),i=/#|\.prototype\./,u=function(t,n){var e=a[c(t)];return e==f||e!=s&&(o(n)?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,n,e){"use strict";var r=e(51).IteratorPrototype,o=e(29),i=e(23),u=e(53),c=e(30),a=function(){return this};t.exports=function(t,n,e,s){var f=n+" Iterator";return t.prototype=o(r,{next:i(+!s,e)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,e){var r=e(6),o=e(40),i=e(8),u=e(12),c=e(13),a=e(86);n.f=r&&!o?Object.defineProperties:function(t,n){u(t);for(var e,r=c(n),o=a(n),s=o.length,f=0;s>f;)i.f(t,e=o[f++],r[e]);return t}},function(t,n,e){var r=e(50),o=e(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(15);t.exports=r("document","documentElement")},function(t,n,e){var r=e(4);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(2),o=e(12),i=e(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),n=e instanceof Array}catch(t){}return function(e,r){return o(e),i(r),n?t(e,r):e.__proto__=r,e}}():void 0)},function(t,n,e){var r=e(0),o=e(1),i=r.String,u=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},function(t,n,e){var r=e(0),o=e(92),i=e(93),u=e(94),c=e(10),a=e(5),s=a("iterator"),f=a("toStringTag"),p=u.values,l=function(t,n){if(t){if(t[s]!==p)try{c(t,s,p)}catch(n){t[s]=p}if(t[f]||c(t,f,n),o[n])for(var e in u)if(t[e]!==u[e])try{c(t,e,u[e])}catch(n){t[e]=u[e]}}};for(var v in o)l(r[v]&&r[v].prototype,v);l(i,"DOMTokenList")},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r=e(22)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},function(t,n,e){"use strict";var r=e(13),o=e(95),i=e(30),u=e(24),c=e(8).f,a=e(48),s=e(14),f=e(6),p=u.set,l=u.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,n){p(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=l(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values");var v=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!s&&f&&"values"!==v.name)try{c(v,"name",{value:"values"})}catch(t){}},function(t,n,e){var r=e(5),o=e(29),i=e(8),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("login-form")],1)};r._withStripped=!0;var o=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("LoginForm")]),this._v(" "),n("b-button",{attrs:{variant:"primary"}},[this._v(" submit ")])],1)};o._withStripped=!0;var i={name:"LoginForm"},u=e(9),c=Object(u.a)(i,o,[],!1,null,null,null);c.options.__file="src/components/LoginForm.vue";var a={name:"Login",components:{LoginForm:c.exports}},s=Object(u.a)(a,r,[],!1,null,null,null);s.options.__file="src/views/Login.vue";n.default=s.exports},function(t,n,e){"use strict";e.r(n),e.d(n,"bootstrap",(function(){return b})),e.d(n,"mount",(function(){return g})),e.d(n,"unmount",(function(){return m}));var r=e(7),o=e.n(r),i=e(54),u=e.n(i),c=e(55),a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"auth-app"}},[n("router-view")],1)};a._withStripped=!0;var s=e(9),f=Object(s.a)({},a,[],!1,null,null,null);f.options.__file="src/App.vue";var p=f.exports,l=e(56),v=e(32),y=e.n(v);o.a.use(y.a);var h=new y.a.Store({modules:{auth:{namespaced:!0,state:{user:null,token:null},actions:{},mutations:{}}}});o.a.use(c.BootstrapVue),o.a.config.productionTip=!1;var d=u()({Vue:o.a,appOptions:{el:"#auth-app",render:function(t){return t(p)},router:l.a,store:h}}),b=d.bootstrap,g=d.mount,m=d.unmount}])}));