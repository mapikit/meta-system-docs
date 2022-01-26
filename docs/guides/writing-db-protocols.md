---
sidebar_position: 4
---

# DB Protocols Code
:::info
This is not the full guide for DB Protocols. Please refer to the ["Writing Protocols"](./writing-protocols) page for the information that encompasses both normal and DB protocols.
:::

## 2. The Code
> See step 1 [here](./writing-protocols#1-requirements).

After you already have all the requirements, you can code away! The expected interface of a **DB protocol** protocol is a class that extends `DBProtocol`, and provides a type for its configuration parameters (only needed if using typescript).

### Configuration Parameters
We believe that you, the author of this awesome Protocol, should have the rights to define what it needs to be configured and functional, and this is the place for doing it. You should accept an object as the first argument in the constructor, which contains all the parameters you want, with any structure you can imagine, just be sure to provide us with the method for validating it ([see below](#validateconfiguration---returns-void)). If the user provides an invalid configuration for your protocol, Meta-System will fail to boot.

### Constructor
For **DB Protocols** you will receive the following arguments:
- Your Protocol's configuration parameters;
- The array of schemas you need to boot with.

```javascript
constructor(configuration, schemaList) {
  super(configuration, schemaList);
}
```
> It is recommended to bind your methods in the constructor.

### Methods
There are some functions we require you to implement for your DB protocol to be valid.
You must declare the following methods:
#### **`initialize`** - returns `void`
This method should boot the connection to the database, and prepare it for being used by schemas. If there's any migration to happen, it should be done at this stage. This method can be Async.

:::caution
DB Protocols are responsible for configuring and preparing the database to be used with the user schemas. This means that you will need to generate the tables, columns, and relationships when this method executes.
:::

There is a helper method provided by the `DBProtocol<T>` class we're supposed to extend. It is called `this.checkSchemaDiff()` and can aid on finding differences in versions of Schemas. 

#### **`shutdown`** - returns `void`
This method should close all the connections open to any database. Additionally, you may save some state on the Database to help on the next boot. This method can be Async.

#### **`validateConfiguration`** - returns `void`
This method is required and is executed by Meta-System in order to be sure that a valid configuration for your protocol was provided. It should validate every parameter specified in your user configuration.

:::info Errors
Every validation in this method should throw an error if failed. Prefer error messages that guide the user to solving the configuration issues encountered.
:::
#### **`getProtocolPublicMethods`** - returns an object containing functions to be used in BOps
This is the method you should use when you want to provide a way of interacting with your protocol from the BOps flow, such as forcibly send an error to the user, or getting a connection value. If there are no such interactions for your protocol, return an empty object.

If you do want to provide them, their name should be keys in the object, while their function declarations are the values.

### Additional Methods For DB Protocols
DB protocols also requires the functions to provide the Schema access to the Database. They are all specified in the [Schema-Functions](../api-docs/functions/schema-functions/intro#the-recommended-interface) section. All of them must be declared to the DB protocol to be valid.

:::info Take note!
The **inputs** on the code looks different to what we have on the documentation! For every method in the [Schema-Functions](../api-docs/functions/schema-functions/intro#the-recommended-interface) section, the DB protocol should actually receive their data as the following:
```javascript
methodName(schemaIdentifier, input) {}
```

- `schemaIdentifier` Is the identifier of the schema for the wanted operation;
- `input` is the input of your method, and what you should expose as the documentation for this method. Meta-System handles the identifier internally.

Another reminder: If the recommended interface does not suit your needs well enough, you may pick one that does. Don't forget to document it though!
:::

## 3. The Configuration File

From this step onwards, the documentation for both protocols are the same, so you may go back to reading from [here](./writing-protocols#3-the-configuration-file).
