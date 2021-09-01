# Includes
Referred as `#includes`

## Description
The `includes` function returns true or false weather the given array includes the searched item  or not.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `array` | `Array<any>` | <a style={{ color: "green" }}> ✔ </a>
| `searchedItem` | `any` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array | searchedItem || result |
| [ 5, 6, 8 ] | 7 | false |
| [ 5, 6, 8 ] | "Elephant" | false |
| [ 5, 6, 8 ] | 6 | true |
</ExamplesTable>