---
sidebar_position: 2
---

# HTTP-JSON-Meta-Protocol
This is a protocol for HTTP JSON processing in Meta-System.

## How to Configure It
:::caution Before Starting
Firstly, refer to the [Protocols](../api-docs/configuring/protocol-config) documentation section for general usage of protocols. This page contains only instructions on how the `"configuration"` property of the object should be shaped like.
:::

The configuration object, for this protocol, should contain two properties:
- `"port"` - Which should be a number, specifying the port to listen to;
- `"routes"` - Which is an array of objects, representing the routes you want to bind to specific BOps.

### Each "Route" Object
This object, accepts the following properties:

#### `"route"` - String (required)
This is the HTTP route you want to open. It may contain URL params as: `:<some-name>`. You may pass this value to your BOp in the `"inputMapConfiguration"` property.

#### `"businessOperation"` - String (required)
This property is the name of the business operation you want to call when the route is accessed.

#### `"method"` - ENUM (required)
The HTTP method to be listened to. Valid values for this property are:
- `"GET"`
- `"POST"`
- `"PATCH"`
- `"PUT"`
- `"DELETE"`

#### `"inputMapConfiguration"` - Array of Objects (required)
This property maps information on the body, headers, and URL params to be inputs of the provided BOp.

Each object in this Array contains three properties:  `"origin"`, `"originPath"` and `"targetPath"`.
The "origin" can be three values: "route", "body", "headers", and "queryParams".

The "originPath" is where in "origin" the wanted value resides. If it is the body of the request, you may use dot notation to reach deep properties.

Finally, "targetPath" is the path to where you want to map the origin value to. For instance a "targetPath" of `"name"` would produce a result like `{ "name": <propertyValue> }`. If it is a deep path `"user.age"`, the result would be `{ user: { "age": <propertyValue> } }`.

#### `"resultMapConfiguration"` - Object (required)
This is how the protocol should map the output of the HTTP requests.

It has three properties: "body", "headers", and "statusCode".

Starting by the simplest one, `"statusCode"` is the http status code of the request. It can be either a hardcoded number, or a string, representing a path to find the status code from the BOps execution result, similar to "originPath".

Next we have the headers. The `"headers"` property is an array of objects, and each object is a key-value pair. The key is the name of the header, while the value must be a string, representing a path to find the status code from the BOps execution result, again, similar to "originPath".

Finally we have the `"body"` property. It is an object which the structure is what will be sent as a JSON response. The object can be of any depth, as long as it follows this structure rules:

- Every key must be a string
- Every value must be either an object, or an array of strings, or a string

The strings on the body are also treated as paths to the result of the execution of the BOp, similar to the "originPath".

## An Example of This Configuration
This is an example configuration following the rules set above, using a ficticious BOp called `"register"`

```json
{
  "protocols": [
    {
      "protocolType": "http-json-meta-protocol",
      "configuration": {
        "port": 8080,
        "routes": [
          {
            "route": "/new-client/:clientName",
            "businessOperation": "register",
            "method": "POST",
            "inputMapConfiguration": [
              { "origin": "route", "originPath": "clientName", "targetPath": "username" },
              { "origin": "body", "originPath": "email", "targetPath": "email" },
              { "origin": "body", "originPath": "password", "targetPath": "password" }
            ],
            "resultMapConfiguration": {
              "body": { "result": "creationResult" },
              "headers": [],
              "statusCode": "operationResultCode"
            }
          }
        ]
      },
      "protocolVersion": "1.0.0"
    }
  ]
}
```