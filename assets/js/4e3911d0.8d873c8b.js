(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[33],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=f(n),l=o,d=m["".concat(s,".").concat(l)]||m[l]||p[l]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8214:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},s="Schema Configuration",f={unversionedId:"configuration-file/schema-config",id:"configuration-file/schema-config",isDocsHomePage:!1,title:"Schema Configuration",description:"Schemas are the specifications of the data structure common to all the system. Lets see how we can define them.",source:"@site/docs/configuration-file/schema-config.md",sourceDirName:"configuration-file",slug:"/configuration-file/schema-config",permalink:"/meta-system-docs/docs/configuration-file/schema-config",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/configuration-file/schema-config.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration Basics",permalink:"/meta-system-docs/docs/configuration-file/basics"},next:{title:"bops-config",permalink:"/meta-system-docs/docs/configuration-file/bops-config"}},u=[{value:"Properties",id:"properties",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schema-configuration"},"Schema Configuration"),(0,i.kt)("p",null,"Schemas are the specifications of the data structure common to all the system. Lets see how we can define them."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h4",{id:"name---string"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},'"name"')," - string")),(0,i.kt)("p",null,"The name of your entity type. This name will be used to access and modify the data."),(0,i.kt)("h4",{id:"format---objectdefinition"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},'"format"')," - ObjectDefinition")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"ObjectDefinition")," is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. ",(0,i.kt)("a",{parentName:"p",href:"./object-definition"},"Click here to Learn More"),".")),(0,i.kt)("p",null,"This is the expected structre for this schema. This is used to parse the queries into something the database understands."))}m.isMDXComponent=!0}}]);