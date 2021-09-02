(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[3973],{2924:function(e,t,o){"use strict";var i=o(7294).createContext(void 0);t.Z=i},5350:function(e,t,o){"use strict";var i=o(7294),n=o(2924);t.Z=function(){var e=(0,i.useContext)(n.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3057:function(e,t,o){"use strict";o.r(t),o.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return l}});var i=o(2122),n=o(9756),s=(o(7294),o(3905)),a=o(1756),r=["components"],c={sidebar_position:1},u="Configuration Basics",h={unversionedId:"api-docs/configuring/basics",id:"api-docs/configuring/basics",isDocsHomePage:!1,title:"Configuration Basics",description:"In this documentation section, you will be presented with all the configuration file details for meta-system. If you want to learn a bit more of how things work under the hood, check the Architecture section before! You will possibly have a better experience tuning your system if you do so.",source:"@site/docs/api-docs/configuring/basics.md",sourceDirName:"api-docs/configuring",slug:"/api-docs/configuring/basics",permalink:"/meta-system-docs/docs/api-docs/configuring/basics",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/configuring/basics.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Execution Flows",permalink:"/meta-system-docs/docs/api-docs/architecture/flows"},next:{title:"Schemas",permalink:"/meta-system-docs/docs/api-docs/configuring/schema-config"}},l=[{value:"Starting a New Config",id:"starting-a-new-config",children:[{value:"Top Level Values",id:"top-level-values",children:[]},{value:"Deep Properties",id:"deep-properties",children:[]}]}],d={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration-basics"},"Configuration Basics"),(0,s.kt)("p",null,"In this documentation section, you will be presented with all the configuration file details for ",(0,s.kt)("inlineCode",{parentName:"p"},"meta-system"),". If you want to learn a bit more of how things work under the hood, check the ",(0,s.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/architecture/software-design"},"Architecture")," section before! You will possibly have a better experience tuning your system if you do so."),(0,s.kt)("h2",{id:"starting-a-new-config"},"Starting a New Config"),(0,s.kt)("p",null,"A new configuration is what stands between you and your brand new system. Don't panic! Here we have all the instructions needed for you to overcome the challenges you may face. Let's start by handing you this sweet clean sample of a configuration."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Click to Show Config ","| ",(0,s.kt)("a",{href:"pathname:///jsons/new-config.txt",download:"new-config.json"},"Click to Download"))),(0,s.kt)(a.Z,{className:"language-json",mdxType:"CodeBlock"},'{\n  "name": "your-new-system",\n  "version": "1.0.0",\n  "envs": [],\n  "schemas": [],\n  "dbConnectionString": "",\n  "businessOperations": [],\n  "protocols": []\n}')),(0,s.kt)("br",null),(0,s.kt)("p",null,"Now we can begin our journey."),(0,s.kt)("h3",{id:"top-level-values"},"Top Level Values"),(0,s.kt)("p",null,"The configuration is a JSON file that can get quite deep. This section explains the top level of the file. For the deeper parts refer to their specific sections."),(0,s.kt)("h4",{id:"name---required-string"},(0,s.kt)("inlineCode",{parentName:"h4"},'"name"')," - required string"),(0,s.kt)("p",null,"This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away."),(0,s.kt)("h4",{id:"version---required-string-semantic-version"},(0,s.kt)("inlineCode",{parentName:"h4"},'"version"')," - required string (Semantic Version)"),(0,s.kt)("p",null,"The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)"),(0,s.kt)("h4",{id:"dbconnectionstring---required-string"},(0,s.kt)("inlineCode",{parentName:"h4"},'"dbConnectionString"')," - required string"),(0,s.kt)("p",null,"This is the connection to the Mongo Database to persist data. This is only required if you specify a Schema (",(0,s.kt)("a",{parentName:"p",href:"#schemas"},"see below"),"), otherwise it can be an empty string."),(0,s.kt)("h4",{id:"envs---required-array"},(0,s.kt)("inlineCode",{parentName:"h4"},'"envs"')," - required Array"),(0,s.kt)("p",null,"This Array can be empty. Populate it with static values to be used in your BOps! Different from the ",(0,s.kt)("inlineCode",{parentName:"p"},'"constants"')," in each BOp, this is available for all bops, but similarly, cannot be changed."),(0,s.kt)("p",null,"If populated the values must be objects with two properties: ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),", whose values must be strings."),(0,s.kt)("h3",{id:"deep-properties"},"Deep Properties"),(0,s.kt)("p",null,"These next values are what you should pay more attention as they are the pieces that define the functionality of the system. Since they have enough details to care about, we have a dedicated page for each."),(0,s.kt)("h4",{id:"protocols---required-array"},(0,s.kt)("inlineCode",{parentName:"h4"},'"protocols"')," - required Array"),(0,s.kt)("p",null,"These determine how your system communicates with the outside world, so it is quite important! Here is where you configure whether your system will use the worldwide spread HTTP or any other type of communication."),(0,s.kt)("p",null,"More info can be found in the ",(0,s.kt)("a",{parentName:"p",href:"./protocol-config"},"Protocols Section"),"."),(0,s.kt)("h4",{id:"schemas---required-array"},(0,s.kt)("inlineCode",{parentName:"h4"},'"schemas"')," - required Array"),(0,s.kt)("p",null,"Schemas define the things your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of doors, the engine power and the price. Once that is defined your system will be able to store and manage info about individual cars."),(0,s.kt)("p",null,"More info can be found in the ",(0,s.kt)("a",{parentName:"p",href:"./schema-config"},"Schemas Section"),"."),(0,s.kt)("h4",{id:"businessoperations---required-array"},(0,s.kt)("inlineCode",{parentName:"h4"},'"businessOperations"')," - required Array"),(0,s.kt)("p",null,"BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the information it gets and holds. Here is where you can tell your system what it should do when your user tells the system he/she is 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!"),(0,s.kt)("p",null,"More info can be found in the ",(0,s.kt)("a",{parentName:"p",href:"./bops/bops"},"BOps Section"),"."))}p.isMDXComponent=!0}}]);