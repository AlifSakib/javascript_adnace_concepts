// const Car = function (brand, price, stock) {
//   this.brand = brand;
//   this.price = price;
//   this.stock = stock;
// };

// New empty object {} is created
// Function is called and this = {}
// enpty objeect is linkd to prototype
// object is returned

// const m8 = new Car("BMW", 100000, 5);

// Car.prototype.totalProfit = function () {
//   return this.price * this.stock;
// };

// console.log(m8.totalProfit());
// console.log(m8 instanceof Car);

// console.log(m8.__proto__);

// const arr = [1, 1, 5, 7, 9, 2, 7, 8, 3, 5, 5];
// console.log(arr);

// class CarCl{

// }

const carEl = class {
  constructor(brand, price, stock) {
    this.brand = brand;
    this.price = price;
    this.stock = stock;
  }
};

const m8 = new carEl("BMW", 100000, 5);
