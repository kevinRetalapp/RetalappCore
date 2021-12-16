!function(){"use strict";var r={240:function(r,n,o){o(50),r.exports={func:function(){return 5},func2:r=>r}},50:function(r,n,o){o.r(n);var t=o(81),e=o.n(t),i=o(645),f=o.n(i)()(e());f.push([r.id,":root {\r\n    --bg-color:  #E5E5E5;\r\n    --bdr-color:  #9D9D9D;\r\n    --text-color:  #222222;\r\n    --hover-color: #2C2C2C;\r\n  }\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 16px;\r\n}\r\nh1 {\r\n    font-size: 4em;\r\n\r\n}\r\nh2 {\r\n    font-size: 3em;\r\n\r\n}\r\nh3 {\r\n    font-size: 2.5em;\r\n\r\n}\r\nh4 {\r\n    font-size: 2em;\r\n\r\n}\r\nh5 {\r\n    font-size: 1.5em;\r\n\r\n}\r\nh6 {\r\n    font-size: 1em;\r\n\r\n}\r\n.hover-1:hover {\r\n    position: relative;\r\n    padding: 10px;  \r\n    bottom: 100%;\r\n     border-bottom: 3px solid rgb(55, 55, 55);\r\n     cursor: pointer;\r\n}\r\n.hover-2:hover {\r\n    border-bottom: 1.6px solid rgb(55, 55, 55);\r\n    padding: 1px;  \r\n    cursor: pointer;\r\n}\r\n.hover-3:hover {\r\n    border-bottom: 3px solid rgb(55, 55, 55);\r\n    cursor: pointer;\r\n\r\n}\r\n/* ================================================================= */\r\n.btn-primary {\r\n    background-color: var(--bdr-color);\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-primary:hover {\r\n    background-color: var(--text-color);\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-secondary {\r\n    background-color: #ffffff;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: solid 2px #383838;\r\n    color: #9D9D9D;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-secondary:hover {\r\n    background-color: #383838;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: solid 2px #383838;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-bg {\r\n    background-color: #9D9D9D;\r\n    font-size: 16px;\r\n    height: 72px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-bg:hover {\r\n    background-color: #383838;\r\n    font-size: 16px;\r\n    height: 72px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-md {\r\n    background-color: #9D9D9D;\r\n    font-size: 16px;\r\n    height: 60px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-md:hover {\r\n    background-color: #383838;\r\n    font-size: 16px;\r\n    height: 60px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-sm {\r\n    background-color: #9D9D9D;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-sm:hover {\r\n    background-color: #383838;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-pl {\r\n    background-color: #9D9D9D;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n.btn-sr {\r\n    background-color: #9D9D9D;\r\n    font-size: 16px;\r\n    height: 42px;\r\n    width: 148px;\r\n    border: none;\r\n    color: #ffffff;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    margin: 10px;\r\n}\r\n/* ================================================================= */\r\n.search-1 {\r\n    width: 345px;\r\n    height: 45px;\r\n    border: solid 1px #9D9D9D;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.3em;\r\n}\r\n::placeholder {\r\n  color: #9D9D9D;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 18px;\r\n    padding-left: 20px;\r\n  }\r\n.submit-1 {\r\n    background-color: #9D9D9D;\r\n    position: relative;\r\n    height: 45px;\r\n    width: 64px;\r\n    top: 3px;\r\n    left: -4px;\r\n    border: none;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n.submit-2 {\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    height: 43px;\r\n    width: 64px;\r\n    top: 45px;\r\n    left: -4px;\r\n    border: solid 1px #9D9D9D;\r\n}\r\n.svg-lens {\r\n    filter: invert(1);\r\n    transform: scale(1.5);\r\n}\r\n.svg-lens-2 {\r\n    filter: invert(0.5);\r\n    transform: scale(1.5);\r\n    position: relative;\r\n    top: 10px;\r\n    left: 17px;\r\n}\r\n.lens-search {\r\n    position: relative;\r\n    top: 3px;\r\n    left: 2px;\r\n    filter: invert(1);\r\n}\r\n.search-2 {\r\n    position: relative;\r\n    left: 60px;\r\n    width: 346px;\r\n    height: 45px;\r\n    border: solid 1px #9D9D9D;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.3em;\r\n}\r\n/* ================================================================= */\r\nlabel input {\r\n    visibility: hidden;/* <-- Hide the default checkbox. The rest is to hide and allow tabbing, which display:none prevents */\r\n    display: block;\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    overflow: hidden;\r\n  }\r\n  label span {/* <-- Style the artificial checkbox */\r\n    height: 24px;\r\n    width: 24px;\r\n    border: 1px solid grey;\r\n    display: inline-block;\r\n  }\r\n  [type=checkbox]:checked + span {/* <-- Style its checked state */\r\n    background: rgb(160, 157, 157);\r\n  }\r\n\r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 16px;\r\n    z-index: 1;\r\n  }\r\n\r\n  .dropdown:hover .dropdown-content {\r\n    display: block;\r\n  }\r\n::-webkit-resizer {\r\n    background: rgb(73, 73, 73);\r\n  }",""]),n.default=f},645:function(r){r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,t,e,i){"string"==typeof r&&(r=[[null,r,void 0]]);var f={};if(t)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(f[d]=!0)}for(var l=0;l<r.length;l++){var c=[].concat(r[l]);t&&f[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),e&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=e):c[4]="".concat(e)),n.push(c))}},n}},81:function(r){r.exports=function(r){return r[1]}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,o),i.exports}o.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(n,{a:n}),n},o.d=function(r,n){for(var t in n)o.o(n,t)&&!o.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o(240)}();