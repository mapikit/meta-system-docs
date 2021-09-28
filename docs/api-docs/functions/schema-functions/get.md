# Get
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "get"
```

## Description
The `get` schema function receives a query input.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `id` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
| ------ | ------ |
| `found` | `boolean` |
| `entity` | `cloudedObject` |
| `getError` | `string` |


`getError` will only be defined if there was an error while looking for the entity

## Examples
Consider `modulePackage` equals to `users`.

For input : `{ id: "613a7608e3fbed2eb02fda78" }`  
&emsp;&emsp; → The collection `users` will be queried for an entity with `_id` equal to `613a7608e3fbed2eb02fda78`  
&emsp;&emsp; → Consider the following entity exists in the collection `users`:  
&emsp;&emsp;&emsp;&emsp; - `{ name: "Joseph", age: 32, _id: 613a7608e3fbed2eb02fda78 }`  
&emsp;&emsp; → Since an entity exists with the queried id, the function returns:  
&emsp;&emsp;&emsp;&emsp; - `{ name: "Joseph", age: 32, _id: 613a7608e3fbed2eb02fda78 }`

