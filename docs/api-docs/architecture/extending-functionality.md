---
sidebar_position: 2
---

# Extending Functionality

As explained in [Software Design](./software-design.md), Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the [source code](https://github.com/mapikit/meta-system).

## What is Extensible?
The short and sweet answer for this is: **Every part of Meta-System is made to be modified and extended.** However, there's method to the madness.

Similar to a [functional programming language](https://en.wikipedia.org/wiki/Functional_programming), Meta-System is built to be modular and composable.

By design, it is expected for you to increment Meta-System with your own set of instructions, and as mentioned in the ["Into real world" section](./software-design#into-real-world), there is a specific step in which this happens, the "data extension" step.


## And How Do We Extend It?

Firstly, there are mechanisms for you to do that without any change in the source code of Meta-System; By design, it is expected for you to find the best solutions that suit your problem, or create your own.

There are many places in the configuration file, in which, if you specify an external package, Meta-System will try to download it from NPM and add it to your system. **Protocols** are always external, always downloaded, and the **Functions** are mostly external, with a few exceptions of frequently used data manipulation, and mathematical operations ones.

For more information on the configuration, start by reading [the basics](../configuring/basics).


