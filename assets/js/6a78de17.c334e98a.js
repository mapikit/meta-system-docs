(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[8499],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4214:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},c="Intro to Schemas and Databases",l={unversionedId:"api-docs/functions/schema-functions/intro",id:"api-docs/functions/schema-functions/intro",isDocsHomePage:!1,title:"Intro to Schemas and Databases",description:"Here you will find a bunch of functions called Schema Functions. Unlike regular internal functions, schema functions are related to an specific schema and interact directly with the database collection of that schema. So, since these are rather special functions let's get some simple details out of the way:",source:"@site/docs/api-docs/functions/schema-functions/intro.md",sourceDirName:"api-docs/functions/schema-functions",slug:"/api-docs/functions/schema-functions/intro",permalink:"/meta-system-docs/docs/api-docs/functions/schema-functions/intro",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/functions/schema-functions/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"String to Number",permalink:"/meta-system-docs/docs/api-docs/functions/internal-functions/string/to-number"}},u=[{value:"About the Database",id:"about-the-database",children:[]},{value:"Accessing a Database",id:"accessing-a-database",children:[]},{value:"Creating a new Collection",id:"creating-a-new-collection",children:[]},{value:"Interacting with a Collection",id:"interacting-with-a-collection",children:[]},{value:"Simple Example",id:"simple-example",children:[]},{value:"What Now?",id:"what-now",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-to-schemas-and-databases"},"Intro to Schemas and Databases"),(0,i.kt)("p",null,"Here you will find a bunch of functions called ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema Functions"),". Unlike regular internal functions, schema functions are related to an specific schema and interact directly with the database collection of that schema. So, since these are rather special functions let's get some simple details out of the way:"),(0,i.kt)("h3",{id:"about-the-database"},"About the Database"),(0,i.kt)("p",null,"As you probably already know, a database is responsible for storing all the data of your system, be it users profiles, transactions history, market info or watever other info you may need to store. However there are many databases out there, which one will we be using? Well, currently meta-system uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),". After you setup your mongo database all you need to do to use your database in meta-system is supply the database connection url in the ",(0,i.kt)("inlineCode",{parentName:"p"},"system configuration"),"."),(0,i.kt)("p",null,"If you need help setting up you MongoDB here are some suggested tutorials for your OS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/"},"Windows Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/"},"macOs Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/administration/install-on-linux/"},"Linux Tutorials"))),(0,i.kt)("h3",{id:"accessing-a-database"},"Accessing a Database"),(0,i.kt)("p",null,"After you have your database up and running all you need to do, as mentioned previously, is supply the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"mongo connection string")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dbConnectionString")," property in you system config. That is all the meta-system needs to start creating your collections."),(0,i.kt)("h4",{id:"what-are-collections"},"What are Collections?"),(0,i.kt)("p",null,'Don\'t worry, you may have never heard this term here before, but it is quite simple: MongoDb separates its data into collections, much like you separate your files into folders or directories. A database can have many collections, for instance, your database can have a collection called "users" that stores the info about your users and another collection called "prices" that stores the pricing info for you business. This makes for a more organized database and makes it rather easy to manage you data.'),(0,i.kt)("h3",{id:"creating-a-new-collection"},"Creating a new Collection"),(0,i.kt)("p",null,"Creating a new Collection in meta-system is as simple as writing its name. Literally. Every schema you create corresponds to a collection; when your system starts it creates all necessary collections after the registered schemas names. So, in practice, you don't even need to bother with acctually creating the collections, just create a schema and you are all done!"),(0,i.kt)("h3",{id:"interacting-with-a-collection"},"Interacting with a Collection"),(0,i.kt)("p",null,"So you create a schema and the meta-system creates a collection for it, brilliant! However, how do you interact with said collections? Well, thats where the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema functions")," come in. Schema functions are functions capable of interacting directly with your database (i.e. collections) and, in general, they follow the same base configuration. For every ",(0,i.kt)("inlineCode",{parentName:"p"},"schema function")," the property ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleType")," should be equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"schemaFunction")," and the property ",(0,i.kt)("inlineCode",{parentName:"p"},"modulePackage")," should be the name of the schema the function will act upon. Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleName")," should be name of the operation (available options are ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),",",(0,i.kt)("inlineCode",{parentName:"p"},"getById"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"updateById"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteById"),", all of which will be further explained below)."),(0,i.kt)("h3",{id:"simple-example"},"Simple Example"),(0,i.kt)("p",null,"A nice way to undestand how the configuration works is by using an example so, consider the following module configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// This ModuleConfig goes inside the "configuration" property in the Bop\n{\n  "moduleType": "schemaFunction", \n    // Here we define it as a schemaFunctiion\n  "moduleName": "create", \n    // Now we define it as a creation (insertion) function\n  "modulePackage": "numbers", \n    // And then we say on which collection we will insert (collection "numbers")\n  "dependencies": [\n    // Finally we define what will be inserted\n    // In this case the value of the constant "constantTen" will be \n    // inserted in the property "valid" of the new database entity\n    { "origin": "constants", "originPath": "constantTen", "targetPath": "entity.valid" }\n  ]\n}\n')),(0,i.kt)("h3",{id:"what-now"},"What Now?"),(0,i.kt)("p",null,"Now that you know how ",(0,i.kt)("inlineCode",{parentName:"p"},"schema functions")," work, we can get into the specifics of each function."))}p.isMDXComponent=!0}}]);