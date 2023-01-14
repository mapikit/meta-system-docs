(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[3832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:5},u="Meta-System CLI",c={unversionedId:"api-docs/using-the-cli",id:"api-docs/using-the-cli",isDocsHomePage:!1,title:"Meta-System CLI",description:"Meta-System has a pretty simple CLI to use, and here we will list all that it supports.",source:"@site/docs/api-docs/using-the-cli.md",sourceDirName:"api-docs",slug:"/api-docs/using-the-cli",permalink:"/meta-system-docs/docs/api-docs/using-the-cli",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/using-the-cli.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Update",permalink:"/meta-system-docs/docs/api-docs/functions/schema-functions/update"}},p=[{value:"Commands",id:"commands",children:[{value:"run",id:"run",children:[]},{value:"test-bop",id:"test-bop",children:[]}]}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meta-system-cli"},"Meta-System CLI"),(0,i.kt)("p",null,"Meta-System has a pretty simple CLI to use, and here we will list all that it supports.\nYou can get an overview of the CLI by simply running ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system")," with no commands."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"As of version V0.3 Mercury, there's just two commands, ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test-bop"),"."),(0,i.kt)("h3",{id:"run"},"run"),(0,i.kt)("p",null,"This is the main command for using MSYS. it uses the specified configuration to configure your system, validate it, and subsequently run it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"meta-system run ./path-to/configuration.json")),(0,i.kt)("li",{parentName:"ul"},"Syntax: ",(0,i.kt)("inlineCode",{parentName:"li"},"meta-system run [options] <path-to-configuration>"))),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system help run")," to get more information on the options you can pass to this command."),(0,i.kt)("h3",{id:"test-bop"},"test-bop"),(0,i.kt)("p",null,"Use this function to test how a BOp of yours is responding without needing to spin up all your system and protocols. When using this command, after your configuration is validated, you will be prompted for the required inputs of your Business Operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"meta-system test-bop ./path-to/configuration.json bopName")),(0,i.kt)("li",{parentName:"ul"},"Syntax: ",(0,i.kt)("inlineCode",{parentName:"li"},"meta-system test-bop <config> <bop>"))),(0,i.kt)("p",null,"There are no options for this command."))}m.isMDXComponent=!0}}]);