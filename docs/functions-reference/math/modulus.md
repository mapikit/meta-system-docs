# Modulus
Referred as `#modulus`

## Description
The `modulus` function returns the modulus (remainder) of `A` divided by `B`

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `A` | `number` |<a style={{ color: "green" }}> ✔ </a>
| `B` | `number` |<a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNotANumber` | `string` |
| `errorDivisionByZero` | `string` |

The `errorNotANumber` property will only be defined if either `A` or `B` are not numbers.
The `errorDivisionByZero` property will only be defined if property `B` is equal to `0`.


## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || result | errorNotANumber | errorDivisionByZero |
| 10 | 2 | 0 | undefined | undefined |
| 10 | 3 | 1 | undefined | undefined |
| 5 | 0 | undefined | undefined | "Cannot Divide By Zero" |
| 5 | "foo" | undefined | "One of the arguments provided was not a number" | undefined |
</ExamplesTable>
