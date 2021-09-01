# Array At
Referred as `#arrayAt`

## Description
The `arrayAt` function gets the value of the item in the nth position of the array.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `array` | `Array<any>` | <a style={{ color: "green" }}> ✔ </a>
| `index` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `found` | `any` |
| `notFoundMessage` | `string` |


## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array | index || found | notFoundMessage |
| [ "first", "second", "third" ] | 0 | "first" | undefined |
| [ "first", "second", "third" ] | 2 | "third" | undefined |
| [ "first", "second", "third" ] | 3 | undefined | "There is no item present at the given index" |
</ExamplesTable>