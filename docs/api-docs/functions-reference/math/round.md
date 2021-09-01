# Round
Referred as `#round`

## Description
The `round` function rounds a number to the nearest value within the given precision. If no precision is given, a precision of `1` will be used.

## Inputs
| Name | Type | Required |
|------|------|:--------:|
| `input` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `precision` | `number` | <a style={{ color: "red" }}> ✖ </a> _(Default: `1`)_

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNaN` | `string` |

The `errorNaN` property will only be defined if either `input` or `precision` are not numbers.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| input | precision || result | errorNaN |
| 3.435 | 0.5 | 3.5 | undefined |
| 3.435 | undefined | 3 | undefined |
| 3.435 | 0.2 | 3.4 | undefined |
| 3.435 | "foo" | undefined | "One of the arguments provided was not a number" |
</ExamplesTable>
