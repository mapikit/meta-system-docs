(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1834],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2536:function(t,e,n){"use strict";n.d(e,{y7:function(){return l}});n(2122),n(9756),n(7294);var r=n(3905),o=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function l(t){var e=t.children.split("| |"),n=e[0].split("||"),l=n[0].split("|").filter((function(t){return""!==t})),a=n[1].split("|").filter((function(t){return""!==t})),i=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:l.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,l.map((function(t,e){return e===l.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),a.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),i.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===l.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,o(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,o(t)))})))})))}},3857:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),a=n(2536),i=["components"],u={},c="Bool to Number",s={unversionedId:"api-docs/functions/boolean/bool-to-number",id:"api-docs/functions/boolean/bool-to-number",isDocsHomePage:!1,title:"Bool to Number",description:"Module Info:",source:"@site/docs/api-docs/functions/boolean/bool-to-number.md",sourceDirName:"api-docs/functions/boolean",slug:"/api-docs/functions/boolean/bool-to-number",permalink:"/meta-system-docs/docs/api-docs/functions/boolean/bool-to-number",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/boolean/bool-to-number.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Is Nill",permalink:"/meta-system-docs/docs/api-docs/functions/assertion/is-nill"},next:{title:"Bool to String",permalink:"/meta-system-docs/docs/api-docs/functions/boolean/bool-to-string"}},p=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bool-to-number"},"Bool to Number"),(0,l.kt)("h3",{id:"module-info"},"Module Info:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "boolToNumber"\n')),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"boolToNumber")," function receives a boolean value and returns its numeric value."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(a.y7,{mdxType:"ExamplesTable"},"| boolean || result | | true | 1 | | false | 0 |"))}m.isMDXComponent=!0}}]);