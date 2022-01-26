(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1929],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},u),{},{components:o})):n.createElement(h,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7183:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=["components"],s={sidebar_position:5},c="Contributing",l={unversionedId:"guides/contributing",id:"guides/contributing",isDocsHomePage:!1,title:"Contributing",description:"Meta-System is constantly evolving, and to keep up the pace, and maintain it free of bugs, any helping hands are welcome.",source:"@site/docs/guides/contributing.md",sourceDirName:"guides",slug:"/guides/contributing",permalink:"/meta-system-docs/docs/guides/contributing",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/guides/contributing.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guides",previous:{title:"DB Protocols Code",permalink:"/meta-system-docs/docs/guides/writing-db-protocols"}},u=[{value:"Core Source code",id:"core-source-code",children:[{value:"Tests",id:"tests",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Core Features",id:"core-features",children:[]}]},{value:"Ecosystem",id:"ecosystem",children:[]},{value:"Packages, Functions, and Protocols",id:"packages-functions-and-protocols",children:[]}],d={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Meta-System is constantly evolving, and to keep up the pace, and maintain it free of bugs, any helping hands are welcome."),(0,i.kt)("p",null,"To begin with, the best place to ask where do we need help is our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/ndGsnbTW7V"},"discord"),". We'll be happy to have you on board with the awesome people that made this possible."),(0,i.kt)("p",null,"Of course, there are plenty of ways in which you could help, so let's get started on each of them."),(0,i.kt)("h2",{id:"core-source-code"},"Core Source code"),(0,i.kt)("p",null,"Contributing in the ",(0,i.kt)("strong",{parentName:"p"},"core source code")," for Meta-System means creating new features for everybody, or improving the way it is used. Althought developing for the core is really important, it comes with a lot of responsibility and attention to the interface, which should be respected, and  changes between minor and patch versions should be avoided."),(0,i.kt)("p",null,"If contributing to the core is your gig, it is reccomended you to first read the code and try understand what is it doing. Additionally, you can always ping the ",(0,i.kt)("inlineCode",{parentName:"p"},"@contributor")," role on our Discord and ask for some guidance to understand the code a bit better."),(0,i.kt)("p",null,"All of our code is developed using Typescript in a NodeJs environment, and we expect some familiarity with it from all contributors."),(0,i.kt)("p",null,"Here are the main things in which you can help on the source code:"),(0,i.kt)("h3",{id:"tests"},"Tests"),(0,i.kt)("p",null,"In a fast mutating repository, tests can easily become obsolete or incomplete. Having them up to date and testing actual user scenarios ensures the software's realiability."),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Keeping the documentation sometimes may be more challenging than developing the code itself, and also is required for keeping information available to the end user up to date."),(0,i.kt)("h3",{id:"core-features"},"Core Features"),(0,i.kt)("p",null,"All the core features are outlined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/meta-system/blob/master/ROADMAP.md"},"Roadmap"),". If we started developing the specified version, you will see a milestone for the version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/meta-system/milestones"},"here"),"."),(0,i.kt)("p",null,"When we already started working on a feature for a version, there will be an issue made for it on this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapikit/meta-system/issues"},"list"),", which we use to track development. If you don't see a feature for a next version there, it probably means we haven't started working on it yet, so in this case, you're welcome to adopt a task!"),(0,i.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,i.kt)("p",null,"Perhaps even more important than the core of the Meta-System itself, there is the ecosystem to support its usage. The ecosystem is composed of all the libraries that support both the development of the core, and the development of packages and protocols."),(0,i.kt)("p",null,"Contributing to the ecosystem consists in improving the quality of the libraries and helpers, making them more useful and stable, as well as better documented overall."),(0,i.kt)("h2",{id:"packages-functions-and-protocols"},"Packages, Functions, and Protocols"),(0,i.kt)("p",null,"Yes, we do consider this as a contribution! Packages and protocols are what makes Meta-System to be more useful to more people. We assume that we simply cannot make a software capable of solving all the possible cases, so, instead, we give the users tools for them to increase the usability of the software."),(0,i.kt)("p",null,"By creating and maintaining packages and protocols, you are creating functionality for every user of Meta-System too. \u2764\ufe0f"))}p.isMDXComponent=!0}}]);