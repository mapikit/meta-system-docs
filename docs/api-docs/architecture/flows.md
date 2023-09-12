---
sidebar_position: 3
---

# Execution Flows

## What are Flows
All systems are made of execution flows, tailored to the needs of their use-case. Meta-System provides a framework for planning your flows and reusing common steps in the operation. This is what we call Business Operations, or **BOps** for short.

Those operations are composed of small steps called "modules" or "BOps Functions". By chaining them together it is possible to build any functionality a system may perform.

:::warning Glossary Disambiguation
By saying **BOps**, we're refferring to the flows. By saying **module** or **BOps Function**, we are talking about each of the said "steps" of a BOps. Finally, **BOps Engine** is the engine responsible for "compiling" your configuration, *[see below](#bops-engine-using-declared-bops)*.
:::

## Declaring BOps

When configuring a BOps, each function that needs to be executed in that specific BOp must be specified. This takes place in the property [`"configuration"`](../configuring/bops/bops-configuration) on your business operation data.

For MSYS this property is a list that contains every function, their dependencies, and an **attributed key**. This means that you don't explicitly describe the flow, you declare the BOps Functions that need to be executed, what their input data is, and their **functional dependencies**. **This approach makes MSYS conceptually close to [functional programming](https://en.wikipedia.org/wiki/Functional_programming)**.

> **The key of a function** is what Meta-System uses internally to know what function a dependency is refferring to, as it is possible to contain multiple functions with the same body (Eg: A multiplication function), but different dependencies and outputs in the same flow.

### Dependencies

Every BOps function may have dependencies bound to them, and each dependency is resolved before the current function is executed.

The dependencies can be either **functional** (when the dependency data is not needed, but its execution is required), or **normal**, when the data is required and mapped to the input of the next function.

> It is important to take note that BOps Functions can take functions as parameters too. Meta-System provides a way of passing a module as a parameter by setting [`"originPath"`](../configuring/bops/dependencies/#origin-path) to `"module"`.

### Dependencies During Runtime

Meta-System validates that there are no circular dependencies declarations, for in such case, there is no final point that must be executed first.

For example, in a BOps in which there is a function `A` that depends on `B`, which depends on `C`, that depends on `A` again, it is not possible to solve dependencies.

On the other hand, in a valid configuration which contains the module `A`, `B`, and `C`, and that `A` has a declared dependency on `B` and `C`:
1. `B` and `C` are executed in a sequence that depends on their order in the dependencies list.
2. `A` is executed.

## Determining Flow
From the configuration to the execution of the BOps flow, there are two stages: The Stitching stage, when Meta-System turns your configuration in a JS function, and the Execution stage, that is when the produced function is executed.

If you're looking for how to configure it, check [this page](../configuring/bops/flows).

### Stitching Stage
Firstly, Meta-System looks to the `"output"` function, and check its dependencies. For each dependency, this process is repeated: Get the module, find the dependencies, and do the same for them; Until we have all the function structure mapped for the BOps. This looks like we're traversing the flow backwards.

<img src="/meta-system-docs/img/docs/stitch-process.png"  style={{ height:"auto", width:"100%", objectFit:"contain" }}/>

The arrows represent the dicovery direction.

When the process is done, all the functions and intermediary mappers are "stitched", and you're left with a pure javascript function.

### Execution Stage
This stage only happens when the function is called, either manually of from a Protocol. It is the data propagating through each function, and being mapped to the next on the chain until the output, then the final value is returned.

<img src="/meta-system-docs/img/docs/execution-process.png"  style={{ height:"auto", width:"100%", objectFit:"contain" }}/>

The arrows represent the data flow direction.

## BOps Engine: Using Declared BOps

The name of the mechanism behind this feature in Meta-System is called **BOps Engine**. It is responsible for binding the data and functions together, and outputs a single JavaScript function with the interface specified in its configuration.

Furthermore, the BOps Engine takes care of transforming the Functions List in the flow to be used by the system. The resulting function contains the modules to be executed in the correct order and conditions.

### Runtime details

In order to avoid a single module being executed multiple times in a case where it is a dependency for multiple other functions, Meta-System caches the result of each function. In other words: A function is only executed once, given if that it is a same key being required twice.
