# HTTP Fizz-Buzz Tutorial
The classic old FizzBuzz but with a twist: Triggered through HTTP!

In this tutorial, we'll walk through the process of creating a Fizz Buzz HTTP example using Meta-System. This example will demonstrate how to build a simple Fizz Buzz service that takes a number as input and returns a text response based on whether the number is divisible by 3, 5, both, or neither.

On this tutorial you will also get to know in practice how Meta-System builds the flow of Business Operations.

Here's the result. You can either start building from an empty configuration file, or just understand how the configuration is structured by reading this page step-by-step.

import CodeBlock from '@theme/CodeBlock';
import ExampleConfig from '!!raw-loader!/static/jsons/example.txt';

<details>
  <summary><b> Reveal Result
</b></summary>
<CodeBlock className="language-json">{ExampleConfig}</CodeBlock>
</details>

You are probably thinking something like: "Well, that's a lot for a simple FizzBuzz example!". You are correct. For a FizzBuzz that might be too much, but here come's the great benefit of Meta-system, **Building this FizzBuzz is no different from anything other kind of software you may build with MSYS**!

Due to the data-centric nature of Meta-System in which all entities are on the same level of abstraction, adding more functionality or modifying existing ones will never be harder than doing just the basic.

:::success GUI Tool - Meta-Editor
We know that writing JSONs manually is too much of a problem, and gives a really bad visibility for the activity you're trying to perform. To solve this, Meta-Editor, the Open-Source tool for configuring your Meta-System is already under development! You can check the [**Discord**](https://discord.gg/ndGsnbTW7V) for more information.
:::

## Prerequisites

- Basic understanding of JSON configuration. Learn it [here](../api-docs/configuring/basics.md).
- Understanding how Meta-System configures a flow. References [here](../api-docs/architecture/flows.md), [here](../api-docs/configuring/bops/flows.md), and [here](../api-docs/configuring/bops/dependencies.md).

## Step 1: Understanding the Problem

Before we start building the Fizz Buzz example, let's understand the problem and the business logic we need to implement.

Fizz Buzz is a classic programming problem where we need to print numbers from 1 to a given input number. However, when the number is divisible by 3, we print "Fizz," when it's divisible by 5, we print "Buzz," and when it's divisible by both 3 and 5, we print "FizzBuzz."
Step 2: Defining Business Operations

We'll start by defining the necessary business operations in the JSON configuration. Each business operation is composed of modules that define the logic for the Fizz Buzz example. We'll just declare them first.

### isDivisibleBy Operation

This operation checks if a given number is divisible by a given divisor.

- Input: `number` (type number), `divisor` (type number)
- Output: `boolean` (type boolean)
- Constants: `true`, `false`, `zero`

```json
{{
  "identifier": "isDivisibleBy",
  "input": {
    "number": { "type": "number", "required": true },
    "divisor": { "type": "number", "required": true }
  },
  "output": {
    "boolean": { "type": "boolean", "required": true }
  },
  "constants": [
    { "type": "boolean", "value": true, "name": "true" },
    { "type": "boolean", "value": true, "name": "false" },
    { "type": "number", "value": 0, "name": "zero" }
  ],
  "variables": [],
  "configuration": []
}}
```

### fizzBuzz Operation

This operation implements the Fizz Buzz logic using the isDivisibleBy operation.

- Input: `number` (type number)
- Output: `text` (type number)
- Constants:`fizz`,`buzz`,`fizzBuzz`,`fizzDivisor`, `buzzDivisor`

```json
{
  "identifier": "fizzBuzz",
  "input": {
    "number": { "type": "number", "required": true }
  },
  "output": {
    "text": { "type": "string", "required": true }
  },
  "constants": [
    { "type": "string", "value": "Fizz!", "name": "fizz" },
    { "type": "string", "value": "Buzz!", "name": "buzz" },
    { "type": "string", "value": "FizzBuzz!", "name": "fizzBuzz" },
    { "type": "number", "value": 3, "name": "fizzDivisor" },
    { "type": "number", "value": 5, "name": "buzzDivisor" }
  ],
  "variables": [],
  "configuration": []
}
```

## Step 3: Building the isDivisibleBy Operation

We'll begin by creating the isDivisibleBy operation and its modules.

1. Modulus Module (modulus): This module calculates the modulus of the input number and divisor.
1. EqualTo Module (equalTo): This module checks if the modulus result is equal to zero, indicating divisibility.
1. Output Module: This module outputs the result of the equalTo module as a boolean.

Result:
```json
[{
  "key": 1,
  "dependencies": [
    { "origin": "input", "originPath": "number", "targetPath": "A" },
    { "origin": "input", "originPath": "divisor", "targetPath": "B" }
  ],
  "moduleName": "modulus",
  "moduleType": "internal"
},
{
  "key": 2,
  "dependencies": [
    { "origin": 1, "originPath": "result.result", "targetPath": "A" },
    { "origin": "constant", "originPath": "zero", "targetPath": "B" }
  ],
  "moduleName": "equalTo",
  "moduleType": "internal"
},
{
  "key": 0,
  "dependencies": [
    { "origin": 2, "originPath": "result.isEqual", "targetPath": "boolean" }
  ],
  "moduleName": "output",
  "moduleType": "output"
}]
```

## Step 4: Building the fizzBuzz Operation

Next, we'll create the fizzBuzz operation and its modules.
1. isDivisibleBy Modules: We'll create two instances of the isDivisibleBy operation to check divisibility by 3 and 5 respectively.
1. AND Module: This module performs a logical AND operation on the results of the two isDivisibleBy modules.
1. IF Modules: We'll create three instances of the IF module to handle the Fizz Buzz logic:
    - The first IF module checks if the number is divisible by both 3 and 5 and returns "FizzBuzz" if true.
    - The second IF module checks if the number is divisible by 3 and returns "Fizz" if true.
    - The third IF module checks if the number is divisible by 5 and returns "Buzz" if true.
1. Output Module: This module outputs the result of the appropriate IF module as text.

Result:
```json
[{
  "key": 2,
  "moduleName": "isDivisibleBy",
  "moduleType": "bop",
  "dependencies": [
    { "origin": "input", "originPath": "number", "targetPath": "number" },
    { "origin": "constants", "originPath": "fizzDivisor", "targetPath": "divisor" }
  ]
},
{
  "key": 3,
  "moduleName": "isDivisibleBy",
  "moduleType": "bop",
  "dependencies": [
    { "origin": "input", "originPath": "number", "targetPath": "number" },
    { "origin": "constants", "originPath": "buzzDivisor", "targetPath": "divisor" }
  ]
},
{
  "key": 4,
  "moduleName": "and",
  "moduleType": "internal",
  "dependencies": [
    { "origin": 2, "originPath": "result.boolean", "targetPath": "A" },
    { "origin": 3, "originPath": "result.boolean", "targetPath": "B" }
  ]
},
{
  "key": 6,
  "moduleName": "if",
  "moduleType": "internal",
  "dependencies": [
    { "origin": 3, "originPath": "result.boolean", "targetPath": "boolean" },
    { "origin": "constant", "originPath": "buzz", "targetPath": "ifTrue" },
    { "origin": "input", "originPath": "number", "targetPath": "ifFalse" }
  ]
},
{
  "key": 5,
  "moduleName": "if",
  "moduleType": "internal",
  "dependencies": [
    { "origin": 2, "originPath": "result.boolean", "targetPath": "boolean" },
    { "origin": "constant", "originPath": "fizz", "targetPath": "ifTrue" },
    { "origin": 6, "originPath": "result.outputValue", "targetPath": "ifFalse" }
  ]
},
{
  "key": 1,
  "moduleName": "if",
  "moduleType": "internal",
  "dependencies": [
    { "origin": 4, "originPath": "result.bothTrue", "targetPath": "boolean" },
    { "origin": "constant", "originPath": "fizzBuzz", "targetPath": "ifTrue" },
    { "origin": 5, "originPath": "result.outputValue", "targetPath": "ifFalse" }
  ]
},
{
  "key": 0,
  "dependencies": [
    { "origin": 1, "originPath": "result.outputValue", "targetPath": "text" }
  ],
  "moduleName": "output",
  "moduleType": "output"
}]
```

## Step 5: Configuring the HTTP Endpoint

Now that we have defined the business operations, it's time to configure the HTTP endpoint using the provided JSON configuration.

1. HTTP Addon Configuration: We'll use the `http-meta-protocol` addon at version `4.0.0-rc5` to create an endpoint that accepts a number in the route parameter. See the addon's documentation [here](https://www.npmjs.com/package/http-meta-protocol).
1. Route Configuration: Let's declare the new route.
1. Input Mapping: We'll map the route parameter to the input of the fizzBuzz operation.
1. Result Mapping: We'll configure the HTTP response, including the status code, headers, and response body using the text output from the fizzBuzz operation.

By now you should have a working Fizz Buzz service!

<details>
  <summary><b> Reveal Result
</b></summary>
<CodeBlock className="language-json">{ExampleConfig}</CodeBlock>
</details>

## Step 6: Deploy and Test

With the configuration in place, just run it using `meta-system run ./<file-name>.json`. Once running, you can test the service by sending GET requests to the defined route, such as [http://localhost:8080/number/15](http://localhost:8080/number/15), and observe the Fizz Buzz responses in the HTTP responses. Change the last number and observe the responses!

## Conclusion

Congratulations! You've successfully created a Fizz Buzz HTTP example using Meta-System! This tutorial walked you through the process of defining business operations, configuring modules, and setting up an HTTP endpoint to implement the Fizz Buzz logic.

Tell us how was your experience on the [**discord**](https://discord.gg/ndGsnbTW7V) channel!
