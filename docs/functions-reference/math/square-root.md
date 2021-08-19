# Square Root
Referred as `#sqrt`

## Description
The `sqrt` function extracts the square root of a number, as long as the given number is a non-negative real number. 

## Inputs
| Name | Type | Required
|------|------|:---------:|
| `A` | `number` |<a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNaN` | `string` |
| `errorNegativeA` | `string` |

The `errorNaN` property will only be defined if `A` is not a number.
The `errorNegativeA` property will only be defined if `A` is a negative number.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="1">Inputs</th>
    <th colspan="3">Outputs</th>
  </tr>
  <tr>
    <th>A</th>
    <th>result</th>
    <th>errorNaN</th>
    <th>errorNegativeA</th>
  </tr>
  <tr>
    <td><code>4</code></td>
    <td><code>2</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>2</code></td>
    <td><code>1.41421356237</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"bar"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>-5</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
    <td><code>"Value must not be a negative number"</code></td>
  </tr>
</table>
