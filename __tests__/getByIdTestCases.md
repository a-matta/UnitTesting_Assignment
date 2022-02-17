# Test cases

**getById(id)**
Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the car
- Return: returns the car object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test 1: use default data

get id of the car
returns

````json
["name","price"]
```
````

### Test 2: with custom data

returns the car object matching the id

#### testdata

```json
{
  "id": 3,
  "manufacturer": "FauV",
  "type": "solo",
  "accessories": [],
  "price": 15000,
  "extras": []
}
```

returns

```json
[""]
```

### Test 3: no car data in car storage

returns null if no match

```json
[]
```

#### testdata

```json
[]
```

returns an empty array

```json
[]
```

### Test 4: cars have no accessories - no accessories field present

#### test data

accessories is empty

```json
[
     "id": 3,
    "manufacturer": "FauV",
    "type": "solo",
    "accessories": [],
    "price": 15000,
    "extras": []
]
```

returns an empty array

```json
[]
```

### Test 5: cars have no extras - extras array is empty

#### test data

extras array is empty

```json
[
  {
    "id": 3,
    "manufacturer": "FauV",
    "type": "solo",
    "accessories": [],
    "price": 15000,
    "extras": []
  }
]
```

returns an empty array

```json
[]
```
