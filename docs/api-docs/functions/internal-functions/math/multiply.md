---
sidebar_position: 3
---

# Multiply
### Module Info: 
```
moduleType: "internal",
moduleName: "multiply"
```

## Description
The `multiply` function multiplies the list of numbers provided.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `numbersToMultiply` | `Array<number>` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of the provided items are not numbers.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| numbersToMultiply || result | errorMessage |
| [ 4, 3, 2 ] | 24 | undefined |
| [ -1, 9 ] | -9 | undefined |
| [ 2, "bar" ] | undefined | "One of the arguments provided was not a number" |
</ExamplesTable>
