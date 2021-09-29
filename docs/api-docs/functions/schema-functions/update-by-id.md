# Updated By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "updateById",
modulePackage: <schemaName>
```

## Description
The `updateById` schema function receives an id and a cloudedObject (`valuesToUpdate`). Then it finds the entity associated with given id and updates all its values to the given `valuesToUpdate`. Then returns the already updated entity.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `valuesToUpdate` | `cloudedObject` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `updatedEntity` | `cloudedObject` |
| `updateError` | `cloudedObject` |


`updateError` will only be defined if there was an error while looking for the entity


