# Test cases

- **getTotalPrice(id)**
  Returns the total price of the car including the total price of the extras

- Parameters: id of the car
- Return: The price of the car including the total price of theg extras
- if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: Returns the total price of the car including the total price of the extras

````js
register.getTotalPrice(1);
```
```json
returns: 27500;
````

### Test 2: returns the id of the car

`````js
register.getTotalPrice(3);
```
````json
returns []
`````

### Test 3: if no car with the given number is found throws an exeption `nothing found with given id`

`````js
register.getTotalPrice();
```
````json
returns throws an exception
`nothing found with given id`
`````
