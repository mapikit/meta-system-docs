(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1719],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2828:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],c={sidebar_position:4},s="Protocols",l={unversionedId:"api-docs/configuring/protocol-config",id:"api-docs/configuring/protocol-config",isDocsHomePage:!1,title:"Protocols",description:'In the root of the system configuration file, there is this "protocols" property. This refers to an array of protocols, which are used to create a connection between your BOps and Schemas and everything else in the outside world.',source:"@site/docs/api-docs/configuring/protocol-config.md",sourceDirName:"api-docs/configuring",slug:"/api-docs/configuring/protocol-config",permalink:"/meta-system-docs/docs/api-docs/configuring/protocol-config",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/protocol-config.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Modules Dependencies",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/dependencies"},next:{title:"Object Definition",permalink:"/meta-system-docs/docs/api-docs/configuring/object-definition"}},p=[{value:"Protocol Kinds",id:"protocol-kinds",children:[]},{value:"Configuring Each Protocol",id:"configuring-each-protocol",children:[{value:"<code>&quot;protocol&quot;</code> - String (required)",id:"protocol---string-required",children:[]},{value:"<code>&quot;protocolKind&quot;</code> - String (required)",id:"protocolkind---string-required",children:[]},{value:"<code>&quot;configuration&quot;</code> - Object (required)",id:"configuration---object-required",children:[]},{value:"<code>&quot;protocolVersion&quot;</code> - String Semver (optional)",id:"protocolversion---string-semver-optional",children:[]},{value:"<code>&quot;identifier&quot;</code> - String (required)",id:"identifier---string-required",children:[]}]},{value:"Example",id:"example",children:[]}],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"protocols"},"Protocols"),(0,i.kt)("p",null,"In the root of the system configuration file, there is this ",(0,i.kt)("inlineCode",{parentName:"p"},'"protocols"')," property. This refers to an array of protocols, which are used to create a connection between your BOps and Schemas and everything else in the outside world."),(0,i.kt)("p",null,"For Meta-System, all protocols are external, which means that they are a library that is downloaded during system setup. For example, we have ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-json-meta-protocol"},(0,i.kt)("inlineCode",{parentName:"a"},"http-json-meta-protocol"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cronjob-protocol"},(0,i.kt)("inlineCode",{parentName:"a"},"cronjob-protocol")),". By referring to their names in your configuration, you are telling Meta-System to download them and execute them for you, with their own configuration."),(0,i.kt)("h2",{id:"protocol-kinds"},"Protocol Kinds"),(0,i.kt)("p",null,"There are two kinds of protocols."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normal - Used to trigger a Business Operation flow,"),(0,i.kt)("li",{parentName:"ul"},"DB Protocol - Used by schemas to interact with the data")),(0,i.kt)("h2",{id:"configuring-each-protocol"},"Configuring Each Protocol"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},'"protocols"')," array, each object is a single protocol reference. This object accepts these following parameters:"),(0,i.kt)("h3",{id:"protocol---string-required"},(0,i.kt)("inlineCode",{parentName:"h3"},'"protocol"')," - String (required)"),(0,i.kt)("p",null,"This is the name of the protocol to be downloaded. It must match what there is on NPM."),(0,i.kt)("h3",{id:"protocolkind---string-required"},(0,i.kt)("inlineCode",{parentName:"h3"},'"protocolKind"')," - String (required)"),(0,i.kt)("p",null,"This property sets how the protocol should be loaded. Since there are two kinds of protocols, ",(0,i.kt)("inlineCode",{parentName:"p"},'"normal"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"db-protocol"'),", this value should match the kind of your protocol."),(0,i.kt)("h3",{id:"configuration---object-required"},(0,i.kt)("inlineCode",{parentName:"h3"},'"configuration"')," - Object (required)"),(0,i.kt)("p",null,"These are the parameters of the protocol you are trying to use. Pay attention to its own documentation, since each protocol can vary immensely on the parameters they accept, and their structure."),(0,i.kt)("h3",{id:"protocolversion---string-semver-optional"},(0,i.kt)("inlineCode",{parentName:"h3"},'"protocolVersion"')," - String Semver (optional)"),(0,i.kt)("p",null,"This is the Version of the protocol to be downloaded. If no specified, It defaults to the latest version available."),(0,i.kt)("h3",{id:"identifier---string-required"},(0,i.kt)("inlineCode",{parentName:"h3"},'"identifier"')," - String (required)"),(0,i.kt)("p",null,"Since you can have multiple instances of the same protocol on the same system, you must give all of them an identifier. This is used in the BOps to get functions from the protocol, if it provides any. It is also used to set a schema's DB connection with a specific DB Protocol."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the following example, we will use the version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," of ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-json-meta-protocol"},(0,i.kt)("inlineCode",{parentName:"a"},"http-json-meta-protocol"))," to listen to an HTTP route calling a ficticious BOps named ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocols": [\n    {\n      "protocol": "http-json-meta-protocol",\n      "protocolKind": "normal",\n      "identifier": "Main Routes Protocol",\n      "protocolVersion": "1.0.0",\n      "configuration": {\n        "port": 8080,\n        "routes": [\n          {\n            "route": "/new-client/:clientName",\n            "businessOperation": "register",\n            "method": "POST",\n            "inputMapConfiguration": [\n              { "origin": "route", "originPath": "clientName", "targetPath": "username" },\n              { "origin": "body", "originPath": "email", "targetPath": "email" },\n              { "origin": "body", "originPath": "password", "targetPath": "password" }\n            ],\n            "resultMapConfiguration": {\n              "body": { "result": "creationResult" },\n              "headers": [],\n              "statusCode": "operationResultCode"\n            }\n          }\n        ]\n      },\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);