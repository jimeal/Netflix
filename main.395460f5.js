parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\assets\\images\\hero-bg-mobile.png":[["hero-bg-mobile.5397d9de.png","Wqno"],"Wqno"],"./..\\assets\\images\\hero-bg-desktop.png":[["hero-bg-desktop.44938335.png","s9rW"],"s9rW"]}],"eTjE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){document.querySelector("form").addEventListener("submit",function(e){e.preventDefault()})},t=e;exports.default=t;
},{}],"yZtF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){for(var e=document.querySelectorAll('input:not([type="checkbox"]'),t=function(t){e[t].addEventListener("blur",function(e){var o=document.querySelectorAll(".placeholder");e.target.value?(o[t].style.top="14px",o[t].style.fontSize="12px"):(o[t].style.top="50%",o[t].style.fontSize="16px")})},o=0;o<e.length;o++)t(o)},t=e;exports.default=t;
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=t(require("./common.js")),n=t(require("./login.js"));function t(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){(0,e.default)(),(0,n.default)()});
},{"../scss/main.scss":"fx60","./common.js":"eTjE","./login.js":"yZtF"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.395460f5.js.map