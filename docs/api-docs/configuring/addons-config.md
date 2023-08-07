---
sidebar_position: 4
---

# Addons

In the root of the system configuration file, there is the `"addons"` property. This refers to a list of MSYS extensions that can be used to all sorts of things, from having a healthcheck HTTP endpoint for your system, to adding behavior to Schemas.

For Meta-System, all addons are external, which means that they are a library that is imported during system setup.

## Configuring Each Protocol
In the `"addons"` array, each object is a single addon to be imported into Meta-System. This object accepts these following parameters:

### `"source"` - String (required)
Where to aqcuire the Addon from. This property is used to retrieve the Addon, working together with the `"collectStrategy"`.

- For a Collect Strategy of `"npm"`, the **Source** is the name of the npm package.
- For a Collect Strategy of `"file"`, **Source** should be a path to an Addon.
- For a Collect Strategy of `"url"`, the **Source** is a URL to a zipped Addon.

### `"configuration"` - Object (required)
These are the parameters of the addon you are trying to use. Pay attention to the addon own documentation, since each of them can vary immensely on the parameters they accept, and their structure.

### `"version"` - String Semver (optional)
This is the Version of the Addon to be downloaded. If no specified, It defaults to the latest version available. Only works with `collectStrategy` = `"npm"`

### `"identifier"` - String (required)
Since you can have multiple instances of the same addon on the same system, you must give all of them an unique identifier.

## Example
In the following example, we will use the version `4.0.0` of [`http-meta-protocol`](https://www.npmjs.com/package/http-meta-protocol) to listen to an HTTP route calling a ficticious BOps named `register`.

```json
{
  "protocols": [
    {
      "source": "http-meta-protocol",
      "identifier": "main-routes-protocol",
      "protocolVersion": "4.0.0",
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
