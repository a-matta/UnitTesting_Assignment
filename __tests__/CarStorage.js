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
        carIds.push(manufacturer);
      }
    }
    return carIds;
  }

  getAllCarTypes() {
    const types = [];
    for (const car of this.carStorage) {
      if (!types.includes(car.type)) {
        types.push(car.type);
      }
    }
    return types;
  }

  getAllCarsByType(carType) {
    if (!carType) throw new Error("missing parameter");
    const found = [];
    for (const car of this.carStorage) {
      if (car.type === carType) {
        found.push(car);
      }
    }
    return found;
  }

  getCarAccessories(id) {
    if (!id) return [];
    for (const car of this.carStorage) {
      if (car.id === id) {
        return car.accessories;
      }
    }
    return [];
  }

  getPriceWithoutExtras(id) {
    if (!carAccessories) return [];
  }
};
