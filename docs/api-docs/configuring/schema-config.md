---
sidebar_position: 2
---
# Schemas
Schemas, in short, are the specifications of the data structure common to all the system. If your system is about cars, you will need to say what properties are relevant for your system about the cars. Which brand is it? What color, which year, the model, seat count? Any information can be put in the schemas.

When you creante schemas, you will also need ways to fetch/save that data, and Meta-System requires you to specify such a way through declaring a [DB Protocol](./protocol-config.md) with some functions to interact with the data under that schema:
- Insert
- Delete
- Delete By Id
- Update
- Update By Id
- Find
- Find By Id

Such DB Protocols is what connects your schema with the data storage of your choice, like a Redis, MongoDB, or even the memory of the system.

Now let's see how we can define a schema.

## Properties
#### **`"name"` - string**
The name of your entity type. This name will be used to access and modify the data.

#### **`"format"` - ObjectDefinition**
> *ObjectDefinition* is a type present in multiple parts of meta-system. It is the standard we created for defining types of objects. [Click here to Learn More](./object-definition).

This is the expected structre for this schema. This is used to parse the queries into something the database understands.

#### **`"dbProtocol"` - string**
This field should be the [identifier of the DB protocol](./protocol-config#identifier---string-required) you want to use in your schema.

#### **`"identifier"` - string**
Since the name of your schema can be changed, we need something to be static about this data. This is what this field is for. DB Protocols often use this field to compare different versions of schemas and apply structural changes to the dabases when needed.
