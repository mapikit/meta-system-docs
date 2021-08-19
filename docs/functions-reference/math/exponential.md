# Exponential
Referred as `#exponential`

## Description
The `exponential` function raises A to the power of B.

## Inputs
| Name | Type | Required |
|------|------|:--------:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if either `A` or `B` are not numbers.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || result | errorMessage |
| 4 | -2 | 0.0625 | undefined |
| 2 | 3 | 8 | undefined |
| 2 | "asd" | undefined | "One of the arguments provided was not a number"
</ExamplesTable>
