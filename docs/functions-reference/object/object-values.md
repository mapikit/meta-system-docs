# Object Values
Referred as `#objectValues`

## Description
The `objectValues` function receives an object and returns an array with its values.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `object` | `object` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `values` | `Array<any>` |


## Examples

import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| object || keys |
| $ob name: "John", age: 22 $cb | [ "John", 22 ] |
| $ob city: "New York", state: "New York"  $cb | [ "New York", "New York" ] |
</ExamplesTable>