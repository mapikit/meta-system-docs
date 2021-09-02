# Higher or Equal
Referred as `#higherOrEqualTo`

## Description
The `higherOrEqualTo` function compares two values and returns true the first value (`A`) is higher or equal to the second value (`B`).

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
| 42 | 16 | true |
| 16 | 42 | false |
| 16 | 16 | true |
| -16 | -42 | true |
</ExamplesTable>

