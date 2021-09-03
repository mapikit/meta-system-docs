# If
### Module Info: 
```
moduleType: "internal",
moduleName: "if"
```

## Description
The `if` function receives a boolean and two other values and returns one or the other wether the given boolean is true or false. Optionally, you can also input functions instead of static values.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `boolean` | `boolean` | <a style={{ color: "green" }}> ✔ </a>
| `ifTrue` | `any` | <a style={{ color: "green" }}> ✔ </a>
| `ifFalse` | `any` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `outputValue` | `any` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| boolean | ifTrue | ifFalse || outputValue |
| true | "foo" | 15 | "foo" |
| false | "foo" | 15 | 15 |
</ExamplesTable>

