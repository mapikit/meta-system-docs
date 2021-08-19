---
sidebar_position: 2
---

# Subtract
Referred as `#subtract`

## Description
The `subtract` function subtracts `B` from `A`.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if any of B or A are not numbers.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>result</th>
    <th>errorMessage</th>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>4</code></td>
    <td><code>6</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>-4</code></td>
    <td><code>14</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>"bar"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>