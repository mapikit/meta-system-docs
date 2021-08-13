# Exponential
Referred as `#exponential`

## Description
The `exponential` function raises A to the power of B.

## Inputs
| Name | Type | Optional |
|------|------|:--------:|
| `A` | `number` | <span style={{ color: "red" }}> ✖ </span>
| `B` | `number` | <span style={{ color: "red" }}> ✖ </span>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if either `A` or `B` are not numbers.

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
    <td><code>2</code></td>
    <td><code>3</code></td>
    <td><code>8</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>4</code></td>
    <td><code>-2</code></td>
    <td><code>0.0625</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>2</code></td>
    <td><code>"asd"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>
