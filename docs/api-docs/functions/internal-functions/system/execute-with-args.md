# Execute With Args
### Module Info: 
```
moduleType: "internal",
moduleName: "executeWithArgs"
```

## Description
Takes in a function and its arguments, and then execute it.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `module` | `function` | <a style={{ color: "green" }}> ✔ </a>
| `arguments` | `cloudedObject` | <a style={{ color: "red" }}> ✖ </a>

## Outputs
| Name | Type | Required
|------|------|:-------:|
| `moduleOutput` | `any` | <a style={{ color: "red" }}> ✖ </a>

`moduleOutput` is the exact output of the executed function.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| module | arguments || moduleOutput |
| [add] | $ob numbersToAdd: [1, 2, 6] $cb || $ob result: 9 $cb |
| [add] | $ob numbersToAdd: [1, 2, "foo"] $cb || $ob errorMessage: "One of the arguments provided was not a number" $cb |
</ExamplesTable>
