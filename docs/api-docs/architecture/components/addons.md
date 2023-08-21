---
sidebar_position: 1
---

# Addons

Addons are the component of Meta-System used to extend functionality and execute them. They can modify, add, and interact with all data and functions of Meta-System.

In this document, we will explain the structure of Addons, and how they connect with every part of Meta-System. If you're looking for how to configure them in your JSON file, [look here](../../configuring/addons-config.md). If you're looking to how you can create your own addon, [go here](../../../guides/creating-addons.md).

## Structure
Addons are similar for Meta-System, what libraries are for a code-base, essentially **external code** imported into your own. However, for MSYS, Addons can change their whole system behavior, add functions, wrap BOps, change Schemas, execute BOps, or even listen for HTTP requests.

Basically, Addons can be both a sort of a shortcut to shape your system and give it function, or a good old library for you to use.

### Parts
Addons are divided into three parts:
1. **The Meta-File** - A file responsible for telling MSYS about your Addon, what parts of MSYS it touches and what is its configuration interface.
2. **The Entrypoint** - A JS file responsible to wire **the code** to MSYS internals, optionally accepting additional configuration from the Addon User.
3. **The Code** - Well, the code to be imported and used inside/by MSYS.

## How MSYS Loads an Addon
When the user specify an Addon in their configuration, MSYS "collects" the files, validates them, then finally uses the entrypoint to import them into the running engine.

In more detail, this process looks more like the following:
1. Meta-System gets the full list of Addons.
1. For every addon, using their specified [`collectStrategy`](../../configuring/addons-config.md#collectstrategy---enum-required), the Addon is retrieved from [`source`](../../configuring/addons-config.md#source---string-required)
1. Their Meta-File and Entrypoint gets validated
1. Using the [configuration format](../../../guides/creating-addons.md#configurationformat---object-definition-required) the Addon specifies in the Meta-File, the configuration value is validated.
1. MSYS Generates a [broker](../../../guides/broker.md) with the specified permissions for the Addon.
1. In the entrypoint, the `"configure"` function gets executed, with the generated broker as the first parameter, and the user configuration as the second.
1. Once every addon gets configured, MSYS [Stitches](../flows.md#stitching-stage) every Business operation.
1. The `"boot"` entrypoint function is executed for every addon, and MSYS should be running.

Keep in mind that every addon is loaded in the same order they are declared in the Addons array, so their order matter, as they may use and modify the same entities, similar how `(2+2)*4` is not equal to `(2*4)+2`.