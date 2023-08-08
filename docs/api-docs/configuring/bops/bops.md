---
sidebar_position: 1
---
# About BOps
The Business Operations are the heart of your business, they can be whatever you need them to be, and should represent a process in your system.

Users cannot be younger than 13 years old? That's a business operation. Should you send an email when users complete their 10th purchase? Another BOps!

## Creating A BOps
In the configuration file, `"businessOperations"` is a list of objects. Each of those objects contains a chunk information for Meta-System to understand a part of the business rules of your company/product.

### BOps Properties
A BOps can have the following properties specified:
#### `"input"` - [Object Definition](../object-definition) (required)
Information your operation needs to have in order to be executed. These are the function parameters.

#### `"output"` - [Object Definition](../object-definition) (required)
This is the information output by your function. What is returns.

#### `"constants"` - Single Parameter Type (required Array)
This is all the information that your function uses and is not modified throughout its execution. For example, a BOp "plusTwo", that takes in any number and outputs it plus two should have the value `"2"` as a constant.

This is treated more in depth in the [Constants and Variables](./constants-and-variables) section.

#### `"variables"` - Single Parameter Type (required Array)
Variables is a list of the named values that may change during the execution of a BOp. It can be used to record, for instance, how many times a loop was executed.

There are specific built in functions for modifying these values. Check [Constants and Variables](./constants-and-variables) section for more information.

#### `"configuration"` - Bops Module (required Array)
This is the soul of your business operation, where all the logic is set and the flow is executed. It is a list of all the steps that exists in the operation, their dependencies, data, and the functions themselves.

Since this is quite a complex subject, we have a page dedicated to the rules of this function, and what it does. See [BOps Configuration](./bops-configuration).

#### `"ttl"` - Number (optional)
Defines a Time To Live for this BOps. If this time is exceeded in milliseconds, MSYS will reject the promise of the BOp.

#### `"identifier"` - String (required)
Identifies this BOp with a string for Meta-System. This string will be used to reference the BOp anywhere in your system.
