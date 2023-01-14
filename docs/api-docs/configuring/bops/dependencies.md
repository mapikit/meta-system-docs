---
sidebar_position: 5
---

# Modules Dependencies
Every module in a BOps flow can specify dependencies for it to be executed. Just declare what they are and Meta-System resolves them before the current module.

The mechanics of how this works is explained in the Flows page, at this [section](../../architecture/flows/#dependencies).

## Dependencies Properties
In each module, the dependencies are an array of Objects that may contain the following properties:
- `"origin"` - Required
- `"originPath"` - Optional
- `"targetPath"` - Optional

### Origin
`"origin"` is a required field, and its value must be either a number, representing another module in the flow, or an item in the following ENUM:
- `"constants"` - If the dependency comes from a constant declared in the same BOps.
- `"variables"` - If the dependency is from a variable value.
- `"inputs"` - If the dependency is from an input of the function.
- `"envs"` - If the dependency is from an environment value set system-wide.

### Origin Path
The `"originPath"` property specifies where in `"origin"` is the wanted value. This must be a string, more precisely, an object path (using dot notation) to the value in the module output. An example would be `originPath: "resultProp.deep.object"`. This also supports array access, so you can access especific Items with square brackets like so: `"resultProp.people[2].name"`, to access the third item of the people array.

When `"origin"` is a number, the path must either start with `"result"` for the function to be executed then to access the result object, or be `"module"` for the origin itself (and its sub dependencies) be passed forward as an argument.

### Target Path
`"targetPath"` Is where Meta-System maps the output of `"originPath"` to. This property must be a string representing an object path (using dot notation) to map the result to. Likewise the `"originPath"`, this supports square brackets to set properties of arrays, with the added functionality of using empty square brackets to push an item into the array at the last position.

## Setting Dependency Type
As said in [the dependencies section](../../architecture/flows/#dependencies), there are two kinds, **Functional** and **Normal**.

To set a dependency as Functional, just omit `"originPath"` and `"targetPath"`. The module will be executed, but its results will not be mapped. If you specify those two properties, the dependency will be Normal.
