# Get
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "get",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `get` schema function receives a query input and returns all the entities that match the given query.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `query` | [`query`](./queries) | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `results` | `cloudedObject` |
| `getError` | `cloudedObject` |


`getError` will only be defined if there was an error while executing the query

