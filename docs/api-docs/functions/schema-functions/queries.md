---
sidebar_position: 2
---

# Queries - Recommended Interface
:::caution
The query model described here on this page only applies to DB protocols which follow the recommended interface.
:::

When working with some schema functions, namely `find`, `update` and `delete`, you have come across a property `query` which receives a query type. But what are queries exactly?

## What are Queries
Queries are a way to look for values stored in you database that match some epecific criterias. For instance, lets say you are storing all of your users data in a database. You can use a query to find all the users whose age is higher than 18. Or maybe you want to find all the users who have an email registered. Possibly you want both: the users that are over 18 and have registered an email. **Queries are a simple way to filter the entities stored in you database**

## The Query Structure
Well, now we know what they do, but how do you use them? Well, its quite easy. Queries are an specially structured object where every property corresponds to the namesake property of the stored entities. Inside those properties you can uses some epecific terms to identify the desired condition. This may sound complicated, but lets look at an example and you will soon realise it is quite simple:

Consider you have the following data stored in a dataset called `users`:
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
  age: {
    $and: [
      {
        greater_or_equal_to: 16,
        lower_or_equal_to: 20
      }
    ]
  }
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
Now, lets say you want all the data that matches one of values in a list. For instance. let's say you want all the user data if the age of the user is 16, 18 or 30. You could use an `$or` tag and a few `equal_to` tag, but a more convinient way of doing this is to simple use the `one_of` tag. This tag matches all the data that is equal to one of the given possibilities. Example:
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

| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| exists | `boolean` | Matches the data if value not undefined |
| equal_to | `string` | Matches the data if value is equal to the query value |
| not_equal_to | `string` | Matches the data if value is **not** equal to the query value |
| one_of | `Array<string>` | Matches the data if value is equal to one of the query values |
| not_one_of | `Arrayy<string>` | Matches the data if value is not equal to any of the query values |
| regexp | `string` | Matches the data if the string matches the given regular expression (more about regex [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)) |

### Number
The following tags can be applied to any numeric values you have stored, such as ages or amounts.

| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| exists | `boolean` | Matches the data if value not undefined |
| equal_to | `number` | Matches the data if value is equal to the query value |
| not_equal_to | `number` | Matches the data if value is **not** equal to the query value |
| one_of | `Array<number>` | Matches the data if value is equal to one of the query values |
| not_one_of | `Array<number>` | Matches the data if value is not equal to any of the query values |
| greater_than | `number` | Matches the data if stored value is higher than given value |
| greater_or_equal_to | `number` | Matches the data if stored value is higher or equal to the given value |
| less_than | `number` | Matches the data if stored value is less than given value |
| less_or_equal_to | `number` | Matches the data if stored value is less or equal to the given value |

### Date
The following tags can be applied to any date values you have stored, such as birthdates or expiration dates.

| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| exists | `boolean` | Matches the data if value not undefined |
| equal_to | `Date` | Matches the data if value is equal to the query value |
| not_equal_to | `Date` | Matches the data if value is **not** equal to the query value |
| one_of | `Array<Date>` | Matches the data if value is equal to one of the query values |
| not_one_of | `Array<Date>` | Matches the data if value is not equal to any of the query values |
| greater_than | `Date` | Matches the data if stored date comes after the given date |
| greater_or_equal_to | `Date` | Matches the data if stored date comes after or is equal to the given date |
| less_than | `Date` | Matches the data if stored date comes before the given date |
| less_or_equal_to | `Date` |  Matches the data if stored date comes before or is equal to the given date |

### Boolean
The following tags can be applied to any boolean (true/false) values you have stored. Usually used in "flag values" such as `isPremiumUser`, `emailHasBeenConfirmed`, etc.  

| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| exists | `boolean` | Matches the data if value not undefined |
| equal_to | `boolean` | Matches the data if value is equal to the query value |
| not_equal_to | `boolean` | Matches the data if value is **not** equal to the query value |

### Array
The following tags can be applied to any array (list) values you have stored. This type is used for lists of items, such as owned cars, registed documents, etc. Since we can have arrays of any other types, when mentioned "`array type`" we are referring to the kind of the items in the array.

| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| identical_to | `array` of `array type` | Matches if the array is identical to the given item |
| contains_all | `array` of `array type` | Matches if the stored list contains all the given items |
| contains | `array type` | Matches if the stored list contains at least one of the given item |
| not_contains | `array type` | Matches if the stored list does not contains the given item |
| contains_one_of | `array` of `array type` | Matches if the stored list has one of the given items |
| contains_none_of | `array` of `array type` | Matches if the stored list does not contains any of the given items |
| size | `number` | Matches the data if the array length (number of stored items) is equal to the given number |
| exists | `boolean` | Matches the data if value not undefined |

In addition to that, the subtypes of arrays have a couple more tags to be used:
#### Array of Strings
| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| contains_regexp | `string` (Regexp-like) | Matches if the array has at least one string that matches the Regexp |

#### Array of Numbers
| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| contains_greater_than | `number` | Matches if the array contains one number greater than the given item |
| contains_greater_or_equal_to | `number` | Matches if the array contains one number greater or equal to the given item |
| contains_less_than | `number` | Matches if the array contains one number less than the given item |
| contains_less_or_equal_to | `number` | Matches if the array contains one number less or equal to the given item |

#### Array of Dates
| **Tag** | **Type** | **Decription** |
| ------- | ---- |-------------- |
| contains_greater_than | `Date` | Matches if the array contains one Date that comes after to the given item |
| contains_greater_or_equal_to | `Date` | Matches if the array contains one Date that comes after or is equal to  the given item |
| contains_less_than | `Date` | Matches if the array contains one Date that comes before the given item |
| contains_less_or_equal_to | `Date` | Matches if the array contains one Date that comes before or is equal to the given item |

> Arrays of Objects and arrays Booleans does not have additional tags.

:::caution
This query model is still improving and currently there is no manner to concatenate two rules for a single item in an array to match (Like for a number in a list to be at the same time, greater than X, and not equal to Y). This is to be changed in future versions.
:::