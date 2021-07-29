(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[538],{2924:function(e,t,n){"use strict";var a=n(7294).createContext(void 0);t.Z=a},5350:function(e,t,n){"use strict";var a=n(7294),o=n(2924);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},5579:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),s=n(1756),r=["components"],l={sidebar_position:1},u="Getting Started",d={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to the Meta-System documentation. Here we will show you the first steps required to run it, teach you about the architecture, in-depth info about functions, and hopefully answer all the questions you might have about the Meta-System.",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/meta-system-docs/docs/getting-started",editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/getting-started.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Sotware Design Behind Meta-System",permalink:"/meta-system-docs/docs/architecture/software-design"}},p=[{value:"What is &quot;Meta System&quot; ?",id:"what-is-meta-system-",children:[]},{value:"Download &amp; Execution",id:"download--execution",children:[{value:"First Steps",id:"first-steps",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Time To Experiment!",id:"time-to-experiment",children:[]}]}],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Welcome to the Meta-System documentation. Here we will show you the first steps required to run it, teach you about the architecture, in-depth info about functions, and hopefully answer all the questions you might have about the Meta-System."),(0,i.kt)("p",null,"So, in order to answer most of those questions, let's begin with the famous three W's: what is it, who is it for and where do you start."),(0,i.kt)("h2",{id:"what-is-meta-system-"},'What is "Meta System" ?'),(0,i.kt)("p",null,'"Meta" loosely stands for "X about X": metalanguage is the language talking about the language; metadata is data about the data. Well, since that is the case, a ',(0,i.kt)("strong",{parentName:"p"},"Meta System must be a System that creates systems!")),(0,i.kt)("p",null,"The idea behind the Meta-System is to simplify the creation and maintenance of simple as well complex systems; from a simple local supermarket backend server to a full blown multinational marketplace. If you are a solitary developer, with low programming knowledge who wants to create an app, meta-system might help you! However, if you represent an already large company which is currently looking to reduce the costs of maintaining a server running properly, well, then Meta-System is also for you and your team!"),(0,i.kt)("p",null,"The idea behind it is to be simple, capable and ",(0,i.kt)("a",{parentName:"p",href:"./architecture/extending-functionality"},"extensible"),". Just give the Meta System a configuration file as seen here and watch as it builds http routes, databases, functions and ",(0,i.kt)("em",{parentName:"p"},"voil\xe0!")," your system should be up and running!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"download--execution"},"Download & Execution"),(0,i.kt)("p",null,"So, now you know what it is, what it does and the basics of configuring your system. But how and where do you start?"),(0,i.kt)("h3",{id:"first-steps"},"First Steps"),(0,i.kt)("p",null,"The Meta-System can be downloaded through ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),". If you have node installed you probably already have npm and it is a matter of installing with the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g meta-system")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you don't have node and/or npm installed more info on those can be found ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"))),(0,i.kt)("p",null,"After installation all you need to do is have a configuration file (in the json format) and type in the command ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system path/to/file/<configuration-name>.json")," on Unix Systems or ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system path\\to\\file\\<configuration-name>.json")," on Windows. As soon as you hit enter Meta-System will begin validating your configuration and, if everything is fine, start your system!"),(0,i.kt)("p",null,"If you want a quick start you can try out our ",(0,i.kt)("inlineCode",{parentName:"p"},"example application")," below. Alternatively, if you already have a node project you can have a look at the section ",(0,i.kt)("inlineCode",{parentName:"p"},"Integrating Meta-System to an existing system")," and use it as a NPM package for your project!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to tell the Meta-System what you want it to do, you'll need a special configuration file. Here is an example config you can use to get you going:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Click to Show Example Config | ",(0,i.kt)("nbsp",null),(0,i.kt)("a",{href:"pathname:///jsons/example.txt",download:"example.json"},"Click to Download Config"))),(0,i.kt)(s.Z,{className:"language-json",mdxType:"CodeBlock"},'{\n  "name": "ExampleSystem",\n  "version": "0.1.0",\n  "envs": [],\n  "schemas": [],\n  "dbConnectionString": "",\n  "businessOperations": [\n    {\n      "name": "sayHello",\n      "version": "0.1.0",\n      "description": "Greets the name given",\n      "customObjects": [],\n      "input" : {\n        "name": { "type": "string" }\n      },\n      "output" : {\n        "greet": { "type": "string" }\n      },\n      "constants": [\n        { "name": "helloString", "type": "string", "value": "Hello" },\n        { "name": "exclamationMark", "type": "string", "value": "!" },\n        { "name": "space", "type": "string", "value": " " }\n      ],\n      "variables": [],\n      "configuration": [\n        {\n          "moduleRepo": "#push",\n          "key": 3,\n          "dependencies": [\n            { "origin": "constants", "originPath": "helloString", "targetPath": "newItems.hello" },\n            { "origin": "inputs",  "originPath": "name", "targetPath": "newItems.name" },\n            { "origin": "constants",  "originPath": "exclamationMark", "targetPath": "newItems.mark" }\n          ]\n        },\n        {\n          "moduleRepo": "#join",\n          "key": 2,\n          "dependencies": [\n            { "origin": 3, "originPath": "result.result", "targetPath": "array" },\n            { "origin": "constants", "originPath": "space", "targetPath": "separator" }\n          ]\n        },\n        {\n          "moduleRepo": "%output",\n          "key": 1,\n          "dependencies": [\n            { "origin": 2, "originPath": "result.result", "targetPath": "greet" }\n          ]\n        }\n      ]\n    }\n  ],\n  "protocols": [\n    {\n      "protocolType": "HTTP_JSONBODY",\n      "configuration": {\n        "port": 8080,\n        "routes": [\n          {\n            "route": "/myFirstSystem/:hello",\n            "businessOperation": "sayHello",\n            "method": "GET",\n            "inputMapConfiguration": [\n              { "origin": "route", "originPath": "hello", "targetPath": "name" }\n            ],\n            "resultMapConfiguration": {\n              "body": { "result": "greet" },\n              "headers": [],\n              "statusCode": 200\n            }\n          }\n        ]\n      }\n    }\n  ]\n}')),(0,i.kt)("br",null),(0,i.kt)("p",null,"Simply copy and paste the configuration above into a new text file and save it as ",(0,i.kt)("inlineCode",{parentName:"p"},"example.json")," (you may change the name later, just make sure it is a ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),"). Now, that you have installed Meta-System and have a configuration ready to go, all there is to do is run the command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta-system path/to/file/example.json --dev")," on Unix Systems;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta-system path\\to\\file\\example.json --dev")," on Windows;")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag makes it so your system restarts whenever you update your configuration. This can also be done manually by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"rs")," in the console.")),(0,i.kt)("p",null,"Lets have a look at the main parts of this configuration:"),(0,i.kt)("h4",{id:"business-operation-sayhello"},"Business Operation (sayHello)"),(0,i.kt)("p",null,'We have a single BOp called "sayHello" that receives a name property and returns an object where the greet property is a string saying ',(0,i.kt)("inlineCode",{parentName:"p"},"Hello <name given> !"),". "),(0,i.kt)("h4",{id:"protocol-http_jsonbody"},"Protocol (HTTP_JSONBODY)"),(0,i.kt)("p",null,"We also have a single http protocol that reads the string given on the route and passes that string as the ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),' property to the "sayHello" BOp.'),(0,i.kt)("p",null,"Can you guess what that config does? Well, if you can't, there is no need for guesses. Let's try it out! "),(0,i.kt)("h3",{id:"time-to-experiment"},"Time To Experiment!"),(0,i.kt)("p",null,"With your system running, open your prefered web browser and head over to ",(0,i.kt)("a",{href:"localhost:8080/myFirstSystem/World",target:"_blank"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/myFirstSystem/World")," ")," ! "),(0,i.kt)("p",null,"You should have received a simple response with an object ",(0,i.kt)("inlineCode",{parentName:"p"},'{ result: "Hello World !" }'),". Now try changing the route in the address bar to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/myFirstSystem/foo")," and hit enter again. As you can see, the text following ",(0,i.kt)("inlineCode",{parentName:"p"},"myFirstSystem/")," will be sent to the system, which will include it in the response. Try changing this text to your name or whatever other text you may like!"),(0,i.kt)("p",null,"Now that we understand what the current config does, let's try changing it a bit:\nOpen the ",(0,i.kt)("inlineCode",{parentName:"p"},"example.json")," file with your prefered text editor (such as Atom, VSCode or even notepad) and find, inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"constants")," of the BOp ",(0,i.kt)("inlineCode",{parentName:"p"},"sayHello")," a constant named ",(0,i.kt)("inlineCode",{parentName:"p"},'"helloString"'),'. Here you will find three properties: name, type and value. Change "value" from ',(0,i.kt)("inlineCode",{parentName:"p"},'"Hello"')," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"Goodbye"')," and save the file and restart your system (this should be done automaticaly with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag or can be done manually by entering ",(0,i.kt)("inlineCode",{parentName:"p"},"rs")," in the console)"),(0,i.kt)("p",null,"Now try the same thing again on ",(0,i.kt)("a",{href:"localhost:8080/myFirstSystem/My_Friend",target:"_blank"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/myFirstSystem/My_Friend")," "),". As you can see, by simply changing the constant, now you your system responds with goodbye instead of hello."),(0,i.kt)("p",null,"Wait, you want more? Let's go deeper then! Now, inside this config try finding the block where ",(0,i.kt)("inlineCode",{parentName:"p"},'"moduleRepo"')," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"%output"'),". This determines the output of your system. A bit lower, still inside this block, you'll find a property called ",(0,i.kt)("inlineCode",{parentName:"p"},'"dependencies"'),", and inside that another one called ",(0,i.kt)("inlineCode",{parentName:"p"},'"origin"'),". This origin is from which other module the output originates from. Try changing it from ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", save the file and restart you system just like you did before and try the same ",(0,i.kt)("a",{href:"localhost:8080/myFirstSystem/My_Friend",target:"_blank"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/myFirstSystem/My_Friend")," ")," url again."),(0,i.kt)("p",null,"Now, this is new! The property result no longer is a text, but a group of properties (also known as an Array) where the first item is ",(0,i.kt)("inlineCode",{parentName:"p"},'"Goodbye"'),", the second is the text you type after ",(0,i.kt)("inlineCode",{parentName:"p"},"myFirstSystem/")," and the third item a solitary ",(0,i.kt)("inlineCode",{parentName:"p"},'"!"'),"."),(0,i.kt)("p",null,"As you can see, you can easily modify the behavior of your system in just a few minutes! This is the power of Meta-System. Now, if you truly want to do wonders with this tool, you can keep playing around with this example config and when you are done head to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration Section")," to learn all nooks and crannies of the Meta-System Configuration, and make your ideas come to life!"))}h.isMDXComponent=!0}}]);