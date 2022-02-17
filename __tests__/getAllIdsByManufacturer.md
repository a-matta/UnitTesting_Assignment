**getAllIdsByManufacturer(value)**
Returns all ids of the cars matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

## Test 1: Returns all ids of the cars matching the value of manufacturer

```js
register.getAllIdsByManufacturer("WBM");
```

returns

```json
[1]
```

## Test 2: Return with parameters id:2 & manufacturer

```js
register.getAllIdsByManufacturer("Baas");
```

```json
returns [2]
```

## Test 3: get with parameters id:2 & manufacturer

```js
register.getAllIdsByManufacturer(FauV);
```

```json
returns [3]
```

## Test 4: wrong type or name returns an empty array

```js
register.register.getAllIdsByManufacturer(33);
register.register.getAllIdsByManufacturer("c");
register.rgetAllIdsByManufacturer("3");
register.rgetAllIdsByManufacturer("322");
```

returns []

## Test 5: missing parameter throws an exception

```js
register.getAllIdsByManufacturer("3");
();
register.getAllIdsByManufacturer("3");
("");
```

throws an exception `'missing parameter'`
