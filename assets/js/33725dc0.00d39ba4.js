(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[7302],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2536:function(t,e,n){"use strict";n.d(e,{y7:function(){return o}});n(2122),n(9756),n(7294);var r=n(3905),a=function(t){for(var e=t;e.includes("$ob");)e=e.replace("$ob","{");for(;e.includes("$cb");)e=e.replace("$cb","}");return e};function o(t){var e=t.children.split("| |"),n=e[0].split("||"),o=n[0].split("|").filter((function(t){return""!==t})),i=n[1].split("|").filter((function(t){return""!==t})),l=e.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:i.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,o.map((function(t,e){return e===o.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},t):(0,r.kt)("th",{style:{borderBottomWidth:3}},t)})),i.map((function(t){return(0,r.kt)("th",{style:{borderBottomWidth:3}},t)}))),l.map((function(t){return(0,r.kt)("tr",null,t.split("|").filter((function(t){return""!==t})).map((function(t,e){return e===o.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,a(t))):(0,r.kt)("td",null,(0,r.kt)("code",null,a(t)))})))})))}},2449:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(2536),l=["components"],u={sidebar_position:1},d="Add",s={unversionedId:"api-docs/functions/math/add",id:"api-docs/functions/math/add",isDocsHomePage:!1,title:"Add",description:"Module Info:",source:"@site/docs/api-docs/functions/math/add.md",sourceDirName:"api-docs/functions/math",slug:"/api-docs/functions/math/add",permalink:"/meta-system-docs/docs/api-docs/functions/math/add",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/math/add.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Date Now",permalink:"/meta-system-docs/docs/api-docs/functions/date/date-now"},next:{title:"Subtract",permalink:"/meta-system-docs/docs/api-docs/functions/math/subtract"}},c=[{value:"Module Info:",id:"module-info",children:[]},{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add"},"Add"),(0,o.kt)("h3",{id:"module-info"},"Module Info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'moduleType: "internal",\nmoduleName: "add"\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," function takes a list of numbers and return their sum."),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"numbersToAdd")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array<number>")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"result")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"errorMessage")," property will only be defined if any of the items in the input list are not numbers."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.y7,{mdxType:"ExamplesTable"},'| numbersToAdd || result | errorMessage | | [ 4, 3, 2 ] | 9 | undefined | | [ 1, 9 ] | 10 | undefined | | ["foo", 5] | undefined | "One of the arguments provided was not a number" |'))}m.isMDXComponent=!0}}]);