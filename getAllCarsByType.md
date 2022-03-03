- **getAllCarsByType(type)**
  Returns an array of car objects of given type

  - Parameters: type of the car to be searched
  - Returns an array of car objects of given type. If no car of given type is found, returns an empty array.
  - If a parameter type is missing, an exeption **'missing parameter'** is thrown.
  -
  - The format of the returned array of object is:

```json
[
     "id": ,
    "manufacturer": "",
    "type": "",
    "accessories": [],
    "price": ,
    "extras": []
]
```

Before tests create `storage` -object from the `CarStorage` class with the default data

### Test 1: getAllNumbersByType with types: home, mobile and work

#### type home returns first phones of the phones array

````js
register.getAllNumbersByType('home');
```js

returns:

```json
[
    { "firstname":"Leila", "lastname":"Hökki","number":{"type":"home", "tel":"12345678"}},
    { "firstname":"Matt", "lastname":"River","number":{"type":"home", "tel":"56789012"}}
]
````

#### type mobile returns only one object in the array

```js
register.getAllNumbersByType("mobile");
```

returns:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "04123456" }
  }
]
```

#### type work returns last and other items in the phones array

```js
register.getAllNumbersByType("work");
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "05040302" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "32145678" }
  }
]
```

### if type doesn't exist returns an empty array

```js
register.getAllNumbersByType("x");
```

returns []
