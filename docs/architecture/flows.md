---
sidebar_position: 3
---

# Execution Flows

## What are Flows
All systems are made of execution flows, tailored to the needs of the business they are serving. Flows are what makes the business have its shape, and work like it does.

The Meta-System provides a framework for planning your flows and reusing common steps in the operation. This is what we call Business Operations, or **BOps** for short.

Those operations are composed of small steps called "modules" or "BOps Functions". By chaining them together we can build any functionality a system may perform.

:::warning Glossary Disambiguation
By saying **BOps**, we're refferring to the flows. By saying **module** or **BOps Function**, we are talking about each of the said "steps" of a BOps function. Finally, **BOps Engine** is the engine responsible for "compiling" your configuration, *[see below](./flows#bops-engine-using-declared-bops)*.
:::

## Declaring BOps

When configuring a BOps, we must specify each function that needs to be executed in that specific BOp. This takes place in the property `configuration` on your business operation data.

For Meta-System this property is a list that contains every function, their dependencies, and an **attributed key**. This means that you don't explicitly describe the flow, you declare the BOps Functions that need to be executed, what their input data is, and their **functional dependencies**.

> **The key of a function** is what Meta-System uses internally to know what function a dependency is refferring to, as it is possible to contain multiple functions with the same body (Eg: A multiplication function), but different dependencies and outputs in the same flow.

### Dependencies

Every BOps function may have dependencies bound to them, and each dependency is resolved before the current function is executed.

The dependencies can be either **functional** (when the dependency data is not needed, but its execution is required), or **normal**, when the data is required and mapped to the input of the next function.

### Dependencies During Runtime

Meta-System validates that there are no circular dependencies declarations, for in such case, there is no final point that must be executed first.

For example, in a BOps in which there is a function `A` that depends on `B`, which depends on `C`, that depends on `A` again, it is not possible to solve dependencies.

On the other hand, in a valid configuration which contains the module `A`, `B`, and `C`, and that `A` has a declared dependency on `B` and `C`:
1. `B` and `C` are executed in a sequence that depends on their order in the dependencies list.
2. `A` is executed.

## BOps Engine: Using Declared BOps

The name of the mechanism behind this feature in Meta-System is called **BOps Engine**. It is responsible for binding the data and functions together, and outputs a single JavaScript function with the interface specified in its configuration.

Furthermore, the BOps Engine takes care of transforming the Functions List in the flow to be used by the system. The resulting function contains the modules to be executed in the correct order and conditions.

### Runtime details

In order to avoid a single module being executed multiple times din a case where it is a dependency for multiple other functions, Meta-System caches the result of each function. In other words: A function is only executed once, given if that it is a same key being required twice.
