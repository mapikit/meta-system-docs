# Get System Function
### Module Info: 
```
moduleType: "internal",
moduleName: "getSystemFunction"
```

## Description
This function gets any function that your system can execute. It can be a built BOp, an internal function, or an external one. Beware, however, that this function does not install new dependencies into your system.

> The Get System Function uses, internally, the exact same mechanism the BOps use to get and build your functions.

## Inputs
The inputs are similar to the declaration functions/modules to be used in flows. [**See Reference**](../../../configuring/bops/bops-configuration).

| Name | Type | Required
|------|------|:-----:|
| `moduleType` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `moduleName` | `string` | <a style={{ color: "green" }}> ✔ </a>
| `modulePackage` | `string` | <a style={{ color: "red" }}> ✖ </a>


## Outputs
| Name | Type | Required
|------|------|:-------:|
| `found` | `boolean` | <a style={{ color: "green" }}> ✔ </a>
| `callableFunction` | `function` | <a style={{ color: "red" }}> ✖ </a>

The `callableFunction` property will only be defined if the function was found in the system.

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| moduleType | moduleName | modulePackage || found | callableFunction |
| "internal" | "if" | undefined | true | [function] |
| "external" | "infoLog" | "logger-meta-functions" | true | [function] |
| "external" | "aaa" | "some-non-existent-package" | false | undefined |
</ExamplesTable>
