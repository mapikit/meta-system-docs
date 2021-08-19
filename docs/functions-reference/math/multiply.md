---
sidebar_position: 3
---

# Multiply
Referred as `#multiply`

## Description
The `multiply` function multiplies the list of numbers provided.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `numbersToMultiply` | `Array<number>` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of the provided items are not numbers.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="1">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>numbersToMultiply</th>
    <th>result</th>
    <th>errorMessage</th>
  </tr>
  <tr>
    <td><code>[ 4, 3, 2 ]</code></td>
    <td><code>24</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>[ -1, 9 ]</code></td>
    <td><code>-9</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>[2,"bar"]</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>