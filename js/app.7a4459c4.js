(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],l=0,h=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"8324b352","chunk-63b4a2c5":"c3bf76d0","chunk-a8d1b67a":"d7137ca2"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-63b4a2c5":1,"chunk-a8d1b67a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-63b4a2c5":"7393793c","chunk-a8d1b67a":"c6ad2ce9"}[e]+".css",i=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===i))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],l=c.getAttribute("data-href");if(l===n||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),r(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var h=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,r[1](h)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://cdn.jsdelivr.net/gh/mouyase/PixivCool@gh-pages/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"3cc9":function(e,t,r){"use strict";r("b7be")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=r("8c4f"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view-home"},[r("VueImageWaterfall",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadData,expression:"loadData"}],attrs:{array:e.image_recommend_array},scopedSlots:e._u([{key:"default",fn:function(e){return[r("el-image",{staticClass:"view-home-recommend-img",attrs:{src:e.data.image_urls.medium,fit:"cover",lazy:""}})]}}])})],1)},o=[],s=r("e8e1"),u={name:"Home",components:{VueImageWaterfall:s["a"]},data(){return{image_recommend_array:[],image_width:300,next_url:"",is_loading:!1}},mounted(){},methods:{loadData(){if(console.log("loadData"),!this.is_loading){this.is_loading=!0;let e=this.next_url?this.next_url:this.pixiv.URL_APP_API+"/v1/illust/recommended",t=this.next_url?{}:{filter:"for_android",include_ranking_illusts:!1,include_privacy_policy:!1,offset:0};this.$http.get(e,{params:t}).then(e=>{this.is_loading=!1;let t=this._.get(e,"data.illusts");this.next_url=this._.get(e,"data.next_url"),0!==t.length&&t.map(e=>{const t=this.image_width,r=Math.floor(t/e.width*e.height);let n={data:e,width:t,height:r};this.image_recommend_array.push(n)})}).catch(e=>{this.is_loading=!1})}}}},c=u,l=(r("83b7"),r("2877")),h=Object(l["a"])(c,i,o,!1,null,"34050110",null),d=h.exports;n["default"].use(a["a"]);const f=[{path:"/",name:"Home",component:d},{path:"/test",name:"Test",component:()=>r.e("chunk-a8d1b67a").then(r.bind(null,"78c1"))},{path:"/login",name:"Login",component:()=>r.e("chunk-63b4a2c5").then(r.bind(null,"a55b"))},{path:"/about",name:"About",component:()=>r.e("chunk-2d22d746").then(r.bind(null,"f820"))}],p=new a["a"]({routes:f});var g=p,m=r("5c96"),b=r.n(m),v=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),_=[],y={name:"App",components:{},data(){return{}},created(){this.app.firstRouter=location.hash.slice(1),console.log("初次打开路由",this.app.firstRouter),this.app.isLogin()||(this.app.firstRouter="login"),this.$router.replace(this.app.firstRouter).catch(e=>e)},beforeMount(){},mounted(){}},w=y,x=(r("034f"),Object(l["a"])(w,v,_,!1,null,null,null)),C=x.exports,k=r("bc3a"),S=r.n(k),A=r("4328"),O=r.n(A),P={firstRouter:"/",setUser(e){localStorage.setItem("user_data",JSON.stringify(e))},getUser(){return JSON.parse(localStorage.getItem("user_data"))},isLogin(){return!!this.getUser()}},D={URL_APP_API:"https://app-api.128512.xyz",URL_OAUTH:"https://oauth.128512.xyz"},H=r("2ef0"),U=r.n(H);let j=I(),L=z(j+"28c1fdd170a5204386cb1313c7077b34f83e4aaf4aa829ce78c231e05b0bae2c"),E=!1,M=[],T=S.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","accept-language":"zh_CN","app-os":"android","app-os-version":"9","app-version":"5.0.200","x-client-time":j,"x-client-hash":L}});T.interceptors.request.use(e=>("post"===e.method&&(e.data=O.a.stringify(e.data)),P.getUser()&&(e.headers.authorization="Bearer "+P.getUser().access_token),e),e=>Promise.reject(e)),T.interceptors.response.use(e=>e&&e.data?(e.data=JSON.parse(JSON.stringify(e.data).replace(/i\.pximg\.net/g,"i.pixiv.cat")),Promise.resolve(e)):Promise.reject(e),e=>{if(e&&e.response&&e.response.status){if(0!==String(U.a.get(e,"response.error.message")).indexOf("Error occurred at the OAuth process.")){let t=e.response.config;if(E)return new Promise(e=>{M.push(r=>{t.baseURL="",t.headers.authorization="Bearer "+r,e(T(t))})});{E=!0;let e={client_id:"MOBrBDS8blbauoSck0ZfDbtuzpyT",client_secret:"lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj",grant_type:"refresh_token",refresh_token:P.getUser().refresh_token,device_token:"pixiv",get_secure_url:!0,include_policy:!0};return T.post(D.URL_OAUTH+"/auth/token",e).then(e=>{let r=U.a.get(e,"data.response");if(r)return P.setUser(r),t.headers.authorization="Bearer "+r.access_token,t.baseURL="",M.forEach(e=>e(r.access_token)),M=[],T(t)}).catch(e=>{console.error("Login error",e),window.location.href="/#/login"}).finally(()=>{E=!1})}}return console.log(e),Promise.reject(e.response)}});var N=T;function I(){let e=new Date;return R(e.getFullYear())+"-"+R(e.getMonth()+1)+"-"+R(e.getDate())+"T"+R(e.getHours())+":"+R(e.getMinutes())+":"+R(e.getSeconds())+"+08:00"}function R(e){return e<10?"0"+String(e):String(e)}function z(e){function t(e,t){return e<<t|e>>>32-t}function r(e,t){var r,n,a,i,o;return a=2147483648&e,i=2147483648&t,r=1073741824&e,n=1073741824&t,o=(1073741823&e)+(1073741823&t),r&n?2147483648^o^a^i:r|n?1073741824&o?3221225472^o^a^i:1073741824^o^a^i:o^a^i}function n(e,t,r){return e&t|~e&r}function a(e,t,r){return e&r|t&~r}function i(e,t,r){return e^t^r}function o(e,t,r){return t^(e|~r)}function s(e,a,i,o,s,u,c){return e=r(e,r(r(n(a,i,o),s),c)),r(t(e,u),a)}function u(e,n,i,o,s,u,c){return e=r(e,r(r(a(n,i,o),s),c)),r(t(e,u),n)}function c(e,n,a,o,s,u,c){return e=r(e,r(r(i(n,a,o),s),c)),r(t(e,u),n)}function l(e,n,a,i,s,u,c){return e=r(e,r(r(o(n,a,i),s),c)),r(t(e,u),n)}function h(e){var t,r=e.length,n=r+8,a=(n-n%64)/64,i=16*(a+1),o=Array(i-1),s=0,u=0;while(u<r)t=(u-u%4)/4,s=u%4*8,o[t]=o[t]|e.charCodeAt(u)<<s,u++;return t=(u-u%4)/4,s=u%4*8,o[t]=o[t]|128<<s,o[i-2]=r<<3,o[i-1]=r>>>29,o}function d(e){var t,r,n="",a="";for(r=0;r<=3;r++)t=e>>>8*r&255,a="0"+t.toString(16),n+=a.substr(a.length-2,2);return n}function f(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}var p,g,m,b,v,_,y,w,x,C=Array(),k=7,S=12,A=17,O=22,P=5,D=9,H=14,U=20,j=4,L=11,E=16,M=23,T=6,N=10,I=15,R=21;for(e=f(e),C=h(e),_=1732584193,y=4023233417,w=2562383102,x=271733878,p=0;p<C.length;p+=16)g=_,m=y,b=w,v=x,_=s(_,y,w,x,C[p+0],k,3614090360),x=s(x,_,y,w,C[p+1],S,3905402710),w=s(w,x,_,y,C[p+2],A,606105819),y=s(y,w,x,_,C[p+3],O,3250441966),_=s(_,y,w,x,C[p+4],k,4118548399),x=s(x,_,y,w,C[p+5],S,1200080426),w=s(w,x,_,y,C[p+6],A,2821735955),y=s(y,w,x,_,C[p+7],O,4249261313),_=s(_,y,w,x,C[p+8],k,1770035416),x=s(x,_,y,w,C[p+9],S,2336552879),w=s(w,x,_,y,C[p+10],A,4294925233),y=s(y,w,x,_,C[p+11],O,2304563134),_=s(_,y,w,x,C[p+12],k,1804603682),x=s(x,_,y,w,C[p+13],S,4254626195),w=s(w,x,_,y,C[p+14],A,2792965006),y=s(y,w,x,_,C[p+15],O,1236535329),_=u(_,y,w,x,C[p+1],P,4129170786),x=u(x,_,y,w,C[p+6],D,3225465664),w=u(w,x,_,y,C[p+11],H,643717713),y=u(y,w,x,_,C[p+0],U,3921069994),_=u(_,y,w,x,C[p+5],P,3593408605),x=u(x,_,y,w,C[p+10],D,38016083),w=u(w,x,_,y,C[p+15],H,3634488961),y=u(y,w,x,_,C[p+4],U,3889429448),_=u(_,y,w,x,C[p+9],P,568446438),x=u(x,_,y,w,C[p+14],D,3275163606),w=u(w,x,_,y,C[p+3],H,4107603335),y=u(y,w,x,_,C[p+8],U,1163531501),_=u(_,y,w,x,C[p+13],P,2850285829),x=u(x,_,y,w,C[p+2],D,4243563512),w=u(w,x,_,y,C[p+7],H,1735328473),y=u(y,w,x,_,C[p+12],U,2368359562),_=c(_,y,w,x,C[p+5],j,4294588738),x=c(x,_,y,w,C[p+8],L,2272392833),w=c(w,x,_,y,C[p+11],E,1839030562),y=c(y,w,x,_,C[p+14],M,4259657740),_=c(_,y,w,x,C[p+1],j,2763975236),x=c(x,_,y,w,C[p+4],L,1272893353),w=c(w,x,_,y,C[p+7],E,4139469664),y=c(y,w,x,_,C[p+10],M,3200236656),_=c(_,y,w,x,C[p+13],j,681279174),x=c(x,_,y,w,C[p+0],L,3936430074),w=c(w,x,_,y,C[p+3],E,3572445317),y=c(y,w,x,_,C[p+6],M,76029189),_=c(_,y,w,x,C[p+9],j,3654602809),x=c(x,_,y,w,C[p+12],L,3873151461),w=c(w,x,_,y,C[p+15],E,530742520),y=c(y,w,x,_,C[p+2],M,3299628645),_=l(_,y,w,x,C[p+0],T,4096336452),x=l(x,_,y,w,C[p+7],N,1126891415),w=l(w,x,_,y,C[p+14],I,2878612391),y=l(y,w,x,_,C[p+5],R,4237533241),_=l(_,y,w,x,C[p+12],T,1700485571),x=l(x,_,y,w,C[p+3],N,2399980690),w=l(w,x,_,y,C[p+10],I,4293915773),y=l(y,w,x,_,C[p+1],R,2240044497),_=l(_,y,w,x,C[p+8],T,1873313359),x=l(x,_,y,w,C[p+15],N,4264355552),w=l(w,x,_,y,C[p+6],I,2734768916),y=l(y,w,x,_,C[p+13],R,1309151649),_=l(_,y,w,x,C[p+4],T,4149444226),x=l(x,_,y,w,C[p+11],N,3174756917),w=l(w,x,_,y,C[p+2],I,718787259),y=l(y,w,x,_,C[p+9],R,3951481745),_=r(_,g),y=r(y,m),w=r(w,b),x=r(x,v);return(d(_)+d(y)+d(w)+d(x)).toLowerCase()}var B=r("2106"),J=r.n(B),$=r("00d7"),q=r.n($);n["default"].use(b.a),n["default"].use(J.a,N),n["default"].use(q.a),n["default"].prototype.pixiv=D,n["default"].prototype.app=P,n["default"].prototype._=U.a,new n["default"]({el:"#app",router:g,render:e=>e(C)}).$mount("#app")},6459:function(e,t,r){},"83b7":function(e,t,r){"use strict";r("6459")},"85ec":function(e,t,r){},b7be:function(e,t,r){},e8e1:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-image-waterfall"},e._l(e.tableDataArrays,(function(t){return r("div",{staticClass:"vue-image-waterfall-column"},e._l(t,(function(t,n){return r("div",{key:n,style:{width:t.width+"px",height:t.height+"px"}},[e._t("default",null,{data:t.data})],2)})),0)})),0)},a=[],i={name:"VueImageWaterfall",props:{array:{type:Array,default:[]},columnCount:{type:Number,default:4}},data(){return{tableHeights:[],tableDataArrays:[],height:"0px"}},watch:{row:{handler(e,t){for(let r=0;r<this.columnCount;r++)this.tableHeights[r]=0,this.tableDataArrays[r]=[]},immediate:!0},array:{handler(e,t){let r=this._.cloneDeep(this.tableDataArrays);this.array.map(e=>{r[this.getMinHeightIndex()].push(e),this.tableHeights[this.getMinHeightIndex()]+=e.height}),this.tableDataArrays=this._.cloneDeep(r),this.height=this.getMaxHeight()+"px"},immediate:!0}},created(){},mounted(){},methods:{createData(){},getMinHeightIndex(){for(var e=Number.MAX_VALUE,t=-1,r=0;r<this.tableHeights.length;r++)this.tableHeights[r]<e&&(e=this.tableHeights[r],t=r);return t},getMaxHeight(){for(var e=0,t=0;t<this.tableHeights.length;t++)this.tableHeights[t]>e&&(e=this.tableHeights[t],t);return e}}},o=i,s=(r("3cc9"),r("2877")),u=Object(s["a"])(o,n,a,!1,null,"3fa4f4d1",null);t["a"]=u.exports}});
//# sourceMappingURL=app.7a4459c4.js.map