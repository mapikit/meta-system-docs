# Is Nill
Referred as `#isNill`

## Description
The `isNill` function receives a value and verifies if it is defined or nill (null or undefined).

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `value` | `any` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `isNill` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| value || isNill |
| "a string" | false |
| "" | false |
| undefined | true |
| null | true |
</ExamplesTable>
