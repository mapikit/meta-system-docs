---
sidebar_position: 4
---

# Protocols

In the root of the system configuration file, there is this `"protocols"` property. This refers to an array of protocols, which are used to create a connection between your BOps and Schemas and everything else in the outside world.

For Meta-System, all protocols are external, which means that they are a library that is downloaded during system setup. For example, we have [`http-json-meta-protocol`](https://www.npmjs.com/package/http-json-meta-protocol) and [`cronjob-protocol`](https://www.npmjs.com/package/cronjob-protocol). By referring to their names in your configuration, you are telling Meta-System to download them and execute them for you, with their own configuration.

## Configuring Each Protocol
In the `"protocols"` array, each object is a single protocol reference. This object accepts these following parameters:

### `"protocolType"` - String (required)
This is the name of the protocol to be downloaded. It must match what we have on NPM.

### `"configuration"` - Object (required)
These are the parameters of the protocol you are trying to use. Pay attention to its own documentation, since each protocol can vary immensely on the parameters they accept, and their structure.

### `"proticolVersion"` - String Semver (optional)
This is the Version of the protocol to be downloaded. If no specified, It defaults to the latest version available.

## Example
In the following example, we will use the version `1.0.0` of [`http-json-meta-protocol`](https://www.npmjs.com/package/http-json-meta-protocol) to listen to an HTTP route calling a ficticious BOps named `register`.

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
