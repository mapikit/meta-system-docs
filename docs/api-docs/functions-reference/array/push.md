# Array Push
Referred as `#push`

## Description
The `push` function inserts an item in an array or into a new one if no existing array is given.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `targetArray` | `Array<any>` | <a style={{ color: "red" }}> ✖ </a> _(Default: `[]`)_
| `newItems` | `object` | <a style={{ color: "red" }}> ✖ </a> _(Default: `{}`)_
| `item` | `any` | <a style={{ color: "red" }}> ✖ </a> _(Default: `undefined`)_

Do note that even though none of the inputs are required, giving no inputs to the function will result in the `push` function simply returning an empty array.

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |


## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| array || result |
| [ "first", "second", "third" ] | 3 |
| [ "first", "second", "third", "fouth" ] | 4 |
| [ 4, "test", "foo" ] | 3 |
</ExamplesTable>