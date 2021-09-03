# Lower Than
### Module Info: 
```
moduleType: "internal",
moduleName: "lowerThan"
```

## Description
The `lowerThan` function compares two values and returns true the first value (`A`) is lower than the second value (`B`).

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `isLower` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || isHigher |
| 42 | 16 | false |
| 16 | 42 | true |
| 16 | 16 | false |
| -16 | -42 | false |
</ExamplesTable>

