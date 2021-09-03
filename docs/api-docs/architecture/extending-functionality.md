---
sidebar_position: 2
---

# Extending Functionality

As explained in [Software Design](./software-design.md), Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the [source code](https://github.com/mapikit/meta-system).

## What is Extensible?

Meta-System's architecture shares many similarities with a [functional programming language](https://en.wikipedia.org/wiki/Functional_programming), it is the foundation for every action in a Business Operation flow.

Each flow uses small pieces of code to execute specific tasks in each step, to then achieve the desired functionality. Since such tasks are no different from eachother for the engine behind the execution of them, **you may add any custom function to extend functionalities in the system**.

Another extensible aspect of Meta-System lies in the mechanism to launch those flows. As explained in [the Building Blocks](./software-design#the-building-blocks), the Protocols are what we use for interacting with the system, and they can also be created and extended.

## And How do We Extend It?

Firstly, there are mechanisms for you to do that without any change in the source code of Meta-System; By design, it is expected for you to find the best solutions that suit your problem, or create your own.

There are many places in the configuration file, in which, if you specify an external package, Meta-System will try to download it from NPM and add it to your system. **Protocols** are always external, always downloaded, and the **Functions** are mostly external, with a few exceptions of frequently used data manipulation, and mathematical operations ones.

For more information on the configuration, start by reading [the basics](../configuring/basics).

### Protocols
Starting by the Protocols, all available protocols are actually NPM libraries. The team behind Meta-System developed some of them, like the [CronJob](https://www.npmjs.com/package/cronjob-protocol) or [HttpJson](https://www.npmjs.com/package/http-json-meta-protocol).

This means you can either use ones that were already made, or create your own. For the latter option, check the [Guides](../../guides/guides-introduction) page.

### Functions (BOps Functions/Modules)
For the functions, Meta-System contains some already built in, called Internal Functions, and you can check them in the Functions API Reference in the sidebar.

There are also the External functions (and packages of functions). Some examples are the [logger](https://www.npmjs.com/package/logger-meta-functions), which is a function package, and the [bops-hello-world](https://www.npmjs.com/package/bops-function-hello-world), which is a standalone function. Meta-System downloads them from npm if you require them, this means that if you publish a function or package with a compatible interface, you can also start using it on your BOps rightaway.

Check the guides for doing that: [Writing Packages and Functions](../../guides/writing-packages-and-functions).
