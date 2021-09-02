# Lower or Equal
Referred as `#lowerOrEqualTo`

## Description
The `lowerOrEqualTo` function compares two values and returns true the first value (`A`) is lower or equal to the second value (`B`).

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `isHigherOrEqual` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || isHigherOrEqual |
| 42 | 16 | false |
| 16 | 42 | true |
| 16 | 16 | true |
| -16 | -42 | false |
</ExamplesTable>

