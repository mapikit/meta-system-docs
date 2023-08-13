---
sidebar_position: 2
---

# Creating Addons
Addons are what gives superpowers to Meta-System. They are how you can make MSYS truly yours, customizing it to your own requirements!

Before starting, it's highly encouraged to read the [Extending Functionality](../api-docs/architecture/extending-functionality.md) page.

## Prerequisites
For this guide, we will need:
- NodeJS installed (>= 16.14)
- Meta-System installed (run `npm i -g meta-system`)

Currently, Addons are made using JavaScript/Typescript.

------
## Starting
Besides your own code, Addons require two more files for it to work: One to tell MSYS some metadata about your Addon, and another file to pull, parse, and edit Meta-System data to your liking, as well as to properly "start" your addon if required.

1. Create a new file at the root of your repository with the name of `meta-file.json`. This is your addon metadata, and the file name is expected to be the same.
2. Create a new file called `entrypoint.js`, anywhere in your repository. This file may have its name and content changed.

Let's start by knowing these files and what are their options.
## Writing Support Files
Both the entrypoint and the meta-file are called support files. They play the role of communicating with MSYS the Addon's intent, modifying data if required, and running your code.

### The Meta-File
This file is a JSON file, and its properties are structured like the following:

#### `name` - String (Optional)
The name of your Addon.

#### `version` - String Sem.Ver. (Optional)
The current vesion of your Addon. This version is used if specified, and is required if your project has no `package.json`.

#### `entrypoint` - String (Required)
This is the path of the `entrypoint.js` file in your project.

#### `configurationFormat` - [Object Definition](../api-docs/configuring/object-definition.md) (Required)
If your Addon has some configuration parameters to personalize its functionality, you should specify those parameters here. Later on you can access those parameters in the Entrypoint file.

#### `permissions` - Object Array (Required)
This property tells Meta-System how is your Addon interacting with it. Is it adding Schemas? Executing BOps? Adding behavior to Schemas? Any operation with data provided to MSYS and created by MSYS is possible.

The permission Object itself has two properties: `entity`, and  `permissions`, both required as well. For a complete list of permissions and operations, refer to [the broker](./broker.md). `entity` is a string, and `permissions` is a list of strings.

Here's an example of Permission, allowing an Addon to modify and create Schemas:
```json
{
  "eentity": "schemas",
  "permissions": [
    "modify_schema",
    "create_schema"
  ]
}
```

### The Entrypoint
This file is used to wire your code with MSYS internals.