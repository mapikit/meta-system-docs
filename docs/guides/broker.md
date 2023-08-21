---
sidebar_position: 3
---

# Broker
If talking about extending MSYS functionality the Broker simply cannot be left behind, as It is responsible for creating an access layer for Meta-System internals and system data. It is only through the broker that an Addon can modify and interact with the system.

:::info Separation of Data and Operations
Meta-System also uses the broker internally, never directly accessing the data. This keeps the data decoupled from the rest of the system, and makes adding new functionallity to MSYS a lot easier! :tada:
:::

## Structure
There's actually no big secret to the Broker's structure, it is an object in which every key reprents and entity category, and at the next level are the available operations for such entity as a function.

> Example: `broker.schemas.createSchema()`
> - `schemas` Means the schemas of the system.
> - `createSchema()` Is an operation (action) to be executed in the system schemas.

Such structure is followed for every entity and operation in Meta-System.

In addition to the entities, the Broker also carries an additional `done()` function at the root of the object, which every addon must call at the end of its `"configure"` entrypoint function. This function configures the Addon's broker as ready for runtime, which means that any entity operation capable of modifying system behavior is removed from the Broker Object. This is done to ensure that Meta-System's behavior is consistent every time with a same set of system configurations before launching.

## Entities, Actions and Permissions List
As explained above, in the broker's entities we can use actions to interact with the system's data. However, in order to scope actions an Addon can do to a system, MSYS only populates entities and action that the Addon explicitly requests.

An Addon can do this by adding the entity and its permissions in the permissions array at its [Meta-File](./creating-addons.md#the-meta-file). For info on how to write the permissions array, refer to [this section](./creating-addons.md#permissions---object-array-required).

:::caution Calling `done()`
As mentioned above, after calling `done()` on the broker, not all functions will be available. Check the "callable at runtime" value for knowing if the function keeps available after calling `done()`.
:::

### Entity: Schemas - `broker.schemas`
Broker category for the [system's schemas](../api-docs/configuring/schema-config.md). This linked page also contains the type for the Schemas. Refer to it for the the properties, as all actions under this entity uses it.

#### Action: Get Schema
Gets schema by its identifier.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getSchema` | `get_schema` | <a style={{ color: "green" }}> ✔ </a> | `.getSchema(identifier: String) => void` |

#### Action: Create Schema
Creates a new Schema in the system.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `createSchema` | `create_schema` | <a style={{ color: "red" }}> ✖ </a> | `.createSchema(schema: Schema) => void` |

#### Action: Get All
Gets all Schemas from the System.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `get_all` | <a style={{ color: "green" }}> ✔ </a> | `.getAll() => Schema[]` |

#### Action: Modify Schema
Modifies a Schema in the System. The modified schema is selected by its `identifier`. Not allowed to use in runtime.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `modifySchema` | `modify_schema` | <a style={{ color: "red" }}> ✖ </a> | `.modifySchema(schema: Schema) => void` |

### Entity: Business Operations - `broker.businessOperations`
This is the Broker category for the [BOps](../api-docs/configuring/bops/bops.md). This linked page contains the types for the Business operation used in this entity's functions.

#### Action: Get BOp
Gets a single business operation by its `identifier`.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getBop` | `get_bop` | <a style={{ color: "green" }}> ✔ </a> | `.getBop(identifier: string) => BusinessOperation` |

#### Action: Create BOp
Inserts a new Business Operation in the System's configuration. Meta-System does not differentiate Addon-inserted BOps from user-configured ones, meaning that the inserted BOp will be built ([Stitched](../api-docs/architecture/flows.md#stitching-stage)) just like all the other configured ones.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `createBop` | `create_bop` | <a style={{ color: "red" }}> ✖ </a> | `.createBop(bop: BusinessOperation) => void` |

#### Action: Get All
Gets all Business Operations from the System.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `get_all` | <a style={{ color: "green" }}> ✔ </a> | `.getAll() => BusinessOperation[]` |

### Entity: Environment Values - `broker.envs`
The Broker category for the [Envs](../api-docs/configuring/basics.md#envs---required-array). This linked page contains the types for the Envs used in this Entity's actions.

#### Action: Get Env
Gets a Env by its `key`.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getEnv` | `get_env` | <a style={{ color: "green" }}> ✔ </a> | `.getEnv(envKey: string) => Env` |

#### Action: Create Env
Inserts a Environment value in the System's configuration.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `createEnv` | `create_env` | <a style={{ color: "red" }}> ✖ </a> | `.createEnv(env: Env) => void` |

#### Action: Get All
Gets all Envs from the System.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `get_all` | <a style={{ color: "green" }}> ✔ </a> | `.getAll() => Env[]` |

### Entity: Addons - `broker.addons`
This refers to the [system's addons](../api-docs/configuring/addons-config.md) entity in the Broker. This linked page contains the types for the Addons used in this Entity's actions.

#### Action: Get Addon
Gets a Addon by its `identifier`.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAddon` | `get_addon` | <a style={{ color: "green" }}> ✔ </a> | `.getAddon(identifier: string) => Addon` |

#### Action: Create Addon
Inserts a Addon into the System's configuration. Although available in the broker, this function is only used internally by Meta-System, and calling it in your Addon has no effect.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `createAddon` | `create_addon` | <a style={{ color: "red" }}> ✖ </a> | `.createAddon(addon: Addon) => void` |

#### Action: Get All
Gets all Addons from the System.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `get_all` | <a style={{ color: "green" }}> ✔ </a> | `.getAll() => Addon[]` |

### Entity: Schema Functions - `broker.schemaFunctions`
This is the Broker section about the Schema Functions. Schemas by themselves have no function other than just being a known entity for your system. When adding a function to a schema, though, you enable operations to be done using that object format, sort of like adding methods to a class.

Some applications of Schema functions include:
- Saving/Retrieving an entity in/from a Data Base
- Computing a Value from a property in the Schema

Schema Functions does not necessarily need to receive an Schema as part of its input. If your function does so, however, it is recommended to leave the type as a `cloudedObject` (by the [Object Definition](../api-docs/configuring/object-definition.md)). On later versions, MSYS will provide a custom type that will fill the appropriate schema type for you, so in the upcoming Meta-Editor (Meta-System's configuration graphical editor) users always have the correct type to use.

For this Section when `MetaFunction` type is mentioned, refer to this type:
```typescript
type MetaFunction = {
  description ?: string;
  input : ObjectDefinition;
  output : ObjectDefinition;
  functionName : stirng;
}
```
#### Action: Set Schema Functions
Sets an schema function to a single schema. 

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `setSchemaFunction` | `set_functions` | <a style={{ color: "red" }}> ✖ </a> | `.setSchemaFunction(schemaIdentifier: string, func: Function, metaFunc: MetaFunction) => void` |

#### Action: Get Schema Functions
Gets a schema function (the callable Function) from a schema.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getSchemaFunction` | `get_functions` | <a style={{ color: "green" }}> ✔ </a> | `.getSchemaFunction(functionName: string, schemaIdentifier: string) => Function` |

#### Action: Preregister Schema Functions
Declares only a function type for a Schema Function, leaving to set the callable function later, by using `.setRegisteredSchemaFunction()`. This is useful in cases where you cannot give the engine a callable function before your Addon is properly booted.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `preRegisterSchemaFunction` | `preregister_functions` | <a style={{ color: "red" }}> ✖ </a> | `.preRegisterSchemaFunction( schemaIdentifier: string, metaFunc: MetaFunction) => void` |

#### Action: Set Registered Schema Functions
Sets a previously registered schema function.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `setRegisteredSchemaFunction` | `set_registered_functions` | <a style={{ color: "green" }}> ✔ </a> | `.setRegisteredSchemaFunction( schemaIdentifier: string, functionName: string, func: Function) => void` |

### Entity: Business Operation Functions - `broker.bopFunctions`
This is the Broker section about Business Operation Functions. These are the callable functions that MSYS builds (stitches) from the system configuration input.

#### Action: Get BOp Function
Gets a callable Business Operation Function from the System.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getBopFunction` | `get_function` | <a style={{ color: "green" }}> ✔ </a> | `.getBopFunction(bopIdentifier: string) => Function` |

#### Action: Get All BOp Functions
Gets all callable Business Operation Function from the System. Returns an array of the following type:
```typescript
type FunctionEntity = {
  description ?: string;
  input : ObjectDefinition;
  output : ObjectDefinition;
  functionName : stirng;
  identifier: String;
  callable : Function;
}
```

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `get_all` | <a style={{ color: "green" }}> ✔ </a> | `.getAll() => FunctionEntity[]` |

#### Action: Override BOp Call
Replaces a built BOp with another function. Only affects future calls made to `.getAll()` and `.getBopFunction()`. The Stitching process is only affected if this is called during the `"configure"` Addon step.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `overrideBopCall` | `override_call` | <a style={{ color: "green" }}> ✔ </a> | `.overrideBopCall(bopIdentifier: string, func: Function, metaFunc: MetaFunction) => void` |

#### Action: Add Bop Call
Adds a new Bop Function, as if MSYS has built it. Similar to the override action, only affects future calls made to `.getAll()` and `.getBopFunction()`. The Stitching process is only affected if this is called during the `"configure"` Addon step.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `addBopCall` | `add_function` | <a style={{ color: "green" }}> ✔ </a> | `.addBopCall(bopIdentifier: string, func: Function, metaFunc: MetaFunction) => void` |

### Entity: Addons Functions - `broker.addonFunctions`
This section refers to the Addons Functions. They are functions available for every BOp to use, just like internal ones.

#### Action: Register Addon Function
Adds a new Addon function into the system.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `register` | `register` | <a style={{ color: "red" }}> ✖ </a> | `.register(func: Function, metaFunc: MetaFunction) => void` |

#### Action: Get Addon Function
Gets addons functions set by you.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getFunction` | `get` | <a style={{ color: "green" }}> ✔ </a> | `.getFunction(functionName: string) => Function` |

#### Action: Get Others Addon Functions
Get addons functions added by any addons. Requires knowing system-installed addons' identifiers.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAddonFunction` | `getOthers` | <a style={{ color: "green" }}> ✔ </a> | `.getAddonFunction(addonIdentifier, func: Function) => Function` |

#### Action: Get All Functions
Gets in a list, all addons functions in the system. Returns an array of the following type:
```typescript
type FunctionEntity = {
  description ?: string;
  input : ObjectDefinition;
  output : ObjectDefinition;
  functionName : stirng;
  identifier: String;
  callable : Function;
}
```

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getAll` | `getAll` | <a style={{ color: "red" }}> ✖ </a> | `.getAll() => FunctionEntity[]` |

#### Action: Get Functions From Identifier
Gets all addons functions set by a specific addon. Also returns an array of `FunctionEntity`.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `getFromIdentifier` | `getFromIdentifier` | <a style={{ color: "red" }}> ✖ </a> | `.getFromIdentifier(identifier: string) => FunctionEntity[]` |

#### Action: Preregister Addon Functions
Declares only the function type for an Addon Function, leaving to set the callable function later, by using `.setRegistered()`. This is useful in cases where you cannot give the engine a callable function before your Addon is properly booted.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `preregister` | `preregister` | <a style={{ color: "red" }}> ✖ </a> | `.preregister(metaFunc: MetaFunction) => void` |

#### Action: Set Registered Addon Functions
Sets a previously registered addon function.

| Name | Permission | Callable at Runtime | Usage |
|:----:|:----:|:-----:|-----|
| `setRegistered` | `set_registered` | <a style={{ color: "green" }}> ✔ </a> | `.setRegistered(functionName: string, func: Function) => void` |

### Entity: Logger - `broker.logger`
Meta-System makes available for all addons to leverage the built in logger, so you don't have to go console-logging your way. All logger actions are available both before and during runtime, and require no permissions. All functions accept anything as an arugment.

Available functions are:
- fatal
- success
- operation
- error
- warn
- info
- debug
