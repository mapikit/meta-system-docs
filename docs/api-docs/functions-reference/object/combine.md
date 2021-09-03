# Combine Object
### Module Info: 
```
moduleType: "internal",
moduleName: "combineObject"
```

## Description
The `combineObject` function receives two objects and combines both objects into one.

## Inputs
| Name | Type | Required
|------|------|:-----:|
| `object1` | `object` | <a style={{ color: "green" }}> ✔ </a>
| `object2` | `object` | <a style={{ color: "green" }}> ✔ </a>


## Outputs
| Name | Type |
|------|------|
| `combined` | `object` |

## Examples
import { ExamplesTable } from "../_ExamplesTable_.mdx"

<ExamplesTable>
| object1 | object2 || combined |
| $ob name: "John" $cb | $ob surname: "Wick" $cb | $ob name: "John", surname: "Wick" $cb |
| $ob a: "a", b: "b" $cb | $ob c: "c" $cb | $ob a: "a", b: "b", c: "c" $cb |
</ExamplesTable>


