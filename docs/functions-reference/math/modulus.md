# Modulus
Referred as `#modulus`

## Description
The `modulus` function returns the modulus (remainder) of `A` divided by `B`

## Inputs
| Name | Type | Optional |
|------|------|:---------:|
| `A` | `number` |<span style={{ color: "red" }}> ✖ </span>
| `B` | `number` |<span style={{ color: "red" }}> ✖ </span>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorNotANumber` | `string` |
| `errorDivisionByZero` | `string` |

The `errorNotANumber` property will only be defined if either `A` or `B` are not numbers.
The `errorDivisionByZero` property will only be defined if property `B` is equal to `0`.


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
    <th>errorNotANumber</th>
    <th>errorDivisionByZero</th>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>2</code></td>
    <td><code>0</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>10</code></td>
    <td><code>3</code></td>
    <td><code>1</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>5</code></td>
    <td><code>0</code></td>
    <td><code>undefined</code></td>
    <td><code>undefined</code></td>
    <td><code>"Cannot Divide By Zero"</code></td>
  </tr>
  <tr>
    <td><code>5</code></td>
    <td><code>"foo"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
    <td><code>undefined</code></td>
  </tr>
</table>
