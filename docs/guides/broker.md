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




