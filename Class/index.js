const Car = function (brand, price, stock) {
  this.brand = brand;
  this.price = price;
  this.stock = stock;
};

// New empty object {} is created
// Function is called and this = {}
// enpty objeect is linkd to prototype
// object is returned

const m8 = new Car("BMW", 100000, 5);

Car.prototype.totalProfit = function () {
  return this.price * this.stock;
};

console.log(m8.totalProfit(10 * 5));
console.log(m8 instanceof Car);
