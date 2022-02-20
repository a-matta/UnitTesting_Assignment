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

describe("testing method getById", () => {
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
