---
sidebar_position: 2
---

# Creating Addons
Addons are what gives superpowers to Meta-System. They are how you can make MSYS truly yours, customizing it to your own requirements!

Before starting, it's highly encouraged to read the [Extending Functionality](../api-docs/architecture/extending-functionality.md) page.

## Starting
For you to create your new blazing Addon, be sure to already have Meta-System installed in your system. If you don't already have it, just run `npm i -g meta-system`.

Besides your own JS code, Addons require two more files for it to work: One to tell MSYS some metadata about your Addon, and another file to pull, parse, and edit Meta-System data to your liking.

1. Create a new file at the root of your repository with the name of `meta-file.json`. This is your addon metadata, and the file name is expected to be the same.
2. Create a new file called `entrypoint.js`, anywhere in your repository. This file may have its name and content changed.

## 

