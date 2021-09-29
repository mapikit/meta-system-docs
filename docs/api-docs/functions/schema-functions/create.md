# Create
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "create",
modulePackage: <schemaName>
```
***Note:*** every schema function expect `modulePackage` to be the name of the schema it refers to.


## Description
The `create` schema function simply inserts an entity into the database configured in the `modulePackage` property.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `entity` | `CloudedObject` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `createdEntity` | `CloudedObject` |
| `createError` | `string` |

`createError` will only be defined if there was an error while creating the entity
