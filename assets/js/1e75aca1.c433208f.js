(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[5465],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},d="Addons",c={unversionedId:"api-docs/architecture/components/addons",id:"api-docs/architecture/components/addons",isDocsHomePage:!1,title:"Addons",description:"Addons are the component of Meta-System used to extend functionality and execute them. They can modify, add, and interact with all data and functions of Meta-System.",source:"@site/docs/api-docs/architecture/components/addons.md",sourceDirName:"api-docs/architecture/components",slug:"/api-docs/architecture/components/addons",permalink:"/meta-system-docs/docs/api-docs/architecture/components/addons",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/architecture/components/addons.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Execution Flows",permalink:"/meta-system-docs/docs/api-docs/architecture/flows"},next:{title:"Configuration Basics",permalink:"/meta-system-docs/docs/api-docs/configuring/basics"}},l=[{value:"Structure",id:"structure",children:[{value:"Parts",id:"parts",children:[]}]},{value:"How MSYS Loads an Addon",id:"how-msys-loads-an-addon",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"addons"},"Addons"),(0,a.kt)("p",null,"Addons are the component of Meta-System used to extend functionality and execute them. They can modify, add, and interact with all data and functions of Meta-System."),(0,a.kt)("p",null,"In this document, we will explain the structure of Addons, and how they connect with every part of Meta-System. If you're looking for how to configure them in your JSON file, ",(0,a.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/configuring/addons-config"},"look here"),". If you're looking to how you can create your own addon, ",(0,a.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/guides/creating-addons"},"go here"),"."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Addons are similar for Meta-System, what libraries are for a code-base, essentially ",(0,a.kt)("strong",{parentName:"p"},"external code")," imported into your own. However, for MSYS, Addons can change their whole system behavior, add functions, wrap BOps, change Schemas, execute BOps, or even listen for HTTP requests."),(0,a.kt)("p",null,"Basically, Addons can be both a sort of a shortcut to shape your system and give it function, or a good old library for you to use."),(0,a.kt)("h3",{id:"parts"},"Parts"),(0,a.kt)("p",null,"Addons are divided into three parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Meta-File")," - A file responsible for telling MSYS about your Addon, what parts of MSYS it touches and what is its configuration interface."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Entrypoint")," - A JS file responsible to wire ",(0,a.kt)("strong",{parentName:"li"},"the code")," to MSYS internals, optionally accepting additional configuration from the Addon User."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Code")," - Well, the code to be imported and used inside/by MSYS.")),(0,a.kt)("h2",{id:"how-msys-loads-an-addon"},"How MSYS Loads an Addon"),(0,a.kt)("p",null,'When the user specify an Addon in their configuration, MSYS "collects" the files, validates them, then finally uses the entrypoint to import them into the running engine.'),(0,a.kt)("p",null,"In more detail, this process looks more like the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Meta-System gets the full list of Addons."),(0,a.kt)("li",{parentName:"ol"},"For every addon, using their specified ",(0,a.kt)("a",{parentName:"li",href:"/meta-system-docs/docs/api-docs/configuring/addons-config#collectstrategy---enum-required"},(0,a.kt)("inlineCode",{parentName:"a"},"collectStrategy")),", the Addon is retrieved from ",(0,a.kt)("a",{parentName:"li",href:"/meta-system-docs/docs/api-docs/configuring/addons-config#source---string-required"},(0,a.kt)("inlineCode",{parentName:"a"},"source"))),(0,a.kt)("li",{parentName:"ol"},"Their Meta-File and Entrypoint gets validated"),(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("a",{parentName:"li",href:"/meta-system-docs/docs/guides/creating-addons#configurationformat---object-definition-required"},"configuration format")," the Addon specifies in the Meta-File, the configuration value is validated."),(0,a.kt)("li",{parentName:"ol"},"MSYS Generates a ",(0,a.kt)("a",{parentName:"li",href:"/meta-system-docs/docs/guides/broker"},"broker")," with the specified permissions for the Addon."),(0,a.kt)("li",{parentName:"ol"},"In the entrypoint, the ",(0,a.kt)("inlineCode",{parentName:"li"},'"configure"')," function gets executed, with the generated broker as the first parameter, and the user configuration as the second."),(0,a.kt)("li",{parentName:"ol"},"Once every addon gets configured, MSYS ",(0,a.kt)("a",{parentName:"li",href:"/meta-system-docs/docs/api-docs/architecture/flows#stitching-stage"},"Stitches")," every Business operation."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},'"boot"')," entrypoint function is executed for every addon, and MSYS should be running.")),(0,a.kt)("p",null,"Keep in mind that every addon is loaded in the same order they are declared in the Addons array, so their order matter, as they may use and modify the same entities, similar how ",(0,a.kt)("inlineCode",{parentName:"p"},"(2+2)*4")," is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"(2*4)+2"),"."))}p.isMDXComponent=!0}}]);