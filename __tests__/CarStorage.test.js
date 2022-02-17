"use strict";

const CarStorage = require("../CarStorage");
const carsdata = require("../datastorage.json");

describe("Testing constructor", () => {
  test("Test 1: object created with given data", () => {
    const storage = new CarStorage(carsdata);
    expect(storage.CarStorage).toEqual(carsdata);
  });

  test("Test 2: missing parameter throws an exception", () => {
    expect(() => new CarStorage()).toThrow("car data  storage missing");
  });
});
