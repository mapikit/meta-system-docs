# Char At
Referred as `#charAt`

## Description
The `charAt` function receives a string and a number and returns character found at that numeric index. Do note however that the index for the first character is `0`, the second is `1` and so on. 

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `index` | `number` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `found` | `string` |
| `notFoundMessage` | `string` |

The `notFoundMessage` property will only be defined if there is no character at the given index (index is out of bounds).

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="2">Outputs</th>
  </tr>
  <tr>
    <th>string</th>
    <th>index</th>
    <th>found</th>
    <th>notFoundMessage</th>
  </tr>
  <tr>
    <td><code>"abcde"</code></td>
    <td><code>0</code></td>
    <td><code>"a"</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"abcde"</code></td>
    <td><code>2</code></td>
    <td><code>"c"</code></td>
    <td><code>undefined</code></td>
  </tr>
  <tr>
    <td><code>"abcde"</code></td>
    <td><code>5</code></td>
    <td><code>undefined</code></td>
    <td><code>"There is no character present at the given index"</code></td>
  </tr>
</table>
