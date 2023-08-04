---
sidebar_position: 4
---

# Addons

In the root of the system configuration file, there is the `"addons"` property. This refers to a list of MSYS extensions that can be used to all sorts of things, from having a healthcheck HTTP endpoint for your system, to adding behavior to Schemas.

For Meta-System, all addons are external, which means that they are a library that is imported during system setup.

## Configuring Each Protocol
In the `"addons"` array, each object is a single addon to be imported. This object accepts these following parameters:

### `"protocol"` - String (required)
This is the name of the protocol to be downloaded. It must match what there is on NPM.

### `"protocolKind"` - String (required)
This property sets how the protocol should be loaded. Since there are two kinds of protocols, `"normal"` and `"db-protocol"`, this value should match the kind of your protocol.

### `"configuration"` - Object (required)
These are the parameters of the protocol you are trying to use. Pay attention to its own documentation, since each protocol can vary immensely on the parameters they accept, and their structure.

### `"protocolVersion"` - String Semver (optional)
This is the Version of the protocol to be downloaded. If no specified, It defaults to the latest version available.

### `"identifier"` - String (required)
Since you can have multiple instances of the same addon on the same system, you must give all of them an unique identifier.

## Example
In the following example, we will use the version `1.0.0` of [`http-json-meta-protocol`](https://www.npmjs.com/package/http-json-meta-protocol) to listen to an HTTP route calling a ficticious BOps named `register`.

```json
{
  "protocols": [
    {
      "protocol": "http-json-meta-protocol",
      "protocolKind": "normal",
      "identifier": "Main Routes Protocol",
      "protocolVersion": "1.0.0",
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
    }
  ]
}
```
