# Count
Referred as `#countString`

## Description
The `countString` function receives a string and a substring and counts how many times the substring appears in the string.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `count` | `string` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| string | search || count |
| "Hello Yellow Submarine" | "e" | 3 |
| "Hello Yellow Submarine" | "ello" | 2 |
| "Hello Yellow Submarine" | "foo" | 0 |
</ExamplesTable>
