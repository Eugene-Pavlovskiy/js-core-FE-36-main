class Car{
  
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }
  //10-19
  class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    Car.prototype.getPrice = function () {
        return this.price;
    };
  }
    Car.prototype.changePrice = function () {
      this.price = newPrice;;
    };