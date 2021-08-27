---
sidebar_position: 4
---

# Modules Dependencies
Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module.

In each module, the dependencies are an array of Objects that may contain the following properties:
- `"origin"`
- `"originPath"`
- `"targetPath"`

> This page is still under construction. Come back later for updates :)