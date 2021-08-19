# Absolute
Referred as `#absulute`

## Description
The `absolute` function receives a number and returns its absolute value.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `input` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

The `errorMessage` property will only be defined if the given `input` is not a number.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="1">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>input</th>
    <th>result</th>
    <th>errorMessage</th>
  </tr>
  <tr>
    <td><code>45.3</code></td>
    <td><code>45.3</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>-45.3</code></td>
    <td><code>45.3</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"foo"</code></td>
    <td><code>undefined</code></td>
    <td><code>"One of the arguments provided was not a number"</code></td>
  </tr>
</table>
