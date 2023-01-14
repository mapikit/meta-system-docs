---
sidebar_position: 2
---

# Writing Packages And Functions
There is this new idea you have, and you think some parts of it are easier to do through coding than by configuring some BOps. This page is to guide you to make your own function for Meta-System, and use it in your BOps.

## Requirements
Before we start, be sure to already have:
- An account in [NPM](https://npmjs.com) for publishing your package;
- [Node.Js](https://www.nodejs.org) installed (version 12 or later);
- A text editor of your choice, or IDE for editing Javascript/Typescript.

Alright, now we should start by installing the single CLI you need for writing new Functions and Packages for Meta-System: `meta-function-helper`. We are going to install it globally since we just need to execute the command `meta-function-check` (or `meta-package-check`) to ensure our new function configuration is compatible with Meta-System.

```bash
npm i -g @meta-system/meta-function-helper
```

Oh, by the way, if you want a quick start on the functions, you can clone and edit this repository: [Bops-Function-Hello-World](https://github.com/mapikit/bops-function-hello-world). If you want to start a new package, you may base it from [Logger-Meta-Functions](https://github.com/mapikit/logger-meta-functions). Both are typescript examples.

## The Code
The first step, is to make your code, and it can do whatever you like! For it to be compatible with Meta-System, you just need to follow this interface:

### If It Is a Standalone Function
If your function needs arguments to be provided, group them in a single object as the first and only argument your function should have:
```javascript
const myAwesomeFunction = ({ arg1, arg2, arg3 }) => {
  ...
}
```

Also, if your function returns something, return it in an object as well:
```javascript
const myAwesomeFunction = ({ arg1, arg2, arg3 }) => {
  return { awesomeResult: "some pretty result here" }
}
```

### If It Is a Package
You should first make your functions, as explained above, then group them together to be exported. It should look like the following:
```javascript
const myPackage = {
  function1: someFunction,
  function2: anotherFunction,
  ...
}
```
The keys of the exported object are the names of the functions. It is required so Meta-System can know what the `moduleName` is requiring when one tries to get it from the package.

## The Configuration
After you already have your function(s) ready, we need a way to tell meta-system about them, and we do that with a new file `meta-function.json` (or `meta-package.json`, if it is a package). Just create the file at the root of your repository and follow the next instructions.

### Function Configuration
In the `meta-function.json` file, you should specify all the data your functions needs to work, and what it outputs. You should also keep it well versioned with [SemVer](https://www.semver.org). As soon as you're done writing it, validate its content with the command `meta-function-check`. If everything is alright, you should get a success message.

Here is the API for the configuration file. You may copy the next example for reference, just make sure to remove the comments, as JSON file format does not support it.


```json
{
  "functionName": "bops-function-hello-world",
  "description": "Logs 'Hello <name>!' to the console when executed",
  "author": "mapikit", // Optional
  "version": "1.1.1",
  "inputParameters": { // Optional, is an Object Definition
    "nameToGreet": { "type": "string", "required": false }
  },
  "outputData": { // Optional, is an Object Definition
    "customGreetings": { "type": "boolean", "required": true },
    "greetingsMade": { "type": "string", "required": true }
  },
  "entrypoint": "/dist/index.js", // Where the file containing the exported function is
  "mainFunction": "main" // What the name of the exported function is
}
```

#### `"functionName"` - String (required)
This is the name of your function. If it is a standalone Function, It must be the same as the name in the NPM's `package.json`.

#### `"description"` - String (required)
It is a short description of what your function does.

#### `"author"` - String (Optional)
It is who made this package, in your case, it's you!

#### `"version"` - SemVer String (required)
This is the version of your function. It is only required if it is a Standalone Function, and in such case, it must match what is present in the `package.json` file.

#### `"inputParameters"` - [Object Definition](../api-docs/configuring/object-definition) (optional)
These are what your function either requires or accept as arguments for execution.

#### `"outputData"` - [Object Definition](../api-docs/configuring/object-definition) (optional)
This is the output of your function, also following the same type definition of `ObjectDefinition`.

#### `"entrypoint"` - String (required)
It is the location of the file containing the function declaration, relative to the `meta-function.json` file. This is NOT required if the function is in a package.

#### `"mainFunction"` - String (required)
It is the name of the exported function, it doesn't need to match the actual `functionName`. This is also NOT required if the function is in a package.

### Package Configuration
For Meta-System, a package is just a group of Functions, and for it to be properly used, you need to provide a valid configuration file. Such file is called `meta-package.json`.

Here's the API, and an example you may follow.

```json
{
  "name": "logger-meta-functions",
  "description": "",
  "version": "1.0.0",
  "functionsDefinitions": [
    {
      "functionName": "log",
      "description": "normal level log",
      "inputs": {
        "message": { "type": "string", "required": true },
        "data": { "type": "any", "required": false }
      },
      "outputs": {}
    },
    {
      "functionName": "infoLog",
      "description": "info level log",
      "inputs": {
        "message": { "type": "string", "required": true },
        "data": { "type": "any", "required": false }
      },
      "outputs": {}
    },
    {
      "functionName": "warnLog",
      "description": "warn level log",
      "inputs": {
        "message": { "type": "string", "required": true },
        "data": { "type": "any", "required": false }
      },
      "outputs": {}
    },
    {
      "functionName": "errorLog",
      "description": "normal level log",
      "inputs": {
        "message": { "type": "string", "required": true },
        "data": { "type": "any", "required": false }
      },
      "outputs": {}
    }
  ],
  "entrypoint": "./dist/index.js"
}
```

You probably noticed that the file has a property which is basically an array of `meta-function.json` definitions, and you would be almost correct. We will address it in the next section ([functionsDefinitions](#functionsdefinitions---meta-function-array-required))

#### `"name"` - String (required)
This is the name of the package, it must match your `package.json` file as well.

#### `"description"` - String (required)
This is a short description of what is your package.

#### `"version"` - SemVer String (required)
It is the property that tracks the version of your package. It must also match the version in your `package.json` file.

#### `"functionsDefinitions"` - Meta-Function Array (required)
These are all the functions present in your package. It is almost like you're defining some `meta-function.json` files inside the package description file, but with some properties ignored: `author`, `version`, `entrypoint`, and `mainFunction`.

## Validating
Now we're almost set! Given that we already wrote our configuration files, we just need to validate them. If it is a package, run `meta-package-check` at the root of your repository. If it is a standalone function, just run `meta-function-check` also at the root of your repository.

There may be some errors, but rest assured as the libraries will point to you what is wrong with your configuration. Then just edit your file, save, and run the verification command again, until the green success message pops up!

## Publishing
This is it, you're a single command away from making your own function/package part of the Meta-System ecosystem. In this stage, you can just run `npm publish`, and you're done! Go and give it a try in your System configuration inside a BOp!

```json
// A BOp here
"configuration": [
  {
    "moduleName": "<MyAwesomeFunctionName>",
    "key": 1,
    "moduleType": "external",
    "modulePackage": "<MyAmazingPackage>",
    "version": "1.0.0",
    "dependencies": [
      { "origin": 3, "originPath": "result.somePath", "targetPath": "<targetArgumentOfMyFunction>" }
    ]
  }
  // ... the rest of the config
]
```
