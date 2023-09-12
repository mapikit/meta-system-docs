"use strict";(self.webpackChunkmeta_system_docs=self.webpackChunkmeta_system_docs||[]).push([[6449],{8772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var a=n(7462),i=(n(7294),n(4137)),o=n(2053),s=n(404);const r={sidebar_position:1},l="Meta-System",u={unversionedId:"api-docs/getting-started",id:"api-docs/getting-started",title:"Meta-System",description:"Meta-System is an extensible and modular no-code engine, built for everyone, free and open-source.",source:"@site/docs/api-docs/getting-started.mdx",sourceDirName:"api-docs",slug:"/api-docs/getting-started",permalink:"/meta-system-docs/docs/api-docs/getting-started",draft:!1,editUrl:"https://github.com/mapikit/meta-system-docs/edit/main/docs/api-docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Base Concepts",permalink:"/meta-system-docs/docs/api-docs/architecture/software-design"}},m={},d=[{value:"Features",id:"features",level:2},{value:"How To Use",id:"how-to-use",level:2},{value:"1. Downloading Meta-System",id:"1-downloading-meta-system",level:3},{value:"2. Configuring your first system",id:"2-configuring-your-first-system",level:3},{value:"3. Launching Meta-System",id:"3-launching-meta-system",level:3},{value:"Use-Cases",id:"use-cases",level:2},{value:"Getting in Touch &amp; Contributing",id:"getting-in-touch--contributing",level:2},{value:"Disclaimers",id:"disclaimers",level:4}],p={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meta-system"},"Meta-System"),(0,i.kt)("img",{src:"/meta-system-docs/img/docs/v04_Andromeda_launch.png",style:{height:"auto",width:"100%",objectFit:"contain"}}),(0,i.kt)("p",null,"Meta-System is an extensible and modular no-code engine, built for everyone, free and open-source."),(0,i.kt)("p",null,"It aims to simplify software as a whole, freeing you, the developer, to work on what makes your software truly unique. It does so by being simple, capable, and ",(0,i.kt)("a",{parentName:"p",href:"./architecture/extending-functionality"},"extensible"),": Just give Meta-System (",(0,i.kt)("strong",{parentName:"p"},"MSYS")," for short) a configuration file and watch as it builds http routes, databases, functions and ",(0,i.kt)("em",{parentName:"p"},"voil\xe0!")," Your system should be up and running!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Build Anything!"),' : Meta-System wasn\'t made for "a type" of software, meaning you can build anything you like!'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple, Yet Extensible")," : Its modular design allows you for adding, creating ",(0,i.kt)("strong",{parentName:"li"},"and sharing")," Add-ons, expanding your possibilities as far as you need them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unopinionated")," : Meta-System doesn't make decisions for you, instead, it opens the path for you to focus only in what is necessary. Of course, however, you can extend it with your own opinions as you wish."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The Power of JSON")," : Your Meta-System is configured using human-readable, and machine-parseable JSON."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GUI for Configuring your System")," : (Coming Soon!) A graphical editor for your Meta-System configuration files, turning your JSON system into a beautiful set of cards and flows.")),(0,i.kt)("h2",{id:"how-to-use"},"How To Use"),(0,i.kt)("p",null,"Oversimplifying, It is actually as easy as:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download Meta-System."),(0,i.kt)("li",{parentName:"ol"},"Configure your system's behavior."),(0,i.kt)("li",{parentName:"ol"},"Launch!")),(0,i.kt)("h3",{id:"1-downloading-meta-system"},"1. Downloading Meta-System"),(0,i.kt)("p",null,"The Meta-System can be downloaded through ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/meta-system"},"NPM"),". If you have NodeJs installed you probably already have npm and it is a matter of installing with the command\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g meta-system")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you don't have NodeJs and/or npm installed, more info on those can be found ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"),".")),(0,i.kt)("h3",{id:"2-configuring-your-first-system"},"2. Configuring your first system"),(0,i.kt)("p",null,"For you to make Meta-System into your very own system, you'll need a configuration file. ",(0,i.kt)("a",{parentName:"p",href:"/meta-system-docs/docs/api-docs/configuring/basics"},"Here")," you can check in depth how to make Meta-System into your own software. If you're new around, though, here's a classic:  ",(0,i.kt)("strong",{parentName:"p"},"FizzBuzz"),"!"),(0,i.kt)("p",null,"Let's get going:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Click to Show Example Config")),(0,i.kt)(o.Z,{className:"language-json",mdxType:"CodeBlock"},s.Z)),(0,i.kt)("br",null),(0,i.kt)("p",null,"Simply copy and paste the configuration above into a new text file and save it as ",(0,i.kt)("inlineCode",{parentName:"p"},"example.json")," (you may change the name later, just make sure it is a ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),").\nNow, that you have installed Meta-System and have a configuration ready to go, all there is to do is run Meta-System!"),(0,i.kt)("h3",{id:"3-launching-meta-system"},"3. Launching Meta-System"),(0,i.kt)("p",null,"You can launch instances of Meta-System using the CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"meta-system run"),". To continue our example, try doing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta-system run path/to/file/example.json")," on Unix Systems;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meta-system run path\\to\\file\\example.json")," on Windows;")),(0,i.kt)("p",null,"You should be now seeing your configuration being validated, then brought to life by Meta-System, ready-to-go."),(0,i.kt)("p",null,"Let's quickly test it! With your Meta-System running, open a web-page and go to the address: ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080/number/2"},"http://localhost:8080/number/2")),(0,i.kt)("p",null,"Now change the number after the last slash (/) to any other, and see the results! \ud83d\ude80"),(0,i.kt)("p",null,"Want to know more about this fizz-buzz example? How it is like it is? Lets head to ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/fizz-buzz"},"it's tutorial page")," to know more!"),(0,i.kt)("h2",{id:"use-cases"},"Use-Cases"),(0,i.kt)("p",null,"What people can build with MSYS? What is possible?"),(0,i.kt)("p",null,"As an engine, Meta-System can be used to power any kind of software, as long as the target platform allows for running NodeJS or browser-based JavaScript.\nAlso, because it is extensible, you're never limited to only what you have in the engine. The combination of these properties sets Meta-System as a versatile lightweight no-code tool for almost any task! Here's some inspirations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A Backup Daemon")," : Configured to automatically run at startup, backs up a preconfigured set of files timely."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"An authenticated API for accessing a DataSet")," : With access to a DataBase, it filters, orders and joins data for a front end application to display."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A Live Sync tool for a Collaborative Software")," : Used as the source of truth for an user interface to sync data live with peers using a protocol such as WebRTC."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A No-Code tool for Enterprise")," : You can use Addons to inject business entities and their actions into Meta-System, and allow for wiring their business rules from within MSYS")),(0,i.kt)("h2",{id:"getting-in-touch--contributing"},"Getting in Touch & Contributing"),(0,i.kt)("p",null,"Meta-System has many many moving parts for you to wrap your head around. For making learning and building easier, there's our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/ndGsnbTW7V"},"discord server"),", where you can get help from the community, learn and master different configuration techniques, and also share your own creations."),(0,i.kt)("p",null,"That's also the place to go if you want to become a contributor and help develop Meta-System, or even getting help developing your own awesome Addon. All core contributors are active around there."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"disclaimers"},"Disclaimers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Meta-System is completely Open-Source, following the GPL-3.0 License."),(0,i.kt)("li",{parentName:"ul"},"Currently Meta-System is at version 0.4, which means the API might receive breaking changes faster than you expect. However, The team will make conscious effort to only make such changes if there are tangible benefits in doing so.")))}h.isMDXComponent=!0},404:(e,t,n)=>{n.d(t,{Z:()=>a});const a='{\n  "name": "fizz-buzz HTTP Example",\n  "version": "0.0.1",\n  "envs": [],\n  "businessOperations": [\n    {\n      "identifier": "isDivisibleBy",\n      "input": {\n        "number": { "type": "number", "required": true },\n        "divisor": { "type": "number", "required": true }\n      },\n      "output": {\n        "boolean": { "type": "boolean", "required": true }\n      },\n      "constants": [\n        { "type": "boolean", "value": true, "name": "true" },\n        { "type": "boolean", "value": true, "name": "false" },\n        { "type": "number", "value": 0, "name": "zero" }\n      ],\n      "variables": [],\n      "configuration": [\n        {\n          "key": 1,\n          "dependencies": [\n            { "origin": "input", "originPath": "number", "targetPath": "A" },\n            { "origin": "input", "originPath": "divisor", "targetPath": "B" }\n          ],\n          "moduleName": "modulus",\n          "moduleType": "internal"\n        },\n        {\n          "key": 2,\n          "dependencies": [\n            { "origin": 1, "originPath": "result.result", "targetPath": "A" },\n            { "origin": "constant", "originPath": "zero", "targetPath": "B" }\n          ],\n          "moduleName": "equalTo",\n          "moduleType": "internal"\n        },\n        {\n          "key": 0,\n          "dependencies": [\n            { "origin": 2, "originPath": "result.isEqual", "targetPath": "boolean" }\n          ],\n          "moduleName": "output",\n          "moduleType": "output"\n        }\n      ]\n    },\n    {\n      "identifier": "fizzBuzz",\n      "input": {\n        "number": { "type": "number", "required": true }\n      },\n      "output": {\n        "text": { "type": "string", "required": true }\n      },\n      "constants": [\n        { "type": "string", "value": "Fizz!", "name": "fizz" },\n        { "type": "string", "value": "Buzz!", "name": "buzz" },\n        { "type": "string", "value": "FizzBuzz!", "name": "fizzBuzz" },\n        { "type": "number", "value": 3, "name": "fizzDivisor" },\n        { "type": "number", "value": 5, "name": "buzzDivisor" }\n      ],\n      "variables": [],\n      "configuration": [\n        {\n          "key": 2,\n          "moduleName": "isDivisibleBy",\n          "moduleType": "bop",\n          "dependencies": [\n            { "origin": "input", "originPath": "number", "targetPath": "number" },\n            { "origin": "constants", "originPath": "fizzDivisor", "targetPath": "divisor" }\n          ]\n        },\n        {\n          "key": 3,\n          "moduleName": "isDivisibleBy",\n          "moduleType": "bop",\n          "dependencies": [\n            { "origin": "input", "originPath": "number", "targetPath": "number" },\n            { "origin": "constants", "originPath": "buzzDivisor", "targetPath": "divisor" }\n          ]\n        },\n        {\n          "key": 4,\n          "moduleName": "and",\n          "moduleType": "internal",\n          "dependencies": [\n            { "origin": 2, "originPath": "result.boolean", "targetPath": "A" },\n            { "origin": 3, "originPath": "result.boolean", "targetPath": "B" }\n          ]\n        },\n        {\n          "key": 6,\n          "moduleName": "if",\n          "moduleType": "internal",\n          "dependencies": [\n            { "origin": 3, "originPath": "result.boolean", "targetPath": "boolean" },\n            { "origin": "constant", "originPath": "buzz", "targetPath": "ifTrue" },\n            { "origin": "input", "originPath": "number", "targetPath": "ifFalse" }\n          ]\n        },\n        {\n          "key": 5,\n          "moduleName": "if",\n          "moduleType": "internal",\n          "dependencies": [\n            { "origin": 2, "originPath": "result.boolean", "targetPath": "boolean" },\n            { "origin": "constant", "originPath": "fizz", "targetPath": "ifTrue" },\n            { "origin": 6, "originPath": "result.outputValue", "targetPath": "ifFalse" }\n          ]\n        },\n        {\n          "key": 1,\n          "moduleName": "if",\n          "moduleType": "internal",\n          "dependencies": [\n            { "origin": 4, "originPath": "result.bothTrue", "targetPath": "boolean" },\n            { "origin": "constant", "originPath": "fizzBuzz", "targetPath": "ifTrue" },\n            { "origin": 5, "originPath": "result.outputValue", "targetPath": "ifFalse" }\n          ]\n        },\n        {\n          "key": 0,\n          "dependencies": [\n            { "origin": 1, "originPath": "result.outputValue", "targetPath": "text" }\n          ],\n          "moduleName": "output",\n          "moduleType": "output"\n        }\n      ]\n    }\n  ],\n  "schemas": [],\n  "addons": [\n    {\n      "identifier": "http",\n      "version": "4.0.0-rc5",\n      "source": "http-meta-protocol",\n      "collectStrategy": "npm",\n      "configuration": {\n        "port": 8080,\n        "host": "0.0.0.0",\n        "routes": [\n          {\n            "route": "/number/:value",\n            "businessOperation": "fizzBuzz",\n            "method": "GET",\n            "inputMapConfiguration": [\n              { "origin": "route", "originPath": "value", "targetPath": "number" }\n            ],\n            "resultMapConfiguration": {\n              "statusCode": 200,\n              "headers": [],\n              "body": {\n                "result": "text"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}'}}]);