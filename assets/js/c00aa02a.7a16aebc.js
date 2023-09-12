"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[941],{4137:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),s=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[p]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3729:(t,e,n)=>{n.d(e,{y7:()=>i});n(7462),n(7294);var r=n(4137);const a=t=>{let e=t;for(;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function i(t){let{children:e}=t;const n=e.split("| |"),i=n[0].split("||"),o=i[0].split("|").filter((t=>""!==t)),l=i[1].split("|").filter((t=>""!==t)),d=n.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:l.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,o.map(((t,e)=>e===o.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t))),l.map((t=>(0,r.kt)("th",{style:{borderBottomWidth:3}},t)))),d.map((t=>(0,r.kt)("tr",null,t.split("|").filter((t=>""!==t)).map(((t,e)=>e===o.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,a(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,a(t)))))))))}},7452:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(7462),a=(n(7294),n(4137)),i=n(3729);const o={},l="Char At",d={unversionedId:"api-docs/functions/string/char-at",id:"api-docs/functions/string/char-at",title:"Char At",description:"Module Info:",source:"@site/docs/api-docs/functions/string/char-at.md",sourceDirName:"api-docs/functions/string",slug:"/api-docs/functions/string/char-at",permalink:"/meta-system-docs/docs/api-docs/functions/string/char-at",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/string/char-at.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Object to String",permalink:"/meta-system-docs/docs/api-docs/functions/object/to-string"},next:{title:"Count",permalink:"/meta-system-docs/docs/api-docs/functions/string/count"}},s={},c=[{value:"Module Info:",id:"module-info",level:3},{value:"Description",id:"description",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"char-at"},"Char At"),(0,a.kt)("h3",{id:"module-info"},"Module Info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "charAt"\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charAt")," function receives a string and a number and returns character found at that numeric index. Do note however that the index for the first character is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", the second is ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and so on. "),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"found")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"notFoundMessage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"notFoundMessage")," property will only be defined if there is no character at the given index (index is out of bounds)."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.y7,{mdxType:"ExamplesTable"},'| string | index || found | notFoundMessage | | "abcde" | 0 | "a" | undefined | | "abcde" | 2 | "c" | undefined | | "abcde" | 5 | undefined | "There is no character present at the given index" |'))}m.isMDXComponent=!0}}]);