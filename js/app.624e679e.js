(function(e){function t(t){for(var n,a,s=t[0],u=t[1],l=t[2],c=0,h=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-273fce5a":"bbf78b5d","chunk-28fa2a3a":"e100ae57","chunk-2d22d746":"756aa90d"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-273fce5a":1,"chunk-28fa2a3a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-273fce5a":"2b1888db","chunk-28fa2a3a":"7946fde9","chunk-2d22d746":"31d6cfe0"}[e]+".css",i=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===i))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],c=l.getAttribute("data-href");if(c===n||c===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),r(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var h=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,r[1](h)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://cdn.jsdelivr.net/gh/mouyase/PixivCool@gh-pages/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=r("8c4f"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view-home"},[r("VueImageWaterfall",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadData,expression:"loadData"}],attrs:{array:e.image_recommend_array},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticClass:"view-home-recommend-image",attrs:{src:e.data.image_urls.medium,fit:"cover",lazy:""}},[r("div",{staticClass:"view-home-recommend-image-slot",attrs:{slot:"placeholder"},slot:"placeholder"})])]}}])})],1)},o=[],s=r("e8e1"),u={name:"Home",components:{VueImageWaterfall:s["a"]},data(){return{image_recommend_array:[],image_width:300,next_url:"",is_loading:!1}},mounted(){},methods:{loadData(){if(console.log("loadData"),!this.is_loading){this.is_loading=!0;let e=this.next_url?this.next_url:this.pixiv.URL_APP_API+"/v1/illust/recommended",t=this.next_url?{}:{filter:"for_android",include_ranking_illusts:!1,include_privacy_policy:!1};this.$http.get(e,{params:t}).then(e=>{this.is_loading=!1;let t=this._.get(e,"data.illusts");this.next_url=this._.get(e,"data.next_url"),0!==t.length&&t.map(e=>{if(this._.get(e,"image_urls.medium")&&this._.get(e,"sanity_level")<=2){const t=this.image_width,r=Math.floor(t/e.width*e.height);let n={data:e,width:t,height:r,key:e.id};this.image_recommend_array.push(n)}})}).catch(e=>{this.is_loading=!1})}}}},l=u,c=(r("7e10"),r("2877")),h=Object(c["a"])(l,i,o,!1,null,"62cd4a20",null),d=h.exports;n["default"].use(a["a"]);const f=[{path:"/",name:"Home",component:d},{path:"/test",name:"Test",component:()=>r.e("chunk-28fa2a3a").then(r.bind(null,"78c1"))},{path:"/login",name:"Login",component:()=>r.e("chunk-273fce5a").then(r.bind(null,"a55b"))},{path:"/about",name:"About",component:()=>r.e("chunk-2d22d746").then(r.bind(null,"f820"))}],p=new a["a"]({routes:f});var g=p,m=r("5c96"),v=r.n(m),_=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),y=[],b={name:"App",components:{},data(){return{}},created(){this.app.firstRouter=location.hash.slice(1),console.log("初次打开路由",this.app.firstRouter),this.app.isLogin()||(this.app.firstRouter="login"),this.$router.replace(this.app.firstRouter).catch(e=>e)},beforeMount(){},mounted(){}},w=b,x=(r("034f"),Object(c["a"])(w,_,y,!1,null,null,null)),k=x.exports,C=r("bc3a"),S=r.n(C),A=r("4328"),O=r.n(A),P={firstRouter:"/",setUser(e){localStorage.setItem("user_data",JSON.stringify(e))},getUser(){return JSON.parse(localStorage.getItem("user_data"))},isLogin(){return!!this.getUser()}},D={URL_APP_API:"https://app-api.128512.xyz",URL_OAUTH:"https://oauth.secure.128512.xyz"},U=r("2ef0"),j=r.n(U);let H=I(),L=z(H+"28c1fdd170a5204386cb1313c7077b34f83e4aaf4aa829ce78c231e05b0bae2c"),M=!1,E=[],T=S.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","accept-language":"zh_CN","app-os":"android","app-os-version":"9","app-version":"5.0.200","x-client-time":H,"x-client-hash":L}});T.interceptors.request.use(e=>("post"===e.method&&(e.data=O.a.stringify(e.data)),-1!==e.url.indexOf("/v1/walkthrough/illusts")||P.getUser()&&(e.headers.authorization="Bearer "+P.getUser().access_token),e),e=>Promise.reject(e)),T.interceptors.response.use(e=>e&&e.data?(e.data=JSON.parse(JSON.stringify(e.data).replace(/i\.pximg\.net/g,"i.pixiv.cat")),Promise.resolve(e)):Promise.reject(e),e=>{if(e&&e.response&&e.response.status){if(-1!==String(j.a.get(e,"response.error.message")).indexOf("Error occurred at the OAuth process.")){console.log(e.response);let t=e.response.config;if(M)return new Promise(e=>{E.push(r=>{t.baseURL="",t.headers.authorization="Bearer "+r,e(T(t))})});{M=!0;let e={client_id:"MOBrBDS8blbauoSck0ZfDbtuzpyT",client_secret:"lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj",grant_type:"refresh_token",refresh_token:P.getUser().refresh_token,device_token:"pixiv",get_secure_url:!0,include_policy:!0};return T.post(D.URL_OAUTH+"/auth/token",e).then(e=>{let r=j.a.get(e,"data.response");if(r)return P.setUser(r),t.headers.authorization="Bearer "+r.access_token,t.baseURL="",E.forEach(e=>e(r.access_token)),E=[],T(t)}).catch(e=>{console.error("Login error",e),window.location.href="/#/login"}).finally(()=>{M=!1})}}return Promise.reject(e)}});var N=T;function I(){let e=new Date;return R(e.getFullYear())+"-"+R(e.getMonth()+1)+"-"+R(e.getDate())+"T"+R(e.getHours())+":"+R(e.getMinutes())+":"+R(e.getSeconds())+"+08:00"}function R(e){return e<10?"0"+String(e):String(e)}function z(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){var r,n,a,i,o;return a=2147483648&e,i=2147483648&t,r=1073741824&e,n=1073741824&t,o=(1073741823&e)+(1073741823&t),r&n?2147483648^o^a^i:r|n?1073741824&o?3221225472^o^a^i:1073741824^o^a^i:o^a^i}function n(e,t,r){return e&t|~e&r}function a(e,t,r){return e&r|t&~r}function i(e,t,r){return e^t^r}function o(e,t,r){return t^(e|~r)}function s(e,a,i,o,s,u,l){return e=r(e,r(r(n(a,i,o),s),l)),r(t(e,u),a)}function u(e,n,i,o,s,u,l){return e=r(e,r(r(a(n,i,o),s),l)),r(t(e,u),n)}function l(e,n,a,o,s,u,l){return e=r(e,r(r(i(n,a,o),s),l)),r(t(e,u),n)}function c(e,n,a,i,s,u,l){return e=r(e,r(r(o(n,a,i),s),l)),r(t(e,u),n)}function h(e){var t,r=e.length,n=r+8,a=(n-n%64)/64,i=16*(a+1),o=Array(i-1),s=0,u=0;while(u<r)t=(u-u%4)/4,s=u%4*8,o[t]=o[t]|e.charCodeAt(u)<<s,u++;return t=(u-u%4)/4,s=u%4*8,o[t]=o[t]|128<<s,o[i-2]=r<<3,o[i-1]=r>>>29,o}function d(e){var t,r,n="",a="";for(r=0;r<=3;r++)t=e>>>8*r&255,a="0"+t.toString(16),n+=a.substr(a.length-2,2);return n}function f(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}var p,g,m,v,_,y,b,w,x,k=Array(),C=7,S=12,A=17,O=22,P=5,D=9,U=14,j=20,H=4,L=11,M=16,E=23,T=6,N=10,I=15,R=21;for(e=f(e),k=h(e),y=1732584193,b=4023233417,w=2562383102,x=271733878,p=0;p<k.length;p+=16)g=y,m=b,v=w,_=x,y=s(y,b,w,x,k[p+0],C,3614090360),x=s(x,y,b,w,k[p+1],S,3905402710),w=s(w,x,y,b,k[p+2],A,606105819),b=s(b,w,x,y,k[p+3],O,3250441966),y=s(y,b,w,x,k[p+4],C,4118548399),x=s(x,y,b,w,k[p+5],S,1200080426),w=s(w,x,y,b,k[p+6],A,2821735955),b=s(b,w,x,y,k[p+7],O,4249261313),y=s(y,b,w,x,k[p+8],C,1770035416),x=s(x,y,b,w,k[p+9],S,2336552879),w=s(w,x,y,b,k[p+10],A,4294925233),b=s(b,w,x,y,k[p+11],O,2304563134),y=s(y,b,w,x,k[p+12],C,1804603682),x=s(x,y,b,w,k[p+13],S,4254626195),w=s(w,x,y,b,k[p+14],A,2792965006),b=s(b,w,x,y,k[p+15],O,1236535329),y=u(y,b,w,x,k[p+1],P,4129170786),x=u(x,y,b,w,k[p+6],D,3225465664),w=u(w,x,y,b,k[p+11],U,643717713),b=u(b,w,x,y,k[p+0],j,3921069994),y=u(y,b,w,x,k[p+5],P,3593408605),x=u(x,y,b,w,k[p+10],D,38016083),w=u(w,x,y,b,k[p+15],U,3634488961),b=u(b,w,x,y,k[p+4],j,3889429448),y=u(y,b,w,x,k[p+9],P,568446438),x=u(x,y,b,w,k[p+14],D,3275163606),w=u(w,x,y,b,k[p+3],U,4107603335),b=u(b,w,x,y,k[p+8],j,1163531501),y=u(y,b,w,x,k[p+13],P,2850285829),x=u(x,y,b,w,k[p+2],D,4243563512),w=u(w,x,y,b,k[p+7],U,1735328473),b=u(b,w,x,y,k[p+12],j,2368359562),y=l(y,b,w,x,k[p+5],H,4294588738),x=l(x,y,b,w,k[p+8],L,2272392833),w=l(w,x,y,b,k[p+11],M,1839030562),b=l(b,w,x,y,k[p+14],E,4259657740),y=l(y,b,w,x,k[p+1],H,2763975236),x=l(x,y,b,w,k[p+4],L,1272893353),w=l(w,x,y,b,k[p+7],M,4139469664),b=l(b,w,x,y,k[p+10],E,3200236656),y=l(y,b,w,x,k[p+13],H,681279174),x=l(x,y,b,w,k[p+0],L,3936430074),w=l(w,x,y,b,k[p+3],M,3572445317),b=l(b,w,x,y,k[p+6],E,76029189),y=l(y,b,w,x,k[p+9],H,3654602809),x=l(x,y,b,w,k[p+12],L,3873151461),w=l(w,x,y,b,k[p+15],M,530742520),b=l(b,w,x,y,k[p+2],E,3299628645),y=c(y,b,w,x,k[p+0],T,4096336452),x=c(x,y,b,w,k[p+7],N,1126891415),w=c(w,x,y,b,k[p+14],I,2878612391),b=c(b,w,x,y,k[p+5],R,4237533241),y=c(y,b,w,x,k[p+12],T,1700485571),x=c(x,y,b,w,k[p+3],N,2399980690),w=c(w,x,y,b,k[p+10],I,4293915773),b=c(b,w,x,y,k[p+1],R,2240044497),y=c(y,b,w,x,k[p+8],T,1873313359),x=c(x,y,b,w,k[p+15],N,4264355552),w=c(w,x,y,b,k[p+6],I,2734768916),b=c(b,w,x,y,k[p+13],R,1309151649),y=c(y,b,w,x,k[p+4],T,4149444226),x=c(x,y,b,w,k[p+11],N,3174756917),w=c(w,x,y,b,k[p+2],I,718787259),b=c(b,w,x,y,k[p+9],R,3951481745),y=r(y,g),b=r(b,m),w=r(w,v),x=r(x,_);return(d(y)+d(b)+d(w)+d(x)).toLowerCase()}var q=r("2106"),B=r.n(q),J=r("00d7"),$=r.n(J);n["default"].use(v.a),n["default"].use(B.a,N),n["default"].use($.a),n["default"].prototype.pixiv=D,n["default"].prototype.app=P,n["default"].prototype._=j.a,new n["default"]({el:"#app",router:g,render:e=>e(k)}).$mount("#app")},6340:function(e,t,r){},"7e10":function(e,t,r){"use strict";r("6340")},"85ec":function(e,t,r){},"870f":function(e,t,r){},a2d9:function(e,t,r){"use strict";r("870f")},e8e1:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-image-waterfall"},e._l(e.tableDataArrays,(function(t){return r("div",{staticClass:"vue-image-waterfall-column"},e._l(t,(function(t,n){return r("div",{key:n,style:{width:t.width+"px",height:t.height+"px"}},[e._t("default",null,{data:t.data})],2)})),0)})),0)},a=[],i={name:"VueImageWaterfall",props:{array:{type:Array,default:[]},columnCount:{type:Number,default:4}},data(){return{tableHeights:[],tableDataArrays:[],uniqueMap:{}}},watch:{row:{handler(e,t){for(let r=0;r<this.columnCount;r++)this.tableHeights[r]=0,this.tableDataArrays[r]=[]},immediate:!0},array:{handler(e,t){let r=this._.cloneDeep(this.tableDataArrays);this.array.map(e=>{this.uniqueMap.hasOwnProperty(e.key)||(this.uniqueMap[e.key]=!0,r[this.getMinHeightIndex()].push(e),this.tableHeights[this.getMinHeightIndex()]+=e.height)}),this.tableDataArrays=this._.cloneDeep(r)},immediate:!0}},created(){},mounted(){},methods:{createData(){},getMinHeightIndex(){for(var e=Number.MAX_VALUE,t=-1,r=0;r<this.tableHeights.length;r++)this.tableHeights[r]<e&&(e=this.tableHeights[r],t=r);return t},getMaxHeight(){for(var e=0,t=0;t<this.tableHeights.length;t++)this.tableHeights[t]>e&&(e=this.tableHeights[t],t);return e}}},o=i,s=(r("a2d9"),r("2877")),u=Object(s["a"])(o,n,a,!1,null,"07030c18",null);t["a"]=u.exports}});
//# sourceMappingURL=app.624e679e.js.map