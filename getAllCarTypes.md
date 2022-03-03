**getAllCarTypes()**
Returns an array of different car types.

- Parameters: none
- Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

### Test 1: Returns an array of different car types.

returns all car types

````js
register.getAllCarTypes('XGT');
```js

returns :
```json
{
    "id": 1,
    "manufacturer": "WBM",
    "type": "XGT",
    "accessories": ["radar", "coffee warmer", "hook"],
    "price": 250000,
    "extras": [{
        "name": "winter tires",
        "price": 1500
      },
      {
        "name": "summer tires",
        "price": 1000
      }
    ]
  },
````

### type returns all objects in the array

````js
register.getAllCarTypes('Coupe');
```js

returns:
```json
{
  "id": 2,
  "manufacturer": "Baas",
  "type": "Coupe",
  "accessories": ["clock","speedometer"],
  "price": 35000,
  "extras": [{
      "name": "manual",
      "price": 10
    },
    {
      "name": "warranty",
      "price": 200
    }
  ]
},
````

### type returns all objects in the array

    ```js

register.getAllCarTypes('solo');

````js
returns:

```json
 {
    "id": 3,
    "manufacturer": "FauV",
    "type": "solo",
    "accessories": [],
    "price": 15000,
    "extras": []
  }
````

### if type doesn't exist returns an empty array

```js
register.getAllCarTypes("x");
```

returns []

### Test 2: if type is missing throws an exception

```js
register.getAllCarTypes();
```

throws an exception `'missing parameter'`
