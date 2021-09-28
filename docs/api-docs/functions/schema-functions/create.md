# Create
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "create"
```

## Description
The `create` schema function simply inserts an entity into the database configured in the `modulePackage` property.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `entity` | `CloudedObject` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `createdEntity` | `CloudedObject` |
| `createError` | `string` |

`createError` will only be defined if there was an error while creating the entity

## Examples
Consider `modulePackage` equals to `users`.

For input : `{ entity: { name: "Joseph", age: 32 } }`  
&emsp;&emsp; → An Id is automatically generated and appended to the data as `_id`  
&emsp;&emsp; → `{ name: "Joseph", age: 32, _id: <ID> }` gets inserted into collection `users`  
&emsp;&emsp; → Returns `{ createdEntity: { name: "Joseph", age: 32, _id: <ID> } }`  
&emsp;&emsp;&emsp;&emsp; **NOTE:** *ids are unique sequences of alpha-numeric characters*

