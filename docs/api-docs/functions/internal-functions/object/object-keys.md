# Object Keys
### Module Info: 
```
moduleType: "internal",
moduleName: "objectKeys"
```

## Description
The `objectKeys` function receives an object and returns an array with its keys (properties names)

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `object` | `object` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `keys` | `Array<string>` |


## Examples

import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| object || keys |
| $ob name: "John", age: 22 $cb | [ "name", "age" ] |
| $ob city: "New York", state: "New York"  $cb | [ "city", "state" ] |
</ExamplesTable>