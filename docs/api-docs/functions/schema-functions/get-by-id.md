# Get By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "getById",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.


## Description
The `getById` schema function receives a single input (`id`) and finds the entity with the given id. Do note that, since ids are unique this function always return a single entity.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `found` | `boolean` |
| `entity` | `cloudedObject` |
| `getError` | `string` |


`getError` will only be defined if there was an error while looking for the entity

