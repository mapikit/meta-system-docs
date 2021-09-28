# Get By Id
### Module Info: 
```
moduleType: "schemaFunction",
moduleName: "getById"
```

## Description
The `getById` schema function receives a single input (`id`) and finds the entity with the given id. Do note that, since ids are unique this function always return a single entity.

## Inputs
| Name | Type | Required
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

