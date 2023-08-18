# String Concatenate
:::caution
This section refers to a feature that will only be available in the v0.2.0 of Meta-System
:::

### Module Info: 
```
moduleType: "internal",
moduleName: "stringConcat"
```

## Description
The `stringConcat` function receives a number of strings and concatenates all of the string in order.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `strings` | `object` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `string` |

This functions will, if possible, to convert any given values to a string


## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| strings || result |
| $ob name: "John", lastName: "Wick" $cb | "JohnWick" |
| $ob name: "John ", lastName: "Wick" $cb | "John Wick" |
| $ob start: "He is ", age: 16 $cb | "He is 16" |
</ExamplesTable>
