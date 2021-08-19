# Count
Referred as `#countString`

## Description
The `countString` function receives a string and a substring and counts how many times the substring appears in the string.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `count` | `string` |

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="1">Outputs</th>
  </tr>
  <tr>
    <th>string</th>
    <th>search</th>
    <th>count</th>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"e"</code></td>
    <td><code>3</code></td>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"ello"</code></td>
    <td><code>2</code></td>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"foo"</code></td>
    <td><code>0</code></td>
  </tr>
</table>
