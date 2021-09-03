# Get Value
### Module Info: 
```
moduleType: "internal",
moduleName: "getObjectValue"
```

## Description
The `getObjectValue` function receives an object and a property name, then returns the value of the property.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `key` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `object` | `object` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `value` | `any` |


## Examples

import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| key | object || value |
| "name" | $ob name: "Amber", age: 20 $cb | "Amber" |
| "age" | $ob name: "Amber", age: 20 $cb | 20 |
| "password" | $ob name: "Amber", age: 20 $cb | undefined |
</ExamplesTable>