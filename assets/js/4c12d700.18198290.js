(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[5973],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8643:function(e,t,n){"use strict";n.d(t,{y7:function(){return a}});n(2122),n(9756),n(7294);var r=n(3905),o=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function a(e){var t=e.children.split("| |"),n=t[0].split("||"),a=n[0].split("|").filter((function(e){return""!==e})),c=n[1].split("|").filter((function(e){return""!==e})),i=t.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:c.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,a.map((function(e,t){return t===a.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,r.kt)("th",{style:{borderBottomWidth:3}},e)})),c.map((function(e){return(0,r.kt)("th",{style:{borderBottomWidth:3}},e)}))),i.map((function(e){return(0,r.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===a.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,o(e))):(0,r.kt)("td",null,(0,r.kt)("code",null,o(e)))})))})))}},4261:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=n(8643),i=["components"],l={},s="Object Keys",u={unversionedId:"api-docs/functions-reference/object/object-keys",id:"api-docs/functions-reference/object/object-keys",isDocsHomePage:!1,title:"Object Keys",description:"Referred as #objectKeys",source:"@site/docs/api-docs/functions-reference/object/object-keys.md",sourceDirName:"api-docs/functions-reference/object",slug:"/api-docs/functions-reference/object/object-keys",permalink:"/meta-system-docs/docs/api-docs/functions-reference/object/object-keys",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions-reference/object/object-keys.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Get Value",permalink:"/meta-system-docs/docs/api-docs/functions-reference/object/get-value"},next:{title:"Object Values",permalink:"/meta-system-docs/docs/api-docs/functions-reference/object/object-values"}},p=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-keys"},"Object Keys"),(0,a.kt)("p",null,"Referred as ",(0,a.kt)("inlineCode",{parentName:"p"},"#objectKeys")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"objectKeys")," function receives an object and returns an array with its keys (properties names)"),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"keys")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array<string>"))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(c.y7,{mdxType:"ExamplesTable"},'| object || keys | | $ob name: "John", age: 22 $cb | [ "name", "age" ] | | $ob city: "New York", state: "New York"  $cb | [ "city", "state" ] |'))}m.isMDXComponent=!0}}]);