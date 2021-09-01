---
sidebar_position: 2
---

# Extending Functionality

As explained in [Software Design](./software-design.md), Meta-System was built to be extensible. This document explains what mechanisms we have for anyone to add new functionality to the software but without requiring a change in the [source code](https://github.com/mapikit/meta-system).

## What is Extensible?

Meta-System's architecture shares many similarities with a [functional programming language](https://en.wikipedia.org/wiki/Functional_programming), it is the foundation for every action in a Business Operation flow.

Each flow uses small pieces of code to execute specific tasks in each step, to then achieve the desired functionality. Since such tasks are no different from eachother for the engine behind the execution of them, **you may add any custom function to extend functionalities in the system**.

## Beyond the Built In Functions

Directly on the source code, Meta-System comes packed with many functions that only by themselves, can be used to compose plenty of systems. However, there may be something that either cannot be done with the built in functions or is too complex to do using them.

In theses cases, it is possible to create a function and import it through an NPM repository, or directly add it to the Function Manager in runtime, before your Business Operation (BOp) is computed and validated.

## Future Releases

We are planning, on the next releases, to make Meta-System possible to be extended in the protocols as well. You will be able to read messages from Kafka and SQS, and even implement your own IoT custom protocol. This is planned to be released on the `v0.2.0`.
