(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[7918],{6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(9756),r=n(7294),i=n(3727),l=n(2263),o=n(3919),s=n(412),c=(0,r.createContext)({collectLink:function(){}}),d=n(4996),u=n(8780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,f=e.to,h=e.href,p=e.activeClassName,b=e.isActive,E=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,_=void 0===g||g,N=(0,a.Z)(e,m),k=(0,l.Z)().siteConfig,L=k.trailingSlash,Z=k.baseUrl,w=(0,d.C)().withBaseUrl,y=(0,r.useContext)(c),U=f||h,C=(0,o.Z)(U),T=null==U?void 0:U.replace("pathname://",""),A=void 0!==T?(n=T,_&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0;A&&C&&(A=(0,u.applyTrailingSlash)(A,{trailingSlash:L,baseUrl:Z}));var B,O=(0,r.useRef)(!1),M=v?i.OL:i.rU,S=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!S&&C&&null!=A&&window.docusaurus.prefetch(A),function(){S&&B&&B.disconnect()}}),[A,S,C]);var I=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,x=!A||!C||I;return A&&C&&!I&&!E&&y.collectLink(A),x?r.createElement("a",Object.assign({href:A},U&&!C&&{target:"_blank",rel:"noopener noreferrer"},N)):r.createElement(M,Object.assign({},N,{onMouseEnter:function(){O.current||null==A||(window.docusaurus.preload(A),O.current=!0)},innerRef:function(e){var t,n;S&&e&&C&&(t=e,n=function(){null!=A&&window.docusaurus.prefetch(A)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:A||""},v&&{isActive:b,activeClassName:p}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2064:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var a=n(7294),r=n(6010),i=n(907),l=n(3783),o=n(6742),s=n(9052);var c=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(2263),u=n(3018);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.versionMetadata,r=(0,d.Z)().siteConfig.title,l=(0,i.gA)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,i.Jo)(l),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,h=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:m.label,to:h.path,onClick:function(){return o(m.name)}})))}var p=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(h,{versionMetadata:t})},b=n(1217);function E(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},k="tableOfContents_35-E",L="table-of-contents__link";function Z(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:L,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(Z,{isChild:!0,toc:e.children}))}))):null}var w=function(e){var t=e.toc;return N(L,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(k,"thin-scrollbar")},a.createElement(Z,{toc:t}))},y="tocCollapsible_1PrD",U="tocCollapsibleButton_2O1e",C="tocCollapsibleContent_2Ydz",T="tocCollapsibleExpanded_3GYr";function A(e){var t,n=e.toc,i=e.className,l=(0,u.uR)({initialState:!0}),o=l.collapsed,c=l.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(y,(t={},t[T]=!o,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",U),onClick:c},a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:C,collapsed:o},a.createElement(Z,{toc:n})))}var B=n(2122),O=n(9756),M="iconEdit_2_ui",S=["className"],I=function(e){var t=e.className,n=(0,O.Z)(e,S);return a.createElement("svg",(0,B.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(M,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function x(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(I,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var D=n(6159),P="docItemContainer_33ec",j="lastUpdated_3DPF",z="docItemCol_3FnS",V="tocMobile_3Hoh";var W=function(e){var t,n=e.content,o=e.versionMetadata,s=n.metadata,d=n.frontMatter,u=d.image,m=d.keywords,v=d.hide_title,f=d.hide_table_of_contents,h=s.description,E=s.title,g=s.editUrl,N=s.lastUpdatedAt,k=s.formattedLastUpdatedAt,L=s.lastUpdatedBy,Z=(0,i.gA)({failfast:!0}).pluginId,y=(0,i.gB)(Z).length>1,U=!v&&void 0===n.contentTitle,C=(0,l.Z)(),T=!f&&n.toc&&n.toc.length>0,B=T&&("desktop"===C||"ssr"===C);return a.createElement(a.Fragment,null,a.createElement(b.Z,{title:E,description:h,keywords:m,image:u}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[z]=!f,t))},a.createElement(p,{versionMetadata:o}),a.createElement("div",{className:P},a.createElement("article",null,y&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),T&&a.createElement(A,{toc:n.toc,className:V}),a.createElement("div",{className:"markdown"},U&&a.createElement(D.N,null,E),a.createElement(n,null)),(g||N||L)&&a.createElement("footer",{className:"row docusaurus-mt-lg"},a.createElement("div",{className:"col"},g&&a.createElement(x,{editUrl:g})),a.createElement("div",{className:(0,r.Z)("col",j)},(N||L)&&a.createElement(_,{lastUpdatedAt:N,formattedLastUpdatedAt:k,lastUpdatedBy:L})))),a.createElement(c,{metadata:s}))),B&&a.createElement("div",{className:"col col--3"},a.createElement(w,{toc:n.toc}))))}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return v}});var a=n(9756),r=n(2122),i=n(7294),l=n(6010),o=n(9052),s=n(3018),c="enhancedAnchor_2LWZ",d="h1Heading_27L5",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0,className:d}),t.children))},v=function(e){return"h1"===e?m:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,u),m=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[c]=!m,n)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(9105),i=n(3018),l=n(4996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=(0,i.LU)().image,d=(0,i.pe)(t),u=(0,l.Z)(s||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}))}},3783:function(e,t,n){"use strict";var a=n(7294),r=n(412),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){if(r.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(s())}}),[]),t}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);