---
sidebar_position: 1
---

# Add
Referred as `#add`

## Description
The `add` function takes a list of numbers and return their sum.

## Inputs
| Name | Type | Required |
|------|------|:--------:|
| `numbersToAdd` | `Array<number>` | <a style={{ color: "green" }}> ✔ </a> _(Default: `1`)_


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of the items in the input list are not numbers.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="1">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>numbersToAdd</th>
    <th>result</th>
    <th>errorMessage</th>
  </tr>
  <tr>
    <td><code>[ 4, 3, 2 ]</code></td>
    <td><code>9</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>[ 1, 9 ]</code></td>
    <td><code>10</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>["foo","bar"]</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>
