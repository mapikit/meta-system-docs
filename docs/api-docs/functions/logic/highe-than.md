# Higher Than
### Module Info: 
```
moduleType: "internal",
moduleName: "higherThan"
```

## Description
The `higherThan` function compares two values and returns true the first value (`A`) is higher than the second value (`B`).

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `isHigher` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || isHigher |
| 42 | 16 | true |
| 16 | 42 | false |
| 16 | 16 | false |
| -16 | -42 | true |
</ExamplesTable>

