"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[2894],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(4137));const i={sidebar_position:4},a="Addons",s={unversionedId:"api-docs/configuring/addons-config",id:"api-docs/configuring/addons-config",title:"Addons",description:'In the root of the system configuration file, there is the "addons" property. This refers to a list of MSYS extensions that can be used to all sorts of things, from having a healthcheck HTTP endpoint for your system, to adding behavior to Schemas.',source:"@site/docs/api-docs/configuring/addons-config.md",sourceDirName:"api-docs/configuring",slug:"/api-docs/configuring/addons-config",permalink:"/meta-system-docs/docs/api-docs/configuring/addons-config",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/addons-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Modules Dependencies",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/dependencies"},next:{title:"Object Definition",permalink:"/meta-system-docs/docs/api-docs/configuring/object-definition"}},d={},l=[{value:"Configuring Each Addon",id:"configuring-each-addon",level:2},{value:"<code>&quot;source&quot;</code> - String (required)",id:"source---string-required",level:3},{value:"<code>&quot;collectStrategy&quot;</code> - ENUM (required)",id:"collectstrategy---enum-required",level:3},{value:"<code>&quot;configuration&quot;</code> - Object (required)",id:"configuration---object-required",level:3},{value:"<code>&quot;version&quot;</code> - String Semver (optional)",id:"version---string-semver-optional",level:3},{value:"<code>&quot;identifier&quot;</code> - String (required)",id:"identifier---string-required",level:3},{value:"Example",id:"example",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"addons"},"Addons"),(0,r.kt)("p",null,"In the root of the system configuration file, there is the ",(0,r.kt)("inlineCode",{parentName:"p"},'"addons"')," property. This refers to a list of MSYS extensions that can be used to all sorts of things, from having a healthcheck HTTP endpoint for your system, to adding behavior to Schemas."),(0,r.kt)("p",null,"For Meta-System, all addons are external, which means that they are a library that is imported during system setup."),(0,r.kt)("p",null,"For more information on the Addons as a component of the architecture, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/architecture/components/addons"},"Addons page"),"."),(0,r.kt)("h2",{id:"configuring-each-addon"},"Configuring Each Addon"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},'"addons"')," array, each object is a single addon to be imported into Meta-System. This object accepts these following parameters:"),(0,r.kt)("admonition",{title:"Array order matters!",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"As specified in the ",(0,r.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/architecture/components/addons"},(0,r.kt)("strong",{parentName:"a"},"Addons Concept and Components page")),", the order of declaration of Addons matter, as they may use and/or modify the same entities.")),(0,r.kt)("h3",{id:"source---string-required"},(0,r.kt)("inlineCode",{parentName:"h3"},'"source"')," - String (required)"),(0,r.kt)("p",null,"Where to aqcuire the Addon from. This property is used to retrieve the Addon, working together with the ",(0,r.kt)("inlineCode",{parentName:"p"},'"collectStrategy"'),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a Collect Strategy of ",(0,r.kt)("inlineCode",{parentName:"li"},'"npm"'),", the ",(0,r.kt)("strong",{parentName:"li"},"Source")," is the name of the npm package."),(0,r.kt)("li",{parentName:"ul"},"For a Collect Strategy of ",(0,r.kt)("inlineCode",{parentName:"li"},'"file"'),", ",(0,r.kt)("strong",{parentName:"li"},"Source")," should be a path to an Addon."),(0,r.kt)("li",{parentName:"ul"},"For a Collect Strategy of ",(0,r.kt)("inlineCode",{parentName:"li"},'"url"'),", the ",(0,r.kt)("strong",{parentName:"li"},"Source")," is a URL to a zipped Addon.")),(0,r.kt)("h3",{id:"collectstrategy---enum-required"},(0,r.kt)("inlineCode",{parentName:"h3"},'"collectStrategy"')," - ENUM (required)"),(0,r.kt)("p",null,"Sets where to get the files for the Addon. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"npm"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"file"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"url"'))),(0,r.kt)("h3",{id:"configuration---object-required"},(0,r.kt)("inlineCode",{parentName:"h3"},'"configuration"')," - Object (required)"),(0,r.kt)("p",null,"These are the parameters of the addon you are trying to use. Pay attention to the addon own documentation, since each of them can vary immensely on the parameters they accept, and their structure."),(0,r.kt)("h3",{id:"version---string-semver-optional"},(0,r.kt)("inlineCode",{parentName:"h3"},'"version"')," - String Semver (optional)"),(0,r.kt)("p",null,"This is the Version of the Addon to be downloaded. If no specified, It defaults to the latest version available. Only works with ",(0,r.kt)("inlineCode",{parentName:"p"},"collectStrategy")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"npm"')),(0,r.kt)("h3",{id:"identifier---string-required"},(0,r.kt)("inlineCode",{parentName:"h3"},'"identifier"')," - String (required)"),(0,r.kt)("p",null,"Since you can have multiple instances of the same addon on the same system, you must give all of them an unique identifier."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"In the following example, we will use the version ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0.0")," of ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-meta-protocol"},(0,r.kt)("inlineCode",{parentName:"a"},"http-meta-protocol"))," to listen to an HTTP route calling a ficticious BOps named ",(0,r.kt)("inlineCode",{parentName:"p"},"register"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addons": [\n    {\n      "collectStrategy": "npm",\n      "source": "http-meta-protocol",\n      "identifier": "main-routes-protocol",\n      "version": "4.0.0-rc1",\n      "configuration": {\n        "port": 8080,\n        "routes": [\n          {\n            "route": "/new-client/:clientName",\n            "businessOperation": "register",\n            "method": "POST",\n            "inputMapConfiguration": [\n              { "origin": "route", "originPath": "clientName", "targetPath": "username" },\n              { "origin": "body", "originPath": "email", "targetPath": "email" },\n              { "origin": "body", "originPath": "password", "targetPath": "password" }\n            ],\n            "resultMapConfiguration": {\n              "body": { "result": "creationResult" },\n              "headers": [],\n              "statusCode": "operationResultCode"\n            }\n          }\n        ]\n      },\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);