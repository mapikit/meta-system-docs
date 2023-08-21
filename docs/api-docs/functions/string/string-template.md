# String Template
:::caution
This section refers to a feature that will only be available in the v0.2.0 of Meta-System
:::

### Module Info: 
```
moduleType: "internal",
moduleName: "stringTemplate"
```

## Description
The `stringTemplate` function receives a string template and a `replacers` object with the expected values for the corresponding strings inside the template

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `template` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `replacers` | `object` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `result` | `string` |

If a replacer is not given, string will be replaced with `""` will only be deefined if the given string cannot be converted to a number.
If a replacer that is not in the template is given it will be ignored.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| template | replacers || result |
| "$$obname$cb is currently $$obage$cb" | $ob name: "Anna", age: "30" $cb | "Anna is currently 30" |
| "$$obname$cb is currently $$obage$cb" | $ob age: "30" $cb | " is currently 30" |
| "$$obname$cb is currently $$obage$cb" | $ob name: "Anna", age: "30", height: "1.60m" $cb | "Anna is currently 30" |
| "There is no template" | $ob name: "Anna", age: "30" $cb | "There is no template" |
</ExamplesTable>
