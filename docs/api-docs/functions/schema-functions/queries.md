---
sidebar_position: 2
---

# Queries
When working with some schema functions, namely `get`, `update` and `delete`, you have come across a property `query` which receives a query type. But what are queries exactly?

## What are Queries
Queries are a way to look for values stored in you database that match some epecific criterias. For instance, lets say you are storing all of your users data in a database. You can use a query to find all the users whose age is higher than 18. Or maybe you want to find all the users who have an email registered. Possibly you want both: the users that are over 18 and have registered an email. **Queries are a simple way to filter the entities stored in you database**

## The Query Structure
Well, now we know what they do, but how do you use them? Well, its quite easy. Queries are an specially structured object where every property corresponds to the namesake property of the stored entities. Inside those properties you can uses some epecific terms to identify the desired condition. This may sound complicated, but lets look at an example and you will soon realise it is quite simple:

Consider you have the following data stored in a collection `users`:
```javascript
[  
  { name: "John", age: 16, email: "mynameisnotjohnny@gmail.com", login: { username: "johnny33", password: "12345" } },
  { name: "Alice", age: 30, login: { username: "Al1c3", password: "passphrase" } },
  { name: "Trevor", age: 17, email: "trevorcinna@gmail.com", login: { username: "roverT", password: "trv2003" } },
  { name: "Sidney", age: 24, email: "syd@gmail.com", login: { username: "Syd", password: "hardpassword" } },
]
```
### A Simple Query
Now, lets sopose you need all the users that are both over 18 and have an email registered. You would need the following query:
```javascript
{
  age: { greater_or_equal_to: 18 }, // property "age" is greater or equal to 18
  email: { exists: true } // emails exists
}
```
In this example the only data that matches the query is 
```javascript
[
  { name: "Sidney", username: "Syd", age: 24, email: "syd@gmail.com" }
]
```

### And Query
Another possibility is to make sure a single property matches multiple conditions, for that you'll need the `$and` tag, which receives an array of  conditions and matches only the data that satisfy **all** the conditions. For example, let's say we need all the users whose age is between 16 and 20 (inclusive); we would need the following query:
```javascript
{
  $and: [
    { age: { greater_or_equal_to: 16 } },
    { age: { lower_or_equal_to: 20 } },
  ]
}
```
In this case the only matching data would be:
```javascript
[
  { name: "John", username: "johnny33", age: 16, email: "mynameisnotjohnny@gmail.com" },
  { name: "Trevor", username: "roverT", age: 17, email: "trevorcinna@gmail.com" },
]
```
As you can see the `$and` tag is one of the special ones: instead of an object it is actually an array of objects. The only other tag that works in this way is the `$or` tag which, as expected, oposite to the `$and` tag, selects the data if it matches **at least one** of the conditions in the array.

### Deep Query
Sometimes you want to verify the value of a nested property intead of the prorperty itself. In order to do this all you need to do is nest the property in the query just as is in the sotored data. For example, let's say you want to find all the users whose `password` (inside the `login` property) is equal to `"12345"`. For that you would need the query:
```javascript
{
  login: {
    password: {
      equal_to: "12345"
    }
  }
}
```
This query would only match the data:
```javascript
[
  { name: "John", age: 16, email: "mynameisnotjohnny@gmail.com", login: { username: "johnny33", password: "12345" } },
]
```

## One of Query
Now, lets say you want all the data that matches one of values in a list. For instance. let's say you want all the user data if the age of the user is 16, 18 or 30. You could use an `$or` tag and a few `equalt_to` tag, but a more convinient way of doing this is to simple use the `one_of` tag. This tag matches all the data that is equal to one of the given possibilities. Example:
```javascript
{
  age: {
    one_of: [ 16, 18, 30 ]
  }
}
```
Do note that, unlike the previous queries, this one receives an array of possible values instead of a single value.

If this query was to be applied the matching data would be:
```javascript
[
  { name: "John", age: 16, email: "mynameisnotjohnny@gmail.com", login: { username: "johnny33", password: "12345" } },
  { name: "Alice", age: 30, login: { username: "Al1c3", password: "passphrase" } },
]
```


## Tags Table
Here you can find a reference of all the available tags to be used in queries. They are separated by data type, meaning that those tags are only available for that specific type. For instance, if the property you are quering by is a number, one of the possible tags is "higher_than". However, if the property is a string, such tag is not available.

### String
The following tags can be applied to any string (text) values you have stored. So names, passwords, emails, descriptions, etc.

| **Tag** | **Decription** |
| ------- | -------------- |
| exists | Matches the data if value not undefined |
| equal_to | Matches the data if value is equal to the query value |
| not_equal_to | Matches the data if value is **not** equal to the query value |
| one_of | Matches the data if value is equal to one of the query values |
| not_one_of | Matches the data if value is not equal to any of the query values |

