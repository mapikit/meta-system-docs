# Index Of
Referred as `#indexOf`

## Description
The `indexOf` function receives a string and a search substring, then returns the index of the first occurrence substring inside the primary string. If the substring does not exist inside the string `-1` is returned.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `string` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `index` | `number` |

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="2">Inputs</th>
    <th colspan="1">Outputs</th>
  </tr>
  <tr>
    <th>string</th>
    <th>search</th>
    <th>index</th>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"e"</code></td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"Yellow"</code></td>
    <td><code>6</code></td>
  </tr>
  <tr>
    <td><code>"Hello Yellow Submarine"</code></td>
    <td><code>"foo"</code></td>
    <td><code>-1</code></td>
  </tr>
</table>
