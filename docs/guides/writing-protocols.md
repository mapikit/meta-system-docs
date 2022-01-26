---
sidebar_position: 3
---

# Writing Protocols
Protocols are what enables Meta-System to talk with the external world, and given that there are many many ways you may want to do it, you can create your own method of talking with your system.

There are two kinds of Protocols in Meta-System, as [seen here](../api-docs/configuring/protocol-config).
Starting with the normal protocol, here are its capabilities in Meta-System:
- Can receive a custom Object containing the parameters to be initialized with.
- Can call any BOp.
- Can provide functions to interact with the protocol, and those can be used in BOps flows.

The DB protocol is quite specialized in data access and manipulation:
- Can also receive a custom Object containing the parameters to be initialized with.
- Receives the whole list of schemas configured by the user.
- Provides Meta-System functions to interact with the database.

## 1. Requirements
Before we start, be sure to already have:
- An account in [NPM](https://npmjs.com) for publishing your package;
- [Node.Js](https://www.nodejs.org) installed (version 12 or later);
- A text editor of your choice, or IDE for editing Javascript/Typescript.

Now we should start by installing `@meta-system/meta-protocol-helper`, a library we published to aid developing new protocols to Meta-System, as well as validate them. We will be installing it both locally and system-wide.

```bash
npm i -g @meta-system/meta-protocol-helper
npm i @meta-system/meta-protocol-helper --save
```

If you want a quick start on this, try cloning the repository of [CronJob Protocol](https://github.com/mapikit/cronjob-protocol), or the [mongo-db-protocol](https://github.com/mapikit/mongo-db-protocol) for DB protocols.

## 2. The Code

This section, due to having major difference between DB Protocols and Normal protocols, we will split them into another page. You can keep reading this page if **normal** protocols are what you are looking to build. Otherwise, follow from here: [DB Protocols Code](./writing-db-protocols).

After you already have all the requirements, you can code away! The expected interface of a **normal** protocol is a class that extends `MetaProtocol`.

### Configuration Parameters
We believe that you, the author of this awesome Protocol, should have the rights to define what it needs to be configured and functional, and this is the place for doing it. You should accept an object as the first argument in the constructor, which contains all the parameters you want, with any structure you can imagine, just be sure to provide us with the method for validating it ([see below](#validateconfiguration---returns-void)). If the users configures your protocol wrong, Meta-System will fail to boot.

### Constructor
For **normal** protocols, you will always recieve two arguments in the following order:
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
There are some functions we require you to implement for your protocol to be valid. Pay attention to names of the methods for both the **normal** and **DB Protocol** protocols, as we intentionally made them different, so there's an interface mismatch.
You must declare the following methods:
#### **`start`** - returns `void`
For **normal** protocols, this method starts the execution of your protocol. "Starting" your protocol means allowing BOps to be called. For instance, for an HTTP controller, the "start" means begin to listen on the routes that should trigger any BOp. You may use `console.log()` here so anyone that uses this protocol can be sure that it is working. This method can be Async.

#### **`stop`** - returns `void`
For **normal** protocols, this is the method that stops your protocol from calling any BOp. You may also use `console.log()` here to be clear to anyone who uses your Protocol that it actually stopped. This method can be Async.

#### **`validateConfiguration`** - returns `void`
This method is required and is executed by Meta-System in order to be sure that a valid configuration for your protocol was provided. It should validate every parameter specified in your user configuration.

:::info Errors
Every validation in this method should throw an error if failed. Prefer error messages that guide the user to solving the configuration issues encountered.
:::
#### **`getProtocolPublicMethods`** - returns an object containing functions to be used in BOps
This is the method you should use when you want to provide a way of interacting with your protocol from the BOps flow, such as forcibly send an error to the user, or getting a connection value. If there are no such interactions for your protocol, return an empty object.

If you do want to provide them, their name should be keys in the object, while their function declarations are the values.

### Additional Methods For DB Protocols
DB protocols also requires the functions to provide the Schema access to the Database. They are all specified in the [Schema-Functions](../api-docs/functions/schema-functions/intro#the-recommended-interface) section. All of them must be created to the DB protocol to be valid.

:::info Take note!
The **inputs** on the code looks different to what we have on the documentation! All the functions.
:::

## 3. The Configuration File
Just like packages and functions, Protocols also need a file to tell Meta-System how they should be used. The name of that file is `meta-protocol.json`. Here is what the `meta-protocol.json` file should contain.

Let's start with an example of that file. Taken from the [CronJob Protocol](https://github.com/mapikit/cronjob-protocol).
```json
{
  "protocolName": "cronjob-protocol",
  "description": "Run functions in a timely fashion",
  "entrypoint": "./dist/index.js",
  "version": "1.0.0",
  "className": "CronJob",
  "functionDefinitions": [
    {
      "input": {},
      "output": {},
      "functionName": "stopJob",
      "description": "stops running job" // Optional
    },
    {
      "input": {},
      "output": {},
      "functionName": "startJob",
      "description": "Start the job" // Optional
    }]
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

## 4. Validating
We're almost there! For validating your protocol, you should just run the command `meta-package-check` at the root of your repository. This command will check your class to see if it has all the required methods and also if it provides the methods declared in your `meta-protocol.json` file. If you're writing a DB protocol, do a `db-protocol-check` instead.

If everything goes smoothly, you should see a green success message saying: "File passed validation."

## 5. Publishing
You're just a command away from getting your protocol ready to be used by everyone who uses Meta-System. Type in `npm publish` and you're set!

For how to use protocols (including your own!), check [this](../api-docs/configuring/protocol-config) documentation page.
