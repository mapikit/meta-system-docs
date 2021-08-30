---
sidebar_position: 2
---

# BOps Configuration Property
The configuration property is a list of objects, each of them resolves to a function (or module) that is executed in the flow, and should define what parameters it needs to be executed. This is explained more in depth at the [Execution flows page](../../architecture/flows).

## Declaring Modules
Here are the properties Meta-System reads of the objects in the list, in order to get and configure the flow:

### `"moduleName"` - String (required)
This is where to find the function to be executed. If the module is a package, this is name of the function. If it is a standalone function, it is the NPM name.

### `"moduleType"` - ENUM (required)
Module Type is the property that defines what kind of module is Meta-System dealing with. The values can be:
- `"external"` - The module should be downloaded from NPM.
- `"internal"` - If it is available by default in meta-system's repo, such as `if` and [`add`](../../functions-reference/math/add).
- `"bop"` - When the module is a function created by another declared `businessOperation`.
- `"schemaFunction"` - The module is an operation based on a declared [Schema](../schema-config).
- `"output"` - It is the resolution module of your BOp.
- `"variable"` - It is an operation with the [variables](./bops#variables---single-parameter-type-required-array) of your BOp.
- `"protocol"` - The module is a function provided by a [protocol](../protocol-config) installed in your system.

### `"modulePackage"` - String (optional)
This is the property responsible for pointing to the correct function package name. Although this is not a required property by default, some particular configurations do require it.

If the `moduleType` is `protocol`, the package name must be the name of the protocol. Similarly, if the type is `schemaFunction`, package name must be the name of the schema. If this is not respected, the system will fail to boot.

Another important interplay of this property is with `moduleName`; When the package name is present, it will be what meta-system will try to download. If it omitted, Meta-System assumes that the `moduleName` is the name of the module in the NPM registry.

### `"version"` - String (optional)
The "version" property is used by Meta-System to download the correct version when required. If omitted, the assumed value is `latest`. When present, it must be [SemVer](https://semver.org/).

### `"key"` - number (required)
This is a property required in order to your function be referred in the flow later on. Every `"key"` in an object in the array MUST be different from eachother. If this is not respected, your system will fail to boot.

### `"dependencies"` - Object Array (required)
These are the dependencies of your module, what it needs to have before it is executed. The dependencies can be either functional (only the execution is required) or normal (the values are required).

The details about the dependencies can be a bit tricky to get at first, so we set up a separate page for that. Continue reading about the module dependencies [here](./dependencies).
