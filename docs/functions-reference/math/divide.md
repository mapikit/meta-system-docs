---
sidebar_position: 4
---

# Divide
Referred as `#divide`

## Description
The `divide` function divides `A` by `B`.

## Inputs
| Name | Type | Required |
|------|------|:---------:|
| `A` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `B` | `number` | <a style={{ color: "green" }}> ✔ </a>

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorDivideByZero` | `string` |
| `errorNaN` | `string` |

The `errorNaN` property will only be defined if any of B or A are not numbers.
The `errorDivideByZero` will only be defined if B is equal to zero.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="3">Outputs</th>
  </tr>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>result</th>
    <th>errorDivideByZero</th>
    <th>errorNaN</th>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>2</code></td>
    <td><code>5</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>5</code></td>
    <td><code>-2</code></td>
    <td><code>-2.5</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>2</code></td>
    <td><code>"foo"</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
  <tr>
    <td><code>2</code></td>
    <td><code>0</code></td>
    <td><code>undefined</code></td>
    <td><code>"Cannot divide by zero"</code></td>
    <td><code>undefined</code></td>
  </tr>
</table>
