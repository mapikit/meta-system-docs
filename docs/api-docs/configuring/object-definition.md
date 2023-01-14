---
sidebar_position: 6
---

# Object Definition

Object definition is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. This is declared in its own package at object-definition on [NPM](https://www.npmjs.com/package/@meta-system/object-definition) and [Git Hub](https://github.com/mapikit/object-definition)

The libraries contain both the typings and functions to validate both the definition and objects against a definition.

## How to define
This type expects to be an object which the properties are strings, and the values are type definitions, as the following example:

```json
{
  "propertyName": { "type": "string" }
}
```

The available types are:
- string
- number
- boolean
- date
- function
- cloudedObject 
- enum - deep
- object - deep
- array - deep
- any

> CloudedObjects are objects that you don't know or don't want to specify its strucutre.

### Shallow Types
These are the types that does not require any other subType specification. They are: `"string"`, `"number"`, `"boolean"`, `"date"`, `"function"`, `"cloudedObject"`.
```JSON
{
  "propertyName": { "type": <shallow-types> }
}
```

### Deep Types
There are other types that can have multiple levels, they are `"object"`, `"array"`, and `"enum"`. These require a subtype to be considered valid, and they must be defined as the following:
```javascript
// For "object"
{
  "deepProperty": {
    "type": "object",
    "subtype": {
      "someProperty": { "type": "string" }
    }
  }
}

// For "array"
{
  "listProperty": {
    "type": "array",
    "subtype": "string"
  }
}

// For "enum"
{
  "enumProperty": {
    "type": "enum",
    "subtype": ["possibleValue1", "value2", 3]
  }
}
```

When `type === "object"`, subtype must be an Object Definition. When `type === "array"`, subtype can be any of the shallow types, or another object definition. The object definition does not support array of arrays.

For `type === "enum"`, the subtype must be an array of elements, which must be either strings, numbers, or a mix of both.

## Required Fields
You may also indicate whether a property is required or not, by using `"required": true|false` in the same level of the `"type"` property, as it goes:

```json
{
  "name": { "type": "string", "required": true },
  "age": { "type": "number", "required": false },
  "nickname": { "type": "string" }
}
```

> The absence of `"required"` is interpreted as `"required": false`.
