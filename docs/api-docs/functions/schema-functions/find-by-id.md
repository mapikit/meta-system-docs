# Find By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "findById",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.


## Description
The `findById` schema function receives a single input (`id`) and finds the entity with the given id. Do note that, since ids are unique this function always return a single entity.

## Recommended Interface
### Inputs
| Name | Type | Required
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>


### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
| `data` | `cloudedObject` |
