"use strict";

module.exports = class CarStorage {
  constructor(data) {
    if (!data) throw new Error("car data storage missing");
    this.carStorage = data;
  }

  getById(id) {
    if (!id) throw new Error("missing parameter");
    for (const car of this.carStorage) {
      if (car.id === id) {
        return car;
      }
    }
    return null;
  }

  getAllIdsByManufacturer(manufacturer) {
    if (!manufacturer) return [];
    const carIds = [];
    for (const car of this.carStorage) {
      if (car.manufacturer === manufacturer) {
        carIds.push(car.id);
      }
    }
    return carIds;
  }
};
