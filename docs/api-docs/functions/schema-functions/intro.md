---
sidebar_position: 1
---
# Intro to Schemas and Databases
Earlier on the [Schemas Section](../../configuring/schema-config) of this documentation, we hinted about operations that can be done with a schema once created. Those are the Schemas Functions. Unlike regular internal functions, schema functions are related to an specific schema and interact directly with the database for that schema. So, since these are rather special functions let's get some simple details out of the way:

## About the Databases
As you probably already know, a database is responsible for storing all the data of your system, be it users profiles, transactions history, market info or watever other info you may need to store. Given that there are plenty of Databases out there, Meta-System provides you a way of plugging any database to any schema through [DB Protocols](../../configuring/protocol-config). If there isn't already a package to connect to your DB protocol, you can create it and share with the community!

## What They All Have in Common
Since a Schema can connect to any DB if we have the DB Protocol for that, you might be thinking about the way to use them, that you would have to learn how to connect and use each one of them. Although that's not wrong, there are only two things that ** MAY*** differ from each DB Protocol: Each function's interface, and the main protocol configuration.

:::caution What MAY Differ: Function's Interface
Although each protocol may implement the Schemas Functions interfaces however they find it better, there is a recommended interface for those. A DB Protocol following the recommended interface can be changed for another one that also does, and such change would not require any updates to our BOps configuration.
:::

## The Recommended Interface
There are two main aspects of the functions' interface which we need to address: Each function's inputs/outputs, and the [Query Model](./queries).
We will dedicate most of this file and the next ones in this folder to say how is the recommended interface for each Schema Function:

- [Insert](./insert)
- [Find](./find)
- [Find By Id](./find-by-id)
- [Update](./update)
- [Update By Id](./update-by-id)
- [Delete](./delete)
- [Delete By Id](./delete-by-id)
- [Count](./count)
