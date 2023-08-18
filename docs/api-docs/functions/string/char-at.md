# Char At
### Module Info: 
```
moduleType: "internal",
moduleName: "charAt"
```

## Description
The `charAt` function receives a string and a number and returns character found at that numeric index. Do note however that the index for the first character is `0`, the second is `1` and so on. 

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `index` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `found` | `string` |
| `notFoundMessage` | `string` |

The `notFoundMessage` property will only be defined if there is no character at the given index (index is out of bounds).

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| string | index || found | notFoundMessage |
| "abcde" | 0 | "a" | undefined |
| "abcde" | 2 | "c" | undefined |
| "abcde" | 5 | undefined | "There is no character present at the given index" |
</ExamplesTable>
