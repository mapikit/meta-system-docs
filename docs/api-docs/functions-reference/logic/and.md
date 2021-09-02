# And
Referred as `#and`

## Description
The `and` function compares two boolean values, outputting wether or not bot values are simultaneously `true`

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `boolean` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `boolean` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `bothTrue` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || bothTrue |
| false | false | false |
| true | false | false |
| false | true | false |
| true | true | true |
</ExamplesTable>

