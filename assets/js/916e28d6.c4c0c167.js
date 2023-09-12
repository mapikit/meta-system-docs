"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[5531],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),l=o,f=p["".concat(c,".").concat(l)]||p[l]||d[l]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const i={sidebar_position:2},a="Schemas",s={unversionedId:"api-docs/configuring/schema-config",id:"api-docs/configuring/schema-config",title:"Schemas",description:"Schemas, in short, are the specifications of the data structure common to all the system. If your system is about cars, you will need to say what properties are relevant for your system about the cars. Which brand is it? What color, which year, the model, seat count? Any information can be put in the schemas.",source:"@site/docs/api-docs/configuring/schema-config.md",sourceDirName:"api-docs/configuring",slug:"/api-docs/configuring/schema-config",permalink:"/meta-system-docs/docs/api-docs/configuring/schema-config",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/schema-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Configuration Basics",permalink:"/meta-system-docs/docs/api-docs/configuring/basics"},next:{title:"About BOps",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<strong><code>&quot;name&quot;</code> - string</strong>",id:"name---string",level:4},{value:"<strong><code>&quot;format&quot;</code> - ObjectDefinition</strong>",id:"format---objectdefinition",level:4},{value:"<strong><code>&quot;identifier&quot;</code> - string</strong>",id:"identifier---string",level:4}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schemas"},"Schemas"),(0,o.kt)("p",null,"Schemas, in short, are the specifications of the data structure common to all the system. If your system is about cars, you will need to say what properties are relevant for your system about the cars. Which brand is it? What color, which year, the model, seat count? Any information can be put in the schemas."),(0,o.kt)("p",null,"When you create schemas, you only create a data structure for Meta-System to know. For you to give actions to your schemas, such as saving them to a DB, fetching them, or any other action, you should ",(0,o.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/architecture/extending-functionality"},"extend your system with an Addon"),"."),(0,o.kt)("p",null,"Let's see how we can define a schema."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"name---string"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},'"name"')," - string")),(0,o.kt)("p",null,"The name of your entity type. This name will be used to access your schema and its actions."),(0,o.kt)("h4",{id:"format---objectdefinition"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},'"format"')," - ObjectDefinition")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"ObjectDefinition")," is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. ",(0,o.kt)("a",{parentName:"p",href:"./object-definition"},"Click here to Learn More"),".")),(0,o.kt)("p",null,"This is the expected structre for this schema. This is used to parse the queries into something the database understands."),(0,o.kt)("h4",{id:"identifier---string"},(0,o.kt)("strong",{parentName:"h4"},(0,o.kt)("inlineCode",{parentName:"strong"},'"identifier"')," - string")),(0,o.kt)("p",null,"Since the name of your schema can be changed, we need something to be static about this data. This is what this field is for. DB Protocols often use this field to compare different versions of schemas and apply structural changes to the dabases when needed."))}d.isMDXComponent=!0}}]);