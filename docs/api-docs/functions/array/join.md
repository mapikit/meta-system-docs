# Array Join
### Module Info: 
```
moduleType: "internal",
moduleName: "join"
```

## Description
The `join` function joins all the items in an array into a single string

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `array` | `Array<any>` | <a style={{ color: "green" }}> ✔ </a>
| `separator` | `string` | <a style={{ color: "red" }}> ✖ </a> _(Default: `","`)_


## Outputs
| Name | Type |
|------|------|
| `result` | `string` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array | separator || result |
| [ 1, 1, 2, 3 ] | undefined | "1,1,2,3" |
| [ 1, 1, 2, 3 ] | " -=- " | "1 -=- 1 -=- 2 -=- 3" |
| [ "left", "right", "right" ] | ", then " | "left, then right, then right" |
</ExamplesTable>