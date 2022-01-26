# Delete
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "delete",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `delete` schema function receives a query input and deletes all the entities that match the given query.

## Recommended Interface
### Inputs
| Name | Type | Required |
|------|------|:-----:|
| `query` | [`query`](./queries) | <a style={{ color: "green" }}> ✔ </a>

### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
| `affectedEntities` | `number` |
