# Replace
### Module Info: 
```
moduleType: "internal",
moduleName: "stringReplace"
```

## Description
The `stringReplace` function receives a base string, a search substring, and a replacer string, then finds every occurrence of the search substring in the base string and replaces it with the replacer substring. After all of this, returns the resulting modified string.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `baseString` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `replacer` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `string` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| baseString | search | replacer || result |
| "Meta System" | "Meta" | "My" | "My System" |
| "Meta System" | "System" | "Language" | "Meta Language" |
| "Meta System" | "foo" | "bar" | "Meta System" |
</ExamplesTable>
