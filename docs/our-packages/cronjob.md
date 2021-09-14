---
sidebar_position: 3
---

# Cronjob-Protocol
Execute your BOps functions in a timely fashion.

## Details
This protocol provides a simple way of running any BOps in an interval of time. This protocol also comes packed with two BOps Functions to be used in your flows. One of them is to stop the execution of the protocol, and the other is to start.
## How to Configure
:::caution Before Starting
Firstly, refer to the [Protocols](../api-docs/configuring/protocol-config) documentation section for general usage of protocols. This page contains only instructions on how the `"configuration"` property of the object should be shaped like.
:::

### Configuration Object
The CronJob Protocol only needs three parameters to be run: 
- `"bopsName"` - Required String - The name of the BOp you want to execute;
- `"periodMillis"` - Required Number - The time interval between execution of the BOp, in milliseconds;
- `"arguments"` - Required Object - Hardcoded parameters for running the BOp.

## An Example of This configuration

```json
{
  "protocols": [
    {
      "protocolType": "cronjob-protocol",
      "protocolVersion": "latest",
      "configuration": {
        "bopsName": "purge-inactive-free-users",
        "periodMillis": 604800000, // Seven Days
        "arguments": {
          "inactivityThreshold": 2419200000 // Four weeks
        }
      }
    }
  ]
}
```
