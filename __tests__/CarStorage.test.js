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
