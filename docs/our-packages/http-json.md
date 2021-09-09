---
sidebar_position: 2
---

# HTTP-JSON-Meta-Protocol
This is a protocol for HTTP JSON processing in Meta-System.

## How to Configure It
Firstly, refer to the [Protocols](../api-docs/configuring/protocol-config) documentation section for general usage of protocols. This page contains only instructions on how the `"configuration"` property of the object should be shaped like.

Such object, for this protocol, should contain two properties:
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

> This page is still under construction.


## An Example of This Configuration

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