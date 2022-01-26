# Updated By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "updateById",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `updateById` schema function receives an id and a cloudedObject (`valuesToUpdate`). Then it finds the entity associated with given id and updates all its values to the given `valuesToUpdate`. Then returns the already updated entity.

## Recommended Interface
### Inputs
| Name | Type | Required
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `data` | `cloudedObject` | <a style={{ color: "green" }}> ✔ </a>


### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
