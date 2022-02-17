"use strict";

module.exports = class CarStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.CarStorage = data;
  }
};
