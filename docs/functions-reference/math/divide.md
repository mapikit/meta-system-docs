---
sidebar_position: 4
---

# Divide
Referred as `#divide`

## Description
The `divide` function divides `A` by `B`.

## Inputs
| Name | Type |
|------|------|
| `A` | `number` |
| `B` | `number` |

## Outputs
| Name | Type |
|------|------|
| `result` | `number` |
| `errorDivideByZero` | `string` |
| `errorNaN` | `string` |

The `errorNaN` property will only be defined if any of B or A are not numbers.
The `errorDivideByZero` will only be defined if B is equal to zero.
