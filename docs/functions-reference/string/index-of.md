# Index Of
Referred as `#indexOf`

## Description
The `indexOf` function receives a string and a search substring, then returns the index of the first occurrence substring inside the primary string. If the substring does not exist inside the string `-1` is returned.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `index` | `number` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| string | search || index |
| "Hello Yellow Submarine" | "e" | 1 |
| "Hello Yellow Submarine" | "Yellow" | 6 |
| "Hello Yellow Submarine" | "foo" | -1 |
</ExamplesTable>
