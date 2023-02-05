(function(){"use strict";var t={7983:function(t,e,r){var a=r(9242),n=r(3396),s=r(7139);const i={class:"exchange-rate"},o={class:"main-wrapper"},c=(0,n._)("div",{class:"app-title"},[(0,n._)("div",{class:"app-title__image"},[(0,n._)("img",{src:"https://cdn.privat24.ua/icons/file/ServiceCurrency.svg",alt:""})]),(0,n._)("h1",{class:"app-title__text"},"Курс валют")],-1),l=(0,n.uE)('<div class="preloader"><div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div></div>',1),u=[l];function p(t,e,r,a,l,p){const d=(0,n.up)("rate"),h=(0,n.up)("counter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("section",i,[(0,n._)("div",o,[c,(0,n.Wm)(d,{onPreloaderStarus:p.preloaderSwitch},null,8,["onPreloaderStarus"]),(0,n.Wm)(h,{onPreloaderStarus:p.preloaderSwitch},null,8,["onPreloaderStarus"])])]),(0,n._)("div",{class:"preloader-conteiner",style:(0,s.j5)(l.styleObject)},u,4)],64)}const d={class:"rate-component"},h={class:"rate-component__btn-row"},v=(0,n._)("button",{class:"btn-rate pb"},"Курс НБ",-1),_={class:"date-value-row"},f=(0,n._)("div",{class:"rate-component__header-row row-rate"},[(0,n._)("div",{class:"row-rate__box"},"Валюта"),(0,n._)("div",{class:"row-rate__box"},"Покупка"),(0,n._)("div",{class:"row-rate__box"},"Продажа")],-1);function g(t,e,r,i,o,c){const l=(0,n.up)("list");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",h,[v,(0,n._)("div",_,[(0,n._)("p",null,"Дата курса: "+(0,s.zw)(o.currentDate),1),(0,n.wy)((0,n._)("input",{type:"date","onUpdate:modelValue":e[0]||(e[0]=t=>o.selectDate=t),onChange:e[1]||(e[1]=t=>c.changeDateF())},null,544),[[a.nr,o.selectDate]])])]),f,(0,n._)("div",{class:(0,s.C_)(["errorLoad",{errorLoadActive:o.activError}])},(0,s.zw)(o.errorLoad),3),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.listRate,(t=>((0,n.wg)(),(0,n.j4)(l,{listprops:t},null,8,["listprops"])))),256))])}const w={class:"row-rate"},b={class:"row-rate__box"},y={class:"row-rate__box"},m={class:"row-rate__box"};function x(t,e,r,a,i,o){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",b,(0,s.zw)(r.listprops.currency),1),(0,n._)("div",y,(0,s.zw)(r.listprops.purchaseRateNB),1),(0,n._)("div",m,(0,s.zw)(r.listprops.saleRateNB),1)])}var C={props:{listprops:{type:Object,reqired:!0}}},k=r(89);const D=(0,k.Z)(C,[["render",x]]);var P=D,N={components:{list:P},data(){return{currentDate:"",selectDate:"",listRate:[],errorLoad:"",activError:!1}},methods:{currentDateF(){let t=new Date,e=t.getUTCMonth()+1,r=t.getUTCDate(),a=t.getUTCFullYear();this.currentDate=`${r}.${e}.${a}`},changeDateF(){this.$emit("preloaderStarus",!1);let t=this.selectDate,e=t.substr(0,4),r=t.substr(5,2),a=t.substr(8,2),n=`${a}.${r}.${e}`;this.currentDate=n,this.apiFunction(n)},apiFunction(t){fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${t}`).then((t=>{if(200===t.status)return t.json().then((t=>{this.dataFetchRender(t),this.activError=!1,this.$emit("preloaderStarus",!0)}));this.errorLoad="Ошибка загрузки данных, по текущей дате не найдено записей в архиве",this.listRate=[],this.activError=!0,this.$emit("preloaderStarus",!0)})).catch((t=>{console.log(t)}))},dataFetchRender(t){let e=t.exchangeRate;this.errorLoad="",this.listRate=e}},created(){this.currentDateF()},mounted(){this.$nextTick((function(){this.apiFunction(this.currentDate)}))}};const j=(0,k.Z)(N,[["render",g]]);var z=j;const O={class:"exchange-counter"},R=(0,n._)("h2",{class:"exchange-counter__title"},"Калькулятор расчета на сегодня",-1),B={class:"exchange-counter__type-row"},F={class:"status-change-nam"};function $(t,e,r,a,i,o){const c=(0,n.up)("inputrow");return(0,n.wg)(),(0,n.iD)("div",O,[R,(0,n._)("div",B,[(0,n._)("button",{class:(0,s.C_)(["btn-rate",{"btn-rate_active":i.isActiveBtNzNal}]),onClick:e[0]||(e[0]=t=>o.typeChangeBezNal())},"Безналичный обмен",2),(0,n._)("button",{class:(0,s.C_)(["btn-rate",{"btn-rate_active":i.isActiveBtNal}]),onClick:e[1]||(e[1]=t=>o.typeChangeNal())},"Наличный обмен",2)]),(0,n._)("p",F,[(0,n.Uk)("На сегодня в банке для обмена доступно "),(0,n._)("span",null,(0,s.zw)(i.arrayRateCouner.length),1),(0,n.Uk)(" валюты")]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.arrayRateCouner,(t=>((0,n.wg)(),(0,n.j4)(c,{rateProps:t},null,8,["rateProps"])))),256))])}r(7658);const S={class:"exchange-counter__money-row"},A={class:"exchange-counret__value"},E={class:"exchange-counter__name"};function K(t,e,r,i,o,c){return(0,n.wg)(),(0,n.iD)("div",S,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"0","onUpdate:modelValue":e[0]||(e[0]=t=>o.currentValueExchan=t),onkeyup:"this.value = this.value.replace(/[^\\d]/g,'');"},null,512),[[a.nr,o.currentValueExchan]]),(0,n._)("div",A,(0,s.zw)(o.currentValueExchan*r.rateProps.buy),1),(0,n._)("p",E,(0,s.zw)(r.rateProps.ccy)+" / "+(0,s.zw)(r.rateProps.base_ccy),1)])}var T={props:{rateProps:{type:Object,reqired:!0}},data(){return{currentValueExchan:1,currentValuePrice:1}},methods:{}};const U=(0,k.Z)(T,[["render",K]]);var V=U,L={components:{inputrow:V},data(){return{apiKeyNal:"https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",apiKeyBeznal:"https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",arrayPrise1:[],arrayRateCouner:[],isActiveBtNzNal:!0,isActiveBtNal:!1,statusPreloader:!1}},methods:{apiFunctionCounner(t,e){fetch(t).then((t=>t.json())).then((t=>{this.dataCounterRender(t),1==e&&(this.$emit("preloaderStarus",!0),this.statusPreloader=!1)}))},dataCounterRender(t){this.arrayRateCouner=[];for(let e=0;e<t.length;e++)this.arrayRateCouner.push(t[e]),console.log(t[e])},typeChangeNal(){this.statusPreloader=!0;let t=this.statusPreloader;this.$emit("preloaderStarus",!1),this.apiFunctionCounner(this.apiKeyNal,t),this.isActiveBtNal=!0,this.isActiveBtNzNal=!1},typeChangeBezNal(){this.statusPreloader=!0;let t=this.statusPreloader;this.$emit("preloaderStarus",!1),this.apiFunctionCounner(this.apiKeyBeznal,t),this.isActiveBtNal=!1,this.isActiveBtNzNal=!0}},mounted(){this.$nextTick((function(){this.apiFunctionCounner(this.apiKeyBeznal,this.statusPreloader)}))}};const Z=(0,k.Z)(L,[["render",$]]);var Y=Z,H={name:"App",components:{rate:z,counter:Y},data(){return{styleObject:{display:"flex"}}},methods:{preloaderSwitch(t){this.styleObject=1==t?{display:"none"}:{display:"flex"}}}};const q=(0,k.Z)(H,[["render",p]]);var M=q;(0,a.ri)(M).mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],o=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var u=c(r)}for(e&&e(a);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunkvue_exchange_rate"]=self["webpackChunkvue_exchange_rate"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(7983)}));a=r.O(a)})();
//# sourceMappingURL=app.c46afa21.js.map