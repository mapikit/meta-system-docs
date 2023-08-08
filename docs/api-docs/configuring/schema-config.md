---
sidebar_position: 2
---
# Schemas
Schemas, in short, are the specifications of the data structure common to all the system. If your system is about cars, you will need to say what properties are relevant for your system about the cars. Which brand is it? What color, which year, the model, seat count? Any information can be put in the schemas.

When you create schemas, you only create a data structure for Meta-System to know. For you to give actions to your schemas, such as saving them to a DB, fetching them, or any other action, you should [extend your system with an Addon](../architecture/extending-functionality.md).

Let's see how we can define a schema.
## Properties
#### **`"name"` - string**
The name of your entity type. This name will be used to access your schema and its actions.

#### **`"format"` - ObjectDefinition**
> *ObjectDefinition* is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. [Click here to Learn More](./object-definition).

This is the expected structre for this schema. This is used to parse the queries into something the database understands.

#### **`"identifier"` - string**
Since the name of your schema can be changed, we need something to be static about this data. This is what this field is for. DB Protocols often use this field to compare different versions of schemas and apply structural changes to the dabases when needed.
