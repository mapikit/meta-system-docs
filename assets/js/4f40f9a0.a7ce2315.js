(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[8970],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8643:function(e,t,n){"use strict";n.d(t,{y7:function(){return a}});n(2122),n(9756),n(7294);var r=n(3905),i=function(e){for(var t=e;t.includes("$ob");)t=t.replace("$ob","{");for(;t.includes("$cb");)t=t.replace("$cb","}");return t};function a(e){var t=e.children.split("| |"),n=t[0].split("||"),a=n[0].split("|").filter((function(e){return""!==e})),o=n[1].split("|").filter((function(e){return""!==e})),l=t.slice(1);return(0,r.kt)("table",{style:{textAlign:"center"}},(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:a.length,style:{fontSize:"135%",borderRightWidth:4}}," Inputs "),(0,r.kt)("th",{colspan:o.length,style:{fontSize:"135%"}}," Outputs ")),(0,r.kt)("tr",null,a.map((function(e,t){return t===a.length-1?(0,r.kt)("th",{style:{borderBottomWidth:3,borderRightWidth:4}},e):(0,r.kt)("th",{style:{borderBottomWidth:3}},e)})),o.map((function(e){return(0,r.kt)("th",{style:{borderBottomWidth:3}},e)}))),l.map((function(e){return(0,r.kt)("tr",null,e.split("|").filter((function(e){return""!==e})).map((function(e,t){return t===a.length-1?(0,r.kt)("td",{style:{borderRightWidth:4}},(0,r.kt)("code",null,i(e))):(0,r.kt)("td",null,(0,r.kt)("code",null,i(e)))})))})))}},8316:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(8643),l=["components"],u={},c="String to Number",s={unversionedId:"api-docs/functions-reference/string/to-number",id:"api-docs/functions-reference/string/to-number",isDocsHomePage:!1,title:"String to Number",description:"Referred as #stringToNumber",source:"@site/docs/api-docs/functions-reference/string/to-number.md",sourceDirName:"api-docs/functions-reference/string",slug:"/api-docs/functions-reference/string/to-number",permalink:"/meta-system-docs/docs/api-docs/functions-reference/string/to-number",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions-reference/string/to-number.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"String Template",permalink:"/meta-system-docs/docs/api-docs/functions-reference/string/string-template"}},p=[{value:"Description",id:"description",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"string-to-number"},"String to Number"),(0,a.kt)("p",null,"Referred as ",(0,a.kt)("inlineCode",{parentName:"p"},"#stringToNumber")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"stringToNumber")," function receives a numeric string and atempts to convert it to its numeric value."),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{style:{color:"green"}}," \u2714 "))))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"result")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"errorMessage")," will only be deefined if the given string cannot be converted to a number."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.y7,{mdxType:"ExamplesTable"},'| string || result | errorMessage | | "73" | 73 | undefined | | "44.2" | 44.2 | undefined | | "seventeen" | undefined | "Given string is not convertible to a number" |'))}m.isMDXComponent=!0}}]);