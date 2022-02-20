# Test cases

##

**getPriceWithoutExtras(id)**
Returns the price with out extras

- Parameters: id of the car
- Return: The price of the car not including the price of the extras
- if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: Returns the price with out extras

```js
register.getPriceWithoutExtras(1)*;
```

The returned value will be:

```
250000
```

### Test 2: The price of the car not including the price of the extras

```js
register.getPriceWithoutExtras(2)*;
```

The returned value will be:

```
350000
```

### Test 3 : if no car with the given number is found throws an exeption `nothing found with given id`

```js
register.getPriceWithoutExtras()*;
```

The returned value will be:

```
returns   'nothing found with given id'
throws an exception
```

## Test 4: wrong id returns an empty array

```js
register.getPriceWithoutExtras(s)*;
```

The returned value will be:

```
returns   []
```
