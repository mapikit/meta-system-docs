---
sidebar_position: 2
---

# Subtract
### Module Info: 
```
moduleType: "internal",
moduleName: "subtract"
```

## Description
The `subtract` function subtracts `B` from `A`.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of B or A are not numbers.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || result | errorMessage |
| 10 | 4 | 6 | undefined |
| 10 | -4 | 14 | undefined |
| 10 | "bar" | undefined | "One of the arguments provided was not a number"
</ExamplesTable>