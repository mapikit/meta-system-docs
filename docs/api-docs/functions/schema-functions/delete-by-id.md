# Delete By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "deleteById",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `deleteById` schema function receives a single input (`id`) and deletes the entity associated with the given id, then it returns the deleted entity. Do note that, since ids are unique this function always deletes a single entity.

## Recommended Interface
### Inputs
| Name | Type | Required
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>


### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
