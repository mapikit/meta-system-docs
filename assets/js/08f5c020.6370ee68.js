(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[7228],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,m=u["".concat(d,".").concat(p)]||u[p]||h[p]||i;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8821:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],s={sidebar_position:4},d="DB Protocols Code",c={unversionedId:"guides/writing-db-protocols",id:"guides/writing-db-protocols",isDocsHomePage:!1,title:"DB Protocols Code",description:'This is not the full guide for DB Protocols. Please refer to the "Writing Protocols" page for the information that encompasses both normal and DB protocols.',source:"@site/docs/guides/writing-db-protocols.md",sourceDirName:"guides",slug:"/guides/writing-db-protocols",permalink:"/meta-system-docs/docs/guides/writing-db-protocols",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/guides/writing-db-protocols.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guides",previous:{title:"Writing Protocols",permalink:"/meta-system-docs/docs/guides/writing-protocols"},next:{title:"Contributing",permalink:"/meta-system-docs/docs/guides/contributing"}},l=[{value:"2. The Code",id:"2-the-code",children:[{value:"Configuration Parameters",id:"configuration-parameters",children:[]},{value:"Constructor",id:"constructor",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Additional Methods For DB Protocols",id:"additional-methods-for-db-protocols",children:[]}]},{value:"3. The Configuration File",id:"3-the-configuration-file",children:[]}],h={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"db-protocols-code"},"DB Protocols Code"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is not the full guide for DB Protocols. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"./writing-protocols"},'"Writing Protocols"')," page for the information that encompasses both normal and DB protocols."))),(0,i.kt)("h2",{id:"2-the-code"},"2. The Code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See step 1 ",(0,i.kt)("a",{parentName:"p",href:"./writing-protocols#1-requirements"},"here"),".")),(0,i.kt)("p",null,"After you already have all the requirements, you can code away! The expected interface of a ",(0,i.kt)("strong",{parentName:"p"},"DB protocol")," protocol is a class that extends ",(0,i.kt)("inlineCode",{parentName:"p"},"DBProtocol"),", and provides a type for its configuration parameters (only needed if using typescript)."),(0,i.kt)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,i.kt)("p",null,"We believe that you, the author of this awesome Protocol, should have the rights to define what it needs to be configured and functional, and this is the place for doing it. You should accept an object as the first argument in the constructor, which contains all the parameters you want, with any structure you can imagine, just be sure to provide us with the method for validating it (",(0,i.kt)("a",{parentName:"p",href:"#validateconfiguration---returns-void"},"see below"),"). If the user provides an invalid configuration for your protocol, Meta-System will fail to boot."),(0,i.kt)("h3",{id:"constructor"},"Constructor"),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"DB Protocols")," you will receive the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your Protocol's configuration parameters;"),(0,i.kt)("li",{parentName:"ul"},"The array of schemas you need to boot with.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"constructor(configuration, schemaList) {\n  super(configuration, schemaList);\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is recommended to bind your methods in the constructor.")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("p",null,"There are some functions we require you to implement for your DB protocol to be valid.\nYou must declare the following methods:"),(0,i.kt)("h4",{id:"initialize---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"initialize"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"This method should boot the connection to the database, and prepare it for being used by schemas. If there's any migration to happen, it should be done at this stage. This method can be Async."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DB Protocols are responsible for configuring and preparing the database to be used with the user schemas. This means that you will need to generate the tables, columns, and relationships when this method executes."))),(0,i.kt)("p",null,"There is a helper method provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"DBProtocol<T>")," class we're supposed to extend. It is called ",(0,i.kt)("inlineCode",{parentName:"p"},"this.checkSchemaDiff()")," and can aid on finding differences in versions of Schemas. "),(0,i.kt)("h4",{id:"shutdown---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"shutdown"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"This method should close all the connections open to any database. Additionally, you may save some state on the Database to help on the next boot. This method can be Async."),(0,i.kt)("h4",{id:"validateconfiguration---returns-void"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"validateConfiguration"))," - returns ",(0,i.kt)("inlineCode",{parentName:"h4"},"void")),(0,i.kt)("p",null,"This method is required and is executed by Meta-System in order to be sure that a valid configuration for your protocol was provided. It should validate every parameter specified in your user configuration."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Errors")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every validation in this method should throw an error if failed. Prefer error messages that guide the user to solving the configuration issues encountered."))),(0,i.kt)("h4",{id:"getprotocolpublicmethods---returns-an-object-containing-functions-to-be-used-in-bops"},(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"getProtocolPublicMethods"))," - returns an object containing functions to be used in BOps"),(0,i.kt)("p",null,"This is the method you should use when you want to provide a way of interacting with your protocol from the BOps flow, such as forcibly send an error to the user, or getting a connection value. If there are no such interactions for your protocol, return an empty object."),(0,i.kt)("p",null,"If you do want to provide them, their name should be keys in the object, while their function declarations are the values."),(0,i.kt)("h3",{id:"additional-methods-for-db-protocols"},"Additional Methods For DB Protocols"),(0,i.kt)("p",null,"DB protocols also requires the functions to provide the Schema access to the Database. They are all specified in the ",(0,i.kt)("a",{parentName:"p",href:"../api-docs/functions/schema-functions/intro#the-recommended-interface"},"Schema-Functions")," section. All of them must be declared to the DB protocol to be valid."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Take note!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"inputs")," on the code looks different to what we have on the documentation! For every method in the ",(0,i.kt)("a",{parentName:"p",href:"../api-docs/functions/schema-functions/intro#the-recommended-interface"},"Schema-Functions")," section, the DB protocol should actually receive their data as the following:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"methodName(schemaIdentifier, input) {}\n")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaIdentifier")," Is the identifier of the schema for the wanted operation;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input")," is the input of your method, and what you should expose as the documentation for this method. Meta-System handles the identifier internally.")),(0,i.kt)("p",{parentName:"div"},"Another reminder: If the recommended interface does not suit your needs well enough, you may pick one that does. Don't forget to document it though!"))),(0,i.kt)("h2",{id:"3-the-configuration-file"},"3. The Configuration File"),(0,i.kt)("p",null,"From this step onwards, the documentation for both protocols are the same, so you may go back to reading from ",(0,i.kt)("a",{parentName:"p",href:"./writing-protocols#3-the-configuration-file"},"here"),"."))}u.isMDXComponent=!0}}]);