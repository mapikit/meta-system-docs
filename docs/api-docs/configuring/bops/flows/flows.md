---
sidebar_position: 1
---

# Flows
We described the flows in [this page](../../../architecture/flows), we strongly recommend you to read it before diving in this topic.

---

In order to tell your system to do something, you need to specify a sequence of commands, and that is done in the flows. In the configuration file, it is an array of objects, each resolving to a module/function, and mapping its inputs and outputs to the next function in the chain.

This page's content assumes you already know how to declare modules and their dependencies. If not, you should check [this page](../bops-configuration) before.

## Configuring the Flow
To configure the flow of your Business Operation, you should pay attention mostly to the dependencies of the modules, as are the part that points what should be executed and which information is necessary.

> In the examples in this page, the modules only have the `"key"` and `"dependencies"` attributes for brevity.

### Requiring Values From Other Modules
To require values from other functions, create a dependency in which the `"origin"` is the required module's key, `"originPath"` is `"result.<requiredProperty>"`, and the `"targetPath"` is where `"<requiredProperty>"` value is needed.

Example:
```javascript
{
  "configuration": [
    {
      "key": 1,
      "dependencies": [
        { "origin": 2, "originPath": "result.someProperty", "targetPath": "target" }
      ]
    },
    {
      "key": 2,
      "dependencies": [] // No Dependencies
    }
  ]
}
```
In this example, key 1 requires key 2's results in order to be executed. It is important to notice that Key 1 does not look to Key 2's dependencies, so itself can require other values.

### Requiring Whole Modules (callables) From The Flow
It is possible to also require the function callable from any point in the flow. This is even simpler than the example above: Just create a new dependency in which `"origin"` is the required module's key, `"originPath"` is equal to `"module"`, and the `"targetPath"` is where the callable is required. The function callable not only contains the required module, but also its dependencies. the BOps Engine bundles the requirements of the module together with the module itself.

```javascript
{
  "configuration": [
    {
      "key": 1,
      "dependencies": [
        { "origin": 2, "originPath": "module", "targetPath": "target" }
      ]
    },
    {
      "key": 2,
      "dependencies": [] // No Dependencies
    }
  ]
}
```

### Requiring The Same Module's Value More Than Once
Of course, given the structure of the `"configuration"` property, it is possible for module `A` and module `B` have a requirement on module `Z`. In this case, The BOps Engine caches the result of `Z` and passes it to both `A` and `B`. This is because `Z` has a key attributed to it, and keys are onlly executed once in the flow (unless the key is a required callable, than the Engine has no control over that).

If you want to have two executions of module `Z`, create two separate objects in the `"configuration"` Array, with different keys.

Example with Z being executed once:
```javascript
{
  "configuration": [
    {
      "key": 1,
      "moduleName": "A",
      "dependencies": [
        { "origin": 3, "originPath": "result.something", "targetPath": "target" }
      ]
    },
    {
      "moduleName": "B",
      "key": 2,
      "dependencies": [
        { "origin": 3, "originPath": "result.something", "targetPath": "target" }
      ]
    },
    {
      "moduleName": "Z",
      "key": 3,
      "dependencies": []
    }
  ]
}
```

Example with Z being executed twice (different keys): 
```javascript
{
  "configuration": [
    {
      "key": 1,
      "moduleName": "A",
      "dependencies": [
        { "origin": 3, "originPath": "result.something", "targetPath": "target" }
      ]
    },
    {
      "moduleName": "B",
      "key": 2,
      "dependencies": [
        { "origin": 4, "originPath": "result.something", "targetPath": "target" }
      ]
    },
    {
      "moduleName": "Z",
      "key": 3,
      "dependencies": []
    },
    {
      "moduleName": "Z",
      "key": 4,
      "dependencies": []
    }
  ]
}
```