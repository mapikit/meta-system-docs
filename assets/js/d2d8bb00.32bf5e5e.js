(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[4005],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2366:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=t(2122),i=t(9756),r=(t(7294),t(3905)),a=["components"],s={sidebar_position:1},l="Flows",u={unversionedId:"api-docs/configuring/bops/flows/flows",id:"api-docs/configuring/bops/flows/flows",isDocsHomePage:!1,title:"Flows",description:"We described the flows in this page, we strongly recommend you to read it before diving in this topic.",source:"@site/docs/api-docs/configuring/bops/flows/flows.md",sourceDirName:"api-docs/configuring/bops/flows",slug:"/api-docs/configuring/bops/flows/flows",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/flows/flows",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/bops/flows/flows.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"BOps Configuration Property",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/bops-configuration"},next:{title:"Constants and Variables",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/constants-and-variables"}},c=[{value:"Configuring the Flow",id:"configuring-the-flow",children:[{value:"Requiring Values From Other Modules",id:"requiring-values-from-other-modules",children:[]},{value:"Requiring Whole Modules (callables) From The Flow",id:"requiring-whole-modules-callables-from-the-flow",children:[]},{value:"Requiring The Same Module&#39;s Value More Than Once",id:"requiring-the-same-modules-value-more-than-once",children:[]}]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flows"},"Flows"),(0,r.kt)("p",null,"We described the flows in ",(0,r.kt)("a",{parentName:"p",href:"../../../architecture/flows"},"this page"),", we strongly recommend you to read it before diving in this topic."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to tell your system to do something, you need to specify a sequence of commands, and that is done in the flows. In the configuration file, it is an array of objects, each resolving to a module/function, and mapping its inputs and outputs to the next function in the chain."),(0,r.kt)("p",null,"This page's content assumes you already know how to declare modules and their dependencies. If not, you should check ",(0,r.kt)("a",{parentName:"p",href:"../bops-configuration"},"this page")," before."),(0,r.kt)("h2",{id:"configuring-the-flow"},"Configuring the Flow"),(0,r.kt)("p",null,"To configure the flow of your Business Operation, you should pay attention mostly to the dependencies of the modules, as are the part that points what should be executed and which information is necessary."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the examples in this page, the modules only have the ",(0,r.kt)("inlineCode",{parentName:"p"},'"key"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"dependencies"')," attributes for brevity.")),(0,r.kt)("h3",{id:"requiring-values-from-other-modules"},"Requiring Values From Other Modules"),(0,r.kt)("p",null,"To require values from other functions, create a dependency in which the ",(0,r.kt)("inlineCode",{parentName:"p"},'"origin"')," is the required module's key, ",(0,r.kt)("inlineCode",{parentName:"p"},'"originPath"')," is ",(0,r.kt)("inlineCode",{parentName:"p"},'"result.<requiredProperty>"'),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},'"targetPath"')," is where ",(0,r.kt)("inlineCode",{parentName:"p"},'"<requiredProperty>"')," value is needed."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "configuration": [\n    {\n      "key": 1,\n      "dependencies": [\n        { "origin": 2, "originPath": "result.someProperty", "targetPath": "target" }\n      ]\n    },\n    {\n      "key": 2,\n      "dependencies": [] // No Dependencies\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In this example, key 1 requires key 2's results in order to be executed. It is important to notice that Key 1 does not look to Key 2's dependencies, so itself can require other values."),(0,r.kt)("h3",{id:"requiring-whole-modules-callables-from-the-flow"},"Requiring Whole Modules (callables) From The Flow"),(0,r.kt)("p",null,"It is possible to also require the function callable from any point in the flow. This is even simpler than the example above: Just create a new dependency in which ",(0,r.kt)("inlineCode",{parentName:"p"},'"origin"')," is the required module's key, ",(0,r.kt)("inlineCode",{parentName:"p"},'"originPath"')," is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},'"module"'),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},'"targetPath"')," is where the callable is required. The function callable not only contains the required module, but also its dependencies. the BOps Engine bundles the requirements of the module together with the module itself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "configuration": [\n    {\n      "key": 1,\n      "dependencies": [\n        { "origin": 2, "originPath": "module", "targetPath": "target" }\n      ]\n    },\n    {\n      "key": 2,\n      "dependencies": [] // No Dependencies\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"requiring-the-same-modules-value-more-than-once"},"Requiring The Same Module's Value More Than Once"),(0,r.kt)("p",null,"Of course, given the structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"configuration"')," property, it is possible for module ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and module ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," have a requirement on module ",(0,r.kt)("inlineCode",{parentName:"p"},"Z"),". In this case, The BOps Engine caches the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," and passes it to both ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," has a key attributed to it, and keys are onlly executed once in the flow (unless the key is a required callable, than the Engine has no control over that)."),(0,r.kt)("p",null,"If you want to have two executions of module ",(0,r.kt)("inlineCode",{parentName:"p"},"Z"),", create two separate objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"configuration"')," Array, with different keys."),(0,r.kt)("p",null,"Example with Z being executed once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "configuration": [\n    {\n      "key": 1,\n      "moduleName": "A",\n      "dependencies": [\n        { "origin": 3, "originPath": "result.something", "targetPath": "target" }\n      ]\n    },\n    {\n      "moduleName": "B",\n      "key": 2,\n      "dependencies": [\n        { "origin": 3, "originPath": "result.something", "targetPath": "target" }\n      ]\n    },\n    {\n      "moduleName": "Z",\n      "key": 3,\n      "dependencies": []\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Example with Z being executed twice (different keys): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "configuration": [\n    {\n      "key": 1,\n      "moduleName": "A",\n      "dependencies": [\n        { "origin": 3, "originPath": "result.something", "targetPath": "target" }\n      ]\n    },\n    {\n      "moduleName": "B",\n      "key": 2,\n      "dependencies": [\n        { "origin": 4, "originPath": "result.something", "targetPath": "target" }\n      ]\n    },\n    {\n      "moduleName": "Z",\n      "key": 3,\n      "dependencies": []\n    },\n    {\n      "moduleName": "Z",\n      "key": 4,\n      "dependencies": []\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);