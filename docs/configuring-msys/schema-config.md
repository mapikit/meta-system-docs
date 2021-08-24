---
sidebar_position: 2
---
# Schemas
Schemas, in short, are the specifications of the data structure common to all the system. If your system is about cars, you will need to say what properties are relevant for your system about the cars. Which brand is it? What color, which year, the model, seat count? Any information can be put in the schemas.

By creating schemas, you are also creating some functions to be used in your Business Operations. When you defined the "car" schema, Meta-System also made available for you some functions to interact with the data under that schema:
- Create
- Delete
- Delete By Id
- Update
- Update By Id
- Get
- Get By Id

See the `API reference` for info on how to use them.

Now let's see how we can define a schema.

## Properties
#### **`"name"` - string**
The name of your entity type. This name will be used to access and modify the data.

#### **`"format"` - ObjectDefinition**
> *ObjectDefinition* is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. [Click here to Learn More](./object-definition).

This is the expected structre for this schema. This is used to parse the queries into something the database understands.
