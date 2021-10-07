---
sidebar_position: 4
---

# Constants and Variables
Constants and variables are, respectively, static and variable data that you can use in your BOps as arguments to modules. A good example of this would be to set a default state when an entity is created; It can be easily done with a constant.

## Constants
This is a property of a Business Operation. The data set in the constants cannot be changed and is accessible as a dependency in all the functions in the same Business Operation.

## Variables
`"variables"` is also a property of a Business Operation. The data set here can be changed by three functions: `"increaseVariable"`, `"decreaseVariable"`, and `"setVariable"`, which we will talk about later in this same page. The variables can also be passed as dependencies for every module in the BOps it was declared.

## Initializing Constants and Variables
In order to initialize their values, we just need to specify to Meta-System what are their names, types, and initial value. Since both `"constants"` and `"variables"` are arrays, we should do it as the following:

```javascript
// For Constants
{ "name": "your-constant-name", "type": "<TYPE_ENUM>", "value": "some value" }
```

```javascript
// For Variables
{ "name": "your-constant-name", "type": "<TYPE_ENUM>", "initialValue": "some value" }
// the initialValue is optional
```

The property `"type"` can be one of the following values: "string", "date", "number", "boolean", "object", "array", "any". Of course, the value set of that constant or variable needs be of the same type declared.

## Accessing Constants and Variables
They can be accessed as a dependency for any modules of the BOps they were declared in. For more reference of how to do it, see the [Dependencies](./dependencies) documentation.

## Setting The Value of Variables
Meta-System provides three ways of setting a value of a variable, in the form of functions you can use in your BOps: `"increaseVariable"`, `"decreaseVariable"`, and `"setVariable"`.

### `"increaseVariables"`
As the name suggests, it increases the value of a variable by `1`. The variable to be modified needs to be a number.

You can require this function in your flow with `"moduleType": "variable"` and `"moduleName": "increaseVariable"`.

#### Inputs
You can pass any variable of number type as dependencies of this function. The input must follow this pattern:
```javascript
{ "origin": "variable", "originPath": "<variableName>", "targetPath": "<variableName>" }
```

`<variableName>` should be replaced by the name set while initializing the variable.

#### Outputs
There is only one output, and it is `updatedCount`, which a number representing the amount of variables increased by the function.

### `"decreaseVariables"`
It works similarly to the `"increaseVariable"` function, but this one decreases the value of the variable by `1`. Both the inputs and outputs are the same.

### `"setVariables"`
This function sets the value of the variables to the provided arguments.

#### Inputs
The dependencies of this function should have the `origin` and `originPath` pointing to the new value the variable should be set to. `targetPath` should be equal to the value of the variable.

