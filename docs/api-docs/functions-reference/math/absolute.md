# Absolute
Referred as `#absulute`

## Description
The `absolute` function receives a number and returns its absolute value.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `input` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if the given `input` is not a number.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| input || result | errorMessage |
| 45.3 | 45.3 | undefined |
| -45.3 | 45.3 | undefined |
| "foo" | undefined | "One of the arguments provided was not a number" |
</ExamplesTable>
