# Find
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "find",
modulePackage: <schemaName>
```
***Note:*** every schema function expects `modulePackage` to be the name of the schema it refers to.

## Description
The `find` schema function receives a query input and returns all the entities that match the given query.

## Recommended Interface
### Inputs
| Name | Type | Required |
|------|------|:-----:|
| `query` | [`query`](./queries) | <a style={{ color: "green" }}> ✔ </a>
| `limit` | `number` | <a style={{ color: "red" }}> ✖ </a> _(No default Value)_ |
| `offset` | `number` | <a style={{ color: "red" }}> ✖ </a> _(No default Value)_ |

### Outputs
| Name | Type |
| ------ | :------: |
| `success` | `boolean` |
| `data` | `array` of `cloudedObject` |
| `pages` | `number` _(optional)_ |
