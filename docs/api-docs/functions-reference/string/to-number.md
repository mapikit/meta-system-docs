# String to Number
Referred as `#stringToNumber`

## Description
The `stringToNumber` function receives a numeric string and atempts to convert it to its numeric value.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

`errorMessage` will only be deefined if the given string cannot be converted to a number.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| string || result | errorMessage |
| "73" | 73 | undefined |
| "44.2" | 44.2 | undefined |
| "seventeen" | undefined | "Given string is not convertible to a number" |
</ExamplesTable>
