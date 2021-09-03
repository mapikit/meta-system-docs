# Create
### Module Info: 
```
moduleType: "internal",
moduleName: "createObject"
```

## Description
The `createObject` function receives a key (`string`) and a value. Then returns an object with a property key which contains the given value.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `key` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `value` | `any` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `created` | `object` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| key | value || created |
| "name" | "John" | $ob name: "John" $cb |
| "age" | 44 | $ob age: 44 $cb |
| "info" | $ob nick: "jon" $cb | $ob info: $ob nick: "jon" $cb $cb
</ExamplesTable>