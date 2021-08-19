# Replace
Referred as `#stringReplace`

## Description
The `stringReplace` function receives a base string, a search substring, and a replacer string, then finds every occurrence of the search substring in the base string and replaces it with the replacer substring. After all of this, returns the resulting modified string.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `baseString` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `search` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `replacer` | `string` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `string` |

## Examples
<table style={{ textAlign: "center" }}>
  <tr>
    <th colspan="3">Inputs</th>
    <th colspan="1">Outputs</th>
  </tr>
  <tr>
    <th>baseString</th>
    <th>search</th>
    <th>replacer</th>
    <th>result</th>
  </tr>
  <tr>
    <td><code>"Meta System"</code></td>
    <td><code>"Meta"</code></td>
    <td><code>"Michael's"</code></td>
    <td><code>"Michael's System"</code></td>
  </tr>
  <tr>
    <td><code>"Meta System"</code></td>
    <td><code>"System"</code></td>
    <td><code>"Language"</code></td>
    <td><code>"Meta Language"</code></td>
  </tr>
  <tr>
    <td><code>"Meta System"</code></td>
    <td><code>"foo"</code></td>
    <td><code>"bar"</code></td>
    <td><code>"Meta System"</code></td>
  </tr>
</table>
