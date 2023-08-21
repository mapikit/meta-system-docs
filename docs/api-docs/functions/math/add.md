---
sidebar_position: 1
---

# Add
### Module Info: 
```
moduleType: "internal",
moduleName: "add"
```

## Description
The `add` function takes a list of numbers and return their sum.

## Inputs
| Name | Type | Required |
|------|------|:--------:|
| `numbersToAdd` | `Array<number>` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of the items in the input list are not numbers.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| numbersToAdd || result | errorMessage |
| [ 4, 3, 2 ] | 9 | undefined |
| [ 1, 9 ] | 10 | undefined |
| ["foo", 5] | undefined | "One of the arguments provided was not a number" |
</ExamplesTable>
