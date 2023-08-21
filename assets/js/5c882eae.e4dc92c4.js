(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[1792],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1526:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},p="Modules Dependencies",c={unversionedId:"api-docs/configuring/bops/dependencies",id:"api-docs/configuring/bops/dependencies",isDocsHomePage:!1,title:"Modules Dependencies",description:"Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module.",source:"@site/docs/api-docs/configuring/bops/dependencies.md",sourceDirName:"api-docs/configuring/bops",slug:"/api-docs/configuring/bops/dependencies",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/dependencies",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/bops/dependencies.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Constants and Variables",permalink:"/meta-system-docs/docs/api-docs/configuring/bops/constants-and-variables"},next:{title:"Addons",permalink:"/meta-system-docs/docs/api-docs/configuring/addons-config"}},l=[{value:"Dependencies Properties",id:"dependencies-properties",children:[{value:"Origin",id:"origin",children:[]},{value:"Origin Path",id:"origin-path",children:[]},{value:"Target Path",id:"target-path",children:[]}]},{value:"Setting Dependency Type",id:"setting-dependency-type",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules-dependencies"},"Modules Dependencies"),(0,a.kt)("p",null,"Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module."),(0,a.kt)("p",null,"The mechanics of how this works is explained in the Flows page, at this ",(0,a.kt)("a",{parentName:"p",href:"../../architecture/flows/#dependencies"},"section"),"."),(0,a.kt)("h2",{id:"dependencies-properties"},"Dependencies Properties"),(0,a.kt)("p",null,"In each module, the dependencies are an array of Objects that may contain the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"origin"')," - Required"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"originPath"')," - Optional"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"targetPath"')," - Optional")),(0,a.kt)("h3",{id:"origin"},"Origin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"origin"')," is a required field, and its value must be either a number, representing another module in the flow, or an item in the following ENUM:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"constants"')," - If the dependency comes from a constant declared in the same BOps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"variables"')," - If the dependency is from a variable value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"inputs"')," - If the dependency is from an input of the function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"envs"')," - If the dependency is from an environment value set system-wide.")),(0,a.kt)("h3",{id:"origin-path"},"Origin Path"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},'"originPath"')," property specifies where in ",(0,a.kt)("inlineCode",{parentName:"p"},'"origin"')," is the wanted value. This must be a string, more precisely, an object path (using dot notation) to the value in the module output. An example would be ",(0,a.kt)("inlineCode",{parentName:"p"},'originPath: "resultProp.deep.object"'),". This also supports array access, so you can access especific Items with square brackets like so: ",(0,a.kt)("inlineCode",{parentName:"p"},'"resultProp.people[2].name"'),", to access the third item of the people array."),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},'"origin"')," is a number, the path must either start with ",(0,a.kt)("inlineCode",{parentName:"p"},'"result"')," for the function to be executed then to access the result object, or be ",(0,a.kt)("inlineCode",{parentName:"p"},'"module"')," for the origin itself (and its sub dependencies) be passed forward as an argument."),(0,a.kt)("h3",{id:"target-path"},"Target Path"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"targetPath"')," Is where Meta-System maps the output of ",(0,a.kt)("inlineCode",{parentName:"p"},'"originPath"')," to. This property must be a string representing an object path (using dot notation) to map the result to. Likewise the ",(0,a.kt)("inlineCode",{parentName:"p"},'"originPath"'),", this supports square brackets to set properties of arrays, with the added functionality of using empty square brackets to push an item into the array at the last position."),(0,a.kt)("h2",{id:"setting-dependency-type"},"Setting Dependency Type"),(0,a.kt)("p",null,"As said in ",(0,a.kt)("a",{parentName:"p",href:"../../architecture/flows/#dependencies"},"the dependencies section"),", there are two kinds, ",(0,a.kt)("strong",{parentName:"p"},"Functional")," and ",(0,a.kt)("strong",{parentName:"p"},"Normal"),"."),(0,a.kt)("p",null,"To set a dependency as Functional, just omit ",(0,a.kt)("inlineCode",{parentName:"p"},'"originPath"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"targetPath"'),". The module will be executed, but its results will not be mapped. If you specify those two properties, the dependency will be Normal."))}u.isMDXComponent=!0}}]);