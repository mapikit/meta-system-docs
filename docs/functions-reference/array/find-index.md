# Find Index
Referred as `#findIndex`

## Description
The `findIndex` function looks for an item inside an array and returns its index.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `array` | `Array<any>` | <a style={{ color: "green" }}> ✔ </a>
| `searchedItem` | `any` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `notFoundMessage` | `string` |

`notFoundMessage` will only be defined if the item is not found.


## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array | searchedItem || result | notFoundMessage |
| [ "first", "second", "third" ] | "second" | 1 | undefined |
| [ "first", "second", "third" ] | "third" | 2 | undefined |
| [ "first", "second", "third" ] | "foo" | undefined | "No item matchs in the given array" |
</ExamplesTable>