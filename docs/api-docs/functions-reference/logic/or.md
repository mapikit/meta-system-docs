# Or
Referred as `#or`

## Description
The `or` function receives two boolean values and returns true if either of the given values are true.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `boolean` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `boolean` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || result |
| false | false | false |
| true | false | true |
| false | true | true |
| true | true | true |
</ExamplesTable>

