---
sidebar_position: 2
---
# Schema Configuration
Schemas are the specifications of the data structure common to all the system. Lets see how we can define them.

## Properties
#### **`"name"` - string**
The name of your entity type. This name will be used to access and modify the data.

#### **`"format"` - ObjectDefinition**
> *ObjectDefinition* is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. [Click here to Learn More](./object-definition).

This is the expected structre for this schema. This is used to parse the queries into something the database understands.
