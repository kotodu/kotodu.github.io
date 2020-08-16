(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},a=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"205ccc78"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,n){s=r[t]=[e,n]}));e.push(s[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,s[1](c)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"9c0c":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=(s("d3b7"),s("8c4f")),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("home-header"),s("section",{staticClass:"text-center"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/about"}},[s("button",{staticClass:"btn btn-dark btn-lg px-5",attrs:{type:"button"}},[t._v(" ことづについて ")])])],1),s("section",{staticClass:"text-center container d-flex w-50",attrs:{id:"icons"}},[s("div",{staticClass:"row g-5 text-center my-auto"},[s("icon-sns-link",{attrs:{aHref:"https://github.com/kotodu",imgName:"/img/github.svg",pText:"GitHub : @kotodu"}}),s("icon-sns-link",{attrs:{aHref:"https://twitter.com/kotodu",imgName:"/img/Twitter_Social_Icon_Rounded_Square_Color.svg",pText:"Twitter : @kotodu"}}),s("icon-sns-link",{attrs:{aHref:"https://qiita.com/kotodu",imgName:"/img/qiita.svg",pText:"Qiita : @kotodu"}})],1)])],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-5"},[t._m(0),s("div",{staticClass:"my-5 text-center"},[s("h1",{staticClass:"font-weight-bold",attrs:{id:"h1"},domProps:{textContent:t._s(t.headerText.name)}}),s("p",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.headerText.role)),s("br"),t._v(" "+t._s(t.headerText.words)+" ")])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("img",{attrs:{src:"/img/topIconKotodu.png",width:"200",height:"200"}})])}],c=s("a6f4"),u=Object(c["c"])({setup:function(){var t=Object(c["d"])({name:"Kotodu",role:"システムエンジニア見習い",words:"Keywords : JavaScript, Vue.js, Leaflet.js"});return{headerText:t}}}),d=u,p=s("2877"),m=Object(p["a"])(d,o,l,!1,null,null,null),v=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg text-center"},[s("a",{staticClass:"text-decoration-none",attrs:{href:t.link.aHref}},[s("img",{attrs:{src:t.link.imgSrc,width:"50",height:"50"}}),s("p",{staticClass:"text-center link-dark",domProps:{textContent:t._s(t.link.pText)}})])])},h=[],f=Object(c["c"])({props:{aHref:{type:String},imgName:{type:String},pText:{type:String}},setup:function(t){var e=Object(c["d"])({aHref:t.aHref,imgSrc:t.imgName,pText:t.pText});return{link:e}}}),g=f,k=Object(p["a"])(g,b,h,!1,null,null,null),x=k.exports,C=Object(c["c"])({setup:function(){return{}},components:{HomeHeader:v,IconSnsLink:x}}),_=C,w=Object(p["a"])(_,a,i,!1,null,"75c00f2d",null),y=w.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"works"},[s("main",[s("section",[t._m(0),s("div",{staticClass:"container my-5"},[s("div",{staticClass:"row g-5"},[s("work-card",{attrs:{title:"ttrmap",description:"鳥取の交通マップと地図を重ね合わせるWebアプリケーション",imgSrc:"/img/works/ttrmap.png",demoURL:"https://kotodu.io/ttrmap",githubURL:"https://github.com/kotodu/ttrmap"}}),s("work-card",{attrs:{title:"鳥取＊busmap",description:"これまでに制作した、鳥取についてのバスマップシリーズ",imgSrc:"/img/works/tottori.png",demoURL:"https://kotodu.io/tottori"}}),s("work-card",{attrs:{title:"卒業研究",description:"GTFSを元に、バス停向けのバス運行系統図を出力するシステム",imgSrc:"/img/works/bsi.png",githubURL:"https://github.com/kotodu/Bus-Stops-Information-from-GTFS"}}),s("work-card",{attrs:{title:"illustrator-to-MapTiles",description:"フォルダごとにマップタイル画像を出力するIllustratorスクリプト",imgSrc:"/img/works/i2M.png",githubURL:"https://github.com/kotodu/illustrator-to-MapTiles"}})],1)])]),s("section",{staticClass:"my-5 py-3 mx-auto text-center w-75 border-top"},[t._m(1),s("div",{staticClass:"w-75 mx-auto"},[s("work-list",{attrs:{lists:t.otherWorks}})],1)])]),t._m(2)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center my-5"},[s("h1",[t._v("主な制作物")]),s("p",{staticClass:"read"},[t._v(" ことづの制作した主な作品・アプリケーションについて ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-auto"},[s("h1",[t._v("その他制作物")]),s("p",{staticClass:"read"},[t._v("自作スクリプトや試作アプリケーションなど")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"text-center my-5"},[s("a",{staticClass:"text-decoration-none",attrs:{href:"https://github.com/kotodu"}},[s("button",{staticClass:"btn btn-dark btn-lg px-5 my-2",attrs:{type:"button"}},[t._v(" 全てのコードをGitHubで確認する ")])])])}],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-3"},[s("div",{staticClass:"card mx-auto h-100"},[s("img",{staticClass:"card-img-top",attrs:{src:t.links.img}}),s("div",{staticClass:"card-body"},[s("h3",{staticClass:"card-title",domProps:{textContent:t._s(t.text.head)}}),s("p",{staticClass:"card-text",domProps:{textContent:t._s(t.text.body)}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.items,expression:"items !== undefined"}],staticClass:"list-group list-group-flush"},t._l(t.items,(function(e){return s("li",{key:e,staticClass:"list-group-item",domProps:{textContent:t._s(e)}})})),0)]),s("div",{staticClass:"card-footer bg-transparent border-white"},[void 0!==t.links.demo&&void 0!==t.links.github?s("div",{staticClass:"btn-group"},[s("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.links.demo,expression:"links.demo !==undefined"}],staticClass:"btn btn-primary",attrs:{href:t.links.demo}},[t._v("DEMO")]),s("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.links.github,expression:"links.github !==undefined"}],staticClass:"btn btn-dark",attrs:{href:t.links.github}},[t._v("GitHub")])]):s("div",[s("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.links.demo,expression:"links.demo !==undefined"}],staticClass:"btn btn-primary",attrs:{href:t.links.demo}},[t._v("DEMO")]),s("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.links.github,expression:"links.github !==undefined"}],staticClass:"btn btn-dark",attrs:{href:t.links.github}},[t._v("GitHub")])])])])])},S=[],P=(s("a4d3"),s("e01a"),Object(c["c"])({props:{lists:{type:Array},imgSrc:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},githubURL:{type:String},demoURL:{type:String}},setup:function(t){var e=Object(c["d"])({img:t.imgSrc,github:t.githubURL,demo:t.demoURL}),s=Object(c["d"])({head:t.title,body:t.description}),n=t.lists;return{links:e,text:s,items:n}}})),E=P,$=Object(p["a"])(E,T,S,!1,null,null,null),L=$.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"worklist"},[s("ul",{staticClass:"list-group-flush"},t._l(t.works,(function(e,n){return s("li",{key:n,staticClass:"list-group-item"},[s("h3",[t._v(" "+t._s(e.name)+" "),s("a",{staticClass:"text-decoration-none",attrs:{href:e.url}},[s("img",{staticClass:"py-0 my-0 mx-auto",attrs:{width:"32",height:"32",src:"/img/github.svg"}})])]),s("p",{domProps:{textContent:t._s(e.description)}})])})),0)])},N=[],R=Object(c["c"])({props:{lists:{type:Array}},setup:function(t){var e=Object(c["a"])((function(){return t.lists}));return{works:e}}}),M=R,U=Object(p["a"])(M,H,N,!1,null,null,null),q=U.exports,A=Object(c["c"])({setup:function(){var t=Array({name:"illustrator-Line-Offset",description:"illustratorで線をオフセットできるスクリプト",url:"https://github.com/kotodu/illustrator-Line-Offset"},{name:"ことづ個人サイト(本サイト)",description:"BootstrapとVue.jsの練習として作成した個人サイト",url:"https://github.com/kotodu/kotodu.github.io"});return{otherWorks:t}},components:{WorkCard:L,WorkList:q}}),W=A,G=Object(p["a"])(W,O,j,!1,null,null,null),I=G.exports;n["a"].use(r["a"]);var J=[{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/works",name:"Works",component:I},{path:"/",name:"Home",component:y}],K=new r["a"]({mode:"history",routes:J}),B=K,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("router-view")],1)},F=[],V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[s("span",{staticClass:"navbar-brand px-5"},[t._v("kotodu.io")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item mx-2"},["/"===t.$route.path?s("router-link",{staticClass:"nav-link active",attrs:{to:"/"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link1)}})]):s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link1)}})])],1),s("li",{staticClass:"nav-item mx-2"},["/about"===t.$route.path?s("router-link",{staticClass:"nav-link active",attrs:{to:"/about"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link2)}})]):s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link2)}})])],1),s("li",{staticClass:"nav-item mx-2"},["/works"===t.$route.path?s("router-link",{staticClass:"nav-link active",attrs:{to:"/works"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link3)}})]):s("router-link",{staticClass:"nav-link",attrs:{to:"/works"}},[s("span",{staticClass:"d-lg-none font-weight-bold"},[t._v(" > ")]),s("span",{domProps:{textContent:t._s(t.linksText.link3)}})])],1)])])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],z=Object(c["c"])({setup:function(){var t=Object(c["d"])({link1:"Home",link2:"About",link3:"Works"});return{linksText:t}}}),X=z,Y=Object(p["a"])(X,V,Q,!1,null,null,null),Z=Y.exports,tt=n["a"].extend({name:"App",components:{Navbar:Z}}),et=tt,st=(s("5c0b"),Object(p["a"])(et,D,F,!1,null,null,null)),nt=st.exports;n["a"].config.productionTip=!1,n["a"].use(c["b"]),new n["a"]({router:B,render:function(t){return t(nt)}}).$mount("#app")}});
//# sourceMappingURL=app.9b5a280f.js.map