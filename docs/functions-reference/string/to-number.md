# String to Number
Referred as `#stringToNumber`

## Description
The `stringToNumber` function receives a numeric string and atempts to convert it to its numeric value.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorMessage` | `string` |

`errorMessage` will only be deefined if the given string cannot be converted to a number.

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="1">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>string</th>
    <th>result</th>
    <th>errorMessage</th>
  </tr>
  <tr>
    <td><code>"73"</code></td>
    <td><code>73</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"44.2"</code></td>
    <td><code>44.2</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"seventeen"</code></td>
    <td><code>undefined</code></td>
    <td><code>"Given string is not convertible to a number"</code></td>
  </tr>
</table>
