---
sidebar_position: 1
---

# Configuration Basics
In this documentation section, you will be presented with all the configuration file details for Meta-System. If you want to learn a bit more of how things work under the hood, check the [Architecture](../architecture/software-design.md) section before! You will possibly have a better experience tuning your system if you do so.

:::success GUI Tool - Meta-Editor
Meta-Editor, the Open-Source tool for configuring your Meta-System is under development right now! You can check the [**Discord**](https://discord.gg/ndGsnbTW7V) for more information, and help supporting the developers [**here**](./basics.md).
:::

## Starting a New Config
A new configuration is what stands between you and your brand new system. Don't panic! Here we have all the instructions needed for you to overcome the challenges you may face. Let's start by handing you this sweet clean sample of a configuration.

import CodeBlock from '@theme/CodeBlock';
import newConfig from '!!raw-loader!/static/jsons/new-config.txt';

<details>
  <summary><b>Click to Show Config {"| "}
  <a href="pathname:///jsons/new-config.txt" download="new-config.json">Click to Download</a>
</b></summary>
<CodeBlock className="language-json">{newConfig}</CodeBlock>
</details><br/>

Now we can begin our journey.

### Top Level Values
The configuration is a JSON file that can get quite deep. This section explains the top level of the file. For the deeper parts refer to their specific sections.

#### `"name"` - required string
This is the name of your system, it differentiates you from the crowd, so be creative! Do note however that this has no impact on the system's behavior and can be changed later, so don't worry if you can't come up with a catchy name right away.
 
#### `"version"` - required string (Semantic Version)
The current version of your system, so you and your colleagues can identify how far you've come. Again, this does not impact the system's behavior, and can be changed later (and should be, as you update your system with new capabilities!)

#### `"envs"` - required Array
This Array can be empty. Populate it with static values to be used in your BOps! Different from the `"constants"` in each BOp, this is available for all bops, but similarly, cannot be changed.

If populated the values must be objects with two properties: `key` and `value`, whose values must be strings.

### Deep Properties
These next values are what you should pay more attention as they are the pieces that define the functionality of the system. Since they have enough details to care about, we have a dedicated page for each.

#### `"addons"` - required Array
Addons are how you modify your system beyond what MSYS comes with out of the box. Non exaustively, Addons can modify or create Schemas, make more functions available to use within BOps, create new BOps, or even execute them.

For info on how you can create your own Addon, head to the [Creating Your Addon](../../guides/creating-addons.md) guide.
 
Information on how to configure addons can be found in the [Addons Section](./addons-config.md).
 
#### `"schemas"` - required Array
Schemas define the format of the entities your system will work with. If you sell cars, a car should be defined with properties that matter to you such as the amount of seats, the engine power and the price. Once that is defined your system will know about this kind of entity, and Addons can learn about it and provide you with actions to do with those entities.
 
More info can be found in the [Schemas Section](./schema-config.md).
 
#### `"businessOperations"` - required Array
BusinessOperations, or BOps as we like to call them, are the heart of your system. They are what define what your system should do with the data it recieves and holds. Here lies your business logic, applied to the data it interacts with.

For instance, you can tell your system what it should do when your user tells the system they are 500 years old. Should it refuse to save this info or should it store it in your database anyways? In short, here is where the logic, the brains of the operations lives, so take good care of it!

More info can be found in the [BOps Section](./bops/bops.md).

## Managing Configuration Files
When your system is just a few functions long, it is easy to do it just in a single file, however, you'll soon notice that it can get quite long, quite fast, making managing your system increasingly painful. For mitigating this issue, MSYS allows for file splitting your configuration.

Doing this is quite easy, thankfully! Just have a main file, where you specify the system name and version, and for Addons, Business Operations, and Schemas, you can declare either their relative folder path (and MSYS will load all files in that folder), or individual file paths.

Here's an Example:
```json
{
  "name": "example-system",
  "version": "1.0.0",
  "envs": [],
  "schemas": [
    "./schemas/mySchema1.json",
    "./schemas/mySchema2.json"
  ],
  "businessOperations": "./all-my-bops/*",
  "addons": [
    {...},
    "./more-addons/my-cool-addon.json"
  ]
}
```
