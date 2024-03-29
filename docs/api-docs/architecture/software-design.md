---
sidebar_position: 1
---

# Base Concepts

Meta-System was built from the ground up to be as extensible and modular as possible. If we remove all the built-in extra functionality, Meta-System can be understood as a no-code engine with interfaces for modifying it.

## Theory
As an engine to be capable of powering (almost) any software, Meta-System is required to have a structure capable of representing any software, or any part of a more complex software. Because of this, we came up with a theory on how we could abstract software in general.

We ended up separating Meta-System into three main parts:
- Data
- Processes
- Interfaces

For MSYS, the **Data** stands for contextualized information, such as in a car (context), how many seats there are (information). The **Processes** defines operations and constraints to how act upon the **Data**. For instance, it is not possible to put more seats in a car than what its interior space allows. Lastly, the **Interfaces** are how to connect with the outside world, allowing external input into the system, using a **Process** to interact with **Data**.

With chaining and defining each of this things, it is possible, in theory, to create any system, and that is what we wanted Meta-System to be capable of.
## Translating it Into Meta-System

In Meta-System, the data is called **Schemas**, the processes are called **Business Operations**, and the interfaces are expected to be provided by **Addons**.

Shortly explained, by declaring **Schemas**, you will be defining the context of informations, defining their format, and assigning it a name, which will be how Meta-System will identify it.

Defining the **Business Operations (BOps)** consists in organizing rules and actions in a specific sequence and conditions.

Finally, declaring a **Addons** means extending and modifying behaviors in any of the three software regions: Data, Processes, and Interfaces.

Those are the main components of MSYS, **Schemas, Business Operations, and Addons**. All of them are independent from eachother, but can be configured to interact. For example, an **Addon** may call a **Business Operation**, which in its flow and rules, accesses a **Schema** to operate with its data.

## Into Real World
To put it simply, MSYS gets data, and creates a software out of it. It works by taking in data as those main components, declared in a configuration format, and wiring up their code counterparts as specified in the same configuration.

This "conversion" process is divided into the following steps:
- **Validation**: The initial configuration is validated so it can be used.
- **Data Initialization**: Meta-System stores the configured components internally
- **Import**: Addons are imported into the engine
- **Data Extension**: One by one, Addons specify how they extend MSYS and available components
- **Build**: All the data after extension/modification is wired with their respective code counterparts. The results of this built process is then stored internally as well. After this step, no functionality can be changed.
- **Run**: The code is run by Addons.

:::info
Meta-System does not have any internal instruction on how to run a Process (Business Operation), so it is expected to use Addons for this. The output system is composed of JavaScript functions, so simply calling them will execute the functionality specified. 
:::

## Further Reading
This page introduces you to the general idea of how Meta-System works under the hood, but you may still want to know [how MSYS can be extended](./extending-functionality.md), or [how the operations flows are constructed](./flows.md).

If you think you're ready to start building with MSYS, head to the [configuring page](../configuring/basics.md).
