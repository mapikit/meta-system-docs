"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[246],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3729:(e,t,n)=>{n.d(t,{y7:()=>o});n(7462),n(7294);var r=n(4137);const a=e=>{let t=e;for(;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function o(e){let{children:t}=e;const n=t.split("| |"),o=n[0].split("||"),i=o[0].split("|").filter((e=>""!==e)),l=o[1].split("|").filter((e=>""!==e)),d=n.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:i.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:l.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,i.map(((e,t)=>t===i.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,r.kt)("th",{style:{borderBottomWidth:3}},e))),l.map((e=>(0,r.kt)("th",{style:{borderBottomWidth:3}},e)))),d.map((e=>(0,r.kt)("tr",null,e.split("|").filter((e=>""!==e)).map(((e,t)=>t===i.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,a(e))):(0,r.kt)("td",null,(0,r.kt)("code",null,a(e)))))))))}},5986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(7462),a=(n(7294),n(4137)),o=n(3729);const i={},l="Round",d={unversionedId:"api-docs/functions/math/round",id:"api-docs/functions/math/round",title:"Round",description:"Module Info:",source:"@site/docs/api-docs/functions/math/round.md",sourceDirName:"api-docs/functions/math",slug:"/api-docs/functions/math/round",permalink:"/meta-system-docs/docs/api-docs/functions/math/round",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/math/round.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Modulus",permalink:"/meta-system-docs/docs/api-docs/functions/math/modulus"},next:{title:"Square Root",permalink:"/meta-system-docs/docs/api-docs/functions/math/square-root"}},p={},u=[{value:"Module Info:",id:"module-info",level:3},{value:"Description",id:"description",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"round"},"Round"),(0,a.kt)("h3",{id:"module-info"},"Module Info:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "round"\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"round")," function rounds a number to the nearest value within the given precision. If no precision is given, a precision of ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," will be used."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"input")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"precision")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"red"}}," \u2716 ")," ",(0,a.kt)("em",{parentName:"td"},"(Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"1"),")"))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"errorNaN")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorNaN")," property will only be defined if either ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," are not numbers."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.y7,{mdxType:"ExamplesTable"},'| input | precision || result | errorNaN | | 3.435 | 0.5 | 3.5 | undefined | | 3.435 | undefined | 3 | undefined | | 3.435 | 0.2 | 3.4 | undefined | | 3.435 | "foo" | undefined | "One of the arguments provided was not a number" |'))}m.isMDXComponent=!0}}]);