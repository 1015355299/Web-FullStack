(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-194f4e7c"],{1399:function(t,r,e){"use strict";var n=e("ef4a"),o=e.n(n);o.a},"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7"),e("e6cf");function n(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"3ad6":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.model?e("div",{staticClass:"page-article"},[e("div",{staticClass:"d-flex py-3 px-2"},[e("div",{staticClass:"fa fa-backward text-info"}),e("strong",{staticClass:"flex-1 text-info pl-2"},[t._v(" "+t._s(t.model.title)+" ")]),e("div",{staticClass:"text-grey fs-xs"},[t._v(" 2019-06-19 ")])]),e("div",{staticClass:"px-3 body text-center",domProps:{innerHTML:t._s(t.model.body)}}),e("div",{staticClass:"px-3 border-top py-2"},[t._m(0),e("div",{staticClass:"pt-2"},t._l(t.model.related,(function(r){return e("router-link",{key:r._id,staticClass:"py-1 ",attrs:{tag:"div",to:"/articles/"+r._id}},[t._v(" "+t._s(r.title))])})),1)])]):t._e()},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"d-flex ai-center"},[e("i",{staticClass:"fa fa-reorder"}),e("strong",{staticClass:"text-blue fs-lg ml-1"},[t._v("相关资讯")])])}],i=(e("96cf"),e("1da1")),a={data:function(){return{model:null}},props:{id:{required:!0}},watch:{id:"fetch"},methods:{fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("articles/".concat(t.id));case 2:e=r.sent,t.model=e.data;case 4:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},c=a,s=(e("1399"),e("2877")),u=Object(s["a"])(c,n,o,!1,null,null,null);r["default"]=u.exports},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=E(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==e&&n.call(x,i)&&(m=x);var _=g.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function b(t){function r(e,o,i,a){var c=u(t[e],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}var e;function o(t,n){function o(){return new Promise((function(e,o){r(t,n,e,o)}))}return e=e?e.then(o,o):o()}this._invoke=o}function E(t,r,e){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return G()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var s=u(t,r,e);if("normal"===s.type){if(n=e.done?p:f,s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=p,e.method="throw",e.arg=s.arg)}}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(s(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),_[c]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},ef4a:function(t,r,e){}}]);
//# sourceMappingURL=chunk-194f4e7c.5ab16fd6.js.map