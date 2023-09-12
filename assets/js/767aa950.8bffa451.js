"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[6621],{4137:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(y,o(o({ref:e},c),{},{components:r})):n.createElement(y,o({ref:e},c))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3729:(t,e,r)=>{r.d(e,{y7:()=>l});r(7462),r(7294);var n=r(4137);const a=t=>{let e=t;for(;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function l(t){let{children:e}=t;const r=e.split("| |"),l=r[0].split("||"),o=l[0].split("|").filter((t=>""!==t)),i=l[1].split("|").filter((t=>""!==t)),s=r.slice(1);return(0,n.kt)("table",{style:{textAlign:"center"}},(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:o.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,n.kt)("th",{colspan:i.length,style:{fontSize:"135%"}}," Outputs ")),(0,n.kt)("tr",null,o.map(((t,e)=>e===o.length-1?(0,n.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,n.kt)("th",{style:{borderBottomWidth:3}},t))),i.map((t=>(0,n.kt)("th",{style:{borderBottomWidth:3}},t)))),s.map((t=>(0,n.kt)("tr",null,t.split("|").filter((t=>""!==t)).map(((t,e)=>e===o.length-1?(0,n.kt)("td",{style:{borderRightWidth:4}},(0,n.kt)("code",null,a(t))):(0,n.kt)("td",null,(0,n.kt)("code",null,a(t)))))))))}},2215:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137)),l=r(3729);const o={},i="Array Length",s={unversionedId:"api-docs/functions/array/array-length",id:"api-docs/functions/array/array-length",title:"Array Length",description:"Module Info:",source:"@site/docs/api-docs/functions/array/array-length.md",sourceDirName:"api-docs/functions/array",slug:"/api-docs/functions/array/array-length",permalink:"/meta-system-docs/docs/api-docs/functions/array/array-length",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/array/array-length.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Array At",permalink:"/meta-system-docs/docs/api-docs/functions/array/array-at"},next:{title:"Array Remove",permalink:"/meta-system-docs/docs/api-docs/functions/array/array-remove"}},p={},c=[{value:"Module Info:",id:"module-info",level:3},{value:"Description",id:"description",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-length"},"Array Length"),(0,a.kt)("h3",{id:"module-info"},"Module Info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "arrayLength"\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayLength")," function returns the total length of an array."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"array")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array<any>")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.y7,{mdxType:"ExamplesTable"},'| array || result | | [ "first", "second", "third" ] | 3 | | [ "first", "second", "third", "fouth" ] | 4 | | [ 4, "test", "foo" ] | 3 |'))}m.isMDXComponent=!0}}]);