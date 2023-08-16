---
sidebar_position: 2
---

# Extending Functionality

As explained in the [Base Concepts](./software-design.md), Meta-System was built to be extensible. This document explains what mechanisms there are for anyone to add new functionality to the software but without requiring changes in the [source code](https://github.com/mapikit/meta-system).

## What is Extensible
MSYS fully embraces the idea of being just an engine, so that **Every part of it is made to be modified and extended**.

In other words, you can modify, extend, and use the data used to build the functions that compose Meta-System, as well as the built functions themselves.

## How to Extend
By design, it is expected for you to increment Meta-System with your own set of instructions (or other open-source Addons), and as mentioned in the ["Into real world" section](./software-design#into-real-world), there is a specific step in which this happens, the "data extension" step.

In other words, you can simply declare an [Addon](./components/addons.md) in the [system configuration](../configuring/basics.md). When the system is booting up, and the process reaches the "data extension" step, Addons can have access to the current state of the data, being able to read it, modify it, delete it, and even insert more data.

:::info Built-in Functionality
Although MSYS provides a sort of "standard library" (that is actually just some useful functions for data manipulation), Meta-System makes no assumption of use, which makes it lightweight and versatile. Consequently, this enables a higher degree of control, because the user is required to specify what else they need in their Meta-System.
:::
