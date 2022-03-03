## Constructor Test Cases

### Test 1: object created with given data

new CarStorage(datastorage);

**constructor(jsonData)**
The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test 2: missing parameter throws an exception

```js
new CarStorage();
```

this will throw an exception `' data storage missing'`
