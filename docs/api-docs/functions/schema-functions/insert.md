# Insert
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "insert",
modulePackage: <schemaName>
```
***Note:*** every schema function expect `modulePackage` to be the name of the schema it refers to.

## Description
The `"insert"` schema function simply inserts an entity into the database..

## Recommended Interface
### Inputs
| Name | Type | Required
|------|------|:-----:|
| `data` | `CloudedObject` | <a style={{ color: "green" }}> ✔ </a>

### Outputs
| Name | Type |
| ------ | ------ |
| `success` | `boolean` |
