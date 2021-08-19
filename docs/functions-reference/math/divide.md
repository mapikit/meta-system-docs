---
sidebar_position: 4
---

# Divide
Referred as `#divide`

## Description
The `divide` function divides `A` by `B`.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorDivideByZero` | `string` |
| `errorNaN` | `string` |

The `errorNaN` property will only be defined if any of B or A are not numbers.
The `errorDivideByZero` will only be defined if B is equal to zero.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || result | errorDivideByZero | errorNaN |
| 10 | 2 | 5 | undefined | undefined |
| 5 | -2 | -2.5 | undefined | undefined |
| 2 | "foo" | undefined | undefined | "One of the arguments provided was not a number" |
| 2 | 0 | undefined | "Cannot divide by zero" | undefined |
</ExamplesTable>

