(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1731],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,h=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},981:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},p="About BOps",u={unversionedId:"api-docs/configuring/bops/bops",id:"api-docs/configuring/bops/bops",isDocsHomePage:!1,title:"About BOps",description:"The Business Operations are the heart of your business, they can be whatever you need them to be, and should represent a process in your system.",source:"@site/docs/api-docs/configuring/bops/bops.md",sourceDirName:"api-docs/configuring/bops",slug:"/api-docs/configuring/bops/bops",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/bops",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/bops/bops.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Schemas",permalink:"/meta-system-docs/docs/api-docs/configuring/schema-config"},next:{title:"BOps Configuration Property",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/bops-configuration"}},c=[{value:"Creating A BOps",id:"creating-a-bops",children:[{value:"BOps Properties",id:"bops-properties",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-bops"},"About BOps"),(0,o.kt)("p",null,"The Business Operations are the heart of your business, they can be whatever you need them to be, and should represent a process in your system."),(0,o.kt)("p",null,"Users cannot be younger than 13 years old? That's a business operation. Should you send an email when users complete their 10th purchase? Another BOps!"),(0,o.kt)("h2",{id:"creating-a-bops"},"Creating A BOps"),(0,o.kt)("p",null,"In the configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},'"businessOperations"')," is a list of objects. Each of those objects contains a chunk information for Meta-System to understand a part of the business rules of your company/product."),(0,o.kt)("h3",{id:"bops-properties"},"BOps Properties"),(0,o.kt)("p",null,"A BOps can have the following properties specified:"),(0,o.kt)("h4",{id:"input---object-definition-required"},(0,o.kt)("inlineCode",{parentName:"h4"},'"input"')," - ",(0,o.kt)("a",{parentName:"h4",href:"../object-definition"},"Object Definition")," (required)"),(0,o.kt)("p",null,"Information your operation needs to have in order to be executed. These are the function parameters."),(0,o.kt)("h4",{id:"output---object-definition-required"},(0,o.kt)("inlineCode",{parentName:"h4"},'"output"')," - ",(0,o.kt)("a",{parentName:"h4",href:"../object-definition"},"Object Definition")," (required)"),(0,o.kt)("p",null,"This is the information output by your function. What is returns."),(0,o.kt)("h4",{id:"constants---single-parameter-type-required-array"},(0,o.kt)("inlineCode",{parentName:"h4"},'"constants"')," - Single Parameter Type (required Array)"),(0,o.kt)("p",null,'This is all the information that your function uses and is not modified throughout its execution. For example, a BOp "plusTwo", that takes in any number and outputs it plus two should have the value ',(0,o.kt)("inlineCode",{parentName:"p"},'"2"')," as a constant."),(0,o.kt)("p",null,"This is treated more in depth in the ",(0,o.kt)("a",{parentName:"p",href:"./constants-and-variables"},"Constants and Variables")," section."),(0,o.kt)("h4",{id:"variables---single-parameter-type-required-array"},(0,o.kt)("inlineCode",{parentName:"h4"},'"variables"')," - Single Parameter Type (required Array)"),(0,o.kt)("p",null,"Variables is a list of the named values that may change during the execution of a BOp. It can be used to record, for instance, how many times a loop was executed."),(0,o.kt)("p",null,"There are specific built in functions for modifying these values. Check ",(0,o.kt)("a",{parentName:"p",href:"./constants-and-variables"},"Constants and Variables")," section for more information."),(0,o.kt)("h4",{id:"configuration---bops-module-required-array"},(0,o.kt)("inlineCode",{parentName:"h4"},'"configuration"')," - Bops Module (required Array)"),(0,o.kt)("p",null,"This is the soul of your business operation, where all the logic is set and the flow is executed. It is a list of all the steps that exists in the operation, their dependencies, data, and the functions themselves."),(0,o.kt)("p",null,"Since this is quite a complex subject, we have a page dedicated to the rules of this function, and what it does. See ",(0,o.kt)("a",{parentName:"p",href:"./bops-configuration"},"BOps Configuration"),"."),(0,o.kt)("h4",{id:"ttl---number-optional"},(0,o.kt)("inlineCode",{parentName:"h4"},'"ttl"')," - Number (optional)"),(0,o.kt)("p",null,"Defines a Time To Live for this BOps. If this time is exceeded in milliseconds, MSYS will reject the promise of the BOp."),(0,o.kt)("h4",{id:"identifier---string-required"},(0,o.kt)("inlineCode",{parentName:"h4"},'"identifier"')," - String (required)"),(0,o.kt)("p",null,"Identifies this BOp with a string for Meta-System. This string will be used to reference the BOp anywhere in your system."))}d.isMDXComponent=!0}}]);