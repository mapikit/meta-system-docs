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
> - `createSchema()` Is an operation to be executed in the system schemas.

Such structure is followed for every entity and operation in Meta-System.

In addition to the entities, the Broker also carries an additional `done()` function at the root of the object, which every addon must call at the end of its `"configure"` entrypoint function. This function configures the Addon's broker as ready for runtime, which means that any entity operation capable of modifying system behavior is removed from the Broker Object. This is done to ensure that Meta-System's behavior is consistent every time with a same set of system configurations before launching.

## Entities and Permissions List
:::caution Functions Availability
As mentioned above, after calling `done()` on the broker, not all functions will be available. Check the "callable at runtime" value for knowing if the function keeps available after calling `done()`.

Additionally, if you're building an addon remember to add the desired permission to the Permissions array to have the function available at your Addon.
:::

### Entity: Schemas - `broker.schemas`
Broker category for the [system's schemas](../api-docs/configuring/schema-config.md). Refer to the configuration format for the Schema's properties, as all actions under this entity uses it.

#### Action: Get Schema
Example: `broker.schemas.getSchema("a_name")` - Gets schema with the identifier of "a_name"

| Name | Permission | Callable at Runtime |
|:----:|:----:|:-----:|
| `getSchema` | `get_schema` | <a style={{ color: "green" }}> ✔ </a>

