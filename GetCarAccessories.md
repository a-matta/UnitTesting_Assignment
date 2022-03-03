- **GetCarAccessories(id)**

Returns an array of car accessories. If none found, returns an empty array.

- Parameters: id of the car
- Return: returns accessories as an array

### Test 1: get the id of the car

```js
register.GetCarAccessories(2);
```

The returned value will be:

```json
{ "accessories": ["clock", "speedometer"] }
```

### Test 2: returns accessories as an array

```js
register.GetCarAccessories(1);
```

The returned value will be:

```json
{ "accessories": ["radar", "coffee warmer", "hook"] }
```

### Test 3. Returns an array of car accessories. If none found, returns an empty array.

```js
register.GetCarAccessories("x");
```

The returned value will be:

```
returns []
```

```js
register.GetCarAccessories(22);
```

The returned value will be:

```
returns  []
```

### Test 4. wrong type

```js
register.GetCarAccessories(2222);
```

The returned value will be:

```
returns  `null`
```
