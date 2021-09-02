# Equal
Referred as `#equalTo`

## Description
The `equalTo` function compares two values and returns true if both values are (deep) equal.

## Inputs
| Name | Type | Required |
|------|------|:-----:|
| `A` | `any` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `any` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `isEqual` | `boolean` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| A | B || isEqual |
| "abc" | "abc" | true |
| "abcd" | "abc" | false |
| $ob name: "Matt" $cb | $ob name: "Matt" $cb | true |
| $ob name: "Matt" $cb | $ob name: "Mat" $cb | false |
</ExamplesTable>

