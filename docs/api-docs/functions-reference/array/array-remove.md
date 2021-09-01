# Array Remove
Referred as `#arrayRemove`

## Description
The `arrayRemove` receives an array and an index, then removes the item at the given index and returns the new array.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `array` | `Array<any>` | <a style={{ color: "green" }}> ✔ </a>
| `index` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `resultingArray` | `Array<any>` |
| `removedItem` | `any` |
| `notFoundMessage` | `any` |

`notFoundMessage` will only be defined if nothing is present at the given index.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array | index || resultingArray | removedItem | notFoundMessage |
| [ "first", "second", "third" ] | 1 | [ "first", "third" ] | "second" | undefined |
| [ "first", "second", "third" ] | 2 | [ "first", "second" ] | "third" | undefined |
| [ "first", "second", "third" ] | 3 | undefined | undefined | "There is no item present at the given index" |
</ExamplesTable>