"use strict";

const CarStorage = require("./CarStorage");
const carsdata = require("./datastorage.json");

describe("Testing constructor", () => {
  test("Test 1: object created with given data", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.carStorage).toEqual(carsdata);
  });

  test("Test 2: missing parameter throws an exception", () => {
    expect(() => new CarStorage()).toThrow("car data storage missing");
  });
});

describe("Testing method getById", () => {
  test("Test 1 : if parameter missing throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getById()).toThrow("parameter missing");
  });

  test("Test 2 : returns the car object matching the id", () => {
    const testValues = {
      id: 3,
      manufacturer: "FauV",
      type: "solo",
      accessories: [],
      price: 15_000,
      extras: [],
    };
    const storage = new CarStorage(carsdata);
    expect(storage.getById(3)).toEqual(testValues);
  });

  test("Test 3 : returns the car object null if there is no match", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getById(-1)).toBeNull();
  });
});

describe("Testing method getAllIdsByManufacturer ", () => {
  test("Test 1: returns the car object null if there is no match", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getAllIdsByManufacturer()).toEqual([]);
  });

  test("Test 2: Returns an array of car id where the cars manufacturer matches the given value.", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getAllIdsByManufacturer("WBM")).toStrictEqual([1]);
  });
});
describe("Testing method getAllCarTypes ", () => {
  test("Test 1: Returns an array of different car types. ", () => {
    const testData = ["XGT", "Coupe", "solo"];
    const storage = new CarStorage(carsdata);
    expect(storage.getAllCarTypes()).toStrictEqual(testData);
  });

  test("Test 2: If no cars are found, returns an empty array. ", () => {
    const storage = new CarStorage([]);
    expect(storage.getAllCarTypes()).toStrictEqual([]);
  });
});

describe("Testing method getAllCarsByType ", () => {
  test("Test 1:  if parameter missing throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getAllCarsByType()).toThrow("missing parameter");
  });
  test("Test 2:Returns an array of car objects of given type ", () => {
    const testValues = [
      {
        id: 3,
        manufacturer: "FauV",
        type: "solo",
        accessories: [],
        price: 15_000,
        extras: [],
      },
    ];
    const storage = new CarStorage(carsdata);
    expect(storage.getAllCarsByType("solo")).toStrictEqual(testValues);
  });
});

describe("Testing method getCarAccessories ", () => {
  test("Test 1:  if parameter missing throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getCarAccessories()).toStrictEqual([]);
  });
  test("Test 2:Returns an array of car accessories ", () => {
    const expected = ["clock", "speedometer", "hook"];

    const storage = new CarStorage(carsdata);
    expect(storage.getCarAccessories(2)).toStrictEqual(expected);
  });
});

describe("Testing method getPriceWithoutExtras ", () => {
  test("Test 1:  if parameter missing throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getPriceWithoutExtras()).toStrictEqual([]);
  });
  test("Test 2:  return the price of the car", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getPriceWithoutExtras(3)).toStrictEqual(15_000);
  });
  test("Test 3:  if no car with the given number is found throws an exeption `nothing found with given id`", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getPriceWithoutExtras()).toThrow("missing parameter");
  });
});

describe("Testing method getTotalPrice ", () => {
  test("Test 1:  if parameter missing throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getTotalPrice()).toThrow("missing parameter");
  });
  test("Test 2:  return the price of the car", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getTotalPrice(2)).toStrictEqual(35210);
  });
  test("Test 3:  if no car with the given number is found throws an exception", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getTotalPrice(33)).toThrow(
      "nothing found with given id"
    );
  });
});
describe("Testing method getPriceOfTheExtras ", () => {
  test("Test 1: Return if no car with the given number is found throws an exeption `nothing found with given id`", () => {
    const storage = new CarStorage(carsdata);
    expect(() => storage.getTotalPrice(33)).toThrow(
      "nothing found with given id"
    );
  });
  test("Test 3:  If no extras is found returns 0 ", () => {
    const testValues = [
      {
        id: 3,
        manufacturer: "FauV",
        type: "solo",
        accessories: [],
        price: 0,
        extras: [],
      },
    ];
    const storage = new CarStorage(testValues);
    expect(storage.getTotalPrice(3)).toBe(0);
  });
  test("Test 2: the total price of extras.", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.getTotalPrice(2)).toBe(35210);
  });
});

describe("Testing method hasAccessories ", () => {
  test("Test 1:  returns true if the car has accessories ", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.hasAccessories(2)).toBeTruthy();
  });
  test("Test 2:  If parameter id is missing false is returned", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.hasAccessories()).toBeFalsy();
  });
});
