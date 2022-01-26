# Count
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "count",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `count` schema function receives a query input and return the amount of items matching that query.

## Recommended Interface
### Inputs
| Name | Type | Required |
|------|------|:-----:|
| `query` | [`query`](./queries) | <a style={{ color: "green" }}> ✔ </a>

### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
| `count` | `number` |
