(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1406],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4229:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],s={sidebar_position:3},l="Writing Protocols",c={unversionedId:"guides/writing-protocols",id:"guides/writing-protocols",isDocsHomePage:!1,title:"Writing Protocols",description:"Protocols are what enables Meta-System to talk with the external world, and given that there are many many ways you may want to do it, you can create your own method of talking with your system.",source:"@site/docs/guides/writing-protocols.md",sourceDirName:"guides",slug:"/guides/writing-protocols",permalink:"/meta-system-docs/docs/guides/writing-protocols",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/guides/writing-protocols.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guides",previous:{title:"Writing Packages And Functions",permalink:"/meta-system-docs/docs/guides/writing-packages-and-functions"},next:{title:"DB Protocols Code",permalink:"/meta-system-docs/docs/guides/writing-db-protocols"}},u=[{value:"1. Requirements",id:"1-requirements",children:[]},{value:"2. The Code",id:"2-the-code",children:[{value:"Configuration Parameters",id:"configuration-parameters",children:[]},{value:"Constructor",id:"constructor",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Additional Methods For DB Protocols",id:"additional-methods-for-db-protocols",children:[]}]},{value:"3. The Configuration File",id:"3-the-configuration-file",children:[{value:"Configuration File Parameters",id:"configuration-file-parameters",children:[]}]},{value:"4. Validating",id:"4-validating",children:[]},{value:"5. Publishing",id:"5-publishing",children:[]}],p={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-protocols"},"Writing Protocols"),(0,i.kt)("p",null,"Protocols are what enables Meta-System to talk with the external world, and given that there are many many ways you may want to do it, you can create your own method of talking with your system."),(0,i.kt)("p",null,"There are two kinds of Protocols in Meta-System, as ",(0,i.kt)("a",{parentName:"p",href:"../api-docs/configuring/protocol-config"},"seen here"),".\nStarting with the normal protocol, here are its capabilities in Meta-System:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can receive a custom Object containing the parameters to be initialized with."),(0,i.kt)("li",{parentName:"ul"},"Can call any BOp."),(0,i.kt)("li",{parentName:"ul"},"Can provide functions to interact with the protocol, and those can be used in BOps flows.")),(0,i.kt)("p",null,"The DB protocol is quite specialized in data access and manipulation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can also receive a custom Object containing the parameters to be initialized with."),(0,i.kt)("li",{parentName:"ul"},"Receives the whole list of schemas configured by the user."),(0,i.kt)("li",{parentName:"ul"},"Provides Meta-System functions to interact with the database.")),(0,i.kt)("h2",{id:"1-requirements"},"1. Requirements"),(0,i.kt)("p",null,"Before we start, be sure to already have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An account in ",(0,i.kt)("a",{parentName:"li",href:"https://npmjs.com"},"NPM")," for publishing your package;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nodejs.org"},"Node.Js")," installed (version 12 or later);"),(0,i.kt)("li",{parentName:"ul"},"A text editor of your choice, or IDE for editing Javascript/Typescript.")),(0,i.kt)("p",null,"Now we should start by installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@meta-system/meta-protocol-helper"),", a library we published to aid developing new protocols to Meta-System, as well as validate them. We will be installing it both locally and system-wide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @meta-system/meta-protocol-helper\nnpm i @meta-system/meta-protocol-helper --save\n")),(0,i.kt)("p",null,"If you want a quick start on this, try cloning the repository of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/cronjob-protocol"},"CronJob Protocol"),", or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/mongo-db-protocol"},"mongo-db-protocol")," for DB protocols."),(0,i.kt)("h2",{id:"2-the-code"},"2. The Code"),(0,i.kt)("p",null,"This section, due to having major difference between DB Protocols and Normal protocols, we will split them into another page. You can keep reading this page if ",(0,i.kt)("strong",{parentName:"p"},"normal")," protocols are what you are looking to build. Otherwise, follow from here: ",(0,i.kt)("a",{parentName:"p",href:"./writing-db-protocols"},"DB Protocols Code"),"."),(0,i.kt)("p",null,"After you already have all the requirements, you can code away! The expected interface of a ",(0,i.kt)("strong",{parentName:"p"},"normal")," protocol is a class that extends ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaProtocol"),"."),(0,i.kt)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,i.kt)("p",null,"We believe that you, the author of this awesome Protocol, should have the rights to define what it needs to be configured and functional, and this is the place for doing it. You should accept an object as the first argument in the constructor, which contains all the parameters you want, with any structure you can imagine, just be sure to provide us with the method for validating it (",(0,i.kt)("a",{parentName:"p",href:"#validateconfiguration---returns-void"},"see below"),"). If the users configures your protocol wrong, Meta-System will fail to boot."),(0,i.kt)("h3",{id:"constructor"},"Constructor"),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"normal")," protocols, you will always recieve two arguments in the following order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your Protocol's configuration parameters;"),(0,i.kt)("li",{parentName:"ul"},"The Function Manager, which is what you may use for getting the BOps to be executed.")),(0,i.kt)("p",null,"These should also be passed in the same order when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"super()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(configuration, functionManager) {\n  super(configuration, functionManager);\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is recommended to bind your methods in the constructor.")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("p",null,"There are some functions we require you to implement for your protocol to be valid. Pay attention to names of the methods for both the ",(0,i.kt)("strong",{parentName:"p"},"normal")," and ",(0,i.kt)("strong",{parentName:"p"},"DB Protocol")," protocols, as we intentionally made them different, so there's an interface mismatch.\nYou must declare the following methods:"),(0,i.kt)("h4",{id:"start---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"start"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"normal"),' protocols, this method starts the execution of your protocol. "Starting" your protocol means allowing BOps to be called. For instance, for an HTTP controller, the "start" means begin to listen on the routes that should trigger any BOp. You may use ',(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," here so anyone that uses this protocol can be sure that it is working. This method can be Async."),(0,i.kt)("h4",{id:"stop---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"stop"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"normal")," protocols, this is the method that stops your protocol from calling any BOp. You may also use ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," here to be clear to anyone who uses your Protocol that it actually stopped. This method can be Async."),(0,i.kt)("h4",{id:"validateconfiguration---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"validateConfiguration"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"This method is required and is executed by Meta-System in order to be sure that a valid configuration for your protocol was provided. It should validate every parameter specified in your user configuration."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Errors")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every validation in this method should throw an error if failed. Prefer error messages that guide the user to solving the configuration issues encountered."))),(0,i.kt)("h4",{id:"getprotocolpublicmethods---returns-an-object-containing-functions-to-be-used-in-bops"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"getProtocolPublicMethods"))," - returns an object containing functions to be used in BOps"),(0,i.kt)("p",null,"This is the method you should use when you want to provide a way of interacting with your protocol from the BOps flow, such as forcibly send an error to the user, or getting a connection value. If there are no such interactions for your protocol, return an empty object."),(0,i.kt)("p",null,"If you do want to provide them, their name should be keys in the object, while their function declarations are the values."),(0,i.kt)("h3",{id:"additional-methods-for-db-protocols"},"Additional Methods For DB Protocols"),(0,i.kt)("p",null,"DB protocols also requires the functions to provide the Schema access to the Database. They are all specified in the ",(0,i.kt)("a",{parentName:"p",href:"../api-docs/functions/schema-functions/intro#the-recommended-interface"},"Schema-Functions")," section. All of them must be created to the DB protocol to be valid."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Take note!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"inputs")," on the code looks different to what we have on the documentation! All the functions."))),(0,i.kt)("h2",{id:"3-the-configuration-file"},"3. The Configuration File"),(0,i.kt)("p",null,"Just like packages and functions, Protocols also need a file to tell Meta-System how they should be used. The name of that file is ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-protocol.json"),". Here is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-protocol.json")," file should contain."),(0,i.kt)("p",null,"Let's start with an example of that file. Taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/cronjob-protocol"},"CronJob Protocol"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocolName": "cronjob-protocol",\n  "description": "Run functions in a timely fashion",\n  "entrypoint": "./dist/index.js",\n  "version": "1.0.5",\n  "className": "CronJob",\n  "functionDefinitions": [\n    {\n      "input": {},\n      "output": {},\n      "functionName": "stopJob",\n      "description": "stops running job"\n    },\n    {\n      "input": {},\n      "output": {},\n      "functionName": "startJob",\n      "description": "Start the job"\n    }\n  ],\n  "configurationFormat": {\n    "arguments": { "type": "cloudedObject" },\n    "bopsName": { "type": "string" },\n    "periodMillis": { "type": "number" }\n  }\n}\n')),(0,i.kt)("h3",{id:"configuration-file-parameters"},"Configuration File Parameters"),(0,i.kt)("h4",{id:"protocolname---string-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"protocolName"')," - String (required)"),(0,i.kt)("p",null,"It is the name of your protocol, as it is in NPM and in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("h4",{id:"description---string-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"description"')," - String (required)"),(0,i.kt)("p",null,"This is a short description of what your protocol does."),(0,i.kt)("h4",{id:"entrypoint---string-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"entrypoint"')," - String (required)"),(0,i.kt)("p",null,"This property is where Meta-System should look to find the file where your protocol class is declared."),(0,i.kt)("h4",{id:"version---semver-string-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"version"')," - SemVer String (required)"),(0,i.kt)("p",null,"The current semantic version of your protocol. Should match what is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("h4",{id:"classname---string-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"className"')," - String (required)"),(0,i.kt)("p",null,"It is the name of the class exported in your ",(0,i.kt)("inlineCode",{parentName:"p"},'"entrypoint"'),"."),(0,i.kt)("h4",{id:"functionsdefinitions---array-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"functionsDefinitions"')," - Array (required)"),(0,i.kt)("p",null,"This array should contain objects of ",(0,i.kt)("a",{parentName:"p",href:"./writing-packages-and-functions#functionsdefinitions---meta-function-array-required"},"functions definitions"),", and may be empty if your protocol has no exported functions."),(0,i.kt)("h4",{id:"configurationformat---objectdefinition-required"},(0,i.kt)("inlineCode",{parentName:"h4"},'"configurationFormat"')," - ",(0,i.kt)("a",{parentName:"h4",href:"../api-docs/configuring/object-definition"},"ObjectDefinition")," (required)"),(0,i.kt)("p",null,"This is an object specifying how your protocol should be configured. Meta-System uses this to check for you if the user has provided a valid configuration."),(0,i.kt)("h2",{id:"4-validating"},"4. Validating"),(0,i.kt)("p",null,"We're almost there! For validating your protocol, you should just run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-protocol-check")," at the root of your repository. This command will check your class to see if it has all the required methods and also if it provides the methods declared in your ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-protocol.json")," file. If you're writing a DB protocol, do a ",(0,i.kt)("inlineCode",{parentName:"p"},"db-protocol-check")," instead."),(0,i.kt)("p",null,'If everything goes smoothly, you should see a green success message saying: "File passed validation."'),(0,i.kt)("h2",{id:"5-publishing"},"5. Publishing"),(0,i.kt)("p",null,"You're just a command away from getting your protocol ready to be used by everyone who uses Meta-System. Type in ",(0,i.kt)("inlineCode",{parentName:"p"},"npm publish")," and you're set!"),(0,i.kt)("p",null,"For how to use protocols (including your own!), check ",(0,i.kt)("a",{parentName:"p",href:"../api-docs/configuring/protocol-config"},"this")," documentation page."))}d.isMDXComponent=!0}}]);