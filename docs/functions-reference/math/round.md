# Round
Referred as `#round`

## Description
The `round` function rounds a number to the nearest value within the given precision. If no precision is given, a precision of `1` will be used.

## Inputs
| Name | Type | Required |
|------|------|:--------:|
| `input` | `number` | <a style={{ color: "green" }}> ✔ </a>
| `precision` | `number` | <a style={{ color: "green" }}> ✖ </a> _(Default: `1`)_

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNaN` | `string` |

The `errorNaN` property will only be defined if either `input` or `precision` are not numbers.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>input</th>
    <th>precision</th>
    <th>result</th>
    <th>errorNaN</th>
  </tr>
  <tr>
    <td><code>3.435</code></td>
    <td><code>0.5</code></td>
    <td><code>3.5</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>3.435</code></td>
    <td><code>1</code></td>
    <td><code>3</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>3.435</code></td>
    <td><code>0.2</code></td>
    <td><code>3.4</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>3.435</code></td>
    <td><code>"foo"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>
