# Update
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "update",
modulePackage: <schemaName>
```
***Note:*** every schema functions expectes `modulePackage` to be the name of the schema it refers to.

## Description
The `update` schema function receives a query input and a cloudedObject with the new properties. Then, all the entities that match the given query will be updated with the new properties.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `query` | [`query`](./queries) | <a style={{ color: "green" }}> ✔ </a>
| `valuesToUpdate` | `cloudedObject` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `updatedCount` | `number` |
| `updateError` | `cloudedObject` |


`updateError` will only be defined if there was an error while executing the query

