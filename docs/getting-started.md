---
sidebar_position: 1
---
# Getting Started
Welcome to the Meta-System documentation. Here we will show you the first steps required to run it, teach you about the architecture, in-depth info about functions, and hopefully answer all the questions you might have about the Meta-System.
 
So, in order to answer most of those questions, let's begin with the famous three W's: what is it, who is it for and where do you start.
 
 
## What is "Meta System" ?
 
"Meta" loosely stands for "X about X": metalanguage is the language talking about the language; metadata is data about the data. Well, since that is the case, a **Meta System must be a System that creates systems!**
 
The idea behind the Meta-System is to simplify the creation and maintenance of simple as well complex systems; from a simple local supermarket backend server to a full blown multinational marketplace. If you are a solitary developer, with low programming knowledge who wants to create an app, meta-system might help you! However, if you represent an already large company which is currently looking to reduce the costs of maintaining a server running properly, well, then Meta-System is also for you and your team!
 
The idea behind it is to be simple, capable and [extensible](./architecture/extending-functionality.md). Just give the Meta System a configuration file as seen here and watch as it builds http routes, databases, functions and *voilà!* your system should be up and running!
 
----
## Download & Execution
So, now you know what it is, what it does and the basics of configuring your system. But how and where do you start?
 
### First Steps
The Meta-System can be downloaded through [NPM](https://www.npmjs.com/package/meta-system). If you have node installed you probably already have npm and it is a matter of installing with the command
`npm install -g meta-system`
> Note: If you don't have node and/or npm installed more info on those can be found [here](https://nodejs.org/en/)
 
After installation all you need to do is have a configuration file (in the json format) and type in the command `meta-system path/to/file/<configuration-name>.json`. As soon as you hit enter Meta-System will begin validating your configuration and, if everything is fine, start your system!
 
If you want a quick start you can try out our `example application`. Alternatively, if you already have a node project you can have a look at the section `Integrating Meta-System to an existing system` and use it as a NPM package for your project!
 
----
## Configuration
In order to tell the Meta-System what you want it to do, you'll need a special configuration file. This config is made up of the following properties:
 
> Note: properties shown here are just basic properties and some were not addressed. For a complete, in depth look at the configuration, please refer to the `Configuration Section` or `Example Configuration Section` for a quick start.
 
### name
This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away.
 
### version
The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)
 
### protocols
These determine how your system communicates with the outside world, so it is quite important! Here is where you configure whether your system will use the worldwide spread HTTP or any other type of communication.
 
More info can be found in the `Protocols Section`.
 
### schemas
Schemas define the things your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of doors, the engine power and the price. Once that is defined your system will be able to store and manage info about individual cars.
 
More info can be found in the `Schemas Section`.
 
### businessOperations
BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the information it gets and holds. Here is where you can tell your system what it should do when your user tells the system he/she is 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!

More info can be found in the `Business Operations Section`.