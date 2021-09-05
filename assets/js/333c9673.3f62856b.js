(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[4457],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8643:function(e,t,r){"use strict";r.d(t,{y7:function(){return a}});r(2122),r(9756),r(7294);var n=r(3905),o=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function a(e){var t=e.children.split("| |"),r=t[0].split("||"),a=r[0].split("|").filter((function(e){return""!==e})),l=r[1].split("|").filter((function(e){return""!==e})),i=t.slice(1);return(0,n.kt)("table",{style:{textAlign:"center"}},(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:a.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,n.kt)("th",{colspan:l.length,style:{fontSize:"135%"}}," Outputs ")),(0,n.kt)("tr",null,a.map((function(e,t){return t===a.length-1?(0,n.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,n.kt)("th",{style:{borderBottomWidth:3}},e)})),l.map((function(e){return(0,n.kt)("th",{style:{borderBottomWidth:3}},e)}))),i.map((function(e){return(0,n.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===a.length-1?(0,n.kt)("td",{style:{borderRightWidth:4}},(0,n.kt)("code",null,o(e))):(0,n.kt)("td",null,(0,n.kt)("code",null,o(e)))})))})))}},4309:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),l=r(8643),i=["components"],u={},c="Lower or Equal",p={unversionedId:"api-docs/functions-reference/logic/lower-or-equal",id:"api-docs/functions-reference/logic/lower-or-equal",isDocsHomePage:!1,title:"Lower or Equal",description:"Referred as #lowerOrEqualTo",source:"@site/docs/api-docs/functions-reference/logic/lower-or-equal.md",sourceDirName:"api-docs/functions-reference/logic",slug:"/api-docs/functions-reference/logic/lower-or-equal",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/lower-or-equal",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions-reference/logic/lower-or-equal.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Higher or Equal",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/higher-or-equal"},next:{title:"Lower Than",permalink:"/meta-system-docs/docs/api-docs/functions-reference/logic/lower-than"}},s=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lower-or-equal"},"Lower or Equal"),(0,a.kt)("p",null,"Referred as ",(0,a.kt)("inlineCode",{parentName:"p"},"#lowerOrEqualTo")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lowerOrEqualTo")," function compares two values and returns true the first value (",(0,a.kt)("inlineCode",{parentName:"p"},"A"),") is lower or equal to the second value (",(0,a.kt)("inlineCode",{parentName:"p"},"B"),")."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"A")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"B")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"isHigherOrEqual")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.y7,{mdxType:"ExamplesTable"},"| A | B || isHigherOrEqual | | 42 | 16 | false | | 16 | 42 | true | | 16 | 16 | true | | -16 | -42 | false |"))}m.isMDXComponent=!0}}]);