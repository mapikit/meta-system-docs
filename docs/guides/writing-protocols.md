---
sidebar_position: 3
---

# Writing Protocols
Protocols are what enables Meta-System to talk with the external world, and given that there are many many ways you may want to do it, you can create your own method of talking with your system.

Here are the capabilities of a protocol in Meta-System:
- Can receive a custom Object containing the parameters to be initialized with.
- Can call any BOp.
- Can provide functions to interact with the protocol, and those can be used in BOps flows.

## Requirements
Before we start, be sure to already have:
- An account in [NPM](https://npmjs.com) for publishing your package;
- [Node.Js](https://www.nodejs.org) installed (version 12 or later);
- A text editor of your choice, or IDE for editing Javascript/Typescript.

Now we should start by installing `meta-protocol-helper`, a library we published to aid developing new protocols to Meta-System, as well as validate them.

```bash
npm i -g meta-protocol-helper
npm i meta-protocol-helper --save
```

If you want a quick start on this, try cloning the repository of [CronJob Protocol](https://github.com/mapikit/cronjob-protocol).

## The Code
After you already have all the requirements, you can code away! The expected interface of a protocol is a class that extends `MetaProtocol`, and provides a type for its configuration parameters (only needed if using typescript).

### Configuration Parameters
We believe that you, the author of this awesome Protocol, should have the rights to define what it needs to be configured and functional, and this is the place for doing it. You should accept an object as the first argument in the constructor, which contains all the parameters you want, with any structure you can imagine, just be sure to make the method for validating it ([see below](#validateconfiguration---returns-void)).

### Constructor
you will always recieve two arguments in the following order:
- Your Protocol's configuration parameters;
- The Function Manager, which is what you may use for getting the BOps to be executed.

These should also be passed in the same order when calling `super()`:
```javascript
constructor(configuration, functionManager) {
  super(configuration, functionManager);
}
```

> It is recommended to bind your methods in the constructor.

### Methods
You must declare the following methods:
#### **`start`** - returns `void`
This method starts the execution of your protocol. "Starting" your protocol means allowing BOps to be called. For instance, for an HTTP controller, the "start" means begin to listen on the routes that should trigger any BOp. You may use `console.log()` here so anyone that uses this protocol can be sure that it is working.

#### **`stop`** - returns `void`
This is the method that stops your protocol from calling any BOp. You may also use `console.log()` here to be clear to anyone who uses your Protocol that it actually stopped.

#### **`validateConfiguration`** - returns `void`
This method is required and is executed by Meta-System in order to be sure that a valid configuration for your protocol was provided. It should validate every parameter specified in your user configuration.

:::info Errors
Every validation in this method should throw an error if failed. Prefer error messages that guide the user to solving the configuration issues encountered.
:::
#### **`getProtocolPublicMethods`** - returns an object containing functions to be used in BOps
This is the method you should use when you want to provide a way of interacting with your protocol from the BOps flow, such as forcibly send an error to the user, or getting a connection value. If there are no such interactions for your protocol, return an empty object.

If you do want to provide them, their name should be keys in the object, while their function declarations are the values.

## The Configuration File
Just like packages and functions, Protocols also need a file to tell Meta-System how they should be used. The name of that file is `meta-protocol.json`. Here is what the `meta-protocol.json` file should contain.

Let's start with an example of that file. Taken from the [CronJob Protocol](https://github.com/mapikit/cronjob-protocol).
```json
{
  "protocolName": "cronjob-protocol",
  "description": "Run functions in a timely fashion",
  "entrypoint": "./dist/index.js",
  "version": "1.0.0",
  "className": "CronJob",
  "packageDetails": {
    "functionsDefinitions": [
      {
        "input": {},
        "output": {},
        "functionName": "stopJob",
        "description": "stops running job"
      },
      {
        "input": {},
        "output": {},
        "functionName": "startJob",
        "description": "Start the job"
      }
    ]
  }
}
```
### Configuration File Parameters

#### `"protocolName"` - String (required)
It is the name of your protocol, as it is in NPM and in your `package.json` file.

#### `"description"` - String (required)
This is a short description of what your protocol does.

#### `"entrypoint"` - String (required)
This property is where Meta-System should look to find the file where your protocol class is declared.

#### `"version"` - SemVer String (required)
The current semantic version of your protocol. Should match what is in the `package.json` file.

#### `"className"` - String (required)
It is the name of the class exported in your `"entrypoint"`.

#### `"packageDetails"` - Object (required)
This object is analogous to the [package details of a meta-package](./writing-packages-and-functions#package-configuration), and uses the same validation, but the only required property of this object is `"functionsDefinitions"`, which is an array of [functions definitions](./writing-packages-and-functions#functionsdefinitions---meta-function-array-required), and may be empty.

## Validating
We're almost there! For validating your protocol, you should just run the command `meta-package-check` at the root of your repository. This command will check your class to see if it has all the required methods and also if it provides the methods declared in your `meta-protocol.json` file.

If everything goes smoothly, you should see a green success message saying: "File passed validation."

## Publishing
You're just a command away from getting your protocol ready to be used by everyone who uses Meta-System. Type in `npm publish` and you're set!

For how to use protocols (including your own!), check [this](../api-docs/configuring/protocol-config) documentation page.
> This page is under construction.
