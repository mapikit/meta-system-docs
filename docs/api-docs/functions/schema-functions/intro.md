---
sidebar_position: 1
---
# Intro to Schemas and Databases
Here you will find a bunch of functions called `Schema Functions`. Unlike regular internal functions, schema functions are related to an specific schema and interact directly with the database collection of that schema. So, since these are rather special functions let's get some simple details out of the way:

### About the Database
As you probably already know, a database is responsible for storing all the data of your system, be it users profiles, transactions history, market info or watever other info you may need to store. However there are many databases out there, which one will we be using? Well, currently meta-system uses [MongoDB](https://www.mongodb.com/). After you setup your mongo database all you need to do to use your database in meta-system is supply the database connection url in the `system configuration`.

If you need help setting up you MongoDB here are some suggested tutorials for your OS:
  - [Windows Tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
  - [macOs Tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
  - [Linux Tutorials](https://docs.mongodb.com/manual/administration/install-on-linux/)

### Accessing a Database
After you have your database up and running all you need to do, as mentioned previously, is supply the [mongo connection string](https://docs.mongodb.com/manual/reference/connection-string/) to the `dbConnectionString` property in you system config. That is all the meta-system needs to start creating your collections.

#### What are Collections?
Don't worry, you may have never heard this term here before, but it is quite simple: MongoDb separates its data into collections, much like you separate your files into folders or directories. A database can have many collections, for instance, your database can have a collection called "users" that stores the info about your users and another collection called "prices" that stores the pricing info for you business. This makes for a more organized database and makes it rather easy to manage you data.

### Creating a new Collection
Creating a new Collection in meta-system is as simple as writing its name. Literally. Every schema you create corresponds to a collection; when your system starts it creates all necessary collections after the registered schemas names. So, in practice, you don't even need to bother with acctually creating the collections, just create a schema and you are all done!

### Interacting with a Collection
So you create a schema and the meta-system creates a collection for it, brilliant! However, how do you interact with said collections? Well, thats where the `schema functions` come in. Schema functions are functions capable of interacting directly with your database (i.e. collections) and, in general, they follow the same base configuration. For every `schema function` the property `moduleType` should be equal to `schemaFunction` and the property `modulePackage` should be the name of the schema the function will act upon. Finally, the `moduleName` should be name of the operation (available options are `create`, `get`,`getById`, `update`, `updateById`, `delete` and `deleteById`, all of which will be further explained below).

### Simple Example
A nice way to undestand how the configuration works is by using an example so, consider the following module configuration:

```javascript
// This ModuleConfig goes inside the "configuration" property in the Bop
{
  "moduleType": "schemaFunction", 
    // Here we define it as a schemaFunctiion
  "moduleName": "create", 
    // Now we define it as a creation (insertion) function
  "modulePackage": "numbers", 
    // And then we say on which collection we will insert (collection "numbers")
  "dependencies": [
    // Finally we define what will be inserted
    // In this case the value of the constant "constantTen" will be 
    // inserted in the property "valid" of the new database entity
    { "origin": "constants", "originPath": "constantTen", "targetPath": "entity.valid" }
  ]
}
```
### What Now?
Now that you know how `schema functions` work, we can get into the specifics of each function.
