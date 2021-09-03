# Square Root
### Module Info: 
```
moduleType: "internal",
moduleName: "sqrt"
```

## Description
The `sqrt` function extracts the square root of a number, as long as the given number is a non-negative real number. 

## Inputs
| Name | Type | Required
|------|------|:---------:|
| `A` | `number` |<a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNaN` | `string` |
| `errorNegativeA` | `string` |

The `errorNaN` property will only be defined if `A` is not a number.
The `errorNegativeA` property will only be defined if `A` is a negative number.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A || result | errorNaN | errorNegativeA |
| 4 | 2 | undefined | undefined |
| 2 | 1.41421356237 | undefined | undefined |
| "bar" | undefined | "One of the arguments provided was not a number" | undefined |
| -5 | undefined | undefined | "Value must not be a negative number" |
</ExamplesTable>
